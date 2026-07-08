import type { Metadata } from "next";
import { Calendar, MessageCircleQuestion, Sparkles } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { GiftCodeForm } from "@/components/forms/GiftCodeForm";

export const metadata: Metadata = buildMetadata({
  title: "Gift Code",
  description: "Redeem your Tashanwin gift code for instant bonus rewards.",
  path: "/gift-code/",
});

const tips = [
  {
    title: "Follow Telegram",
    description: "New gift codes are announced first on our Telegram channel.",
    icon: MessageCircleQuestion,
  },
  {
    title: "Check Expiry",
    description: "Gift codes are valid for a limited time — redeem promptly.",
    icon: Calendar,
  },
  {
    title: "One-Time Use",
    description: "Each code can be redeemed once per account.",
    icon: Sparkles,
  },
];

export default function GiftCodePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Gift Code"
        title="Redeem Your Gift Code"
        description="Enter a valid Tashanwin gift code below to claim your bonus reward."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Gift Code", path: "/gift-code/" }]}
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="glass-strong rounded-3xl p-6 sm:p-8">
          <GiftCodeForm />
        </div>

        <div className="flex flex-col gap-5">
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <GlassCard key={tip.title} className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-amber/10 text-gold">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-cream">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-cream/60">{tip.description}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>
    </div>
  );
}
