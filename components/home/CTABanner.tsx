"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { REGISTER_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-strong glow-border relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16"
      >
        <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-gold/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 size-64 rounded-full bg-amber/20 blur-[100px]" />

        <h2 className="relative font-heading text-3xl font-bold text-cream sm:text-4xl md:text-5xl">
          Ready to <span className="text-gradient-gold">Play &amp; Win</span>?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base text-cream/70 sm:text-lg">
          Join thousands of players already winning on Tashanwin. Registration
          takes less than a minute.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button href={REGISTER_URL} variant="primary" size="lg" icon={<ArrowRight className="size-5" />}>
            Register Now
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
