"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";
import { useFooterInView } from "@/lib/useFooterInView";

export function FloatingTelegramButton() {
  const footerVisible = useFooterInView();

  return (
    <AnimatePresence>
      {!footerVisible ? (
        <motion.a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on Telegram"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.08 }}
          className="glass-strong fixed bottom-24 left-4 z-40 flex size-14 items-center justify-center rounded-full text-gold shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_0_24px_rgba(244,201,107,0.4)] lg:bottom-6 lg:left-6"
        >
          <Send className="size-5" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
