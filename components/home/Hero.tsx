"use client";

import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import Image from "next/image";
import { APK_DOWNLOAD_URL, REGISTER_URL, SITE_TAGLINE } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroBackdrop } from "./HeroBackdrop";

const headingLines = ["Play.", "Win.", "Withdraw Instantly."];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-36 pb-20 sm:pt-40">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-obsidian to-obsidian" />

      <HeroBackdrop />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div variants={item}>
            <Badge>
              <Sparkles className="size-3.5" />
              {SITE_TAGLINE}
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-2xl font-heading text-5xl font-bold leading-[1.05] text-cream sm:text-6xl md:text-7xl"
          >
            {headingLines.map((line) => (
              <span key={line} className="block">
                {line === "Withdraw Instantly." ? (
                  <span className="text-gradient-gold">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg"
          >
            Join India&apos;s premium gaming platform — lightning-fast deposits,
            instant withdrawals and round-the-clock support, all wrapped in an
            experience built for players who expect more.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <Button href={REGISTER_URL} variant="primary" size="lg">
              Register Now
            </Button>
            <Button
              href={APK_DOWNLOAD_URL}
              variant="secondary"
              size="lg"
              icon={<Download className="size-5" />}
            >
              Download App
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-[320px] lg:max-w-none"
        >
          <div className="glow-border relative overflow-hidden rounded-[2rem] border border-gold/20 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
            <Image
              src="/images/hero-cover.webp"
              alt="Tashanwin — real money casino, free chips daily"
              width={1024}
              height={1536}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
