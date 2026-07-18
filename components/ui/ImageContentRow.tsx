"use client";

import { motion } from "framer-motion";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

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
      <div className={reversed ? "lg:order-1" : "lg:order-2"}>
        <PhoneFrame image={image} alt={alt} width={imageWidth} height={imageHeight} />
      </div>

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
