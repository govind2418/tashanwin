import type { ReactNode } from "react";
import { Logo } from "@/components/layout/Logo";

export function AuthShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 py-32 sm:px-6">
      <div className="pointer-events-none absolute -left-32 top-1/4 size-96 rounded-full bg-gold/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 size-96 rounded-full bg-amber/15 blur-[120px]" />

      <div className="glass-strong relative w-full max-w-md rounded-[2rem] p-8 sm:p-10">
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <Logo />
          <div>
            <h1 className="font-heading text-2xl font-bold text-cream">{title}</h1>
            <p className="mt-1 text-sm text-cream/60">{description}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
