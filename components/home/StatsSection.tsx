"use client";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import { accent, background, indigo, text } from "@/lib/colors";
import data from "@/lib/staticdata.config";
import { hexToHslString } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Code as Code2, MessageCircle, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BorderGlow from "../bits/BorderGlow";

const stats = [
  {
    icon: Users,
    value: data.members,
    label: "Members",
    suffix: "+",
    color: accent.indigo,
  },
  {
    icon: Code2,
    value: 10,
    label: "OSS Projects",
    suffix: "+",
    color: accent.violet,
  },
  {
    icon: MessageCircle,
    value: 100,
    label: "Resources",
    suffix: "+",
    color: accent.indigoLight,
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
      style={{ background: background.primary }}
    >
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
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
              By the Numbers
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
              A community that{" "}
              <span
                className="cursor-target"
                style={{
                  color: accent.indigoLight,
                  WebkitTextFillColor: accent.indigoLight,
                }}
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
                className="h-full w-full"
              >
                <BorderGlow
                  className="h-full w-full"
                  edgeSensitivity={30}
                  glowColor={hexToHslString(stat.color)}
                  backgroundColor={background.borderGlow}
                  glowRadius={40}
                  glowIntensity={1}
                  coneSpread={25}
                  animated={false}
                  colors={[stat.color]}
                >
                  <motion.div
                    className="p-8 text-center group relative overflow-hidden h-full w-full"
                    style={{
                      background: "rgba(7, 7, 15, 0.9)",
                      border: `1px solid ${indigo(0.12)}`,
                    }}
                    whileHover={{
                      borderColor: `${stat.color}35`,
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
                      className="w-12 h-12 mx-auto mb-4 flex items-center justify-center"
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
                        color: text.dim,
                      }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                </BorderGlow>
              </motion.div>
            );
          })}
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
