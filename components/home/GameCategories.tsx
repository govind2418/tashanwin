"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GAME_CATEGORIES } from "@/lib/data/games";
import { SectionHeading } from "@/components/ui/SectionHeading";

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function GameCategories() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Game Library"
        title="Every Way To Win"
        description="Eight premium categories, one seamless platform."
        className="mb-12"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.08 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {GAME_CATEGORIES.map((game) => (
          <motion.div
            key={game.name}
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            className="glass group relative flex aspect-[3/4] flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl p-5 text-center transition-colors duration-300 hover:border-gold/50"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold/0 via-gold/0 to-gold/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative size-20 shrink-0 transition-transform duration-300 group-hover:scale-110 sm:size-24">
              <Image
                src={game.image}
                alt={game.alt}
                fill
                sizes="(max-width: 640px) 96px, 120px"
                className="object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
              />
            </div>
            <h3 className="font-heading text-sm font-semibold text-cream sm:text-base">
              {game.name}
            </h3>
            <p className="hidden text-xs leading-relaxed text-cream/50 sm:block">
              {game.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
