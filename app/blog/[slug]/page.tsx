import Button from "@/components/ui/Button";
import Skeleton from "@/components/ui/Skeleton";
import { getTOC, headingComponents, remarkCustomAlerts } from "@/lib/markdown";
import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Markdown from "react-markdown";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Edit,
  Link as LinkIcon,
  PenLine,
  Tag3,
} from "reicon-react";
import remarkGfm from "remark-gfm";
import CopyLink from "../CopyLink";
import { getBlogBySlug, getBlogs } from "../loader";
import { BlogCard } from "../page";

async function SideBar({ slug }: { slug: string }) {
  const blog = await getBlogBySlug(slug);
  const toc = getTOC(blog?.content || "");

  return (
    <div className="sm:w-64 mt-xl py-sm hidden lg:flex flex-row overflow-x-auto w-full sm:flex-col gap-md shrink-0">
      {/* action row */}
      <div className="flex gap-xs px-xs">
        {[
          {
            icon: Edit,
            link: `${staticData.github}/website/edit/main/content/blog/${slug}.md`,
          },
          {
            text: "𝕏",
            link: `https://x.com/intent/post?text=${encodeURIComponent(
              `${blog?.metadata.title ?? ""}\n\n${blog?.metadata.description ?? ""}\n\n${staticData.linkShort}/blog/${slug}`,
            )}`,
          },
        ].map(({ icon, link, text }) => (
          <Link
            href={link}
            key={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="px-xs py-sm h-md" icon={icon}>
              {text}
            </Button>
          </Link>
        ))}

        <CopyLink link={`${staticData.linkShort}/blog/${slug}`}>
          <Button className="px-xs py-sm h-md" icon={LinkIcon} />
        </CopyLink>
      </div>
      <div className="flex flex-col gap-xs">
        <span className="text-xl mb-sm px-xs tracking-wider hidden sm:block whitespace-nowrap">
          Table of contents
        </span>
        {/* toc */}
        {toc?.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={`text-left px-sm text-sm py-xs rounded-md w-full undecorated text-md transition-colors cursor-pointer text-text-secondary hover:text-text hover:bg-bg-secondary`}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

async function BlogContent({ slug }: { slug: string }) {
  // await new Promise((resolve) => setTimeout(resolve, 375));

  const blogs = await getBlogs();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-md">
      <div className="flex flex-col gap-md sm:border-b border-accent-muted py-sm">
        <Link
          href="/blog"
          className="flex items-center gap-sm text-sm text-text-tertiary w-fit"
        >
          <ArrowLeft size={16} />
          <span>Back to Blog</span>
        </Link>
        <div className="flex gap-sm">
          {blog.metadata.tags?.map((tag) => (
            <div
              key={tag}
              className="bg-bg-secondary py-xxs px-xs text-sm rounded-md flex items-center gap-xs"
            >
              <Tag3 size={16} />
              <span>{tag}</span>
            </div>
          ))}
        </div>
        <h1 className="text-gradient flex flex-col font-bold text-4xl">
          {blog.metadata.title}
        </h1>
        <span className="text-text-secondary">{blog.metadata.description}</span>
        <div className="flex items-center gap-md text-text-tertiary whitespace-nowrap overflow-x-auto">
          {blog.metadata.authors && (
            <div className="flex items-center justify-center gap-sm">
              <PenLine size={16} />
              <div className="flex items-center gap-xs">
                <div className="flex items-center gap-xs text-sm">
                  {blog.metadata.authors.map((author, i) => {
                    const pfp = blog.metadata.authorsAvatar?.[i];
                    const link = blog.metadata.authorsLink?.[i];
                    // const isLast = i === arr.length - 1;

                    return (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link ?? "#"}
                        key={author}
                        className="flex w-fit items-center gap-xs bg-bg-secondary py-xxs px-xs rounded-md undecorated"
                      >
                        {pfp && (
                          <Image
                            src={pfp}
                            width={24}
                            height={24}
                            alt=""
                            className="rounded-full object-cover shrink-0"
                          />
                        )}

                        <span className="font-display">{author}</span>

                        {/*{!isLast && <X size={14} className="text-text-muted" />}*/}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center justify-center gap-xxs">
            <Calendar size={16} />
            <span className="text-sm">{blog.metadata.date}</span>
          </div>
          <div className="flex items-center justify-center gap-xxs">
            <Clock size={16} />
            <span className="text-sm">{blog.metadata.readingTime}</span>
          </div>{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`${staticData.github}/website/edit/main/content/blog/${slug}.md`}
          >
            <Button icon={Edit} iconSize={16} className="px-sm py-xxs text-sm">
              Edit this blog
            </Button>
          </Link>
        </div>
      </div>

      {/* blog content (markdown) */}
      <article className="markdown">
        <Markdown
          remarkPlugins={[remarkCustomAlerts, remarkGfm]}
          components={headingComponents}
        >
          {blog.content}
        </Markdown>
      </article>

      <div className="flex flex-col gap-md mt-md">
        <div className="flex items-center justify-between">
          <h3 className="text-lg flex items-center gap-sm">
            <span>More like this</span>
            <ArrowDown size={16} />
          </h3>
          <Link href="/blog" className="text-lg flex items-center gap-sm">
            <span>All posts</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="flex gap-md">
          {blogs
            .filter((b) => blog !== b)
            .slice(0, 2)
            .map((blog) => (
              <BlogCard key={blog.metadata.title} blog={blog} />
            ))}
        </div>
      </div>
    </div>
  );
}

function BlogSkeleton() {
  return (
    <div className="w-full flex gap-sm">
      <div className="flex flex-col gap-sm w-full h-screen flex-4">
        <Skeleton className="flex-1" />
        <Skeleton className="flex-2" />
      </div>
      <div className="w-full h-screen hidden lg:flex flex-1">
        <Skeleton />
      </div>
    </div>
  );
}
async function BlogPageContent({ slug }: { slug: string }) {
  return (
    <>
      <BlogContent slug={slug} />
      <SideBar slug={slug} />
    </>
  );
}

export default async function Blog({
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
        <Suspense key={slug} fallback={<BlogSkeleton />}>
          <BlogPageContent slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}
