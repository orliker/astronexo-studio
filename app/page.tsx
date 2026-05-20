import { CosmosBackdrop } from "@/components/cosmos-backdrop";
import { SiteNav } from "@/components/site-nav";
import { HeroCinematic } from "@/components/hero-cinematic";
import { AuthorityStrip } from "@/components/sections/authority";
import { ProblemSection } from "@/components/sections/problem";
import { ServicesSection } from "@/components/sections/services";
import { DeliverablesSection } from "@/components/sections/deliverables";
import { AudienceSection } from "@/components/sections/audience";
import { ProcessSection } from "@/components/sections/process";
import { ProjectsSection } from "@/components/sections/projects";
import { ManifestoSection } from "@/components/sections/manifesto";
import { FinalCTA, SiteFooter } from "@/components/sections/final-cta";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { AnimePageMotion } from "@/components/anime-page-motion";

export default function Home() {
  return (
    <>
      <CosmosBackdrop />
      <SiteNav />
      <AnimePageMotion />
      <main className="relative">
        <HeroCinematic />
        <AuthorityStrip />
        <ProblemSection />
        <ServicesSection />
        <DeliverablesSection />
        <AudienceSection />
        <ProcessSection />
        <ProjectsSection />
        <ManifestoSection />
        <FinalCTA />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
