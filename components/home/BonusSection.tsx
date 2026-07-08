"use client";

import { motion } from "framer-motion";
import { BONUSES } from "@/lib/data/bonuses";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function BonusSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Rewards"
        title="Luxury Rewards, Built In"
        description="Every tier of play comes with premium rewards designed to keep you ahead."
        className="mb-12"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {BONUSES.map((bonus) => {
          const Icon = bonus.icon;
          return (
            <motion.div key={bonus.name} variants={item} whileHover={{ y: -6 }}>
              <GlassCard glow className="flex h-full flex-col gap-4">
                <Icon className="size-8 text-gold" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-cream">
                    {bonus.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream/60">
                    {bonus.description}
                  </p>
                </div>
                <span className="mt-auto text-2xl font-bold text-gradient-gold">
                  {bonus.value}
                </span>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
