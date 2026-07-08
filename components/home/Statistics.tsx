"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data/stats";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Statistics() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="glass-strong grid grid-cols-2 gap-8 rounded-[2rem] p-8 sm:p-12 lg:grid-cols-4">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center gap-2 text-center"
          >
            <span className="font-heading text-3xl font-bold text-gradient-gold sm:text-4xl lg:text-5xl">
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-cream/60 sm:text-sm">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
