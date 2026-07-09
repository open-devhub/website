/**
 * Server-only content loader for markdown-based articles.
 *
 * Reads `.md` files from `content/articles/` at build time, parses them
 * with the shared markdown parser, and exposes a typed API for all article
 * pages.
 *
 * Each article file must have frontmatter with at minimum: title, description,
 * banner, author, authorGithub, date, tags.
 *
 * Must only be imported from server components or server-side functions.
 */

import fs from "fs";
import path from "path";
import { parseMarkdown, type ContentBlock } from "@/lib/markdown/parser";

export interface Article {
  slug: string;
  title: string;
  description: string;
  banner: string;
  author: string;
  authorGithub: string;
  date: string;
  /** Raw date string parsed to a Date for sorting — stored as ISO string */
  dateISO: string;
  tags: string[];
  readingTime: string;
  content: ContentBlock[];
}

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function parseTags(raw: string): string[] {
  // Accepts: [tag1, tag2] or tag1, tag2 or tag1
  const cleaned = raw.replace(/^\[|\]$/g, "").trim();
  return cleaned
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

function parseDate(raw: string): string {
  // Try to parse "May 17, 2026" style dates → ISO string for sorting
  // Falls back to raw string if unparseable
  const parsed = new Date(raw);
  if (!isNaN(parsed.getTime())) return parsed.toISOString();
  return new Date(0).toISOString();
}

function loadArticleFromFile(filePath: string): Article {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { metadata, sections } = parseMarkdown(raw);

  const wordCount = sections
    .flatMap((b) =>
      b.type === "p" || b.type === "h2" || b.type === "h3"
        ? (b.text || "").split(/\s+/)
        : b.items || [],
    )
    .join(" ")
    .split(/\s+/).length;
  const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  return {
    slug: metadata.slug || path.basename(filePath, ".md"),
    title: metadata.title || "Untitled",
    description: metadata.description || "",
    banner: metadata.banner || "",
    author: metadata.author || "",
    authorGithub: metadata.authorGithub || "",
    date: metadata.date || "",
    dateISO: parseDate(metadata.date || ""),
    tags: parseTags(metadata.tags || ""),
    readingTime: metadata.readingTime || readingTime,
    content: sections,
  };
}

function buildArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(ARTICLES_DIR, f));

  const articles = files.map(loadArticleFromFile);
  // Sort newest first
  articles.sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime(),
  );
  return articles;
}

const _articles = buildArticles();

export const articles: Article[] = _articles;

export function getArticle(slug: string): Article | undefined {
  return _articles.find((a) => a.slug === slug);
}
