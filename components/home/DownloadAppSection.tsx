"use client";

import { motion } from "framer-motion";
import { Download, Smartphone } from "lucide-react";
import Image from "next/image";
import { APK_DOWNLOAD_URL, APK_GUIDE_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DownloadAppSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="glass-strong grid grid-cols-1 items-center gap-12 overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Mobile App"
            title="Take Tashanwin Anywhere"
            description="Install the official Tashanwin Android app for the fastest, smoothest way to play — no app store required."
            align="left"
          />
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href={APK_DOWNLOAD_URL}
              variant="primary"
              size="lg"
              icon={<Download className="size-5" />}
            >
              Android APK
            </Button>
            <Button
              href={APK_GUIDE_URL}
              variant="secondary"
              size="lg"
              icon={<Smartphone className="size-5" />}
            >
              APK Guide
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="rounded-2xl bg-cream p-2">
              <Image
                src="/images/qr-placeholder.svg"
                alt="Scan to download the Tashanwin app"
                width={88}
                height={88}
              />
            </div>
            <p className="max-w-[220px] text-xs leading-relaxed text-cream/60">
              Scan the QR code with your phone camera to download instantly.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[280px]"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gold/20 blur-[80px]" />
          <Image
            src="/images/app-screenshot.webp"
            alt="Tashanwin app home screen"
            width={512}
            height={768}
            className="h-auto w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
