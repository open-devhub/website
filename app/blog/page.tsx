import Button from "@/components/ui/Button";
import ShinyText from "@/components/ui/ShinyText";
import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightUp, Calendar, Edit } from "reicon-react";
import { type BlogData, getBlogs } from "./loader";

export function BlogCard({ blog }: { blog: BlogData }) {
  const isFeatured = blog.metadata.featured;

  return (
    <div
      key={blog.slug || blog.metadata.title}
      className={`${
        isFeatured ? "md:col-span-2" : "md:col-span-1"
      } flex flex-col justify-between bg-bg-secondary gap-sm p-md rounded-md`}
    >
      <div className="flex flex-col gap-sm">
        <div className="flex items-center justify-between text-xs">
          {blog.metadata.date && (
            <div className="flex items-center gap-xxs text-text-secondary">
              <Calendar size={14} />
              <span>{blog.metadata.date}</span>
            </div>
          )}

          {isFeatured && (
            <span className="bg-accent-muted text-text-primary px-xs py-xxs rounded-md text-xs">
              Featured
            </span>
          )}
        </div>

        <h2 className="text-2xl">
          <Link href={`/blog/${blog.slug}`} className="text-text-primary">
            {blog.metadata.title}
            <ArrowRightUp className="inline-block align-middle ml-xxs" />
          </Link>
        </h2>

        {blog.metadata.description && (
          <p className="text-text-secondary text-md">
            {blog.metadata.description}
          </p>
        )}
      </div>

      {blog.metadata.authorsAvatar && (
        <div className="flex w-fit items-center gap-xxs bg-bg-tertiary py-xxs px-xs rounded-md">
          {blog.metadata.authorsAvatar.map((avatar, i) => {
            const authorName = blog.metadata.authors?.[i] || "";
            const authorLink = blog.metadata.authorsLink?.[i];

            const AvatarImage = (
              <Image
                src={avatar}
                alt={authorName || "Author avatar"}
                width={24}
                height={24}
                className="rounded-full object-cover shrink-0"
              />
            );

            return authorLink ? (
              <Link
                key={`${avatar}-${i}`}
                href={authorLink}
                target="_blank"
                rel="noopener noreferrer"
                className="undecorated"
                // title={authorName}
              >
                {AvatarImage}
              </Link>
            ) : (
              <div key={`${avatar}-${i}`} title={authorName}>
                {AvatarImage}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <div className="flex flex-col gap-md items-center py-lg">
      <h1 className="text-gradient font-bold text-4xl lg:text-5xl">
        Community <ShinyText>Blog</ShinyText>
      </h1>
      <div className="text-text-secondary flex flex-col items-center text-sm md:text-md lg:text-lg">
        <span>Guides, releases, news, and deep dives</span>
        <span>written by the DevHub community.</span>
      </div>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={`${staticData.github}/website/edit/main/content/blog`}
      >
        <Button icon={Edit}>Write one</Button>
      </Link>

      <div className="max-w-7xl w-full px-md py-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md grid-flow-dense">
          {blogs.map((blog) => (
            <BlogCard key={blog.metadata.title} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
