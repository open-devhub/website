import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

export type PageData = {
  slug: string;
  metadata: Partial<{
    title: string;
    description: string;
    lastUpdated: string;
    readingTime: string;
    [key: string]: unknown;
  }>;
  content: string;
};

// custom order (for sorting)
const order = [
  "getting-started",
  "join-guide",
  "server-info",
  "how-to-ask",
  "how-to-help",
  "code-of-conduct",
  "moderation-guide",
  "staff-roles",
  "faq",
  "acknowledgements",
  "bots",
  "adding-a-bot",
  "github-org",
  "contributing",
  "project-guidelines",
  "submit-project",
  "privacy-policy",
  "security-notice",
];

export async function getPages(): Promise<PageData[]> {
  const pagesDir = path.join(process.cwd(), "content", "pages");
  const files = await fs.readdir(pagesDir);

  const pages = await Promise.all(
    files.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const filePath = path.join(pagesDir, file);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const rt = readingTime(fileContent).text;

      return {
        slug,
        metadata: {
          ...data,
          readingTime: rt,
        },
        content,
      };
    }),
  );

  // sort the items based on `order`
  return pages.sort((a, b) => {
    const indexA = order.indexOf(a.slug);
    const indexB = order.indexOf(b.slug);
    const safeA = indexA === -1 ? Infinity : indexA;
    const safeB = indexB === -1 ? Infinity : indexB;

    return safeA - safeB;
  });
}

export async function getPageBySlug(
  slug: string,
): Promise<PageData | undefined> {
  const pages = await getPages();

  return pages.find((p) => p.slug === slug);
}
