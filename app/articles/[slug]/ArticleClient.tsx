"use client";

import { LinkPreviewCard } from "@/components/LinkPreviewCard";
import type { Article } from "@/content/articles-loader";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  accent,
  background,
  danger,
  indigo,
  semantic,
  text as textColors,
  violet,
  warning,
} from "@/lib/colors";
import type { ContentBlock as ContentBlockType } from "@/lib/markdown/parser";
import { motion } from "framer-motion";
import {
  OctagonAlert as AlertOctagon,
  TriangleAlert as AlertTriangle,
  Calendar,
  Clock,
  Github,
  Info,
  Tag,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import redirects from "../../../lib/redirects.config";

interface Props {
  article: Article;
}

// ─── Inline formatter (identical to PageClient's ApplySpecialClass) ──────────

function ApplySpecialClass({ text }: { text: string }) {
  const regex =
    /(`[^`]+`)|(\[[^\]]+\]\([^)]+\))|(#[\w-]+)|(\*\*\*[^*]+\*\*\*|___[^_]+___)|(\*\*[^*]+\*\*|__[^_]+__)|(\*[^*]+\*|_[^_]+_)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [full, code, link, channel, boldItalic, bold, italic] = match;

    if (code) {
      parts.push(
        <code
          key={key++}
          className="px-1.5 py-0.5 text-sm"
          style={{
            fontFamily: "var(--font-geist-mono)",
            background: "rgba(7, 7, 15, 0.8)",
            border: `1px solid ${indigo(0.12)}`,
            color: textColors.secondary,
          }}
        >
          {code.slice(1, -1)}
        </code>,
      );
    } else if (link) {
      const linkMatch = link.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        parts.push(
          <LinkPreviewCard
            key={key++}
            href={linkMatch[2]}
            newTab={
              linkMatch[2].startsWith("https") ||
              redirects[0].sources.includes(linkMatch[2])
            }
          >
            {linkMatch[1]}
          </LinkPreviewCard>,
        );
      } else {
        parts.push(full);
      }
    } else if (channel) {
      parts.push(
        <span
          key={key++}
          className="hover:underline cursor-pointer hover:opacity-80 transition-opacity"
          style={{ color: accent.indigoLightest }}
        >
          {channel}
        </span>,
      );
    } else if (boldItalic) {
      parts.push(
        <strong key={key++} style={{ color: textColors.secondary }}>
          <em>{boldItalic.slice(3, -3)}</em>
        </strong>,
      );
    } else if (bold) {
      parts.push(
        <strong key={key++} style={{ color: textColors.secondary }}>
          {bold.slice(2, -2)}
        </strong>,
      );
    } else if (italic) {
      parts.push(
        <em key={key++} style={{ color: textColors.secondary }}>
          {italic.slice(1, -1)}
        </em>,
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}

// ─── Block renderer ───────────────────────────────────────────

function ContentBlock({ block }: { block: ContentBlockType }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={block.text?.toLowerCase().replace(/\s+/g, "-")}
          className="font-bold text-2xl mt-10 mb-4 scroll-mt-28"
          style={{
            fontFamily: "var(--font-geist-mono)",
            color: textColors.primary,
          }}
        >
          <ApplySpecialClass text={block.text || ""} />
        </h2>
      );
    case "h3":
      return (
        <h3
          className="font-semibold text-lg mt-6 mb-3"
          style={{
            fontFamily: "var(--font-geist-mono)",
            color: textColors.primary,
          }}
        >
          <ApplySpecialClass text={block.text || ""} />
        </h3>
      );
    case "p":
      return (
        <p
          className="leading-relaxed mb-4"
          style={{
            fontFamily: "var(--font-geist-mono)",
            color: textColors.muted,
          }}
        >
          <ApplySpecialClass text={block.text || ""} />
        </p>
      );
    case "ul":
      return (
        <ul className="space-y-2 mb-4 ml-4">
          {block.items?.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: textColors.muted,
              }}
            >
              <span
                className="mt-2 w-1.5 h-1.5 flex-shrink-0"
                style={{ background: indigo(0.5) }}
              />
              <span>
                <ApplySpecialClass text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-2 mb-4 ml-4">
          {block.items?.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: textColors.muted,
              }}
            >
              <span
                className="text-xs mt-0.5 w-5 flex-shrink-0"
                style={{ color: accent.indigoLightest }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <ApplySpecialClass text={item} />
              </span>
            </li>
          ))}
        </ol>
      );
    case "code":
      return (
        <div
          className="p-4 mb-4 overflow-x-auto relative"
          style={{
            background: "rgba(7, 7, 15, 0.8)",
            border: `1px solid ${indigo(0.12)}`,
          }}
        >
          <div
            className="absolute top-2 left-2 w-3 h-3"
            style={{
              borderTop: `1.5px solid ${indigo(0.25)}`,
              borderLeft: `1.5px solid ${indigo(0.25)}`,
            }}
          />
          <div
            className="absolute top-2 right-2 w-3 h-3"
            style={{
              borderTop: `1.5px solid ${indigo(0.25)}`,
              borderRight: `1.5px solid ${indigo(0.25)}`,
            }}
          />
          <div
            className="absolute bottom-2 left-2 w-3 h-3"
            style={{
              borderBottom: `1.5px solid ${indigo(0.25)}`,
              borderLeft: `1.5px solid ${indigo(0.25)}`,
            }}
          />
          <div
            className="absolute bottom-2 right-2 w-3 h-3"
            style={{
              borderBottom: `1.5px solid ${indigo(0.25)}`,
              borderRight: `1.5px solid ${indigo(0.25)}`,
            }}
          />
          <pre
            className="text-sm whitespace-pre-wrap"
            style={{
              fontFamily: "var(--font-geist-mono)",
              color: textColors.secondary,
            }}
          >
            {block.text}
          </pre>
        </div>
      );
    case "callout": {
      const styles = {
        info: {
          bg: indigo(0.05),
          border: indigo(0.15),
          color: accent.indigoLightest,
          Icon: Info,
        },
        warning: {
          bg: warning(0.05),
          border: warning(0.15),
          color: semantic.warning,
          Icon: AlertTriangle,
        },
        danger: {
          bg: danger(0.05),
          border: danger(0.15),
          color: semantic.danger,
          Icon: AlertOctagon,
        },
      };
      const s = styles[block.variant || "info"];
      return (
        <div
          className="flex gap-3 p-4 mb-4 border"
          style={{ background: s.bg, borderColor: s.border }}
        >
          <s.Icon
            className="w-4 h-4 flex-shrink-0 mt-0.5"
            style={{ color: s.color }}
          />
          <p
            className="text-sm"
            style={{
              fontFamily: "var(--font-geist-mono)",
              color: textColors.muted,
            }}
          >
            <ApplySpecialClass text={block.text || ""} />
          </p>
        </div>
      );
    }
    case "img":
      return (
        <figure className="mb-6 mt-6">
          <img
            src={block.src}
            alt={block.text || ""}
            className="w-full object-cover"
            style={{
              maxHeight: "480px",
              border: `1px solid ${indigo(0.12)}`,
            }}
          />
          {block.text && (
            <figcaption
              className="text-xs mt-2 text-center"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: textColors.dim,
              }}
            >
              {block.text}
            </figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
}

// ─── Table of contents ────────────────────────────────────────

function TableOfContents({ content }: { content: ContentBlockType[] }) {
  const headings = content.filter((b) => b.type === "h2" && b.text);
  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block w-48 flex-shrink-0">
      <div className="sticky top-28">
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{
            fontFamily: "var(--font-geist-mono)",
            color: textColors.veryDim,
          }}
        >
          On this page
        </p>
        <nav className="space-y-1">
          {headings.map((h) => (
            <a
              key={h.text}
              href={`#${h.text?.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-sm py-0.5 transition-colors"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: textColors.dim,
              }}
            >
              <span className="hover:text-[#a5b4fc]">{h.text}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────

export default function ArticleClient({ article }: Props) {
  return (
    <div className="min-h-screen" style={{ background: background.primary }}>
      <div className="max-w-6xl mx-auto px-6 pt-20">
        {/* Banner */}
        {article.banner && (
          <div
            className="relative w-full overflow-hidden rounded-lg"
            style={{ maxHeight: "260px" }}
          >
            <img
              src={article.banner}
              alt={article.title}
              className="w-full px-6 object-cover"
              style={{ maxHeight: "260px" }}
            />
            {/* Dark gradient overlay at bottom for text legibility */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, transparent 40%, ${background.primary} 100%)`,
              }}
            />
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          <motion.article
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 min-w-0 max-w-3xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="mb-10">
              {/* Back link */}
              <Link
                href="/articles"
                className="inline-flex items-center gap-1.5 text-xs mb-6 transition-colors hover:text-[#a5b4fc]"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  color: textColors.dim,
                }}
              >
                ← Back to Articles
              </Link>

              {/* Tags */}
              {article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-xs"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        background: indigo(0.08),
                        border: `1px solid ${indigo(0.2)}`,
                        color: accent.indigoLightest,
                      }}
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1
                style={{
                  fontFamily:
                    "var(--font-pixelify), 'Pixelify Sans', monospace",
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  lineHeight: 1.2,
                }}
              >
                <span
                  style={{
                    background: `linear-gradient(135deg, ${textColors.primary} 0%, ${accent.indigoLightest} 50%, ${accent.violet} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {article.title}
                </span>
              </h1>

              <p
                className="mt-4 text-sm mb-6 leading-relaxed"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  color: textColors.dim,
                }}
              >
                {article.description}
              </p>

              {/* Meta row */}
              <div
                className="flex flex-wrap items-center gap-4 text-xs"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  color: textColors.veryDim,
                }}
              >
                <a
                  href={article.authorGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-[#a5b4fc]"
                >
                  <Github className="w-3 h-3" />
                  {article.author}
                </a>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  {article.readingTime}
                </span>
              </div>

              <div
                className="mt-6 h-px"
                style={{
                  background: `linear-gradient(90deg, ${indigo(0.4)}, ${violet(0.2)}, transparent)`,
                }}
              />
            </motion.div>

            {/* Body */}
            <motion.div variants={fadeInUp}>
              {article.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}
            </motion.div>

            {/* Footer */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 pt-8 flex items-center justify-between"
              style={{ borderTop: `1px solid ${indigo(0.1)}` }}
            >
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs transition-all"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  background: indigo(0.06),
                  border: `1px solid ${indigo(0.2)}`,
                  color: textColors.muted,
                }}
              >
                ← All Articles
              </Link>
              <a
                href={article.authorGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs transition-colors hover:text-[#a5b4fc]"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  color: textColors.dim,
                }}
              >
                <Github className="w-3.5 h-3.5" />
                Written by {article.author}
              </a>
            </motion.div>
          </motion.article>

          <TableOfContents content={article.content} />
        </div>
      </div>
    </div>
  );
}
