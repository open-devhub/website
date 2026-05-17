"use client";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import data from "@/lib/staticdata.config";
import { motion } from "framer-motion";

export default function CTASection() {
  const { invite, members } = data;

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4fbfff] rounded-full opacity-[0.03] blur-[120px] blob" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7c3aed] rounded-full opacity-[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-[var(--font-jetbrains)] text-[#4fbfff] uppercase tracking-widest mb-6"
          >
            Ready to Ship?
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="font-[var(--font-space-grotesk)] font-bold text-5xl md:text-7xl text-[#f0f0f0] mb-6 leading-[1.1]"
          >
            Ready to ship something{" "}
            <span className="gradient-text">great?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-[#6b7280] text-xl mb-12 max-w-lg mx-auto font-[var(--font-inter)] leading-relaxed"
          >
            Join {members} developers who build together, learn together, and
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
              className="inline-flex items-center gap-3 bg-[#4fbfff] text-[#050508] px-10 py-4 rounded-full text-lg font-bold font-[var(--font-space-grotesk)]"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.124 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              Join Discord
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-[#4b5563] text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              No application required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4fbfff]" />
              All skill levels welcome
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
              Active 24/7
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
