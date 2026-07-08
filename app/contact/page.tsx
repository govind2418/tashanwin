import type { Metadata } from "next";
import { Clock, Mail, Send } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: "Get in touch with the Tashanwin support team — available 24x7.",
  path: "/contact/",
});

const channels = [
  {
    title: "Telegram Support",
    description: "Fastest response — chat with our team live.",
    icon: Send,
    href: TELEGRAM_URL,
  },
  {
    title: "Email",
    description: "support@tasanwin.com",
    icon: Mail,
    href: "mailto:support@tasanwin.com",
  },
  {
    title: "Support Hours",
    description: "24x7, every day of the year.",
    icon: Clock,
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title="We're Here To Help"
        description="Questions about your account, deposits or bonuses? Reach out any time."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }]}
      />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div className="flex flex-col gap-5">
          {channels.map((channel) => {
            const Icon = channel.icon;
            const content = (
              <GlassCard className="flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-amber/10 text-gold">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-cream">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-cream/60">{channel.description}</p>
                </div>
              </GlassCard>
            );
            return channel.href ? (
              <a key={channel.title} href={channel.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={channel.title}>{content}</div>
            );
          })}
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
