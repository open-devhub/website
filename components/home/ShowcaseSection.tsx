"use client";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { accent, background, indigo, semantic, text } from "@/lib/colors";

const shadowIntensity = 400;

const projects = [
  {
    name: "quillbot",
    desc: "Quill is an advanced Discord developer assistant bot built to help programmers code faster, learn better, and debug smarter, directly inside Discord.",
    lang: "Discord.js",
    langColor: semantic.warning,
  },
  {
    name: "chorddb",
    desc: "ChordDB is a lightweight, MongoDB-inspired database that uses Discord channels as storage, with end-to-end encryption and optional wrapper-based caching.",
    lang: "TypeScript",
    langColor: accent.indigo,
  },
  {
    name: "rael",
    desc: "Rael is an AI-powered Discord bot supporting multiple models, image understanding, live market data, and visual usage tracking",
    lang: "Discord.js",
    langColor: semantic.warning,
  },
  {
    name: "pandabot",
    desc: "Panda Bot is a powerful, all-in-one Discord bot designed to make DevHub server more engaging, organized, and fun.",
    lang: "Discord.js",
    langColor: semantic.warning,
  },
  {
    name: "website",
    desc: "The DevHub website built with Next.js, showcasing the community, projects, and resources with a sleek, responsive design.",
    lang: "Next.js",
    langColor: text.secondary,
  },
  {
    name: "modmailbot",
    desc: "A lightweight modmail system for DevHub built with discord.js v14. Users DM the bot to open a private support thread in a dedicated forum channel.",
    lang: "Discord.js",
    langColor: semantic.warning,
  },
  {
    name: "devhub-bot",
    desc: "GitHub Bot designed to automate the boring stuff within the DevHub Organization. Built on the powerful Probot framework.",
    lang: "TypeScript",
    langColor: accent.indigo,
  },
];

const doubledProjects = [...projects, ...projects];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-72 flex flex-col justify-between p-5 mx-3 group"
      style={{
        background: "rgba(7, 7, 15, 0.9)",
        border: `1px solid ${indigo(0.12)}`,
        minHeight: "180px",
      }}
    >
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span
            className="font-mono text-xs"
            style={{
              fontFamily: "var(--font-geist-mono)",
              color: indigo(0.5),
            }}
          >
            {"~/"}
          </span>
          <a
            href={`/r/${project.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold cursor-pointer"
            style={{
              fontFamily: "var(--font-geist-mono)",
              color: accent.indigoLightest,
            }}
          >
            {project.name}
          </a>
        </div>
        <p
          className="text-xs leading-relaxed"
          style={{ fontFamily: "var(--font-geist-mono)", color: text.dim }}
        >
          {project.desc}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span
          className="w-2 h-2"
          style={{ backgroundColor: project.langColor }}
        />
        <span
          className="text-xs"
          style={{ fontFamily: "var(--font-geist-mono)", color: text.muted }}
        >
          {project.lang}
        </span>
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: background.primary }}
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${indigo(0.2)}, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
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
              Open Source
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

          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-pixelify), 'Pixelify Sans', monospace",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
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
              Built by the{" "}
              <span
                className="cursor-target"
                style={{
                  color: accent.indigoLight,
                  WebkitTextFillColor: accent.indigoLight,
                }}
              >
                community
              </span>
            </span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative -mx-4 md:-mx-6">
        <div
          className="overflow-hidden relative"
          style={{
            WebkitMaskImage: `linear-gradient(90deg, transparent 0%, black ${shadowIntensity / 8}%, black ${100 - shadowIntensity / 8}%, transparent 100%)`,
            maskImage: `linear-gradient(90deg, transparent 0%, black ${shadowIntensity / 8}%, black ${100 - shadowIntensity / 8}%, transparent 100%)`,
            boxShadow: `inset ${shadowIntensity}px 0 ${shadowIntensity}px -60px ${background.primary}, inset -${shadowIntensity}px 0 ${shadowIntensity}px -60px ${background.primary}`,
          }}
        >
          <div className="flex marquee-track w-max">
            {doubledProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${indigo(0.2)}, transparent)`,
        }}
      />
    </section>
  );
}
