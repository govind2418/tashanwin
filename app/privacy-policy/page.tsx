import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Read the Tashanwin privacy policy to understand how we collect, use and protect your data.",
  path: "/privacy-policy/",
});

const sections = [
  {
    heading: "Information We Collect",
    body: "We collect information you provide directly, such as your mobile number and account details, along with technical data like device type and app usage, to operate and improve the platform.",
  },
  {
    heading: "How We Use Your Information",
    body: "Your information is used to create and secure your account, process deposits and withdrawals, provide customer support, and communicate important updates about your account.",
  },
  {
    heading: "Data Security",
    body: "Tashanwin uses industry-standard encryption and access controls to protect your data. We never store payment credentials in plain text and continuously monitor for unauthorized access.",
  },
  {
    heading: "Data Sharing",
    body: "We do not sell your personal data. Information is shared only with trusted payment processors and service providers strictly necessary to operate the platform, or when required by law.",
  },
  {
    heading: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting our support team.",
  },
  {
    heading: "Cookies & Tracking",
    body: "We use minimal, essential cookies to keep you signed in and to understand aggregate usage patterns that help us improve the platform.",
  },
  {
    heading: "Changes To This Policy",
    body: "We may update this policy periodically. Material changes will be communicated through the app or website.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated July 2026. This policy explains how Tashanwin handles your personal information."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy/" }]}
      />

      <article className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <section key={section.heading} className="mt-10 first:mt-0">
            <h2 className="font-heading text-xl font-semibold text-cream">
              {section.heading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-cream/70 sm:text-base">
              {section.body}
            </p>
          </section>
        ))}
      </article>
    </div>
  );
}
