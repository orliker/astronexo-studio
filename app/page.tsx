import { CosmosBackdrop } from "@/components/cosmos-backdrop";
import { SiteNav } from "@/components/site-nav";
import { HeroCinematic } from "@/components/hero-cinematic";
import { AuthorityStrip } from "@/components/sections/authority";
import { ProblemSection } from "@/components/sections/problem";
import { AutomationSection } from "@/components/sections/automation-section";
import { WebSection } from "@/components/sections/web-section";
import { SEOSection } from "@/components/sections/seo-section";
import { MarketingSection } from "@/components/sections/marketing-section";
import { IdentitySection } from "@/components/sections/identity-section";
import { ManifestoSection } from "@/components/sections/manifesto";
import { FinalCTA, SiteFooter } from "@/components/sections/final-cta";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { AnimePageMotion } from "@/components/anime-page-motion";
import { GsapPremiumEffects } from "@/components/gsap-premium-effects";

export default function Home() {
  return (
    <>
      <CosmosBackdrop />
      <SiteNav />
      <AnimePageMotion />
      <GsapPremiumEffects />
      <main className="relative">
        <HeroCinematic />
        <AuthorityStrip />
        <ProblemSection />
        <AutomationSection />
        <WebSection />
        <SEOSection />
        <MarketingSection />
        <IdentitySection />
        <ManifestoSection />
        <FinalCTA />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
