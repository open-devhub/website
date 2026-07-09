"use client";

import Badge from "@/components/Badge";
import ShinyText from "@/components/bits/ShinyText";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Language,
  languageBadgeVariants,
  languageColors,
  languages,
  resources,
} from "@/content/resources";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { accent, background, indigo, text, white } from "@/lib/colors";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function ResourcesPage() {
  const [activeLanguage, setActiveLanguage] = useState<Language>("TypeScript");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filtered = resources.filter((r) =>
    r.languages.includes(activeLanguage as Exclude<Language, "All">),
  );

  return (
    <div
      className="min-h-screen relative"
      style={{ background: background.primary }}
    >
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${indigo(0.06)} 0%, transparent 70%)`,
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-20 left-8 hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderTop: `1.5px solid ${indigo(0.4)}`,
            borderLeft: `1.5px solid ${indigo(0.4)}`,
          }}
        />
      </div>
      <div className="absolute top-20 right-8 hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderTop: `1.5px solid ${indigo(0.4)}`,
            borderRight: `1.5px solid ${indigo(0.4)}`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Hero */}
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
              Community Curated
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
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.2,
            }}
          >
            <span
              style={{
                background: `linear-gradient(135deg, ${text.primary} 0%, ${accent.indigoLightest} 50%, ${accent.violet} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Resources to{" "}
              <span
                style={{
                  color: accent.indigoLight,
                  WebkitTextFillColor: accent.indigoLight,
                }}
              >
                <ShinyText
                  text="Level Up"
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
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-sm max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-geist-mono)", color: text.dim }}
          >
            Curated learning paths by programming language. Find exactly what
            you need to master any stack.
          </motion.p>
        </motion.div>

        {/* Two-column layout: Sidebar + Grid */}
        <div className="flex gap-8">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-40 flex-shrink-0">
            <div className="sticky top-32 space-y-1">
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  color: text.veryDim,
                }}
              >
                Languages
              </p>
              {languages.map((lang) => {
                const isActive = activeLanguage === lang;
                return (
                  <motion.button
                    key={lang}
                    onClick={() => setActiveLanguage(lang)}
                    className="w-full text-left px-3 py-2 text-sm"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                    initial={false}
                    animate={{
                      backgroundColor: isActive ? indigo(0.1) : "rgba(0,0,0,0)",
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
                    {lang}
                  </motion.button>
                );
              })}
            </div>
          </aside>

          {/* Resources grid */}
          <div className="flex-1">
            {/* Mobile filter bar */}
            <div className="md:hidden mb-6">
              <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                <DrawerTrigger asChild>
                  <button
                    className="flex w-full items-center justify-between border px-4 py-3 text-sm"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      borderColor: indigo(0.25),
                      backgroundColor: indigo(0.06),
                      color: accent.indigoLightest,
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <SlidersHorizontal className="h-4 w-4" />
                      Language
                    </span>
                    <span style={{ color: accent.indigoLight }}>
                      {activeLanguage}
                    </span>
                  </button>
                </DrawerTrigger>
                <DrawerContent style={{ backgroundColor: background.drawer }}>
                  <DrawerHeader>
                    <DrawerTitle
                      className="text-xs uppercase tracking-widest"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        color: accent.indigoLightest,
                      }}
                    >
                      Select Language
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className="grid grid-cols-2 gap-2 px-4 pb-8">
                    {languages.map((lang) => {
                      const isActive = activeLanguage === lang;
                      return (
                        <DrawerClose asChild key={lang}>
                          <button
                            onClick={() => setActiveLanguage(lang)}
                            className="w-full text-left px-3 py-2.5 text-sm border"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              backgroundColor: isActive
                                ? indigo(0.12)
                                : "rgba(0,0,0,0)",
                              borderColor: isActive ? indigo(0.3) : white(0.06),
                              color: isActive
                                ? accent.indigoLightest
                                : text.dim,
                            }}
                          >
                            {lang}
                          </button>
                        </DrawerClose>
                      );
                    })}
                  </div>
                </DrawerContent>
              </Drawer>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeLanguage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.length === 0 ? (
                  <motion.div
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    className="col-span-full text-center py-20"
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        color: text.veryDim,
                      }}
                    >
                      No resources for {activeLanguage}. Check another language!
                    </p>
                  </motion.div>
                ) : (
                  filtered.map((resource, i) => {
                    const langColor =
                      resource.languages.length > 0
                        ? languageColors[resource.languages[0]]
                        : accent.indigo;
                    return (
                      <motion.a
                        key={resource.title}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: i * 0.04, duration: 0.4 },
                        }}
                        className="group block relative overflow-hidden"
                        style={{
                          background: "rgba(7, 7, 15, 0.7)",
                          border: `1px solid ${indigo(0.1)}`,
                        }}
                        whileHover={{
                          y: -2,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {/* Corner brackets */}
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

                        <div className="p-4 relative">
                          {/* Featured indicator */}
                          {resource.featured && (
                            <div className="absolute top-3 right-3">
                              <span
                                className="text-[9px] uppercase tracking-widest"
                                style={{
                                  fontFamily: "var(--font-geist-mono)",
                                  color: accent.indigoLightest,
                                }}
                              >
                                Featured
                              </span>
                            </div>
                          )}

                          {/* Header: source + primary language */}
                          <div className="flex items-center gap-2 mb-2">
                            <div
                              className="w-6 h-6 flex items-center justify-center text-[9px] font-bold"
                              style={{
                                background: `${langColor}20`,
                                color: langColor,
                                border: `1px solid ${langColor}40`,
                              }}
                            >
                              {resource.source.slice(0, 1).toUpperCase()}
                            </div>
                            <span
                              className="text-xs"
                              style={{
                                fontFamily: "var(--font-geist-mono)",
                                color: text.dim,
                              }}
                            >
                              {resource.source}
                            </span>
                          </div>

                          {/* Title */}
                          <h3
                            className="font-semibold text-sm mb-1.5 transition-colors"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              color: text.primary,
                            }}
                          >
                            {resource.title}
                          </h3>

                          {/* Description */}
                          <p
                            className="text-xs leading-relaxed mb-3"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              color: text.dim,
                            }}
                          >
                            {resource.description}
                          </p>

                          {/* Languages + Tags */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {resource.languages.slice(0, 2).map((lang) => (
                              <Badge
                                key={lang}
                                variant={languageBadgeVariants[lang]}
                                size="sm"
                              >
                                {lang}
                              </Badge>
                            ))}
                            {resource.tags.slice(0, 1).map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] px-1.5 py-0.5 rounded"
                                style={{
                                  fontFamily: "var(--font-geist-mono)",
                                  color: text.veryDim,
                                  background: indigo(0.06),
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Link */}
                          <div
                            className="flex items-center gap-1 text-[10px] transition-colors"
                            style={{
                              fontFamily: "var(--font-geist-mono)",
                              color: text.veryDim,
                            }}
                          >
                            <ExternalLink className="w-3 h-3" />
                            Visit
                          </div>
                        </div>
                      </motion.a>
                    );
                  })
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${indigo(0.3)}, transparent)`,
        }}
      />
    </div>
  );
}
