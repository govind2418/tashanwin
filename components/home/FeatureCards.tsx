"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/data/features";
import { GlassCard } from "@/components/ui/GlassCard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function FeatureCards() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.div key={feature.title} variants={item} whileHover={{ y: -6 }}>
              <GlassCard className="flex h-full flex-col gap-4 hover:border-gold/50 hover:shadow-[0_12px_40px_rgba(201,154,60,0.15)]">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-amber/10 text-gold">
                  <Icon className="size-6" />
                </div>
                <h2 className="font-heading text-lg font-semibold text-cream">
                  {feature.title}
                </h2>
                <p className="text-sm leading-relaxed text-cream/60">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
