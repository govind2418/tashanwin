"use client";

import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { APK_DOWNLOAD_URL, REGISTER_URL, SITE_TAGLINE } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroBackdrop } from "./HeroBackdrop";

const headingLines = ["Tashan Win (Tashanwin)", "Login, Register & App Download"];

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
            className="max-w-2xl font-heading text-4xl font-bold leading-[1.15] text-cream sm:text-5xl md:text-6xl"
          >
            {headingLines.map((line, index) => (
              <span key={line} className="block">
                {index === 1 ? <span className="text-gradient-gold">{line}</span> : line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg"
          >
            Tashan Win — also searched as <strong className="text-cream/90">Tashanwin</strong> and{" "}
            <strong className="text-cream/90">Tasanwin</strong> — is India&apos;s premium
            real-money gaming platform. Most people land here to do one of three
            things:{" "}
            <Link href="/login/" className="font-semibold text-gold hover:text-amber">
              log in
            </Link>
            ,{" "}
            <Link href="/register/" className="font-semibold text-gold hover:text-amber">
              register a new account
            </Link>
            , or{" "}
            <Link href="/download-app/" className="font-semibold text-gold hover:text-amber">
              download the Android app
            </Link>
            . All three take under a minute, and every account works the same
            way whether you play in the browser or in the app.
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
