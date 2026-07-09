/**
 * Reusable markdown parser engine.
 *
 * Parses a raw markdown string with YAML-like frontmatter into a structured
 * object with two parts:
 *
 *   - `metadata`: key-value pairs extracted from the `---` delimited block
 *     at the top of the file.
 *   - `sections`: an ordered array of content blocks representing the
 *     body content after the frontmatter.
 *
 * The parser is generic — it does not hardcode any specific page type.
 * Block types are determined by markdown syntax:
 *
 *   - `## Heading`       → { type: "h2", text }
 *   - `### Heading`       → { type: "h3", text }
 *   - paragraph text      → { type: "p", text }
 *   - `- item` / `* item` → { type: "ul", items: string[] }
 *   - `1. item`           → { type: "ol", items: string[] }
 *   - ```code```          → { type: "code", text }
 *   - `> [!type]` callout → { type: "callout", variant, text }
 *
 * Inline formatting (links, inline code, channel references) is preserved
 * in the raw text of each block — the rendering layer is responsible for
 * parsing inline syntax. This keeps the parser focused on block-level
 * structure.
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
  | "callout";

export interface ContentBlock {
  type: ContentBlockType;
  text?: string;
  items?: string[];
  variant?: "info" | "warning" | "danger";
}

export interface ParsedMarkdown {
  metadata: ParsedMetadata;
  sections: ContentBlock[];
}

// ─── Frontmatter extraction ──────────────────────────────────

/**
 * Splits a markdown document into its frontmatter block and body.
 *
 * Frontmatter is delimited by two `---` lines. The opening `---` must be
 * the very first non-whitespace content in the file.
 *
 * Returns `{ rawFrontmatter, body }` or `{ rawFrontmatter: null, body }`
 * if no frontmatter is present.
 */
export function splitFrontmatter(source: string): {
  rawFrontmatter: string | null;
  body: string;
} {
  const trimmed = source.replace(/^\uFEFF/, "");
  const match = trimmed.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);

  if (!match) {
    return { rawFrontmatter: null, body: trimmed };
  }

  const rawFrontmatter = match[1];
  const body = trimmed.slice(match[0].length);
  return { rawFrontmatter, body };
}

/**
 * Parses a raw frontmatter string (the content between the two `---`
 * delimiters) into a metadata object.
 *
 * Supports simple `key: value` pairs. Values may be unquoted, single-quoted,
 * or double-quoted. Trailing whitespace is trimmed from both keys and values.
 */
export function parseFrontmatter(raw: string): ParsedMetadata {
  const metadata: ParsedMetadata = {};
  const lines = raw.split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const colonIndex = trimmed.indexOf(":");
    if (colonIndex === -1) continue;

    const key = trimmed.slice(0, colonIndex).trim();
    let value = trimmed.slice(colonIndex + 1).trim();

    // Strip surrounding quotes if present
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

/**
 * Parses the body of a markdown document (everything after frontmatter)
 * into an ordered array of content blocks.
 *
 * The parser processes the source line-by-line, grouping related lines
 * into blocks. It recognizes:
 *
 *   - ATX headings (`##` and `###`)
 *   - Unordered lists (`-` or `*` prefixes)
 *   - Ordered lists (`1.` `2.` etc. prefixes)
 *   - Fenced code blocks (``` ... ```)
 *   - Callout blocks (`> [!type]` syntax)
 *   - Paragraphs (any other non-empty, non-block text)
 *
 * Blank lines act as block separators. Consecutive list items are grouped
 * into a single list block. Consecutive paragraph lines are joined into a
 * single paragraph block.
 */
export function parseBody(body: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const lines = body.split(/\r?\n/);

  let i = 0;
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      blocks.push({
        type: "p",
        text: paragraphBuffer.join(" "),
      });
      paragraphBuffer = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip blank lines (they separate blocks)
    if (!trimmed) {
      flushParagraph();
      i++;
      continue;
    }

    // Fenced code block
    if (trimmed.startsWith("```")) {
      flushParagraph();
      const fence = trimmed;
      const codeLines: string[] = [];
      i++;

      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      // Skip closing fence
      if (i < lines.length) i++;

      blocks.push({
        type: "code",
        text: codeLines.join("\n"),
      });
      continue;
    }

    // ATX headings (## and ###)
    const h2Match = trimmed.match(/^##\s+(.+)$/);
    if (h2Match) {
      flushParagraph();
      blocks.push({ type: "h2", text: h2Match[1].trim() });
      i++;
      continue;
    }

    const h3Match = trimmed.match(/^###\s+(.+)$/);
    if (h3Match) {
      flushParagraph();
      blocks.push({ type: "h3", text: h3Match[1].trim() });
      i++;
      continue;
    }

    // Callout block: > [!type] text...
    // Supports multi-line callouts (consecutive > lines)
    const calloutMatch = trimmed.match(
      /^>\s*\[!(info|warning|danger)\]\s*(.*)$/,
    );
    if (calloutMatch) {
      flushParagraph();
      const variant = calloutMatch[1] as "info" | "warning" | "danger";
      const calloutLines: string[] = [];

      if (calloutMatch[2]) {
        calloutLines.push(calloutMatch[2]);
      }
      i++;

      // Collect continuation lines starting with >
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        const cont = lines[i].trim().replace(/^>\s?/, "");
        if (cont) calloutLines.push(cont);
        i++;
      }

      blocks.push({
        type: "callout",
        variant,
        text: calloutLines.join(" "),
      });
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

    // Default: accumulate as paragraph line
    paragraphBuffer.push(trimmed);
    i++;
  }

  flushParagraph();
  return blocks;
}

// ─── Main entry point ────────────────────────────────────────

/**
 * Parses a complete markdown document (with optional frontmatter) into
 * a structured object.
 *
 * @param source - The raw markdown string
 * @returns `{ metadata, sections }` where `metadata` is an object of
 *          frontmatter key-value pairs and `sections` is an ordered
 *          array of content blocks.
 *
 * @example
 * const result = parseMarkdown(`
 * ---
 * title: Getting Started
 * section: Community
 * ---
 * ## Step 1
 * Welcome to the guide.
 * `);
 * // result.metadata.title === "Getting Started"
 * // result.sections[0].type === "h2"
 */
export function parseMarkdown(source: string): ParsedMarkdown {
  const { rawFrontmatter, body } = splitFrontmatter(source);
  const metadata = rawFrontmatter ? parseFrontmatter(rawFrontmatter) : {};
  const sections = parseBody(body);
  return { metadata, sections };
}
