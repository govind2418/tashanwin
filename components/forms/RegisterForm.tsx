"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Download, Gift, Lock, Phone } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { APK_DOWNLOAD_URL, LOGIN_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function RegisterForm() {
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
          You&apos;re almost in
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-cream/60">
          Download the official Tashanwin app to finish creating your account
          and claim your welcome bonus instantly.
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
        <label htmlFor="mobile" className="text-xs font-medium uppercase tracking-wider text-cream/60">
          Mobile Number
        </label>
        <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
          <Phone className="size-4 text-gold" />
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            placeholder="Enter mobile number"
            className="w-full bg-transparent text-sm text-cream placeholder:text-cream/30 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-xs font-medium uppercase tracking-wider text-cream/60">
          Create Password
        </label>
        <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
          <Lock className="size-4 text-gold" />
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={6}
            placeholder="Minimum 6 characters"
            className="w-full bg-transparent text-sm text-cream placeholder:text-cream/30 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="referral" className="text-xs font-medium uppercase tracking-wider text-cream/60">
          Referral Code (Optional)
        </label>
        <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
          <Gift className="size-4 text-gold" />
          <input
            id="referral"
            name="referral"
            type="text"
            placeholder="Enter referral code"
            className="w-full bg-transparent text-sm text-cream placeholder:text-cream/30 focus:outline-none"
          />
        </div>
      </div>

      <label className="flex items-start gap-2 text-xs text-cream/50">
        <input type="checkbox" required className="mt-0.5 accent-gold" />
        I confirm I am 18+ and agree to the{" "}
        <Link href="/terms/" className="text-gold hover:text-amber">
          Terms
        </Link>{" "}
        and{" "}
        <Link href="/responsible-gaming/" className="text-gold hover:text-amber">
          Responsible Gaming
        </Link>{" "}
        policy.
      </label>

      <Button type="submit" variant="primary" size="lg" className="mt-2 w-full">
        Create Account
      </Button>

      <p className="text-center text-sm text-cream/50">
        Already have an account?{" "}
        <Link href={LOGIN_URL} className="font-semibold text-gold hover:text-amber">
          Login
        </Link>
      </p>
    </form>
  );
}
