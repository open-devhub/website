"use client";

import { pageSections } from "@/content/pages-sections";
import { accent, background, indigo, text } from "@/lib/colors";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarSectionProps {
  section: (typeof pageSections)[0];
  currentSlug: string | null;
  onNavigate?: () => void;
}

function SidebarSection({ section,currentSlug,onNavigate}: SidebarSectionProps) {
  const [open, setOpen] = useState(
    !!currentSlug?.startsWith("/pages") ||
      section.pages.some(
        (p) =>
          `/pages/${p.slug}` === currentSlug || currentSlug?.includes(p.slug),
      ),
  );

  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-colors"
        style={{
          fontFamily: "var(--font-geist-mono)",
          color: text.veryDim,
        }}
      >
        {section.title}
        <motion.span
          animate={{ rotate: open ? 0 : -90 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-3 h-3" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pt-1 space-y-0.5">
              {section.pages.map((page) => {
                const isActive = currentSlug === `/pages/${page.slug}`;
                return (
                  <Link onClick={() => onNavigate?.()} key={page.slug} href={`/pages/${page.slug}`}>
                    <motion.span
                      className="block px-3 py-2 text-sm cursor-pointer"
                      style={{ fontFamily: "var(--font-geist-mono)" }}
                      initial={false}
                      animate={{
                        backgroundColor: isActive
                          ? indigo(0.1)
                          : "rgba(0,0,0,0)",
                        color: isActive ? accent.indigoLightest : text.dim,
                        borderColor: isActive ? indigo(0.3) : "rgba(0,0,0,0)",
                      }}
                      transition={{ duration: 0.15 }}
                      whileHover={{
                        x: 2,
                        backgroundColor: indigo(0.1),
                        borderColor: indigo(0.3),
                        color: accent.indigoLightest,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {page.title}
                    </motion.span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="min-h-screen relative"
      style={{ background: background.primary }}
    >
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />

      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-20 left-4 z-40">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-10 h-10 flex items-center justify-center transition-all"
          style={{
            background: indigo(0.06),
            border: `1px solid ${indigo(0.15)}`,
            color: text.dim,
          }}
        >
          {mobileOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: -280, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -280, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 left-0 w-72 z-30 pt-24 pb-8 px-4 overflow-y-auto"
            style={{
              background: "rgba(3, 3, 5, 0.98)",
              borderRight: `1px solid ${indigo(0.1)}`,
              backdropFilter: "blur(20px)",
            }}
          >
            <SidebarContent currentSlug={pathname} onNavigate={() => setMobileOpen(false)}/>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-24 flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-60 flex-shrink-0">
          <div className="sticky top-28 h-[calc(100vh-8rem)] overflow-y-auto pr-2">
            <SidebarContent currentSlug={pathname} />
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 pb-24">{children}</main>
      </div>
    </div>
  );
}

function SidebarContent({ currentSlug, onNavigate,}: { currentSlug: string | null; onNavigate?: () => void}) {
  return (
    <nav>
      <div className="mb-6">
        <p
          className="text-xs uppercase tracking-widest px-3 mb-3"
          style={{ fontFamily: "var(--font-geist-mono)", color: text.veryDim }}
        >
          Pages
        </p>
      </div>
      {pageSections.map((section) => (
        <SidebarSection
          key={section.title}
          section={section}
          currentSlug={currentSlug}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
}
