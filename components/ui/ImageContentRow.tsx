"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ImageContentRow({
  eyebrow,
  title,
  description,
  image,
  alt,
  reversed = false,
  imageWidth = 640,
  imageHeight = 960,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  reversed?: boolean;
  imageWidth?: number;
  imageHeight?: number;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`relative mx-auto w-full max-w-[280px] ${
          reversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gold/20 blur-[80px]" />
        <div className="glow-border overflow-hidden rounded-[2rem] border border-gold/20 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
          <Image
            src={image}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
            className="h-auto w-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className={`flex flex-col gap-4 ${reversed ? "lg:order-2" : "lg:order-1"}`}
      >
        <span className="font-heading text-xs font-semibold tracking-widest text-gold">
          {eyebrow.toUpperCase()}
        </span>
        <h3 className="font-heading text-2xl font-bold text-cream sm:text-3xl">{title}</h3>
        <p className="max-w-lg text-sm leading-relaxed text-cream/70 sm:text-base">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
