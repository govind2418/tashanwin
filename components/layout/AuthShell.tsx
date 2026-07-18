import type { ReactNode } from "react";
import Image from "next/image";
import { Logo } from "@/components/layout/Logo";

export function AuthShell({
  title,
  description,
  children,
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  children: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-4 py-32 sm:px-6">
      <div className="pointer-events-none absolute -left-32 top-1/4 size-96 rounded-full bg-gold/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 size-96 rounded-full bg-amber/15 blur-[120px]" />

      <div
        className={
          image
            ? "relative mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"
            : "relative w-full max-w-md"
        }
      >
        {image ? (
          <div className="relative mx-auto hidden w-full max-w-[260px] lg:block">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gold/20 blur-[80px]" />
            <div className="glow-border overflow-hidden rounded-[2rem] border border-gold/20 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
              <Image
                src={image}
                alt={imageAlt ?? "Tashanwin app screen"}
                width={640}
                height={960}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        ) : null}

        <div className="glass-strong w-full rounded-[2rem] p-8 sm:p-10">
          <div className="mb-8 flex flex-col items-center gap-4 text-center">
            <Logo />
            <div>
              <h1 className="font-heading text-2xl font-bold text-cream">{title}</h1>
              <p className="mt-1 text-sm text-cream/60">{description}</p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
