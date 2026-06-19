"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface BorderGlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export default function BorderGlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: BorderGlowButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-sm",
  };

  const baseClass = cn(
    "relative inline-flex items-center gap-2 rounded-full font-mono uppercase tracking-wider font-medium transition-all duration-200 overflow-hidden",
    sizeClasses[size],
    variant === "primary"
      ? "bg-[#6366f1] text-white border border-[#6366f1] hover:bg-[#5558e3] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
      : "bg-transparent text-[#a5b4fc] border border-[rgba(99,102,241,0.4)] hover:border-[rgba(99,102,241,0.8)] hover:bg-[rgba(99,102,241,0.08)] hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]",
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
