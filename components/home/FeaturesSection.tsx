"use client";

import Section from "@/components/Section";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageSquare,
  Palette,
  Rocket,
  Users,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Build Projects",
    description:
      "Launch side projects with support from a community that cares. Get feedback, find collaborators, and ship faster.",
    color: "#4fbfff",
    glow: "rgba(0, 245, 255, 0.15)",
  },
  {
    icon: Wrench,
    title: "Get Help",
    description:
      "Hit a bug? Get real help from developers who’ve probably dealt with it before.",
    color: "#7c3aed",
    glow: "rgba(124, 58, 237, 0.15)",
  },
  {
    icon: MessageSquare,
    title: "Share Feedback",
    description:
      "Give and receive honest, constructive feedback on projects, code, designs, and ideas.",
    color: "#4fbfff",
    glow: "rgba(0, 245, 255, 0.15)",
  },
  {
    icon: Palette,
    title: "Creative Space",
    description:
      "A dedicated space for designers, engineers, and creative developers to share and inspire.",
    color: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.15)",
  },
  {
    icon: BookOpen,
    title: "Learn & Teach",
    description:
      "Share tutorials, resources, and insights. Level up together with structured learning channels.",
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.15)",
  },
  {
    icon: Users,
    title: "Find Collaborators",
    description:
      "Looking for a co-founder, open source contributor, or just someone to pair program with? Find them here.",
    color: "#7c3aed",
    glow: "rgba(124, 58, 237, 0.15)",
  },
];

export default function FeaturesSection() {
  return (
    <Section className="py-24 md:py-32">
      {/* Header */}
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
          Community Pillars
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="font-[var(--font-space-grotesk)] font-bold text-4xl md:text-5xl text-[#f0f0f0] mb-4"
        >
          Everything you need to <span className="gradient-text">level up</span>
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-[#6b7280] text-lg max-w-xl mx-auto font-[var(--font-inter)]"
        >
          Six pillars that make DevHub the best community for builders.
        </motion.p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              variants={staggerContainer}
              custom={i}
              className="group relative rounded-2xl p-6 glass cursor-default"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
                borderColor: `rgba(${feature.color === "#4fbfff" ? "0,245,255" : feature.color === "#7c3aed" ? "124,58,237" : "255,255,255"},0.2)`,
                // boxShadow: `0 20px 60px ${feature.glow}, 0 0 0 1px ${feature.glow}`,
                transition: { duration: 0.3 },
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${feature.glow}`,
                  border: `1px solid ${feature.color}30`,
                }}
              >
                <Icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>

              {/* Content */}
              <h3 className="font-[var(--font-space-grotesk)] font-semibold text-lg text-[#f0f0f0] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed font-[var(--font-inter)]">
                {feature.description}
              </p>

              {/* Corner glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${feature.glow} 0%, transparent 60%)`,
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
