"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <GlassCard className="flex flex-col items-center gap-3 text-center">
        <CheckCircle2 className="size-10 text-gold" />
        <h2 className="font-heading text-lg font-semibold text-cream">
          Message received
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-cream/60">
          Thanks for reaching out. Our support team typically responds within
          a few hours — or ping us on Telegram for an instant reply.
        </p>
      </GlassCard>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-strong flex flex-col gap-5 rounded-3xl p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-cream/60">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="glass rounded-2xl px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-cream/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="glass rounded-2xl px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-cream/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className="glass resize-none rounded-2xl px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:outline-none"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" icon={<Send className="size-4" />}>
        Send Message
      </Button>
    </motion.form>
  );
}
