"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { REGISTER_URL } from "@/lib/constants";
import { useFooterInView } from "@/lib/useFooterInView";
import { Button } from "@/components/ui/Button";

export function FloatingRegisterButton() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const footerVisible = useFooterInView();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolledPastHero(latest > 640);
  });

  const visible = scrolledPastHero && !footerVisible;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
      <AnimatePresence>
        {visible ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Button href={REGISTER_URL} variant="primary" size="lg">
              Register Now
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
