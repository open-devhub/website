"use client";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion, useInView } from "framer-motion";
import { Code as Code2, MessageCircle, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Users, value: 500, label: "Members", suffix: "+", color: "#6366f1" },
  {
    icon: Code2,
    value: 10,
    label: "OSS Projects",
    suffix: "+",
    color: "#8b5cf6",
  },
  {
    icon: MessageCircle,
    value: 100,
    label: "Resources",
    suffix: "+",
    color: "#818cf8",
  },
];

function AnimatedCounter({
  target,
  duration = 2,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
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
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)",
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
              By the Numbers
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
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
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
              A community that{" "}
              <span
                style={{ color: "#818cf8", WebkitTextFillColor: "#818cf8" }}
              >
                ships
              </span>
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="rounded-xl p-8 text-center group relative overflow-hidden"
                style={{
                  background: "rgba(7, 7, 15, 0.9)",
                  border: "1px solid rgba(99,102,241,0.12)",
                }}
                whileHover={{
                  borderColor: `${stat.color}35`,
                  // boxShadow: `0 0 30px ${stat.color}12`,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Corner bracket top-left */}
                <div
                  className="absolute top-2 left-2 w-3 h-3"
                  style={{
                    borderTop: `1.5px solid ${stat.color}40`,
                    borderLeft: `1.5px solid ${stat.color}40`,
                  }}
                />
                <div
                  className="absolute bottom-2 right-2 w-3 h-3"
                  style={{
                    borderBottom: `1.5px solid ${stat.color}40`,
                    borderRight: `1.5px solid ${stat.color}40`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{
                    background: `${stat.color}12`,
                    border: `1px solid ${stat.color}25`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>

                <div
                  className="font-mono font-bold text-4xl mb-1"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: stat.color,
                  }}
                >
                  <AnimatedCounter target={stat.value} />
                  {stat.suffix}
                </div>

                <div
                  className="text-sm"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#52525b",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

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
