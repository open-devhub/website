import { articles } from "@/content/articles-loader";
import { notFound } from "next/navigation";
import ArticleClient from "./ArticleClient";

interface Props {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function ArticleRoute({ params }: Props) {
  const { slug } = (await params) as { slug: string };
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return <ArticleClient article={article} />;
}

export async function generateStaticParams() {
  const { articles } = await import("@/content/articles-loader");
  return articles.map((a) => ({ slug: a.slug }));
}
