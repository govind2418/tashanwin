"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Topic = {
  heading: string;
  body: ReactNode;
};

const TOPICS: Topic[] = [
  {
    heading: "What Is Tashan Win?",
    body: (
      <>
        Tashan Win is a real-money online gaming platform built for Indian
        players who want fast deposits, quick withdrawals and a game library
        that doesn&apos;t feel like an afterthought. You&apos;ll see the brand
        written a few different ways — Tashan Win, Tashanwin, and
        occasionally Tasanwin — but they all point to the exact same
        platform, the same account system and the same games. If you&apos;ve
        landed here searching for any of those spellings, you&apos;re in the
        right place.
      </>
    ),
  },
  {
    heading: "Tashan Win, Tashanwin And Tasanwin — One Platform",
    body: (
      <>
        The spelling differences come mostly from how people type it on
        mobile keyboards and how the name gets shared in Telegram groups and
        WhatsApp forwards. Some players search &ldquo;Tashan Win&rdquo; as two
        words, others type it as one — &ldquo;Tashanwin&rdquo; — and a smaller
        number search &ldquo;Tasanwin&rdquo; after a typo that stuck. There is
        no separate app or separate account system behind any of these names.
        One registration works across all of them, and the login page,
        wallet and game catalogue are identical no matter which spelling
        brought you here.
      </>
    ),
  },
  {
    heading: 'Why People Search "Tashan Win Login"',
    body: (
      <>
        Most searches for &ldquo;Tashan Win login&rdquo; come from returning
        players who already have an account and just want the fastest route
        back in — usually because they bookmarked a search engine instead of
        the platform itself, or because they play from more than one device
        and don&apos;t remember which link they used last. The{" "}
        <Link href="/login/" className="font-semibold text-gold hover:text-amber">
          Tashan Win login page
        </Link>{" "}
        accepts either your registered phone number or email, and there&apos;s
        no separate &ldquo;app login&rdquo; versus &ldquo;website login&rdquo;
        — the same phone number and password work in both places.
      </>
    ),
  },
  {
    heading: "One Account, Every Device",
    body: (
      <>
        You register once, and that single account follows you across your
        phone&apos;s browser, a desktop browser and the Android app. Your
        wallet balance, game history and any active bonuses stay in sync no
        matter which one you open. This matters more than it sounds like it
        should — a lot of platforms quietly split your play history between
        an &ldquo;app account&rdquo; and a &ldquo;web account,&rdquo; which is
        not how Tashan Win works. Log in from a friend&apos;s phone, your own
        laptop or the installed app, and you&apos;re looking at the same
        balance every time.
      </>
    ),
  },
  {
    heading: "Registering And Logging In",
    body: (
      <>
        <Link href="/register/" className="font-semibold text-gold hover:text-amber">
          Creating an account
        </Link>{" "}
        takes a phone number, a password you set yourself, and an optional
        invite code if a friend referred you — there&apos;s no email
        verification loop or document upload required just to start playing.
        Once that&apos;s done, logging in later is just your phone number and
        password again. If you ever forget your password, the login screen
        has a recovery option tied to your registered phone number, so
        you&apos;re not permanently locked out of a wallet with funds in it.
      </>
    ),
  },
  {
    heading: "Your Wallet, Deposits And Withdrawals",
    body: (
      <>
        Every account gets a wallet that shows your real-time balance, with
        one-tap deposit and withdrawal buttons rather than a buried settings
        menu. Deposits go through familiar local payment channels — UPI and
        Paytm among them — and are typically confirmed within moments rather
        than hours. Withdrawals are the part most players actually judge a
        platform on, and Tashan Win processes verified withdrawal requests
        quickly, without the multi-day holding periods some competing
        platforms quietly build into their terms.
      </>
    ),
  },
  {
    heading: "Rewards, Bonuses And Gift Codes",
    body: (
      <>
        New accounts get a first-deposit bonus on top of the standard welcome
        offer, and the rewards don&apos;t stop after week one. Tashan Win
        regularly issues{" "}
        <Link href="/gift-code/" className="font-semibold text-gold hover:text-amber">
          gift codes
        </Link>{" "}
        that credit bonus funds directly to your wallet when redeemed, and
        the{" "}
        <Link href="/promotion/" className="font-semibold text-gold hover:text-amber">
          promotions page
        </Link>{" "}
        lists everything currently running, including the referral program
        that pays permanent commission — up to 85% — to players who invite
        friends onto the platform.
      </>
    ),
  },
  {
    heading: "The Tashan Win App And APK",
    body: (
      <>
        You don&apos;t need the app to play — everything works in a mobile
        browser first — but the Android app loads faster, sends notifications
        for promotions and gift codes, and skips the browser tab entirely.
        Because it&apos;s distributed as a direct APK rather than through the
        Play Store, installing it involves one extra step: allowing your
        phone to install apps from outside the store, which the{" "}
        <Link href="/apk-guide/" className="font-semibold text-gold hover:text-amber">
          APK install guide
        </Link>{" "}
        walks through in full. Once installed, updates are handled the same
        way as any other app.
      </>
    ),
  },
  {
    heading: "Games You Can Play",
    body: (
      <>
        The game library covers the categories players actually search for:
        Aviator-style crash games, the Win Go colour-prediction format, slot
        reels, cricket and sports betting markets, fishing arcade games,
        roulette, lottery draws and live game shows. Everything sits inside
        one lobby rather than being split across separate mini-apps, so
        switching between a quick Win Go round and a slots session takes a
        tap, not a reload. Round timers are short by design — Win Go, for
        example, runs on 30-second, 1-minute, 3-minute and 5-minute cycles —
        so you&apos;re never waiting long between a bet and a result, and the
        live game show format brings a hosted, TV-style presentation to
        rounds that would otherwise just be a spinning wheel on screen.
      </>
    ),
  },
  {
    heading: "Security And Fair Play",
    body: (
      <>
        Account access is tied to your phone number and password, transactions
        run over encrypted connections, and withdrawal requests go through
        verification before funds move — the same baseline you&apos;d expect
        from any platform handling real money. Game outcomes in formats like
        Win Go and Aviator are generated round by round rather than
        pre-determined, and Tashan Win publishes its terms and responsible
        gaming policy openly rather than burying them in a support ticket
        queue. If you ever want a break, the{" "}
        <Link href="/responsible-gaming/" className="font-semibold text-gold hover:text-amber">
          responsible gaming page
        </Link>{" "}
        explains how to set limits or step away, and that option is never
        hidden behind a support request.
      </>
    ),
  },
  {
    heading: "Support, Whenever You Need It",
    body: (
      <>
        A support team is reachable around the clock for account, deposit or
        withdrawal questions, and the fastest updates on new promotions and
        gift codes are usually posted to the official Telegram channel before
        anywhere else. If you&apos;d rather reach out directly, the{" "}
        <Link href="/contact/" className="font-semibold text-gold hover:text-amber">
          contact page
        </Link>{" "}
        has the current channels, and the{" "}
        <Link href="/about/" className="font-semibold text-gold hover:text-amber">
          about page
        </Link>{" "}
        covers the values behind how the platform is run.
      </>
    ),
  },
];

export function WhatIsTashanWin() {
  return (
    <section className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Entity Guide"
        title="What Is Tashan Win?"
        description="Everything the Tashan Win — Tashanwin, Tasanwin — platform covers, in one place."
        className="mb-14"
      />

      <div className="flex flex-col gap-10">
        {TOPICS.map((topic, index) => (
          <motion.div
            key={topic.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.05, ease: "easeOut" }}
          >
            <h3 className="font-heading text-lg font-semibold text-cream sm:text-xl">
              {topic.heading}
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cream/70 sm:text-base">
              {topic.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
