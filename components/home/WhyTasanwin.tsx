"use client";

import { motion } from "framer-motion";
import { TIMELINE_STEPS } from "@/lib/data/timeline";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyTasanwin() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="How It Works"
        title="Why Tashanwin"
        description="Four simple steps between you and your next win."
        className="mb-16"
      />

      <div className="relative">
        <div className="absolute left-6 top-0 h-full w-px bg-white/10 lg:left-0 lg:top-6 lg:h-px lg:w-full">
          <motion.div
            initial={{ scaleY: 0, scaleX: 0 }}
            whileInView={{ scaleY: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="h-full w-full origin-top bg-gradient-to-b from-gold to-amber lg:origin-left lg:bg-gradient-to-r"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
          {TIMELINE_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className="relative flex gap-5 pl-16 lg:flex-col lg:items-center lg:gap-4 lg:pl-0 lg:text-center"
              >
                <div className="glass absolute left-0 flex size-12 shrink-0 items-center justify-center rounded-2xl text-gold lg:static">
                  <Icon className="size-6" />
                </div>
                <div>
                  <span className="font-heading text-xs font-semibold tracking-widest text-gold">
                    STEP {step.step}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-xs text-sm leading-relaxed text-cream/60">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
