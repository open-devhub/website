"use client";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import data from "@/lib/staticdata.config";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const { members } = data;

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "#030305" }}
    >
      <div className="absolute inset-0 circuit-bg opacity-60 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />
      {/* <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      /> */}

      {/* Corner brackets */}
      <div className="absolute top-12 left-12 hidden md:block">
        <div
          style={{
            width: 36,
            height: 36,
            borderTop: "1.5px solid rgba(99,102,241,0.4)",
            borderLeft: "1.5px solid rgba(99,102,241,0.4)",
          }}
        />
      </div>
      <div className="absolute top-12 right-12 hidden md:block">
        <div
          style={{
            width: 36,
            height: 36,
            borderTop: "1.5px solid rgba(99,102,241,0.4)",
            borderRight: "1.5px solid rgba(99,102,241,0.4)",
          }}
        />
      </div>
      <div className="absolute bottom-12 left-12 hidden md:block">
        <div
          style={{
            width: 36,
            height: 36,
            borderBottom: "1.5px solid rgba(99,102,241,0.4)",
            borderLeft: "1.5px solid rgba(99,102,241,0.4)",
          }}
        />
      </div>
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div
          style={{
            width: 36,
            height: 36,
            borderBottom: "1.5px solid rgba(99,102,241,0.4)",
            borderRight: "1.5px solid rgba(99,102,241,0.4)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span
              style={{
                color: "rgba(99,102,241,0.5)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {"{"}
            </span>
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#a5b4fc" }}
            >
              Ready to Ship?
            </span>
            <span
              style={{
                color: "rgba(99,102,241,0.5)",
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
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.1,
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
              Ready to ship something{" "}
              <span
                className="cursor-target"
                style={{ color: "#818cf8", WebkitTextFillColor: "#818cf8" }}
              >
                great?
              </span>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 mb-10 text-sm max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#52525b" }}
          >
            Join {members}+ developers who build together, learn together, and
            ship together.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="/invite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 text-sm font-mono font-semibold tracking-wider uppercase text-white cursor-target"
              style={{
                fontFamily: "var(--font-geist-mono)",
                background: "rgba(99, 102, 241, 0.18)",
                border: "1px solid rgba(99, 102, 241, 0.6)",
              }}
              whileHover={{
                background: "rgba(99, 102, 241, 0.28)",
                // boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)",
                scale: 1.04,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.124 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Join Discord
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#3f3f46" }}
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#22d3ee]" />
              No application required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#6366f1]" />
              All skill levels welcome
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#8b5cf6]" />
              Active 24/7
            </span>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
        }}
      />
    </section>
  );
}
