"use client";

import Section from "@/components/Section";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion, useInView } from "framer-motion";
import { Code as Code2, MessageCircle, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: Users,
    value: 500,
    label: "Members",
    suffix: "+",
    color: "#4fafff",
  },
  {
    icon: Code2,
    value: 10,
    label: "OSS Projects",
    suffix: "+",
    color: "#10b981",
  },
  {
    icon: MessageCircle,
    value: 100,
    label: "Resources",
    suffix: "+",
    color: "#7c3aed",
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
    <Section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c3aed] rounded-full opacity-[0.04] blur-[100px] blob" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#4fafff] rounded-full opacity-[0.04] blur-[80px]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center mb-16"
      >
        <motion.span
          variants={fadeInUp}
          className="inline-block text-xs font-[var(--font-jetbrains)] text-[#4fafff] uppercase tracking-widest mb-4"
        >
          By the Numbers
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          className="font-[var(--font-space-grotesk)] font-bold text-4xl md:text-5xl text-[#f0f0f0]"
        >
          A community that <span className="gradient-text">ships</span>
        </motion.h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="glass rounded-2xl p-8 text-center group"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              whileHover={{
                borderColor: `${stat.color}30`,
                boxShadow: `0 0 30px ${stat.color}15`,
                transition: { duration: 0.3 },
              }}
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: `${stat.color}15`,
                  border: `1px solid ${stat.color}30`,
                }}
              >
                <Icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div
                className="font-[var(--font-space-grotesk)] font-bold text-4xl mb-1"
                style={{ color: stat.color }}
              >
                <AnimatedCounter target={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-[#6b7280] text-sm font-[var(--font-inter)]">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
