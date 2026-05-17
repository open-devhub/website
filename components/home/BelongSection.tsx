"use client";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";

const memberTypes = [
  "Solo founders figuring it out as they go",
  "Open source maintainers looking for good people to work with",
  "Junior devs who want honest mentorship, not just Stack Overflow links",
  "Designers who got tired of handoff and learned to ship themselves",
  "Backend engineers who finally got curious about what happens in the browser",
  "Frontend engineers who wandered into databases and never left",
  "Full-stack developers holding the whole thing together with duct tape and good instincts",
  "Students building something real for the first time",
  "Bootcamp grads who are done proving themselves and just want to build",
  "Seasoned engineers who remember what it was like to not know everything",
  "DevRel and technical writers who make the rest of us look coherent",
  "Game developers and creative technologists who blur the line between art and code",
  "Mobile developers who've accepted that there will always be two platforms",
  "Cloud and DevOps engineers keeping the lights on while everyone else sleeps",
  "People who just really love making things",
];

export default function BelongSection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #050508 0%, #08080f 50%, #050508 100%)",
      }}
    >
      {/* Subtle dot bg */}
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-[var(--font-jetbrains)] text-[#4fbfff] uppercase tracking-widest mb-4"
          >
            For Every Developer
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-[var(--font-space-grotesk)] font-bold text-4xl md:text-5xl text-[#f0f0f0] mb-4"
          >
            A place for <span className="gradient-text">developers</span> at
            every stage.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[#6b7280] text-lg max-w-xl mx-auto font-[var(--font-inter)]"
          >
            Whether you're making your first commit or building your next big
            project, DevHub is a community where you can learn, contribute, and
            learn together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {memberTypes.map((type, i) => (
            <motion.div
              key={type}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: i * 0.04,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="flex items-center gap-3 glass rounded-xl px-4 py-3 group"
              style={{ border: "1px solid rgba(255,255,255,0.05)" }}
              whileHover={{
                borderColor: "rgba(0,245,255,0.15)",
                x: 4,
                transition: { duration: 0.2 },
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#4fbfff] flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
              <span className="text-[#9ca3af] text-sm group-hover:text-[#f0f0f0] transition-colors font-[var(--font-inter)]">
                {type}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
