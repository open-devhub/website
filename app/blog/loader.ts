import { authors as authorsData } from "@/content/data/authors";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

export type BlogData = {
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

export async function getBlogs(): Promise<BlogData[]> {
  const blogDir = path.join(process.cwd(), "content", "blog");
  const files = await fs.readdir(blogDir);

  const blogs: BlogData[] = await Promise.all(
    files.map(async (file): Promise<BlogData> => {
      const slug = path.basename(file, path.extname(file));
      const filePath = path.join(blogDir, file);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const rt = readingTime(fileContent).text;
      const rawAuthorNames: string[] = Array.isArray(data.authors)
        ? data.authors
        : [];
      const matchedAuthors = rawAuthorNames
        .map((name) => authorsData.find((b) => b.name === name))
        .filter((b): b is NonNullable<typeof b> => Boolean(b));

      const authors = matchedAuthors.map((b) => b.name);
      const authorsLink = matchedAuthors.map((b) => b.social);
      const authorsAvatar = matchedAuthors.map((b) => b.avatar);

      return {
        slug,
        metadata: {
          ...(data as BlogData["metadata"]),
          authors,
          authorsLink,
          authorsAvatar,
          readingTime: rt,
        },
        content,
      };
    }),
  );

  return blogs.sort((a, b) => {
    const dateA = a.metadata.date ? new Date(a.metadata.date).getTime() : 0;
    const dateB = b.metadata.date ? new Date(b.metadata.date).getTime() : 0;

    return dateB - dateA;
  });
}

export async function getBlogBySlug(
  slug: string,
): Promise<BlogData | undefined> {
  const blogs = await getBlogs();

  return blogs.find((b) => b.slug === slug);
}
