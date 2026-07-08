"use client";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import data from "@/lib/staticdata.config";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import ShinyText from "../bits/ShinyText";
import SoftAurora from "../bits/SoftAurora";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }[] = [];

    const colors = ["#6366f1", "#8b5cf6", "#818cf8", "#a5b4fc", "#c4c4cc"];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#6366f1";
            ctx.globalAlpha = (1 - dist / 80) * 0.06;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { members } = data;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#030305" }}
    >
      <SoftAurora
        speed={0.6}
        scale={1.5}
        brightness={1}
        className="absolute opacity-40"
        color1="#a0f7f7"
        color2="#1234ff"
        noiseFrequency={2.5}
        noiseAmplitude={1}
        bandHeight={0.5}
        bandSpread={1}
        octaveDecay={0.1}
        layerOffset={0}
        colorSpeed={1}
        enableMouseInteraction
        mouseInfluence={0.25}
      />
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Circuit grid overlay */}
      <div className="absolute inset-0 circuit-bg opacity-60 pointer-events-none" />

      {/* Purple glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Corner brackets - top left */}
      <div className="absolute top-24 left-8 md:left-20 pointer-events-none hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderTop: "2px solid rgba(99,102,241,0.4)",
            borderLeft: "2px solid rgba(99,102,241,0.4)",
          }}
        />
      </div>
      {/* Corner brackets - top right */}
      <div className="absolute top-24 right-8 md:right-20 pointer-events-none hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderTop: "2px solid rgba(99,102,241,0.4)",
            borderRight: "2px solid rgba(99,102,241,0.4)",
          }}
        />
      </div>
      {/* Corner brackets - bottom left */}
      <div className="absolute bottom-24 left-8 md:left-20 pointer-events-none hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderBottom: "2px solid rgba(99,102,241,0.4)",
            borderLeft: "2px solid rgba(99,102,241,0.4)",
          }}
        />
      </div>
      {/* Corner brackets - bottom right */}
      <div className="absolute bottom-24 right-8 md:right-20 pointer-events-none hidden md:block">
        <div
          style={{
            width: 40,
            height: 40,
            borderBottom: "2px solid rgba(99,102,241,0.4)",
            borderRight: "2px solid rgba(99,102,241,0.4)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 text-left sm:text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-12"
          style={{
            background: "rgba(99, 102, 241, 0.08)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
          }}
        >
          <span className="w-1.5 h-1.5 bg-[#6366f1] animate-pulse" />
          <span
            className="text-xs font-mono tracking-widest text-[#a5b4fc] uppercase"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Now Open — Join {members}+ Developers
          </span>
        </motion.div>

        {/* Main headline - Pixelify Sans */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-8 leading-tight"
          style={{
            fontFamily: "var(--font-pixelify), 'Pixelify Sans', monospace",
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            lineHeight: 1.1,
          }}
        >
          <motion.span
            variants={fadeInUp}
            className="block"
            style={{
              background:
                "linear-gradient(135deg, #e2e2f0 0%, #c4c4cc 40%, #a5b4fc 70%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Where{" "}
            <ShinyText
              text="Developers"
              className="cursor-target"
              speed={3.5}
              delay={1}
              color="#818cf8"
              shineColor="#c7d2fe"
              spread={90}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className="block"
            style={{
              background:
                "linear-gradient(135deg, #e2e2f0 0%, #c4c4cc 40%, #a5b4fc 70%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Build, Experiment,
          </motion.span>
          <motion.span variants={fadeInUp} className="block">
            <span
              style={{
                background:
                  "linear-gradient(135deg, #e2e2f0 0%, #c4c4cc 40%, #a5b4fc 70%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              and{" "}
            </span>
            <span
              style={{
                color: "#818cf8",
                WebkitTextFillColor: "#818cf8",
              }}
            >
              Connect
            </span>
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="text-base md:text-lg mb-10 max-w-2xl sm:mx-auto leading-relaxed"
          style={{
            fontFamily: "var(--font-geist-mono), 'Geist Mono', monospace",
            color: "#71717a",
          }}
        >
          DevHub is a Discord community for developers and creators, a place to
          share projects, get help, exchange feedback, and meet people who enjoy
          building things.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-center gap-4"
        >
          <motion.a
            href="/join"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-mono font-semibold tracking-wider uppercase text-white cursor-target"
            style={{
              fontFamily: "var(--font-geist-mono)",
              background: "rgba(99, 102, 241, 0.2)",
              border: "1px solid rgba(99, 102, 241, 0.6)",
            }}
            whileHover={{
              background: "rgba(99, 102, 241, 0.3)",
              // boxShadow: "0 0 25px rgba(99, 102, 241, 0.4)",
              scale: 1.02,
            }}
            whileTap={{ scale: 0.97 }}
          >
            <DiscordIcon />
            JOIN DEVHUB
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>

          <motion.a
            href="/pages"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-mono font-medium tracking-wider uppercase cursor-target"
            style={{
              fontFamily: "var(--font-geist-mono)",
              color: "#71717a",
              border: "1px solid rgba(99, 102, 241, 0.2)",
            }}
            whileHover={{
              color: "#c4c4cc",
              borderColor: "rgba(99, 102, 241, 0.5)",
              background: "rgba(99, 102, 241, 0.05)",
              scale: 1.02,
            }}
            whileTap={{ scale: 0.97 }}
          >
            LEARN MORE
            <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
          </motion.a>
        </motion.div>

        {/* Pixel mascot / decoration */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span
            className="text-2xl tracking-widest"
            style={{
              fontFamily: "var(--font-geist-mono)",
              color: "rgba(99,102,241,0.4)",
            }}
          >
            {"{ "}
            <span style={{ color: "rgba(139,92,246,0.6)" }}>&#x2639;</span>
            {" }"}
          </span>
        </motion.div> */}

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 flex flex-col items-start sm:items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown
              className="w-4 h-4"
              style={{ color: "rgba(99,102,241,0.4)" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom circuit line decoration */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)",
        }}
      /> */}
    </section>
  );
}

function DiscordIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.124 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
