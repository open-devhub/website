"use client";

import { Page, PageContent } from "@/content/pages";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  OctagonAlert as AlertOctagon,
  TriangleAlert as AlertTriangle,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Info,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  page: Page;
  prev?: Page;
  next?: Page;
}

function ApplySpecialClass({ text }: { text: string }) {
  const regex = /(`[^`]+`)|(\[[^\]]+\]\([^)]+\))|(#[\w-]+)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const [full, code, link, channel] = match;

    if (code) {
      parts.push(
        <code
          key={key++}
          className="px-1.5 py-0.5 text-sm"
          style={{
            fontFamily: "var(--font-geist-mono)",
            background: "rgba(7, 7, 15, 0.8)",
            border: "1px solid rgba(99,102,241,0.12)",
            color: "#c4c4cc",
          }}
        >
          {code.slice(1, -1)}
        </code>,
      );
    } else if (link) {
      const linkMatch = link.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        parts.push(
          <a
            key={key++}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer hover:opacity-80 transition-opacity"
            style={{ color: "#a5b4fc" }}
          >
            {linkMatch[1]}
          </a>,
        );
      } else {
        parts.push(full);
      }
    } else if (channel) {
      parts.push(
        <span
          key={key++}
          className="hover:underline cursor-pointer hover:opacity-80 transition-opacity"
          style={{ color: "#a5b4fc" }}
        >
          {channel}
        </span>,
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}

function ContentBlock({ block }: { block: PageContent }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={block.text?.toLowerCase().replace(/\s+/g, "-")}
          className="font-bold text-2xl mt-10 mb-4 scroll-mt-28"
          style={{
            fontFamily: "var(--font-geist-mono)",
            color: "#e2e2f0",
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
            color: "#e2e2f0",
          }}
        >
          <ApplySpecialClass text={block.text || ""} />
        </h3>
      );
    case "p":
      return (
        <p
          className="leading-relaxed mb-4"
          style={{ fontFamily: "var(--font-geist-mono)", color: "#71717a" }}
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
              style={{ fontFamily: "var(--font-geist-mono)", color: "#71717a" }}
            >
              <span
                className="mt-2 w-1.5 h-1.5 flex-shrink-0"
                style={{ background: "rgba(99,102,241,0.5)" }}
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
              style={{ fontFamily: "var(--font-geist-mono)", color: "#71717a" }}
            >
              <span
                className="text-xs mt-0.5 w-5 flex-shrink-0"
                style={{ color: "#a5b4fc" }}
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
            border: "1px solid rgba(99,102,241,0.12)",
          }}
        >
          {/* Corner brackets */}
          <div
            className="absolute top-2 left-2 w-3 h-3"
            style={{
              borderTop: "1.5px solid rgba(99,102,241,0.25)",
              borderLeft: "1.5px solid rgba(99,102,241,0.25)",
            }}
          />
          <div
            className="absolute top-2 right-2 w-3 h-3"
            style={{
              borderTop: "1.5px solid rgba(99,102,241,0.25)",
              borderRight: "1.5px solid rgba(99,102,241,0.25)",
            }}
          />
          <div
            className="absolute bottom-2 left-2 w-3 h-3"
            style={{
              borderBottom: "1.5px solid rgba(99,102,241,0.25)",
              borderLeft: "1.5px solid rgba(99,102,241,0.25)",
            }}
          />
          <div
            className="absolute bottom-2 right-2 w-3 h-3"
            style={{
              borderBottom: "1.5px solid rgba(99,102,241,0.25)",
              borderRight: "1.5px solid rgba(99,102,241,0.25)",
            }}
          />
          <pre
            className="text-sm whitespace-pre-wrap"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#c4c4cc" }}
          >
            {block.text}
          </pre>
        </div>
      );
    case "callout": {
      const styles = {
        info: {
          bg: "rgba(99,102,241,0.05)",
          border: "rgba(99,102,241,0.15)",
          text: "#a5b4fc",
          Icon: Info,
        },
        warning: {
          bg: "rgba(245,158,11,0.05)",
          border: "rgba(245,158,11,0.15)",
          text: "#f59e0b",
          Icon: AlertTriangle,
        },
        danger: {
          bg: "rgba(239,68,68,0.05)",
          border: "rgba(239,68,68,0.15)",
          text: "#ef4444",
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
            style={{ color: s.text }}
          />
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#71717a" }}
          >
            <ApplySpecialClass text={block.text || ""} />
          </p>
        </div>
      );
    }
    default:
      return null;
  }
}

function TableOfContents({ content }: { content: PageContent[] }) {
  const headings = content.filter((b) => b.type === "h2" && b.text);
  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block w-48 flex-shrink-0">
      <div className="sticky top-28">
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{ fontFamily: "var(--font-geist-mono)", color: "#3f3f46" }}
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
                color: "#52525b",
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

export default function PageClient({ page, prev, next }: Props) {
  return (
    <div className="flex gap-12">
      <motion.article
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex-1 min-w-0"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#3f3f46" }}
            >
              {page.section}
            </span>
            <span style={{ color: "#3f3f46" }}>/</span>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#52525b" }}
            >
              {page.title}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-pixelify), 'Pixelify Sans', monospace",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #e2e2f0 0%, #a5b4fc 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {page.title}
            </span>
          </h1>

          <p
            className="mt-4 text-sm mb-6"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#52525b" }}
          >
            {page.description}
          </p>

          <div
            className="flex items-center gap-4 text-xs"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#3f3f46" }}
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              Updated {page.lastUpdated}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {page.readingTime}
            </span>
          </div>

          <div
            className="mt-6 h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(99,102,241,0.4), rgba(139,92,246,0.2), transparent)",
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div variants={fadeInUp}>
          {page.content.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </motion.div>

        {/* Prev/Next */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 pt-8 grid grid-cols-2 gap-4"
          style={{ borderTop: "1px solid rgba(99,102,241,0.1)" }}
        >
          {prev ? (
            <Link href={`/pages/${prev.slug}`} className="group block">
              <motion.div
                className="relative p-4 overflow-hidden"
                style={{
                  background: "rgba(7, 7, 15, 0.6)",
                  border: "1px solid rgba(99,102,241,0.1)",
                }}
                whileHover={{ x: -2 }}
              >
                {/* Corner brackets */}
                <div
                  className="absolute top-2 left-2 w-3 h-3"
                  style={{
                    borderTop: "1.5px solid rgba(99,102,241,0.25)",
                    borderLeft: "1.5px solid rgba(99,102,241,0.25)",
                  }}
                />
                <div
                  className="absolute bottom-2 right-2 w-3 h-3"
                  style={{
                    borderBottom: "1.5px solid rgba(99,102,241,0.25)",
                    borderRight: "1.5px solid rgba(99,102,241,0.25)",
                  }}
                />

                <div
                  className="flex items-center gap-2 text-xs mb-1"
                  style={{ color: "#3f3f46" }}
                >
                  <ChevronLeft className="w-3 h-3" />
                  Previous
                </div>
                <p
                  className="font-medium transition-colors text-sm"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#71717a",
                  }}
                >
                  <span className="group-hover:text-[#a5b4fc]">
                    {prev.title}
                  </span>
                </p>
              </motion.div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link href={`/pages/${next.slug}`} className="group block">
              <motion.div
                className="relative p-4 text-right overflow-hidden"
                style={{
                  background: "rgba(7, 7, 15, 0.6)",
                  border: "1px solid rgba(99,102,241,0.1)",
                }}
                whileHover={{ x: 2 }}
              >
                {/* Corner brackets */}
                <div
                  className="absolute top-2 right-2 w-3 h-3"
                  style={{
                    borderTop: "1.5px solid rgba(99,102,241,0.25)",
                    borderRight: "1.5px solid rgba(99,102,241,0.25)",
                  }}
                />
                <div
                  className="absolute bottom-2 left-2 w-3 h-3"
                  style={{
                    borderBottom: "1.5px solid rgba(99,102,241,0.25)",
                    borderLeft: "1.5px solid rgba(99,102,241,0.25)",
                  }}
                />

                <div
                  className="flex items-center justify-end gap-2 text-xs mb-1"
                  style={{ color: "#3f3f46" }}
                >
                  Next
                  <ChevronRight className="w-3 h-3" />
                </div>
                <p
                  className="font-medium transition-colors text-sm"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#71717a",
                  }}
                >
                  <span className="group-hover:text-[#a5b4fc]">
                    {next.title}
                  </span>
                </p>
              </motion.div>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>
      </motion.article>

      <TableOfContents content={page.content} />
    </div>
  );
}
