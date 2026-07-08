import type { Metadata } from "next";
import { ShieldCheck, Smartphone, Zap } from "lucide-react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GlassCard } from "@/components/ui/GlassCard";
import { DownloadAppSection } from "@/components/home/DownloadAppSection";

export const metadata: Metadata = buildMetadata({
  title: "Download App",
  description:
    "Download the official Tashanwin Android app — fast, secure and built for premium mobile play.",
  path: "/download-app/",
});

const highlights = [
  {
    title: "Lightweight & Fast",
    description: "A small APK that installs in seconds, even on average connections.",
    icon: Zap,
  },
  {
    title: "Verified & Secure",
    description: "Official build, distributed directly — no third-party app stores.",
    icon: ShieldCheck,
  },
  {
    title: "Optimised for Mobile",
    description: "Built for Android with a smooth, native-feeling experience.",
    icon: Smartphone,
  },
];

export default function DownloadAppPage() {
  return (
    <div className="pt-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Download App", path: "/download-app/" }]} />
      </div>

      <DownloadAppSection />

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <GlassCard key={highlight.title} className="flex flex-col gap-3">
                <Icon className="size-7 text-gold" />
                <h3 className="font-heading text-base font-semibold text-cream">
                  {highlight.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/60">
                  {highlight.description}
                </p>
              </GlassCard>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-cream/50">
          New to APK installs?{" "}
          <Link href="/apk-guide/" className="font-semibold text-gold hover:text-amber">
            Read the step-by-step install guide
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
