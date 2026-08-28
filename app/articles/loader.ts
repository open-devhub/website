import { authors as authorsData } from "@/content/data/authors";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

export type ArticleData = {
  slug: string;
  metadata: Partial<{
    title: string;
    description: string;
    authors: string[];
    authorsLink: string[];
    authorsAvatar: string[];
    featured: boolean;
    date: string;
    tags: string[];
    readingTime: string;
    [key: string]: unknown;
  }>;
  content: string;
};

export async function getArticles(): Promise<ArticleData[]> {
  const articlesDir = path.join(process.cwd(), "content", "articles");
  const files = await fs.readdir(articlesDir);

  const articles: ArticleData[] = await Promise.all(
    files.map(async (file): Promise<ArticleData> => {
      const slug = path.basename(file, path.extname(file));
      const filePath = path.join(articlesDir, file);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const rt = readingTime(fileContent).text;
      const rawAuthorNames: string[] = Array.isArray(data.authors)
        ? data.authors
        : [];
      const matchedAuthors = rawAuthorNames
        .map((name) => authorsData.find((a) => a.name === name))
        .filter((a): a is NonNullable<typeof a> => Boolean(a));

      const authors = matchedAuthors.map((a) => a.name);
      const authorsLink = matchedAuthors.map((a) => a.social);
      const authorsAvatar = matchedAuthors.map((a) => a.avatar);

      return {
        slug,
        metadata: {
          ...(data as ArticleData["metadata"]),
          authors,
          authorsLink,
          authorsAvatar,
          readingTime: rt,
        },
        content,
      };
    }),
  );

  return articles.sort((a, b) => {
    const dateA = a.metadata.date ? new Date(a.metadata.date).getTime() : 0;
    const dateB = b.metadata.date ? new Date(b.metadata.date).getTime() : 0;

    return dateB - dateA;
  });
}

export async function getArticleBySlug(
  slug: string,
): Promise<ArticleData | undefined> {
  const articles = await getArticles();

  return articles.find((a) => a.slug === slug);
}
