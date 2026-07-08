import type { Metadata } from "next";
import { Download, Settings, ShieldCheck, Smartphone } from "lucide-react";
import { APK_DOWNLOAD_URL } from "@/lib/constants";
import { buildMetadata, howToJsonLd } from "@/lib/seo";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "APK Install Guide",
  description: "Step-by-step guide to safely install the Tashanwin Android APK.",
  path: "/apk-guide/",
});

const steps = [
  {
    step: "01",
    title: "Enable Unknown Sources",
    description:
      "Go to your phone's Settings > Security (or Apps) and enable \"Install unknown apps\" for your browser.",
    icon: Settings,
  },
  {
    step: "02",
    title: "Download the APK",
    description: "Tap the Download button below to save the official Tashanwin APK file to your device.",
    icon: Download,
  },
  {
    step: "03",
    title: "Install the App",
    description: "Open the downloaded file from your notifications or file manager and tap Install.",
    icon: Smartphone,
  },
  {
    step: "04",
    title: "Open & Verify",
    description: "Launch Tashanwin, register or log in, and you're ready to play.",
    icon: ShieldCheck,
  },
];

export default function ApkGuidePage() {
  return (
    <div>
      <JsonLd
        data={howToJsonLd({
          name: "How to Install the Tashanwin APK",
          description:
            "Step-by-step guide to safely install the Tashanwin Android APK outside the app store.",
          steps: steps.map((step) => ({
            title: step.title,
            description: step.description,
          })),
        })}
      />
      <PageHeader
        eyebrow="Help Center"
        title="How To Install The Tashanwin APK"
        description="A quick, safe guide to installing the official Tashanwin Android app outside the app store."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "APK Install Guide", path: "/apk-guide/" }]}
      />

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <GlassCard key={step.step} className="flex items-start gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-amber/10 text-gold">
                  <Icon className="size-6" />
                </div>
                <div>
                  <span className="font-heading text-xs font-semibold tracking-widest text-gold">
                    STEP {step.step}
                  </span>
                  <h2 className="mt-1 font-heading text-lg font-semibold text-cream">
                    {step.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-cream/60">
                    {step.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            href={APK_DOWNLOAD_URL}
            variant="primary"
            size="lg"
            icon={<Download className="size-5" />}
          >
            Download App
          </Button>
        </div>
      </section>
    </div>
  );
}
