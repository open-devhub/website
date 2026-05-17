"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Page, PageContent } from "@/lib/pages.config";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Info,
  TriangleAlert as AlertTriangle,
  OctagonAlert as AlertOctagon,
} from "lucide-react";

interface Props {
  page: Page;
  prev?: Page;
  next?: Page;
}

function ContentBlock({ block }: { block: PageContent }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={block.text?.toLowerCase().replace(/\s+/g, "-")}
          className="font-[var(--font-space-grotesk)] font-bold text-2xl text-[#f0f0f0] mt-10 mb-4 scroll-mt-28"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-[var(--font-space-grotesk)] font-semibold text-lg text-[#f0f0f0] mt-6 mb-3">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="text-[#9ca3af] leading-relaxed mb-4 font-[var(--font-inter)]">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="space-y-2 mb-4 ml-4">
          {block.items?.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[#9ca3af] font-[var(--font-inter)]"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4fbfff] flex-shrink-0 opacity-60" />
              {item}
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
              className="flex items-start gap-3 text-[#9ca3af] font-[var(--font-inter)]"
            >
              <span className="font-[var(--font-jetbrains)] text-xs text-[#4fbfff] mt-0.5 w-5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "code":
      return (
        <div
          className="rounded-xl p-4 mb-4 overflow-x-auto border"
          style={{
            background: "rgba(0,0,0,0.4)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <pre className="font-[var(--font-jetbrains)] text-sm text-[#e5e7eb] whitespace-pre-wrap">
            {block.text}
          </pre>
        </div>
      );
    case "callout": {
      const styles = {
        info: {
          bg: "rgba(0,245,255,0.05)",
          border: "rgba(0,245,255,0.15)",
          text: "#4fbfff",
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
          className="flex gap-3 rounded-xl p-4 mb-4 border"
          style={{ background: s.bg, borderColor: s.border }}
        >
          <s.Icon
            className="w-4 h-4 flex-shrink-0 mt-0.5"
            style={{ color: s.text }}
          />
          <p className="text-sm text-[#9ca3af] font-[var(--font-inter)]">
            {block.text}
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
        <p className="text-xs font-[var(--font-jetbrains)] text-[#4b5563] uppercase tracking-widest mb-4">
          On this page
        </p>
        <nav className="space-y-1">
          {headings.map((h) => (
            <a
              key={h.text}
              href={`#${h.text?.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-sm text-[#6b7280] hover:text-[#4fbfff] transition-colors py-0.5 font-[var(--font-inter)]"
            >
              {h.text}
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
            <span className="text-xs font-[var(--font-jetbrains)] text-[#4b5563]">
              {page.section}
            </span>
            <span className="text-[#4b5563]">/</span>
            <span className="text-xs font-[var(--font-jetbrains)] text-[#6b7280]">
              {page.title}
            </span>
          </div>

          <h1 className="font-[var(--font-space-grotesk)] font-bold text-4xl md:text-5xl text-[#f0f0f0] mb-4 leading-tight">
            {page.title}
          </h1>
          <p className="text-[#6b7280] text-lg mb-6 font-[var(--font-inter)]">
            {page.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-[#4b5563] font-[var(--font-jetbrains)]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              Updated {page.lastUpdated}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {page.readingTime}
            </span>
          </div>

          <div className="mt-6 h-px bg-gradient-to-r from-[rgba(0,245,255,0.3)] via-[rgba(124,58,237,0.2)] to-transparent" />
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
          className="mt-16 pt-8 grid grid-cols-2 gap-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {prev ? (
            <Link href={`/pages/${prev.slug}`} className="group block">
              <motion.div
                className="glass rounded-xl p-4 border"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                whileHover={{ borderColor: "rgba(0,245,255,0.15)", x: -2 }}
              >
                <div className="flex items-center gap-2 text-xs text-[#4b5563] mb-1">
                  <ChevronLeft className="w-3 h-3" />
                  Previous
                </div>
                <p className="font-[var(--font-space-grotesk)] font-medium text-[#9ca3af] group-hover:text-[#4fbfff] transition-colors text-sm">
                  {prev.title}
                </p>
              </motion.div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link href={`/pages/${next.slug}`} className="group block">
              <motion.div
                className="glass rounded-xl p-4 text-right border"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
                whileHover={{ borderColor: "rgba(0,245,255,0.15)", x: 2 }}
              >
                <div className="flex items-center justify-end gap-2 text-xs text-[#4b5563] mb-1">
                  Next
                  <ChevronRight className="w-3 h-3" />
                </div>
                <p className="font-[var(--font-space-grotesk)] font-medium text-[#9ca3af] group-hover:text-[#4fbfff] transition-colors text-sm">
                  {next.title}
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
