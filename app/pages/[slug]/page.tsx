import Button from "@/components/ui/Button";
import ShinyText from "@/components/ui/ShinyText";
import Skeleton from "@/components/ui/Skeleton";
import { headingComponents, remarkCustomAlerts } from "@/lib/markdown";
import staticData from "@/lib/staticdata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Markdown from "react-markdown";
import { ArrowLeft, ArrowRight, Calendar, Clock, Edit } from "reicon-react";
import remarkGfm from "remark-gfm";
import { getPageBySlug, getPages } from "../loader";

async function SideBar({ activeSlug }: { activeSlug: string }) {
  const pageSlugs = (await getPages()).map((page) => page.slug);

  return (
    <div className="max-w-7xl flex flex-col sm:flex-row gap-md px-md py-lg">
      <div className="sm:w-48 flex flex-row overflow-x-auto w-full sm:flex-col gap-xs shrink-0">
        <span className="text-xl mb-sm px-xs tracking-wider hidden sm:block">
          Pages
        </span>
        {/* languages (sidebar, on top if on mobile) */}
        {pageSlugs.map(async (slug) => {
          const page = await getPageBySlug(slug);
          const isActive = slug === activeSlug;

          return (
            <Link
              key={slug}
              href={`/pages/${slug}`}
              // prefetch={true}
              className={`text-left px-sm py-xs rounded-md w-full undecorated whitespace-nowrap text-md transition-colors cursor-pointer ${
                isActive
                  ? "bg-bg-secondary text-accent"
                  : "text-text-secondary hover:text-text hover:bg-bg-secondary"
              }`}
            >
              {page?.metadata.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

async function PageContent({ slug }: { slug: string }) {
  // await new Promise((resolve) => setTimeout(resolve, 375));

  const pages = await getPages();

  const page = pages.find((p) => p.slug === slug);

  if (!page) {
    notFound();
  }

  const prev = pages[pages.lastIndexOf(page) - 1];
  const next = pages[pages.lastIndexOf(page) + 1];

  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-col gap-md sm:border-b border-accent-muted py-sm">
        <h1 className="text-gradient flex flex-col font-bold text-4xl">
          <span>
            <ShinyText>{page.metadata.title ?? ""}</ShinyText>
          </span>
        </h1>
        <span className="text-text-secondary">{page.metadata.description}</span>
        <div className="flex items-center gap-sm text-text-tertiary whitespace-nowrap overflow-x-auto">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`${staticData.github}/website/edit/main/content/pages/${slug}.md`}
          >
            <Button icon={Edit} iconSize={16} className="px-sm py-xxs text-sm">
              Edit this page
            </Button>
          </Link>
          <div className="flex items-center justify-center gap-xxs">
            <Calendar size={16} />
            <span className="text-sm">Updated {page.metadata.lastUpdated}</span>
          </div>
          <div className="flex items-center justify-center gap-xxs">
            <Clock size={16} />
            <span className="text-sm">{page.metadata.readingTime}</span>
          </div>
        </div>
      </div>
      {/* page content (markdown) */}
      <article className="markdown">
        <Markdown
          remarkPlugins={[remarkCustomAlerts, remarkGfm]}
          components={headingComponents}
        >
          {page.content}
        </Markdown>
      </article>

      <div className="items-center justify-between gap-md hidden lg:flex">
        <div>
          {prev && (
            <Link
              href={`/pages/${prev.slug}`}
              className="flex flex-col gap-xs bg-bg-secondary py-sm px-md rounded-md undecorated"
            >
              <h3 className="flex items-center gap-xs text-lg text-text-secondary">
                <ArrowLeft size={14} />
                <span>{prev.metadata.title}</span>
              </h3>
              <span className="text-text-tertiary">
                {prev.metadata.description}
              </span>
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link
              href={`/pages/${next.slug}`}
              className="flex flex-col gap-xs bg-bg-secondary py-sm px-md rounded-md undecorated"
            >
              <h3 className="flex items-center gap-xs text-lg text-text-secondary">
                <span>{next.metadata.title}</span>
                <ArrowRight size={14} />
              </h3>
              <span className="text-text-tertiary">
                {next.metadata.description}
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function PageSkeleton() {
  return (
    <div className="w-full flex gap-sm">
      <div className="w-full h-screen hidden sm:flex flex-1">
        <Skeleton />
      </div>
      <div className="flex flex-col gap-sm w-full h-screen flex-4">
        <Skeleton className="flex-1" />
        <Skeleton className="flex-5" />
      </div>
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  return (
    <div className="w-full flex justify-center py-md">
      <div className="max-w-6xl w-full flex justify-center flex-col sm:flex-row gap-md px-lg">
        <Suspense key={slug} fallback={<PageSkeleton />}>
          <SideBar activeSlug={slug} />
          <PageContent slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}
