"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Download, Gift } from "lucide-react";
import { useState, type FormEvent } from "react";
import { APK_DOWNLOAD_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function GiftCodeForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <CheckCircle2 className="size-12 text-gold" />
        <h2 className="font-heading text-xl font-semibold text-cream">
          Almost there
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-cream/60">
          Gift codes are redeemed inside the Tashanwin app wallet. Download the
          app and enter this code to claim your reward.
        </p>
        <Button
          href={APK_DOWNLOAD_URL}
          variant="primary"
          size="lg"
          icon={<Download className="size-5" />}
        >
          Download App
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="giftcode" className="text-xs font-medium uppercase tracking-wider text-cream/60">
          Gift Code
        </label>
        <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
          <Gift className="size-4 text-gold" />
          <input
            id="giftcode"
            name="giftcode"
            type="text"
            required
            placeholder="Enter your gift code"
            className="w-full bg-transparent text-sm uppercase tracking-widest text-cream placeholder:text-cream/30 placeholder:normal-case focus:outline-none"
          />
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Redeem Code
      </Button>
    </form>
  );
}
