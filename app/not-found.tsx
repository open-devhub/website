"use client";

import FuzzyText from "@/components/bits/FuzzyText";
import { fadeInUp } from "@/lib/animations";
import { background, indigo, text } from "@/lib/colors";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: background.primary }}
    >
      {/* Circuit grid overlay */}
      <div className="absolute inset-0 circuit-bg opacity-60 pointer-events-none" />

      {/* Purple glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${indigo(0.08)} 0%, transparent 70%)`,
        }}
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${indigo(0.15)} 0%, transparent 70%)`,
        }}
      />

      {/* Corner brackets */}
      <div className="absolute top-24 left-8 md:left-20 pointer-events-none hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderTop: `2px solid ${indigo(0.4)}`,
            borderLeft: `2px solid ${indigo(0.4)}`,
          }}
        />
      </div>
      <div className="absolute top-24 right-8 md:right-20 pointer-events-none hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderTop: `2px solid ${indigo(0.4)}`,
            borderRight: `2px solid ${indigo(0.4)}`,
          }}
        />
      </div>
      <div className="absolute bottom-24 left-8 md:left-20 pointer-events-none hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderBottom: `2px solid ${indigo(0.4)}`,
            borderLeft: `2px solid ${indigo(0.4)}`,
          }}
        />
      </div>
      <div className="absolute bottom-24 right-8 md:right-20 pointer-events-none hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderBottom: `2px solid ${indigo(0.4)}`,
            borderRight: `2px solid ${indigo(0.4)}`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto p-6 text-center">
        {/* 404 - fuzzy glitch text */}

        <motion.div
          variants={fadeInUp}
          className="mb-8 flex items-center justify-center"
        >
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
            404
          </FuzzyText>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed"
          style={{
            fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace",
            color: text.muted,
          }}
        >
          {
            "This page doesn't exist, or it wandered off somewhere into the void. Let's get you back on track."
          }
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-mono font-semibold tracking-wider uppercase text-white cursor-target"
            style={{
              fontFamily: "var(--font-geist-mono)",
              background: indigo(0.2),
              border: `1px solid ${indigo(0.6)}`,
            }}
            whileHover={{
              background: indigo(0.3),
              scale: 1.02,
            }}
            whileTap={{ scale: 0.97 }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            GO HOME
          </motion.a>

          <motion.a
            href="/pages"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-mono font-medium tracking-wider uppercase cursor-target"
            style={{
              fontFamily: "var(--font-geist-mono)",
              color: text.muted,
              border: `1px solid ${indigo(0.2)}`,
            }}
            whileHover={{
              color: text.secondary,
              borderColor: indigo(0.5),
              background: indigo(0.05),
              scale: 1.02,
            }}
            whileTap={{ scale: 0.97 }}
          >
            BROWSE PAGES
            <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
