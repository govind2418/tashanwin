"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[index];

  function go(nextDirection: number) {
    setDirection(nextDirection);
    setIndex((prev) => (prev + nextDirection + total) % total);
  }

  return (
    <section className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Player Stories"
        title="Loved By Players Nationwide"
        className="mb-12"
      />

      <div className="relative flex items-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="glass hidden size-11 shrink-0 items-center justify-center rounded-full text-gold transition-colors hover:border-gold/60 sm:flex"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="relative min-h-[220px] flex-1 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.name}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <GlassCard className="flex flex-col items-center gap-4 text-center">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold" />
                  ))}
                </div>
                <p className="max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div>
                  <p className="font-heading text-sm font-semibold text-cream">
                    {current.name}
                  </p>
                  <p className="text-xs text-cream/50">{current.location}</p>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="glass hidden size-11 shrink-0 items-center justify-center rounded-full text-gold transition-colors hover:border-gold/60 sm:flex"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {TESTIMONIALS.map((testimonial, i) => (
          <button
            key={testimonial.name}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className="flex size-6 items-center justify-center"
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-white/20"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
