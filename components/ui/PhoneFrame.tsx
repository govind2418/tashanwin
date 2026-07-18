"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function PhoneFrame({
  image,
  alt,
  width = 640,
  height = 960,
}: {
  image: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-[280px]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gold/20 blur-[80px]" />
      <div className="glow-border overflow-hidden rounded-[2rem] border border-gold/20 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-cover"
        />
      </div>
    </motion.div>
  );
}
