import { CosmosBackdrop } from "@/components/cosmos-backdrop";
import { SiteNav } from "@/components/site-nav";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Hero } from "@/components/home/hero";
import { StackStrip } from "@/components/home/stack-strip";
import { Services } from "@/components/home/services";
import { Work } from "@/components/home/work";
import { Lab } from "@/components/home/lab";
import { Approach } from "@/components/home/approach";
import { Process } from "@/components/home/process";
import { Pricing } from "@/components/home/pricing";
import { About } from "@/components/home/about";
import { Faq } from "@/components/home/faq";
import { ContactCTA, SiteFooter } from "@/components/home/contact";
import { FAQ } from "@/lib/content";
import { JsonLd, faqSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(FAQ)} />
      <CosmosBackdrop />
      <SiteNav />
      <main id="contenido" className="relative overflow-x-clip">
        <Hero />
        <StackStrip />
        <Services />
        <Work />
        <Approach />
        <Process />
        <Pricing />
        <About />
        <Lab />
        <Faq items={FAQ} />
        <ContactCTA />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
