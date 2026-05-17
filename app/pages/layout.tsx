'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pageSections } from '@/lib/pages.config';
import { ChevronDown, Menu, X } from 'lucide-react';

interface SidebarSectionProps {
  section: typeof pageSections[0];
  currentSlug: string;
}

function SidebarSection({ section, currentSlug }: SidebarSectionProps) {
  const [open, setOpen] = useState(
    section.pages.some((p) => `/pages/${p.slug}` === currentSlug || currentSlug.includes(p.slug))
  );

  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest text-[#4b5563] hover:text-[#9ca3af] transition-colors"
      >
        {section.title}
        <motion.span animate={{ rotate: open ? 0 : -90 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3 h-3" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pt-1 space-y-0.5">
              {section.pages.map((page) => {
                const isActive = currentSlug === `/pages/${page.slug}`;
                return (
                  <Link key={page.slug} href={`/pages/${page.slug}`}>
                    <motion.span
                      className={`block px-3 py-2 rounded-lg text-sm transition-all cursor-pointer font-[var(--font-inter)] ${
                        isActive
                          ? 'sidebar-active font-medium'
                          : 'text-[#6b7280] hover:text-[#f0f0f0] hover:bg-[rgba(255,255,255,0.03)]'
                      }`}
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

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050508]">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-20 left-4 z-40">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-10 h-10 glass rounded-lg flex items-center justify-center text-[#9ca3af]"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
              background: 'rgba(8,8,14,0.98)',
              borderRight: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <SidebarContent currentSlug={pathname} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6 pt-24 flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-60 flex-shrink-0">
          <div className="sticky top-28 h-[calc(100vh-8rem)] overflow-y-auto pr-2">
            <SidebarContent currentSlug={pathname} />
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 pb-24">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarContent({ currentSlug }: { currentSlug: string }) {
  return (
    <nav>
      <div className="mb-6">
        <p className="text-xs font-[var(--font-jetbrains)] text-[#4b5563] uppercase tracking-widest px-3 mb-3">
          Pages
        </p>
      </div>
      {pageSections.map((section) => (
        <SidebarSection key={section.title} section={section} currentSlug={currentSlug} />
      ))}
    </nav>
  );
}
