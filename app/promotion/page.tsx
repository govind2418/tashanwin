import type { Metadata } from "next";
import { BONUSES } from "@/lib/data/bonuses";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { ImageContentRow } from "@/components/ui/ImageContentRow";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "Promotion",
  description:
    "Explore every Tashanwin promotion — welcome bonus, daily cashback, referral rewards and VIP tiers.",
  path: "/promotion/",
});

export default function PromotionPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Promotions"
        title="Every Way We Reward You"
        description="From your first deposit to your hundredth, Tashanwin keeps rewarding loyal play."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Promotion", path: "/promotion/" }]}
      />

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20 pb-20 sm:gap-24">
          <ImageContentRow
            eyebrow="Welcome Bonus"
            title="Extra Rewards On Your First Deposit"
            description="Every new Tashanwin account gets a first-deposit bonus on top of the standard welcome offer. Deposit once, claim instantly, and start playing with a bigger bankroll from day one."
            image="/images/tashanwin-first-deposit-bonus.webp"
            alt="Tashanwin extra first deposit bonus screen"
          />
          <ImageContentRow
            eyebrow="Refer & Earn"
            title="Invite Friends, Earn Real Commission"
            description="Share your Tashanwin invite link or QR code and earn permanent commission on every friend who plays — up to 85%, paid out transparently with full odds bonus rates."
            image="/images/tashanwin-refer-and-earn.webp"
            alt="Tashanwin refer and earn invite screen with QR code"
            reversed
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {BONUSES.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <GlassCard key={bonus.name} glow className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-amber/10 text-gold">
                    <Icon className="size-6" />
                  </div>
                  <span className="text-2xl font-bold text-gradient-gold">
                    {bonus.value}
                  </span>
                </div>
                <div>
                  <h2 className="font-heading text-lg font-semibold text-cream">
                    {bonus.name}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-cream/60">
                    {bonus.description}
                  </p>
                </div>
                <p className="mt-auto text-xs text-cream/40">
                  Terms and wagering requirements apply. See Terms &amp;
                  Conditions for details.
                </p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
