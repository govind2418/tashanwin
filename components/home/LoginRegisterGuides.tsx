"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Step = { title: string; description: string };

function GuideSection({
  eyebrow,
  title,
  description,
  intro,
  steps,
  image,
  alt,
  reversed,
}: {
  eyebrow: string;
  title: string;
  description: string;
  intro: ReactNode;
  steps: Step[];
  image: string;
  alt: string;
  reversed?: boolean;
}) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} className="mb-12" />

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={reversed ? "lg:order-2" : "lg:order-1"}>
          <PhoneFrame image={image} alt={alt} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`flex flex-col gap-6 ${reversed ? "lg:order-1" : "lg:order-2"}`}
        >
          <p className="text-sm leading-relaxed text-cream/70 sm:text-base">{intro}</p>

          <ol className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <li key={step.title} className="glass flex items-start gap-4 rounded-2xl p-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-amber/10 font-heading text-sm font-bold text-gold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-cream">{step.title}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-cream/60 sm:text-sm">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}

export function LoginGuideSection() {
  return (
    <GuideSection
      eyebrow="Login"
      title="Tashan Win Login"
      description="One phone number, one password, every device."
      intro={
        <>
          If you already have an account, the{" "}
          <Link href="/login/" className="font-semibold text-gold hover:text-amber">
            Tashan Win login page
          </Link>{" "}
          gets you back into your wallet and game history in seconds. Sign in
          with either your registered phone number or email — whichever you
          used to register — and your balance, bonuses and history are
          exactly where you left them, whether you last played in a browser
          or the app.
        </>
      }
      steps={[
        {
          title: "Open the login page",
          description: "Go to the Tashan Win login screen from any device.",
        },
        {
          title: "Enter phone or email",
          description: "Choose the phone number or email tab and enter your credentials.",
        },
        {
          title: "Forgot your password?",
          description: "Use the recovery link tied to your registered phone number.",
        },
      ]}
      image="/images/tashanwin-login-screen.webp"
      alt="Tashan Win login screen on mobile"
    />
  );
}

export function RegisterGuideSection() {
  return (
    <GuideSection
      eyebrow="Register"
      title="Tashan Win Register"
      description="A free account in under a minute — no documents required to start."
      intro={
        <>
          Creating a new{" "}
          <Link href="/register/" className="font-semibold text-gold hover:text-amber">
            Tashan Win account
          </Link>{" "}
          only needs a phone number and a password you choose yourself. If a
          friend invited you, their invite code links your accounts for
          referral rewards — otherwise you can skip that field entirely and
          register on your own.
        </>
      }
      steps={[
        {
          title: "Enter your phone number",
          description: "This becomes your login ID and your recovery contact.",
        },
        {
          title: "Set a password",
          description: "Choose and confirm a password only you know.",
        },
        {
          title: "Add an invite code (optional)",
          description: "Enter a friend's code here, or leave it blank.",
        },
        {
          title: "Confirm and start playing",
          description: "Accept the terms and your wallet is ready instantly.",
        },
      ]}
      image="/images/tashanwin-register-screen.webp"
      alt="Tashan Win register screen on mobile"
      reversed
    />
  );
}
