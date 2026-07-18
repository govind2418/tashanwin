import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, TELEGRAM_URL } from "./constants";

type BuildMetadataArgs = {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: ["Tasanwin", "Tashan Win", "Tashanwin Game"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [TELEGRAM_URL],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function howToJsonLd({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { title: string; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.description,
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export function siteNavigationJsonLd(links: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: links.map((link) => link.label),
    url: links.map((link) => new URL(link.href, SITE_URL).toString()),
  };
}

export function gamesCollectionJsonLd(
  games: { name: string; description: string; image: string; alt: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${SITE_NAME} Games`,
    url: SITE_URL,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: games.map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          name: `${SITE_NAME} ${game.name}`,
          description: game.description,
          image: new URL(game.image, SITE_URL).toString(),
        },
      })),
    },
  };
}

export function webPageJsonLd({
  name,
  description,
  path = "/",
  primaryImage,
}: {
  name: string;
  description: string;
  path?: string;
  primaryImage: { url: string; width: number; height: number };
}) {
  const url = new URL(path, SITE_URL).toString();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: new URL(primaryImage.url, SITE_URL).toString(),
      width: primaryImage.width,
      height: primaryImage.height,
    },
  };
}
