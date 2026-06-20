"use client";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  MessageSquare,
  Palette,
  Rocket,
  Users,
  Wrench,
} from "lucide-react";

const features = [
  {
    num: "01",
    icon: Rocket,
    title: "Build Projects",
    description:
      "Launch side projects with support from a community that cares. Get feedback, find collaborators, and ship faster.",
    color: "#6366f1",
  },
  {
    num: "02",
    icon: MessageSquare,
    title: "Get Help",
    description:
      "Hit a bug? Get real help from developers who've probably dealt with it before.",
    color: "#22d3ee",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Share Feedback",
    description:
      "Give and receive honest, constructive feedback on projects, code, designs, and ideas.",
    color: "#a3e635",
  },
  {
    num: "04",
    icon: Palette,
    title: "Creative Space",
    description:
      "A dedicated space for designers, engineers, and creative developers to share and inspire.",
    color: "#f59e0b",
  },
  {
    num: "05",
    icon: BookOpen,
    title: "Learn & Teach",
    description:
      "Share tutorials, resources, and insights. Level up together with structured learning channels.",
    color: "#8b5cf6",
  },
  {
    num: "06",
    icon: Users,
    title: "Find Collaborators",
    description:
      "Looking for a co-founder, open source contributor, or just someone to pair program with? Find them here.",
    color: "#f472b6",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#030305" }}
    >
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          {/* Bracket label */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span
              style={{
                color: "rgba(99,102,241,0.5)",
                fontFamily: "var(--font-geist-mono)",
                fontSize: "1rem",
              }}
            >
              {"{"}
            </span>
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: "var(--font-geist-mono)", color: "#a5b4fc" }}
            >
              Community Pillars
            </span>
            <span
              style={{
                color: "rgba(99,102,241,0.5)",
                fontFamily: "var(--font-geist-mono)",
                fontSize: "1rem",
              }}
            >
              {"}"}
            </span>
          </motion.div>

          {/* Pixel title */}
          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: "var(--font-pixelify), 'Pixelify Sans', monospace",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.15,
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #e2e2f0 0%, #a5b4fc 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "block",
              }}
            >
              Everything <span className="cursor-target">you</span>
            </span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #e2e2f0 0%, #a5b4fc 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "block",
              }}
            >
              need to{" "}
              <span
                style={{ color: "#818cf8", WebkitTextFillColor: "#818cf8" }}
              >
                level up
              </span>
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-sm max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-geist-mono)", color: "#52525b" }}
          >
            Six pillars that make DevHub the best community for builders.
          </motion.p>

          {/* Corner brackets around title area */}
          <div className="relative mt-2">
            <div className="absolute -top-16 left-0 md:left-16 hidden md:block">
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderTop: "1.5px solid rgba(99,102,241,0.35)",
                  borderLeft: "1.5px solid rgba(99,102,241,0.35)",
                }}
              />
            </div>
            <div className="absolute -top-16 right-0 md:right-16 hidden md:block">
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderTop: "1.5px solid rgba(99,102,241,0.35)",
                  borderRight: "1.5px solid rgba(99,102,241,0.35)",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.08, duration: 0.5 },
                  },
                }}
                className="group relative p-6 cursor-default"
                style={{
                  background: "rgba(7, 7, 15, 0.8)",
                  border: "1px solid rgba(99,102,241,0.12)",
                }}
                whileHover={{
                  borderColor: `${feature.color}30`,
                  background: "rgba(10, 10, 22, 0.9)",
                  transition: { duration: 0.2 },
                }}
              >
                {/* Number badge */}
                <span
                  className="absolute top-4 left-5 text-xs font-mono font-semibold"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "rgba(99,102,241,0.35)",
                  }}
                >
                  {feature.num}
                </span>

                {/* Icon with bracket corners */}
                <div className="relative mt-4 mb-5 w-14 h-14 mx-0">
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: `${feature.color}12`,
                      border: `1px solid ${feature.color}25`,
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: feature.color }}
                    />
                  </div>
                  {/* corner brackets on icon */}
                  <div
                    className="absolute -top-0.5 -left-0.5 w-2.5 h-2.5"
                    style={{
                      borderTop: `1.5px solid ${feature.color}60`,
                      borderLeft: `1.5px solid ${feature.color}60`,
                    }}
                  />
                  <div
                    className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5"
                    style={{
                      borderBottom: `1.5px solid ${feature.color}60`,
                      borderRight: `1.5px solid ${feature.color}60`,
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-2 text-base font-semibold"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: feature.color,
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#52525b",
                  }}
                >
                  {feature.description}
                </p>

                {/* Arrow */}
                <div className="flex justify-end">
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    style={{ color: "rgba(99,102,241,0.3)" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)",
        }}
      />
    </section>
  );
}
