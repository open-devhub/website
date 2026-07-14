import { getAdjacentPages, getPage } from "@/content/pages-loader";
import { PREVIEWS } from "@/content/previews";
import { notFound } from "next/navigation";
import PageClient from "../PageClient";

interface Props {
  params: { slug: string; subslug: string };
}

export default function SubPageRoute({ params }: Props) {
  const fullSlug = `${params.slug}/${params.subslug}`;
  const page = getPage(fullSlug);
  if (!page) notFound();

  const { prev, next } = getAdjacentPages(fullSlug);
  return <PageClient page={page} prev={prev} next={next} previews={PREVIEWS} />;
}

export async function generateStaticParams() {
  const { pages } = await import("@/content/pages-loader");
  return pages
    .filter((p) => p.slug.includes("/"))
    .map((p) => {
      const [slug, subslug] = p.slug.split("/");
      return { slug, subslug };
    });
}
