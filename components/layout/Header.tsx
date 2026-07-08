"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { LOGIN_URL, NAV_LINKS, REGISTER_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { AnnouncementBar } from "./AnnouncementBar";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <AnnouncementBar />
      <header
        className={cn(
          "transition-all duration-500",
          scrolled ? "glass-strong py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "bg-transparent py-5",
        )}
      >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={LOGIN_URL} variant="secondary" size="md">
            Login
          </Button>
          <Button href={REGISTER_URL} variant="primary" size="md">
            Register
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="glass flex size-11 items-center justify-center rounded-xl text-cream lg:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <div className="glass-strong mx-4 mt-4 flex flex-col gap-1 rounded-2xl p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-cream/80 transition-colors hover:bg-white/5 hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex gap-3 px-4 pb-1">
                <Button
                  href={LOGIN_URL}
                  variant="secondary"
                  size="md"
                  className="flex-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Button>
                <Button
                  href={REGISTER_URL}
                  variant="primary"
                  size="md"
                  className="flex-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      </header>
    </div>
  );
}
