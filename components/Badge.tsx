import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "purple" | "indigo" | "violet" | "cyan" | "green" | "gray";
  size?: "sm" | "md";
  className?: string;
}

const variantStyles = {
  purple:
    "bg-[rgba(99,102,241,0.1)] text-[#a5b4fc] border border-[rgba(99,102,241,0.25)]",
  indigo:
    "bg-[rgba(99,102,241,0.15)] text-[#818cf8] border border-[rgba(99,102,241,0.3)]",
  violet:
    "bg-[rgba(139,92,246,0.15)] text-[#a78bfa] border border-[rgba(139,92,246,0.3)]",
  cyan: "bg-[rgba(99,102,241,0.1)] text-[#a5b4fc] border border-[rgba(99,102,241,0.25)]",
  green:
    "bg-[rgba(34,197,94,0.1)] text-[#4ade80] border border-[rgba(34,197,94,0.2)]",
  gray: "bg-[rgba(107,114,128,0.15)] text-[#9ca3af] border border-[rgba(107,114,128,0.2)]",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-3 py-1 text-xs",
};

export default function Badge({
  children,
  variant = "purple",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium font-[var(--font-geist-mono)] ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
