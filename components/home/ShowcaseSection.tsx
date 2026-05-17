"use client";

import Section from "@/components/Section";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";

const projects = [
  {
    name: "quillbot",
    desc: "Quill is an advanced Discord developer assistant bot built to help programmers code faster, learn better, and debug smarter, directly inside Discord.",
    lang: "Discord.js",
    langColor: "#f59e0b",
  },
  {
    name: "chorddb",
    desc: "ChordDB is a lightweight, MongoDB-inspired database that uses Discord channels as storage, with end-to-end encryption and optional wrapper-based caching for performance.",
    lang: "TypeScript",
    langColor: "#3572a5",
  },
  {
    name: "pawgrammerbot",
    desc: "Pawgrammer (aka rael) is DevHub’s documentation, AI, and reference assistant bot. It provides access to AI chat, curated knowledge, and utility commands designed to support contributors and users across the platform.",
    lang: "Discord.js",
    langColor: "#f59e0b",
  },
  {
    name: "pandabot",
    desc: "Panda Bot is a powerful, all-in-one Discord bot designed to make DevHub server more engaging, organized, and fun.",
    lang: "Discord.js",
    langColor: "#f59e0b",
  },
  {
    name: "website",
    desc: "The DevHub website built with Next.js, showcasing the community, projects, and resources. It features a custom CMS for content management and a sleek, responsive design.",
    lang: "Next.js",
    langColor: "#f0f0f0",
  },
  {
    name: "modmailbot",
    desc: "A lightweight modmail system for DevHub built with discord.js v14. Users can DM the bot to open a private support thread in a designated forum channel.",
    lang: "Discord.js",
    langColor: "#f59e0b",
  },
  {
    name: "hangmanbot",
    desc: "A Discord bot that lets you play the classic Hangman game in both single-player and multiplayer modes.",
    lang: "Discord.js",
    langColor: "#f59e0b",
  },
];

const doubledProjects = [...projects, ...projects];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-72 h-62 flex flex-col justify-between glass rounded-2xl p-5 mx-3 group hover:border-[rgba(0,245,255,0.2)] transition-all"
      style={{ border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-[var(--font-jetbrains)] text-[#4fbfff] text-sm font-medium">
              {project.name}
            </h4>
          </div>
        </div>
        <p className="text-[#6b7280] text-xs leading-relaxed mb-3 font-[var(--font-inter)]">
          {project.desc}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: project.langColor }}
        />
        <span className="text-xs text-[#9ca3af] font-[var(--font-jetbrains)]">
          {project.lang}
        </span>
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  return (
    <Section className="py-24 overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-14"
      >
        <motion.span
          variants={fadeInUp}
          className="inline-block text-xs font-[var(--font-jetbrains)] text-[#4fbfff] uppercase tracking-widest mb-4"
        >
          Open Source
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="font-[var(--font-space-grotesk)] font-bold text-4xl md:text-5xl text-[#f0f0f0]"
        >
          Built by the <span className="gradient-text">community</span>
        </motion.h2>
      </motion.div>

      {/* Marquee */}
      <div className="relative -mx-4 md:-mx-6">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#050508] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#050508] to-transparent pointer-events-none" />

        <div className="overflow-hidden">
          <div className="flex marquee-track w-max">
            {doubledProjects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
