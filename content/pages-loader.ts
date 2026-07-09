/**
 * Server-only content loader for markdown-based pages.
 *
 * This file uses Node.js `fs` to read markdown files at build time.
 * It must only be imported from server components or server-side
 * functions (generateStaticParams, etc.).
 *
 * Client components should import from `content/pages-data.ts` instead,
 * which re-exports the same data without the `fs` dependency.
 */

import fs from "fs";
import path from "path";
import { parseMarkdown, type ContentBlock } from "@/lib/markdown/parser";

export interface Page {
  slug: string;
  title: string;
  section: string;
  description: string;
  lastUpdated: string;
  readingTime: string;
  content: ContentBlock[];
}

export interface PageSection {
  title: string;
  pages: { slug: string; title: string }[];
}

const SECTION_ORDER = ["Community", "Bots", "Open Source", "Legal"];

const SECTION_DIR_MAP: Record<string, string> = {
  community: "Community",
  bots: "Bots",
  "open-source": "Open Source",
  legal: "Legal",
};

const PAGES_DIR = path.join(process.cwd(), "content", "pages");

function findMarkdownFiles(): { sectionDir: string; filePath: string }[] {
  const results: { sectionDir: string; filePath: string }[] = [];
  const sectionDirs = fs.readdirSync(PAGES_DIR, { withFileTypes: true });

  for (const entry of sectionDirs) {
    if (!entry.isDirectory()) continue;
    const sectionPath = path.join(PAGES_DIR, entry.name);
    const files = fs.readdirSync(sectionPath);

    for (const file of files) {
      if (file.endsWith(".md")) {
        results.push({
          sectionDir: entry.name,
          filePath: path.join(sectionPath, file),
        });
      }
    }
  }

  return results;
}

function loadPageFromFile(sectionDir: string, filePath: string): Page {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { metadata, sections } = parseMarkdown(raw);
  const section = SECTION_DIR_MAP[sectionDir] ?? sectionDir;

  return {
    slug: metadata.slug || path.basename(filePath, ".md"),
    title: metadata.title || "Untitled",
    section,
    description: metadata.description || "",
    lastUpdated: metadata.lastUpdated || "",
    readingTime: metadata.readingTime || "",
    content: sections,
  };
}

function buildPages(): Page[] {
  const files = findMarkdownFiles();
  const pages: Page[] = files.map(({ sectionDir, filePath }) =>
    loadPageFromFile(sectionDir, filePath),
  );

  pages.sort((a, b) => {
    const aIdx = SECTION_ORDER.indexOf(a.section);
    const bIdx = SECTION_ORDER.indexOf(b.section);
    const aOrder = aIdx === -1 ? SECTION_ORDER.length : aIdx;
    const bOrder = bIdx === -1 ? SECTION_ORDER.length : bIdx;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.slug.localeCompare(b.slug);
  });

  return pages;
}

function buildPageSections(pages: Page[]): PageSection[] {
  const sectionMap = new Map<string, { slug: string; title: string }[]>();

  for (const page of pages) {
    if (!sectionMap.has(page.section)) {
      sectionMap.set(page.section, []);
    }
    sectionMap.get(page.section)!.push({ slug: page.slug, title: page.title });
  }

  const sections = Array.from(sectionMap.keys());
  sections.sort((a, b) => {
    const aIdx = SECTION_ORDER.indexOf(a);
    const bIdx = SECTION_ORDER.indexOf(b);
    const aOrder = aIdx === -1 ? SECTION_ORDER.length : aIdx;
    const bOrder = bIdx === -1 ? SECTION_ORDER.length : bIdx;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.localeCompare(b);
  });

  return sections.map((title) => ({
    title,
    pages: sectionMap.get(title)!,
  }));
}

// Build at module load (server-side only)
const _pages = buildPages();
const _pageSections = buildPageSections(_pages);

export const pages: Page[] = _pages;
export const pageSections: PageSection[] = _pageSections;

export function getPage(slug: string): Page | undefined {
  return _pages.find((p) => p.slug === slug);
}

export function getAdjacentPages(slug: string): {
  prev?: Page;
  next?: Page;
} {
  const index = _pages.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? _pages[index - 1] : undefined,
    next: index < _pages.length - 1 ? _pages[index + 1] : undefined,
  };
}
