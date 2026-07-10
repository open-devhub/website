import { getAdjacentPages, getPage } from "@/content/pages-loader";
import { PREVIEWS } from "@/lib/previews";
import { notFound } from "next/navigation";
import PageClient from "./PageClient";

interface Props {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function PageRoute({ params }: Props) {
  const { slug } = (await params) as { slug: string };
  const page = getPage(slug);
  if (!page) notFound();

  const { prev, next } = getAdjacentPages(slug);

  return <PageClient page={page} prev={prev} next={next} previews={PREVIEWS} />;
}

export async function generateStaticParams() {
  const { pages } = await import("@/content/pages-loader");
  return pages.map((page) => ({ slug: page.slug }));
}
