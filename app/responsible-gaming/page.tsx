import type { Metadata } from "next";
import { HeartHandshake, PauseCircle, ShieldAlert, Timer } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = buildMetadata({
  title: "Responsible Gaming",
  description: "Tashanwin is committed to responsible gaming. Learn about our tools and guidance for safe play.",
  path: "/responsible-gaming/",
});

const tools = [
  {
    title: "Set Deposit Limits",
    description: "Cap how much you can deposit daily, weekly or monthly.",
    icon: Timer,
  },
  {
    title: "Take a Break",
    description: "Temporarily pause your account for a cooling-off period.",
    icon: PauseCircle,
  },
  {
    title: "Self-Exclusion",
    description: "Request permanent account closure at any time, no questions asked.",
    icon: ShieldAlert,
  },
  {
    title: "Support Resources",
    description: "We can connect you with independent support organisations if needed.",
    icon: HeartHandshake,
  },
];

export default function ResponsibleGamingPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Player Safety"
        title="Responsible Gaming"
        description="Gaming should always be fun. Tashanwin provides tools to help you stay in control of your play."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Responsible Gaming", path: "/responsible-gaming/" }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-base leading-relaxed text-cream/70 sm:text-lg">
          Tashanwin is intended for entertainment purposes and is available
          only to users aged 18 and above. Gaming involves financial risk and
          can become habit-forming for some individuals. We encourage every
          player to set limits, play within their means, and reach out for
          help if gaming stops feeling fun.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <GlassCard key={tool.title} className="flex flex-col gap-3">
                <Icon className="size-7 text-gold" />
                <h3 className="font-heading text-base font-semibold text-cream">
                  {tool.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/60">
                  {tool.description}
                </p>
              </GlassCard>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-cream/50">
          If you feel your gaming habits are becoming a concern, contact our
          support team — we&apos;re here to help, not judge.
        </p>
      </section>
    </div>
  );
}
