import { FAQS } from "@/lib/data/faqs";
import { faqJsonLd } from "@/lib/seo";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQSection() {
  return (
    <section className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <JsonLd data={faqJsonLd(FAQS)} />
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know before you get started."
        className="mb-12"
      />
      <Accordion items={FAQS} />
    </section>
  );
}
