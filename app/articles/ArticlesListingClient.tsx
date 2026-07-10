"use client";

import ShinyText from "@/components/bits/ShinyText";
import {
  fadeInUp,
  staggerContainer,
  staggerContainerFast,
} from "@/lib/animations";
import { accent, background, indigo, text } from "@/lib/colors";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Article type (must match articles-loader but client-safe — no fs)
interface ArticleCard {
  slug: string;
  title: string;
  description: string;
  banner: string;
  author: string;
  date: string;
  tags: string[];
  readingTime: string;
}

interface Props {
  articles: ArticleCard[];
}

export default function ArticlesListingClient({ articles }: Props) {
  return (
    <div
      className="min-h-screen relative"
      style={{ background: background.primary }}
    >
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${indigo(0.06)} 0%, transparent 70%)`,
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-20 left-8 hidden md:block">
        <div
          style={{
            borderTop: `1px solid ${indigo(0.4)}`,
            borderLeft: `1px solid ${indigo(0.4)}`,
            width: 24,
            height: 24,
          }}
        />
      </div>
      <div className="absolute top-20 right-8 hidden md:block">
        <div
          style={{
            borderTop: `1px solid ${indigo(0.4)}`,
            borderRight: `1px solid ${indigo(0.4)}`,
            width: 24,
            height: 24,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Page header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-14 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span
              style={{
                color: indigo(0.5),
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {"{"}
            </span>
            <span
              className="text-xs tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: accent.indigoLightest,
              }}
            >
              Articles
            </span>
            <span
              style={{
                color: indigo(0.5),
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {"}"}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-pixelify), 'Pixelify Sans', monospace",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              lineHeight: 1.15,
            }}
            className="mb-5"
          >
            <span
              style={{
                background: `linear-gradient(135deg, ${text.primary} 0%, ${text.secondary} 40%, ${accent.indigoLightest} 70%, ${accent.violet} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Community{" "}
            </span>
            <span
              style={{
                color: accent.indigoLight,
                WebkitTextFillColor: accent.indigoLight,
              }}
            >
              <ShinyText
                text="Articles"
                className="cursor-target"
                speed={3.5}
                delay={1}
                color={accent.indigoLight}
                shineColor={accent.indigoShine}
                spread={90}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            style={{
              fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace",
              color: text.dim,
            }}
          >
            Guides, releases, and deep dives written by the DevHub community.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 mx-auto"
            style={{
              height: "1px",
              maxWidth: 280,
              background: `linear-gradient(90deg, transparent, ${indigo(0.35)}, transparent)`,
            }}
          />
        </motion.div>

        {/* Articles grid */}
        {/* Articles grid */}
        {articles.length === 0 ? (
          <div
            className="text-center py-24"
            style={{ fontFamily: "var(--font-geist-mono)", color: text.dim }}
          >
            No articles yet. Check back soon.
          </div>
        ) : (
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            animate="visible"
            className={
              articles.length < 3
                ? "flex flex-wrap justify-center gap-6"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            }
          >
            {articles.map((article) => (
              <motion.div
                key={article.slug}
                variants={fadeInUp}
                className={
                  articles.length < 3
                    ? "w-full md:w-[calc(50%-12px)] lg:w-[360px]"
                    : ""
                }
              >
                <Link
                  href={`/articles/${article.slug}`}
                  className="group block h-full"
                >
                  <motion.article
                    className="relative h-full flex flex-col overflow-hidden"
                    style={{
                      background: "rgba(7, 7, 15, 0.7)",
                      border: `1px solid ${indigo(0.12)}`,
                    }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {/* Banner image */}
                    <div
                      className="relative overflow-hidden"
                      style={{ height: "200px" }}
                    >
                      {article.banner ? (
                        <>
                          <Image
                            src={article.banner}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            unoptimized={article.banner.startsWith("http")}
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background: `linear-gradient(to bottom, transparent 50%, rgba(7,7,15,0.85) 100%)`,
                            }}
                          />
                        </>
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ background: indigo(0.06) }}
                        >
                          <span
                            style={{ color: indigo(0.3), fontSize: "2rem" }}
                          >
                            ✦
                          </span>
                        </div>
                      )}

                      {/* Top-right corner bracket accent */}
                      <div
                        className="absolute top-3 right-3 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          borderTop: `1.5px solid ${indigo(0.6)}`,
                          borderRight: `1.5px solid ${indigo(0.6)}`,
                        }}
                      />
                    </div>

                    {/* Card body */}
                    <div className="flex flex-col flex-1 p-5">
                      {/* Tags */}
                      {article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 px-2 py-0.5 text-xs"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                background: indigo(0.08),
                                border: `1px solid ${indigo(0.18)}`,
                                color: accent.indigoLightest,
                              }}
                            >
                              <Tag className="w-2 h-2" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h2
                        className="font-bold text-base mb-2 leading-snug transition-colors group-hover:text-[#a5b4fc]"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          color: text.primary,
                        }}
                      >
                        {article.title}
                      </h2>

                      {/* Description */}
                      <p
                        className="text-xs leading-relaxed flex-1 mb-4"
                        style={
                          {
                            fontFamily: "var(--font-geist-mono)",
                            color: text.dim,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          } as React.CSSProperties
                        }
                      >
                        {article.description}
                      </p>

                      {/* Footer meta */}
                      <div
                        className="flex items-center justify-between text-xs pt-3"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          borderTop: `1px solid ${indigo(0.08)}`,
                          color: text.veryDim,
                        }}
                      >
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {article.readingTime}
                        </span>
                      </div>
                    </div>

                    {/* Hover bottom border accent */}
                    {/* <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{
                        background: `linear-gradient(90deg, ${accent.indigo}, ${accent.violet}, transparent)`,
                      }}
                    /> */}
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
