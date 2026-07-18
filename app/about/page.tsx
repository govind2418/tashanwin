import type { Metadata } from "next";
import { Award, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { ImageContentRow } from "@/components/ui/ImageContentRow";
import { CTABanner } from "@/components/home/CTABanner";
import { Statistics } from "@/components/home/Statistics";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Tashanwin — India's premium gaming platform built on speed, security and player-first design.",
  path: "/about/",
});

const values = [
  {
    title: "Player First",
    description: "Every decision we make starts with what's best for our players.",
    icon: HeartHandshake,
  },
  {
    title: "Uncompromising Security",
    description: "Encrypted transactions and verified accounts, always.",
    icon: ShieldCheck,
  },
  {
    title: "Premium Experience",
    description: "A polished, expensive-feeling product from login to withdrawal.",
    icon: Sparkles,
  },
  {
    title: "Fair & Transparent",
    description: "Clear terms, honest odds, and rewards that actually pay out.",
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About Us"
        title="Built For Players Who Expect More"
        description="Tashanwin is India's premium gaming platform — designed around speed, security and a genuinely premium experience, from your first deposit to your next withdrawal."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ImageContentRow
          eyebrow="Our Story"
          title="A Platform Built On Trust"
          description="We started Tashanwin with a simple idea: gaming platforms shouldn't feel cheap. Every corner of the experience — the interface, the payouts, the support — is built to a standard that respects your time and your trust. That means instant withdrawals instead of days of waiting, real 24x7 support instead of bots, and a design that feels considered rather than cluttered."
          image="/images/tashanwin-premium-badge.webp"
          alt="Tashanwin premium gaming platform badge"
          imageWidth={800}
          imageHeight={800}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <GlassCard key={value.title} className="flex flex-col gap-3">
                <Icon className="size-7 text-gold" />
                <h3 className="font-heading text-base font-semibold text-cream">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/60">
                  {value.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <Statistics />
      <CTABanner />
    </div>
  );
}
