import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  glow?: boolean;
};

export function GlassCard({ children, className, glow = false, ...rest }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-3xl p-6 sm:p-8 transition-all duration-300",
        glow && "glow-border",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
