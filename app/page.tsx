import { BonusSection } from "@/components/home/BonusSection";
import { CTABanner } from "@/components/home/CTABanner";
import { DownloadAppSection } from "@/components/home/DownloadAppSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FeatureCards } from "@/components/home/FeatureCards";
import { GameCategories } from "@/components/home/GameCategories";
import { Hero } from "@/components/home/Hero";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { Statistics } from "@/components/home/Statistics";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyTasanwin } from "@/components/home/WhyTasanwin";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <BonusSection />
      <WhyTasanwin />
      <GameCategories />
      <PlatformShowcase />
      <DownloadAppSection />
      <Statistics />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </>
  );
}
