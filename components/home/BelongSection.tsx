"use client";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import { accent, background, decorative, indigo, text } from "@/lib/colors";
import { motion } from "framer-motion";
import SoftAurora from "../bits/SoftAurora";

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
      style={{ background: background.primary }}
    >
      <SoftAurora
        speed={0.6}
        scale={1.5}
        brightness={1}
        className="absolute opacity-10"
        color1={decorative.auroraPaleViolet}
        color2={decorative.auroraBlue2}
        noiseFrequency={3.5}
        noiseAmplitude={1}
        bandHeight={0.5}
        bandSpread={1}
        octaveDecay={0.1}
        layerOffset={0}
        colorSpeed={1}
        enableMouseInteraction
        mouseInfluence={0.25}
      />
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
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
          className="text-center mb-16"
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
              For Every Developer
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
              A place for{" "}
              <span
                style={{
                  color: accent.indigoLight,
                  WebkitTextFillColor: accent.indigoLight,
                }}
              >
                developers
              </span>{" "}
              at <span className="cursor-target">every stage</span>.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-sm max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-geist-mono)", color: text.dim }}
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
                  transition: { delay: i * 0.04, duration: 0.5 },
                },
              }}
              className="flex items-center gap-3 px-4 py-3 group cursor-default"
              style={{
                background: "rgba(7, 7, 15, 0.7)",
                border: `1px solid ${indigo(0.08)}`,
              }}
              whileHover={{
                borderColor: indigo(0.25),
                background: "rgba(10, 10, 22, 0.9)",
                x: 4,
                transition: { duration: 0.2 },
              }}
            >
              <span
                className="font-mono text-xs flex-shrink-0"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  color: indigo(0.4),
                }}
              >
                {">"}
              </span>
              <span
                className="text-sm"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  color: text.dim,
                }}
              >
                {type}
              </span>
            </motion.div>
          ))}
        </motion.div>
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
