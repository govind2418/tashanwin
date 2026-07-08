"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

type CoinConfig = {
  top: string;
  left: string;
  size: number;
  depth: number;
  floatClass: string;
};

const COINS: CoinConfig[] = [
  { top: "34%", left: "76%", size: 64, depth: 28, floatClass: "animate-float-slow" },
  { top: "60%", left: "86%", size: 44, depth: 18, floatClass: "animate-float-slower" },
  { top: "46%", left: "62%", size: 32, depth: 14, floatClass: "animate-float-slower" },
  { top: "80%", left: "68%", size: 52, depth: 22, floatClass: "animate-float-slow" },
  { top: "54%", left: "94%", size: 28, depth: 10, floatClass: "animate-float-slow" },
];

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  top: `${(i * 37) % 100}%`,
  left: `${(i * 53) % 100}%`,
  delay: `${(i % 7) * 0.6}s`,
  size: i % 3 === 0 ? 3 : 2,
}));

function Coin({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id={`coin-${size}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4C96B" />
          <stop offset="100%" stopColor="#C99A3C" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill={`url(#coin-${size})`} stroke="#FFF3D6" strokeOpacity="0.4" />
      <circle cx="24" cy="24" r="16" fill="none" stroke="#0B0B0F" strokeOpacity="0.25" strokeWidth="1.5" />
      <path d="M24 15v18M18 20h12M18 28h12" stroke="#0B0B0F" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function HeroBackdrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const coinRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rayRefs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const quickSetters = coinRefs.current.map((el) =>
        el
          ? {
              x: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
              y: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
            }
          : null,
      );

      const handlePointerMove = (event: PointerEvent) => {
        const bounds = containerRef.current?.getBoundingClientRect();
        if (!bounds) return;
        const relX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const relY = (event.clientY - bounds.top) / bounds.height - 0.5;

        COINS.forEach((coin, index) => {
          const setter = quickSetters[index];
          if (!setter) return;
          setter.x(relX * coin.depth);
          setter.y(relY * coin.depth);
        });
      };

      containerRef.current?.addEventListener("pointermove", handlePointerMove);

      gsap.to(rayRefs.current, {
        rotation: "+=6",
        transformOrigin: "50% 50%",
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });

      return () => {
        containerRef.current?.removeEventListener("pointermove", handlePointerMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-32 top-1/3 size-[420px] rounded-full bg-gold/20 blur-[110px] animate-glow-pulse" />
      <div className="absolute -right-24 top-10 size-[360px] rounded-full bg-amber/20 blur-[100px] animate-glow-pulse" />

      <svg className="absolute inset-0 size-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          ref={(el) => {
            rayRefs.current[0] = el;
          }}
          d="M60 -10 L90 -10 L55 110 L25 110 Z"
          fill="url(#ray-grad)"
        />
        <path
          ref={(el) => {
            rayRefs.current[1] = el;
          }}
          d="M78 -10 L100 -10 L72 110 L50 110 Z"
          fill="url(#ray-grad)"
        />
        <defs>
          <linearGradient id="ray-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4C96B" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#F4C96B" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-cream/40 animate-float-slower"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
          }}
        />
      ))}

      {COINS.map((coin, index) => (
        <div
          key={index}
          ref={(el) => {
            coinRefs.current[index] = el;
          }}
          className={`absolute hidden drop-shadow-[0_0_18px_rgba(201,154,60,0.35)] sm:block ${coin.floatClass}`}
          style={{ top: coin.top, left: coin.left }}
        >
          <Coin size={coin.size} />
        </div>
      ))}
    </div>
  );
}
