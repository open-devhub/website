import Button from "@/components/ui/Button";
import ShinyText from "@/components/ui/ShinyText";
import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightUp, Calendar, Edit } from "reicon-react";
import { type ArticleData, getArticles } from "./loader";

export function ArticleCard({ article }: { article: ArticleData }) {
  const isFeatured = article.metadata.featured;

  return (
    <div
      key={article.slug || article.metadata.title}
      className={`${
        isFeatured ? "md:col-span-2" : "md:col-span-1"
      } flex flex-col justify-between bg-bg-secondary gap-sm p-md rounded-md`}
    >
      <div className="flex flex-col gap-sm">
        <div className="flex items-center justify-between text-xs">
          {article.metadata.date && (
            <div className="flex items-center gap-xxs text-text-secondary">
              <Calendar size={14} />
              <span>{article.metadata.date}</span>
            </div>
          )}

          {isFeatured && (
            <span className="bg-accent-muted text-text-primary px-xs py-xxs rounded-md text-xs">
              Featured
            </span>
          )}
        </div>

        <h2 className="text-2xl">
          <Link
            href={`/articles/${article.slug}`}
            className="text-text-primary"
          >
            {article.metadata.title}
            <ArrowRightUp className="inline-block align-middle ml-xxs" />
          </Link>
        </h2>

        {article.metadata.description && (
          <p className="text-text-secondary text-md">
            {article.metadata.description}
          </p>
        )}
      </div>

      {article.metadata.authorsAvatar && (
        <div className="flex w-fit items-center gap-xxs bg-bg-tertiary py-xxs px-xs rounded-md">
          {article.metadata.authorsAvatar.map((avatar, i) => {
            const authorName = article.metadata.authors?.[i] || "";
            const authorLink = article.metadata.authorsLink?.[i];

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

export default async function Articles() {
  const articles = await getArticles();

  return (
    <div className="flex flex-col gap-md items-center py-lg">
      <h1 className="text-gradient font-bold text-4xl lg:text-5xl">
        Community <ShinyText>Articles</ShinyText>
      </h1>
      <div className="text-text-secondary text-sm md:text-md lg:text-lg">
        Guides, releases, and deep dives written by the DevHub community.
      </div>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={`${staticData.github}/website/edit/main/content/articles`}
      >
        <Button icon={Edit}>Write one</Button>
      </Link>

      <div className="max-w-7xl w-full px-md py-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md grid-flow-dense">
          {articles.map((article) => (
            <ArticleCard key={article.metadata.title} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
