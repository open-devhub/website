import type { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Skeleton({ className = "", ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-md relative w-full h-full overflow-hidden bg-bg-secondary ${className}`}
      {...props}
    >
      <div className="absolute inset-0 -translate-x-full -translate-y-full animate-shimmer-diagonal bg-linear-to-br from-transparent via-bg-primary to-transparent" />
    </div>
  );
}
