"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

const LINKS = [
  {
    title: "Tashan Win Login",
    description: "Sign back in to your wallet and game history.",
    href: "/login/",
  },
  {
    title: "Tashan Win Register",
    description: "Create a free account in under a minute.",
    href: "/register/",
  },
  {
    title: "Download The App",
    description: "Get the official Tashan Win Android APK.",
    href: "/download-app/",
  },
  {
    title: "APK Install Guide",
    description: "A safe, step-by-step Android install walkthrough.",
    href: "/apk-guide/",
  },
  {
    title: "Promotion & Referral",
    description: "Bonuses, cashback and up to 85% referral commission.",
    href: "/promotion/",
  },
  {
    title: "Redeem A Gift Code",
    description: "Turn a promo code into instant wallet credit.",
    href: "/gift-code/",
  },
  {
    title: "About Tashan Win",
    description: "The values and story behind the platform.",
    href: "/about/",
  },
  {
    title: "Contact Support",
    description: "Reach the team for account or payment help.",
    href: "/contact/",
  },
];

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function ExploreMore() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Explore More"
        title="Everything Tashan Win, In One Place"
        description="Jump straight to the page you need."
        className="mb-12"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.05 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {LINKS.map((link) => (
          <motion.div key={link.href} variants={item}>
            <Link
              href={link.href}
              className="group flex h-full flex-col gap-2 rounded-2xl border border-white/5 p-5 transition-colors duration-300 hover:border-gold/40 hover:bg-white/[0.03]"
            >
              <span className="flex items-center gap-1.5 font-heading text-sm font-semibold text-cream group-hover:text-gold">
                {link.title}
                <ArrowUpRight className="size-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </span>
              <span className="text-xs leading-relaxed text-cream/60">{link.description}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
