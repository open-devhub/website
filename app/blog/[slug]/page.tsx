import Button from "@/components/ui/Button";
import Skeleton from "@/components/ui/Skeleton";
import { remarkCustomAlerts } from "@/lib/markdown";
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
  PenLine,
  Tag3,
} from "reicon-react";
import remarkGfm from "remark-gfm";
import { getBlogs } from "../loader";
import { BlogCard } from "../page";

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
        <Markdown remarkPlugins={[remarkCustomAlerts, remarkGfm]}>
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
    <div className="flex flex-col gap-sm w-full h-screen">
      <Skeleton className="flex-1" />
      <Skeleton className="flex-5" />
    </div>
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
      <div className="max-w-5xl w-full flex justify-center flex-col sm:flex-row gap-md px-lg">
        <Suspense key={slug} fallback={<BlogSkeleton />}>
          <BlogContent slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}
