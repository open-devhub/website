"use client";

import ShinyText from "@/components/bits/ShinyText";
import { rules } from "@/content/rules";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { accent, background, indigo, text } from "@/lib/colors";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RulesPage() {
  const [activeRule, setActiveRule] = useState("");

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = hash.replace("#", "");
      setActiveRule(id);
    }
  }, []);
  return (
    <div
      className="min-h-screen relative"
      style={{ background: background.primary }}
    >
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${indigo(0.08)} 0%, transparent 70%)`,
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Hero */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
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
              Community Guidelines
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
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
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
              The{" "}
              <span
                style={{
                  color: accent.indigoLight,
                  WebkitTextFillColor: accent.indigoLight,
                }}
              >
                <ShinyText
                  text="Rules"
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
            className="mt-6 text-sm max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-geist-mono)", color: text.dim }}
          >
            DevHub is built on trust, respect, and a shared love of building.
            These rules exist to keep it that way. Everyone is welcome here, as
            long as everyone feels welcome here.
          </motion.p>
        </motion.div>

        {/* Rules */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {rules.map((rule, i) => (
            <motion.div
              key={rule.number}
              id={`${rule.number}`}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: i * 0.04, duration: 0.5 },
                },
              }}
              className="scroll-mt-32 group"
            >
              <div
                className="relative p-6 md:p-8 overflow-hidden"
                style={{
                  background: "rgba(7, 7, 15, 0.7)",
                  border:
                    rule.number == activeRule
                      ? `1px solid ${indigo(0.7)}`
                      : `1px solid ${indigo(0.1)}`,
                }}
              >
                {/* Corner brackets */}
                <div
                  className="absolute top-2 left-2 w-4 h-4"
                  style={{
                    borderTop: `1.5px solid ${indigo(0.3)}`,
                    borderLeft: `1.5px solid ${indigo(0.3)}`,
                  }}
                />
                <div
                  className="absolute top-2 right-2 w-4 h-4"
                  style={{
                    borderTop: `1.5px solid ${indigo(0.3)}`,
                    borderRight: `1.5px solid ${indigo(0.3)}`,
                  }}
                />
                <div
                  className="absolute bottom-2 left-2 w-4 h-4"
                  style={{
                    borderBottom: `1.5px solid ${indigo(0.3)}`,
                    borderLeft: `1.5px solid ${indigo(0.3)}`,
                  }}
                />
                <div
                  className="absolute bottom-2 right-2 w-4 h-4"
                  style={{
                    borderBottom: `1.5px solid ${indigo(0.3)}`,
                    borderRight: `1.5px solid ${indigo(0.3)}`,
                  }}
                />

                <div className="flex gap-4 md:gap-8">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span
                      className="font-bold text-3xl md:text-4xl"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        color: "rgba(100,110,255,0.15)",
                      }}
                    >
                      {rule.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <a
                      className="font-semibold text-lg md:text-xl mb-2"
                      href={`#${rule.number}`}
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        color: text.primary,
                      }}
                    >
                      <span
                        className="text-sm mr-2"
                        style={{ color: accent.indigoLightest }}
                      >
                        {">"}
                      </span>
                      {rule.title}
                    </a>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        color: text.dim,
                      }}
                    >
                      {rule.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className="relative p-6 overflow-hidden"
            style={{
              background: indigo(0.03),
              border: `1px solid ${indigo(0.15)}`,
            }}
          >
            <div
              className="absolute top-2 left-2 w-3 h-3"
              style={{
                borderTop: `1.5px solid ${indigo(0.3)}`,
                borderLeft: `1.5px solid ${indigo(0.3)}`,
              }}
            />
            <div
              className="absolute bottom-2 right-2 w-3 h-3"
              style={{
                borderBottom: `1.5px solid ${indigo(0.3)}`,
                borderRight: `1.5px solid ${indigo(0.3)}`,
              }}
            />

            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-geist-mono)", color: text.dim }}
            >
              <span style={{ color: accent.indigoLightest }}>{"//"}</span> Rules
              are subject to change. Moderators reserve the right to take action
              based on the spirit of these rules, not just the letter.
              Violations may result in warnings, mutes, kicks, or permanent bans
              depending on severity.
            </p>
          </div>
        </motion.div>
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
