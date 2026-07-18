import { BonusSection } from "@/components/home/BonusSection";
import { CTABanner } from "@/components/home/CTABanner";
import { DownloadAppSection } from "@/components/home/DownloadAppSection";
import { ExploreMore } from "@/components/home/ExploreMore";
import { FAQSection } from "@/components/home/FAQSection";
import { FeatureCards } from "@/components/home/FeatureCards";
import { GameCategories } from "@/components/home/GameCategories";
import { Hero } from "@/components/home/Hero";
import { LoginGuideSection, RegisterGuideSection } from "@/components/home/LoginRegisterGuides";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { SecuritySection } from "@/components/home/SecuritySection";
import { Statistics } from "@/components/home/Statistics";
import { Testimonials } from "@/components/home/Testimonials";
import { WhatIsTashanWin } from "@/components/home/WhatIsTashanWin";
import { WhyTasanwin } from "@/components/home/WhyTasanwin";
import { NAV_LINKS, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";
import { GAME_CATEGORIES } from "@/lib/data/games";
import { gamesCollectionJsonLd, siteNavigationJsonLd, webPageJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          name: SITE_TITLE,
          description: SITE_DESCRIPTION,
          primaryImage: { url: "/images/hero-cover.webp", width: 1024, height: 1536 },
        })}
      />
      <JsonLd data={siteNavigationJsonLd(NAV_LINKS)} />
      <JsonLd data={gamesCollectionJsonLd(GAME_CATEGORIES)} />
      <Hero />
      <WhatIsTashanWin />
      <FeatureCards />
      <LoginGuideSection />
      <RegisterGuideSection />
      <WhyTasanwin />
      <GameCategories />
      <PlatformShowcase />
      <DownloadAppSection />
      <BonusSection />
      <SecuritySection />
      <Statistics />
      <Testimonials />
      <FAQSection />
      <ExploreMore />
      <CTABanner />
    </>
  );
}
