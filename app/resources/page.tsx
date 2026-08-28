"use client";

import Button from "@/components/ui/Button";
import ShinyText from "@/components/ui/ShinyText";
import { Language, languages, resources } from "@/content/site/resources";
import { layoutResourcesBento } from "@/lib/layout";
import staticData from "@/lib/staticdata";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightUp, Edit, Tag3 } from "reicon-react";

export default function Resources() {
  const [filter, setFilter] = useState<Language>(languages[0]);

  // /resources#typescript -> TypeScript - selects the language on load, from the url hash (/resources#foo)
  useEffect(() => {
    const syncHashWithFilter = () => {
      const hash = decodeURIComponent(
        window.location.hash.replace("#", "").toLowerCase(),
      );

      if (!hash) return;

      const match = languages.find((lang) => lang.toLowerCase() === hash);

      if (match) {
        setFilter(match);
      }
    };

    const handle = requestAnimationFrame(syncHashWithFilter);

    window.addEventListener("hashchange", syncHashWithFilter);

    return () => {
      cancelAnimationFrame(handle);
      window.removeEventListener("hashchange", syncHashWithFilter);
    };
  }, []);

  // Python -> /resources#python - changes the url
  const changeFilter = (lang: Language) => {
    setFilter(lang);
    window.history.pushState(null, "", `#${lang.toLowerCase()}`);
  };

  return (
    <div className="flex flex-col gap-md items-center py-lg">
      <h1 className="text-gradient font-bold text-4xl lg:text-5xl">
        Resources to <ShinyText>Level Up</ShinyText>
      </h1>
      <div className="flex flex-col items-center gap-xxs text-text-secondary whitespace-nowrap text-sm md:text-md lg:text-lg">
        <span>
          Curated learning paths by programming language. Find exactly what
        </span>
        <span>you need to master any stack.</span>
      </div>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={`${staticData.github}/website/edit/main/content/site/resources.ts`}
      >
        <Button icon={Edit}>Edit this page</Button>
      </Link>

      <div className="max-w-7xl w-full flex flex-col sm:flex-row gap-md px-md py-lg">
        <div className="sm:w-48 flex flex-row overflow-x-auto w-full sm:flex-col gap-xs shrink-0">
          <span className="text-xl mb-sm px-xs tracking-wider hidden sm:block">
            Languages
          </span>
          {/* languages (sidebar, on top if on mobile) */}
          {languages.map((lang) => {
            const isActive = filter === lang;

            return (
              <button
                key={lang}
                onClick={() => changeFilter(lang)}
                className={`text-left px-sm py-xs rounded-md whitespace-nowrap text-md transition-colors cursor-pointer ${
                  isActive
                    ? "bg-bg-secondary text-accent"
                    : "text-text-secondary hover:text-text hover:bg-bg-secondary"
                }`}
              >
                {lang}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md flex-1">
          {/* resource cards (bento grid, 2 col for featured cards) */}
          {(() => {
            let filteredResources = resources.filter((res) =>
              res.languages.includes(filter),
            );

            filteredResources = layoutResourcesBento(filteredResources);

            if (filteredResources.length > 0) {
              return filteredResources.map((res) => (
                <div
                  key={res.url}
                  className={`${
                    res.featured ? "md:col-span-2" : "md:col-span-1"
                  } flex flex-col justify-between bg-bg-secondary gap-sm p-md rounded-md`}
                >
                  <div className="flex flex-col gap-sm">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-text-secondary">{res.source}</span>
                      {res.featured && (
                        <span className="bg-accent-muted text-text-primary px-xs py-xxs rounded-md text-xs">
                          Featured
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl">
                      <Link
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-primary"
                      >
                        {res.title}
                        <ArrowRightUp className="inline-block align-middle ml-xxs" />
                      </Link>
                    </h2>

                    <p className="text-text-secondary text-md">
                      {res.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-xxs">
                    {res.tags.map((tag) => (
                      <div
                        key={tag}
                        className="text-xs flex gap-xxs items-center text-text-secondary px-xs py-xxs"
                      >
                        <Tag3 size={12} />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ));
            } else {
              return (
                <div className="md:col-span-3 p-lg text-center text-text-secondary bg-bg-secondary rounded-md">
                  No resources found for &quot;{filter}&quot;.
                </div>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
}
