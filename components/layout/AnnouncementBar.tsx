"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence initial={false}>
      {visible ? (
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative overflow-hidden bg-gradient-to-r from-gold via-amber to-gold text-obsidian"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-10 py-2.5 text-center text-xs font-semibold sm:text-sm">
            <Sparkles className="size-4 shrink-0" />
            <Link href="/promotion/" className="truncate">
              New players get up to 288% Welcome Bonus — Register today
            </Link>
          </div>
          <button
            type="button"
            aria-label="Dismiss announcement"
            onClick={() => setVisible(false)}
            className="absolute right-3 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full transition-opacity hover:opacity-70"
          >
            <X className="size-4" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
