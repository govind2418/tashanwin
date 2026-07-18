"use client";

import { motion } from "framer-motion";
import { FileText, Lock, ShieldCheck, Timer } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const POINTS = [
  {
    title: "Encrypted Transactions",
    description: "Deposits and withdrawals run over encrypted connections end to end.",
    icon: Lock,
  },
  {
    title: "Verified Withdrawals",
    description: "Withdrawal requests are checked against your account before funds move.",
    icon: ShieldCheck,
  },
  {
    title: "Responsible Gaming Controls",
    description: "Set limits or take a break at any time — never hidden behind support.",
    icon: Timer,
  },
  {
    title: "Transparent Terms",
    description: "Published policies you can read before you deposit a rupee.",
    icon: FileText,
  },
];

export function SecuritySection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Security"
        title="Is Tashan Win Safe To Play On?"
        description="The short answer is yes — here's what that actually rests on."
        className="mb-12"
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-cream/70 sm:text-base"
      >
        Every account on Tashan Win is tied to a single verified phone
        number, which is what both your login and your withdrawal
        verification are built around — nobody can move funds out of your
        wallet without also controlling that number. Deposits and
        withdrawals travel over encrypted connections, and round outcomes in
        formats like Win Go and Aviator are generated fresh each round
        rather than following a fixed pattern. None of this is unusual for a
        real-money platform, but it&apos;s worth stating plainly rather than
        assuming players will take it on faith.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.1 }}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {POINTS.map((point) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={point.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -6 }}
            >
              <GlassCard className="flex h-full flex-col gap-4">
                <Icon className="size-7 text-gold" />
                <div>
                  <h3 className="font-heading text-base font-semibold text-cream">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream/60">
                    {point.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-cream/70 sm:text-base"
      >
        The full detail sits in our{" "}
        <Link href="/privacy-policy/" className="font-semibold text-gold hover:text-amber">
          privacy policy
        </Link>
        ,{" "}
        <Link href="/terms/" className="font-semibold text-gold hover:text-amber">
          terms &amp; conditions
        </Link>{" "}
        and{" "}
        <Link href="/responsible-gaming/" className="font-semibold text-gold hover:text-amber">
          responsible gaming
        </Link>{" "}
        pages — worth a read before your first deposit, not after. Tashan Win
        is intended for players 18 and over, and gaming involves financial
        risk; play within limits you&apos;ve set for yourself.
      </motion.p>
    </section>
  );
}
