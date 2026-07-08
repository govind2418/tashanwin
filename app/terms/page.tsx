import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Read the terms and conditions governing use of the Tashanwin platform.",
  path: "/terms/",
});

const sections = [
  {
    heading: "Eligibility",
    body: "You must be at least 18 years old and legally permitted to participate in online gaming in your jurisdiction to create a Tashanwin account.",
  },
  {
    heading: "Account Responsibility",
    body: "You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.",
  },
  {
    heading: "Deposits & Withdrawals",
    body: "Deposits are credited after successful payment confirmation. Withdrawals are processed to verified accounts and may require identity verification for security purposes.",
  },
  {
    heading: "Bonuses & Promotions",
    body: "All bonuses are subject to their specific terms, including any applicable wagering requirements, which are displayed at the time of the offer. Tashanwin reserves the right to modify or withdraw promotions at any time.",
  },
  {
    heading: "Prohibited Conduct",
    body: "Use of automated tools, multiple accounts to exploit promotions, or any fraudulent activity will result in account suspension and forfeiture of funds where legally permitted.",
  },
  {
    heading: "Limitation of Liability",
    body: "Tashanwin is not liable for losses arising from your use of the platform beyond amounts held in your account, except where required by applicable law.",
  },
  {
    heading: "Changes to These Terms",
    body: "We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Last updated July 2026. Please read these terms carefully before using Tashanwin."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Terms & Conditions", path: "/terms/" }]}
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
