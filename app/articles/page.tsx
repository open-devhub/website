import { articles } from "@/content/articles-loader";
import ArticlesListingClient from "./ArticlesListingClient";

export default function ArticlesPage() {
  // Pass only the fields the client needs (no content array, no fs-derived types)
  const articleCards = articles.map(({ slug, title, description, banner, author, date, tags, readingTime }) => ({
    slug,
    title,
    description,
    banner,
    author,
    date,
    tags,
    readingTime,
  }));

  return <ArticlesListingClient articles={articleCards} />;
}
