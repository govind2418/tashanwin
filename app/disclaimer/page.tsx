import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description: "Important disclaimer information regarding the use of the Tashanwin platform.",
  path: "/disclaimer/",
});

const sections = [
  {
    heading: "General Information",
    body: "This website is a promotional and informational platform for Tashanwin. It is intended to introduce visitors to the Tashanwin brand, its features and how to access the platform.",
  },
  {
    heading: "Age Restriction",
    body: "Tashanwin services are strictly intended for individuals aged 18 years and above. By using this platform, you confirm that you meet the minimum legal age requirement in your jurisdiction.",
  },
  {
    heading: "Financial Risk",
    body: "Gaming involves an element of financial risk. Past results do not guarantee future outcomes. Only play with funds you can afford to lose.",
  },
  {
    heading: "Regional Availability",
    body: "Availability of Tashanwin services may vary by region and is subject to local laws and regulations. It is your responsibility to ensure that use of this platform is legal in your jurisdiction.",
  },
  {
    heading: "No Guarantees",
    body: "While we strive for accuracy, Tashanwin makes no warranties regarding the completeness or reliability of information presented on this website.",
  },
];

export default function DisclaimerPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Legal"
        title="Disclaimer"
        description="Please read this disclaimer carefully before using Tashanwin."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Disclaimer", path: "/disclaimer/" }]}
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
