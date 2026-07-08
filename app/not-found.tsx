import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 py-32 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />
      <span className="font-heading text-8xl font-bold text-gradient-gold sm:text-9xl">
        404
      </span>
      <h1 className="mt-4 font-heading text-2xl font-bold text-cream sm:text-3xl">
        This page took a wrong turn
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/60 sm:text-base">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let&apos;s get you back to winning.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/" variant="primary" size="lg" icon={<Home className="size-5" />}>
          Back to Home
        </Button>
        <Button href="/promotion/" variant="secondary" size="lg" icon={<Search className="size-5" />}>
          Explore Promotions
        </Button>
      </div>
    </section>
  );
}
