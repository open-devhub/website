import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "cyan" | "violet" | "green" | "yellow" | "red" | "gray";
  size?: "sm" | "md";
  className?: string;
}

const variantStyles = {
  cyan: "bg-[rgba(0,245,255,0.1)] text-[#4fbfff] border border-[rgba(0,245,255,0.2)]",
  violet:
    "bg-[rgba(124,58,237,0.15)] text-[#a78bfa] border border-[rgba(124,58,237,0.3)]",
  green:
    "bg-[rgba(34,197,94,0.1)] text-[#4ade80] border border-[rgba(34,197,94,0.2)]",
  yellow:
    "bg-[rgba(234,179,8,0.1)] text-[#facc15] border border-[rgba(234,179,8,0.2)]",
  red: "bg-[rgba(239,68,68,0.1)] text-[#f87171] border border-[rgba(239,68,68,0.2)]",
  gray: "bg-[rgba(107,114,128,0.15)] text-[#9ca3af] border border-[rgba(107,114,128,0.2)]",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-[10px]",
  md: "px-3 py-1 text-xs",
};

export default function Badge({
  children,
  variant = "cyan",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium font-[var(--font-jetbrains)] ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
