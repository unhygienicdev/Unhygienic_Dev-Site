import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({ children, className, animate = false }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-brand-400 via-purple-400 to-brand-600 bg-clip-text text-transparent",
        animate && "animate-shimmer bg-[length:200%_auto]",
        className
      )}
    >
      {children}
    </span>
  );
}
