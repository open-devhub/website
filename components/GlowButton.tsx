"use client";

import { motion } from "framer-motion";
import { cyanGlow } from "@/lib/colors";
import Link from "next/link";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "violet";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: GlowButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-[#4fbfff] text-[#050508] font-semibold border border-[#4fbfff] hover:bg-[#00d4e0] transition-all",
    ghost: "border text-[#4fbfff] transition-all",
    violet:
      "bg-[#7c3aed] text-white font-semibold border border-[#7c3aed] hover:bg-[#6d28d9] transition-all",
  };

  const glowStyles = {
    primary: {
      rest: { boxShadow: "none", borderColor: cyanGlow(0.5) },
      hover: {
        boxShadow: `0 0 12px ${cyanGlow(0.2)}`,
        scale: 1.02,
        borderColor: cyanGlow(0.8),
      },
    },
    ghost: {
      rest: { boxShadow: "none", borderColor: cyanGlow(0.3) },
      hover: {
        boxShadow: "0 0 0 0",
        scale: 1.02,
        borderColor: cyanGlow(0.6),
      },
    },
    violet: {
      rest: { boxShadow: "none", borderColor: "rgba(124, 58, 237, 0.4)" },
      hover: {
        boxShadow: "0 0 12px rgba(124, 58, 237, 0.15)",
        scale: 1.02,
        borderColor: "rgba(124, 58, 237, 0.8)",
      },
    },
  };

  const combinedClass = `inline-flex items-center gap-2 font-[var(--font-space-grotesk)] cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    initial: glowStyles[variant].rest,
    whileHover: glowStyles[variant].hover,
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2 },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={combinedClass}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button onClick={onClick} className={combinedClass} {...motionProps}>
      {children}
    </motion.button>
  );
}
