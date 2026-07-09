/**
 * Reusable markdown parser engine.
 *
 * Parses a raw markdown string with YAML-like frontmatter into a structured
 * object with two parts:
 *
 *   - `metadata`: key-value pairs extracted from the `---` delimited block
 *   - `sections`: an ordered array of content blocks
 *
 * Block types supported:
 *   - `## Heading`         → { type: "h2", text }
 *   - `### Heading`        → { type: "h3", text }
 *   - paragraph text       → { type: "p", text }
 *   - `- item` / `* item`  → { type: "ul", items }
 *   - `1. item`            → { type: "ol", items }
 *   - ```code```           → { type: "code", text }
 *   - `> [!type]` callout  → { type: "callout", variant, text } (case-insensitive)
 *   - `![alt](url)`        → { type: "img", text: alt, src: url }
 */

export interface ParsedMetadata {
  [key: string]: string;
}

export type ContentBlockType =
  | "h2"
  | "h3"
  | "p"
  | "ul"
  | "ol"
  | "code"
  | "callout"
  | "img";

export interface ContentBlock {
  type: ContentBlockType;
  text?: string;
  items?: string[];
  variant?: "info" | "warning" | "danger";
  /** src is set for `img` blocks */
  src?: string;
}

export interface ParsedMarkdown {
  metadata: ParsedMetadata;
  sections: ContentBlock[];
}

// ─── Frontmatter extraction ──────────────────────────────────

export function splitFrontmatter(source: string): {
  rawFrontmatter: string | null;
  body: string;
} {
  const trimmed = source.replace(/^\uFEFF/, "");
  const match = trimmed.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { rawFrontmatter: null, body: trimmed };
  return { rawFrontmatter: match[1], body: trimmed.slice(match[0].length) };
}

export function parseFrontmatter(raw: string): ParsedMetadata {
  const metadata: ParsedMetadata = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const colonIndex = trimmed.indexOf(":");
    if (colonIndex === -1) continue;
    const key = trimmed.slice(0, colonIndex).trim();
    let value = trimmed.slice(colonIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    metadata[key] = value;
  }
  return metadata;
}

// ─── Block-level parser ───────────────────────────────────────

export function parseBody(body: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const lines = body.split(/\r?\n/);
  let i = 0;
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      blocks.push({ type: "p", text: paragraphBuffer.join(" ") });
      paragraphBuffer = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      i++;
      continue;
    }

    // Fenced code block
    if (trimmed.startsWith("```")) {
      flushParagraph();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++;
      blocks.push({ type: "code", text: codeLines.join("\n") });
      continue;
    }

    // ATX headings — h3 must be checked before h2
    const h3Match = trimmed.match(/^###\s+(.+)$/);
    if (h3Match) {
      flushParagraph();
      blocks.push({ type: "h3", text: h3Match[1].trim() });
      i++;
      continue;
    }

    const h2Match = trimmed.match(/^##\s+(.+)$/);
    if (h2Match) {
      flushParagraph();
      blocks.push({ type: "h2", text: h2Match[1].trim() });
      i++;
      continue;
    }

    // Callout block — case-insensitive variant matching
    // Syntax: > [!info], > [!NOTE], > [!Warning], etc.
    const calloutMatch = trimmed.match(
      /^>\s*\[!(info|warning|danger|note|caution)\]\s*(.*)/i,
    );
    if (calloutMatch) {
      flushParagraph();
      const rawVariant = calloutMatch[1].toLowerCase();
      // Map aliases: note→info, caution→warning
      const variant: "info" | "warning" | "danger" =
        rawVariant === "note"
          ? "info"
          : rawVariant === "caution"
            ? "warning"
            : (rawVariant as "info" | "warning" | "danger");
      const calloutLines: string[] = [];
      if (calloutMatch[2]) calloutLines.push(calloutMatch[2]);
      i++;
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        const cont = lines[i].trim().replace(/^>\s?/, "");
        if (cont) calloutLines.push(cont);
        i++;
      }
      blocks.push({ type: "callout", variant, text: calloutLines.join(" ") });
      continue;
    }

    // Image embed: ![alt text](url)
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      flushParagraph();
      blocks.push({
        type: "img",
        text: imgMatch[1].trim(),
        src: imgMatch[2].trim(),
      });
      i++;
      continue;
    }

    // Unordered list
    if (trimmed.match(/^[-*]\s+/)) {
      flushParagraph();
      const items: string[] = [];
      while (i < lines.length) {
        const itemMatch = lines[i].trim().match(/^[-*]\s+(.+)$/);
        if (!itemMatch) break;
        items.push(itemMatch[1].trim());
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    // Ordered list
    if (trimmed.match(/^\d+\.\s+/)) {
      flushParagraph();
      const items: string[] = [];
      while (i < lines.length) {
        const itemMatch = lines[i].trim().match(/^\d+\.\s+(.+)$/);
        if (!itemMatch) break;
        items.push(itemMatch[1].trim());
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // Default: paragraph line
    paragraphBuffer.push(trimmed);
    i++;
  }

  flushParagraph();
  return blocks;
}

// ─── Main entry point ────────────────────────────────────────

export function parseMarkdown(source: string): ParsedMarkdown {
  const { rawFrontmatter, body } = splitFrontmatter(source);
  const metadata = rawFrontmatter ? parseFrontmatter(rawFrontmatter) : {};
  const sections = parseBody(body);
  return { metadata, sections };
}
