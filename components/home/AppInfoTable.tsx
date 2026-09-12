"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { REGISTER_URL, SITE_URL } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

type InfoRow = {
  label: string;
  value: ReactNode;
};

const INFO_ROWS: InfoRow[] = [
  { label: "App Name", value: "Tashan Win" },
  { label: "App Size", value: "3.09 MB" },
  { label: "App Type", value: "Colour Trading" },
  {
    label: "Payment Methods",
    value: (
      <>
        USDT, UPI,{" "}
        <a
          href="https://en.wikipedia.org/wiki/Wire_transfer"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-gold hover:text-amber"
        >
          Bank Transfer
        </a>
      </>
    ),
  },
  { label: "Popular Games", value: "Wingo, Chicken Road, Vortex" },
  {
    label: "Tashanwin Official Site",
    value: (
      <a
        href={SITE_URL}
        className="font-semibold text-gold hover:text-amber"
      >
        {SITE_URL.replace("https://", "")}
      </a>
    ),
  },
  {
    label: "Tashanwin Invite Code",
    value: (
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-gold hover:text-amber"
      >
        24961166303
      </a>
    ),
  },
  { label: "Welcome Bonus", value: "₹700" },
  { label: "Tashanwin Gift Code", value: "jkwhkwrh2i45534lwlsifnw" },
  { label: "Tashanwin App", value: "iOS, Android, Windows" },
];

export function AppInfoTable() {
  return (
    <section className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="At A Glance"
        title="Tashan Win App Details"
        description="Quick facts about the Tashan Win platform, app and rewards."
        className="mb-10"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass overflow-hidden rounded-2xl"
      >
        <table className="w-full border-collapse text-sm sm:text-base">
          <tbody>
            {INFO_ROWS.map((row, index) => (
              <tr
                key={row.label}
                className={index !== INFO_ROWS.length - 1 ? "border-b border-white/5" : ""}
              >
                <th
                  scope="row"
                  className="w-1/3 whitespace-nowrap px-4 py-3.5 text-left font-heading font-semibold text-cream sm:px-6 sm:py-4"
                >
                  {row.label}
                </th>
                <td className="px-4 py-3.5 text-left text-cream/70 sm:px-6 sm:py-4">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <p className="mt-4 text-center text-xs text-cream/50">
        Use invite code{" "}
        <Link href="/register/" className="text-gold hover:text-amber">
          24961166303
        </Link>{" "}
        while registering to claim your welcome bonus.
      </p>
    </section>
  );
}
