import { CosmosBackdrop } from "@/components/cosmos-backdrop";
import { SiteNav } from "@/components/site-nav";
import { HeroCinematic } from "@/components/hero-cinematic";
import { ImproveFirst } from "@/components/sections/improve-first";
import { TrustBar } from "@/components/sections/trust-bar";
import { AuthorityStrip } from "@/components/sections/authority";
import { ProblemSection } from "@/components/sections/problem";
import { AutomationSection } from "@/components/sections/automation-section";
import { WebSection } from "@/components/sections/web-section";
import { InvoicesSection } from "@/components/sections/invoices-section";
import { SEOSection } from "@/components/sections/seo-section";
import { MarketingSection } from "@/components/sections/marketing-section";
import { IdentitySection } from "@/components/sections/identity-section";
import { ProjectsSection } from "@/components/sections/projects";
import { WhyUsSection } from "@/components/sections/why-us";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
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
        <TrustBar />
        <ImproveFirst />
        <AuthorityStrip />
        <ProblemSection />
        <AutomationSection />
        <WebSection />
        <InvoicesSection />
        <SEOSection />
        <MarketingSection />
        <IdentitySection />
        <ProjectsSection />
        <WhyUsSection />
        <PricingSection />
        <FAQSection />
        <ManifestoSection />
        <FinalCTA />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
