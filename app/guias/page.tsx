import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { CosmosBackdrop } from "@/components/cosmos-backdrop";
import { SiteNav } from "@/components/site-nav";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ContactCTA, SiteFooter } from "@/components/home/contact";

const TITLE = "Guías para negocios: webs, precios y automatización";
const DESCRIPTION =
  "Guías claras de Alexander Ruiz (AstroNexo Studio) sobre cuánto cuesta una web, cómo automatizar WhatsApp con IA y si necesitas web teniendo Instagram.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/guias" },
  openGraph: { type: "website", url: "/guias", title: TITLE, description: DESCRIPTION },
};

export default function GuiasPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: TITLE,
              url: `${SITE.url}/guias`,
              hasPart: GUIDES.map((g) => ({ "@type": "Article", headline: g.title, url: `${SITE.url}/guias/${g.slug}` })),
            },
            breadcrumbSchema([
              ["Inicio", ""],
              ["Guías", "/guias"],
            ]),
          ],
        }}
      />
      <CosmosBackdrop />
      <SiteNav />
      <main id="contenido" className="relative overflow-x-clip">
        <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="shell">
            <nav aria-label="Migas de pan" className="text-sm text-ink-mute">
              <Link href="/" className="premium-focus rounded hover:text-ink">
                Inicio
              </Link>{" "}
              / <span className="text-ink-soft">Guías</span>
            </nav>
            <h1 className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              Lo que conviene saber <span className="premium-word">antes de contratar</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Respuestas directas a lo que más me preguntan, con mis precios reales. Sirven para comparar cualquier
              presupuesto, también el mío.
            </p>
            <ul className="mt-12 grid gap-4 md:grid-cols-3">
              {GUIDES.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guias/${g.slug}`}
                    className="premium-focus panel-edge group flex h-full flex-col rounded-card p-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="text-xs text-ink-mute">{g.minutes} min de lectura</span>
                    <h2 className="mt-3 font-display text-xl font-semibold leading-snug">{g.title}</h2>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{g.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                      Leer la guía
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <ContactCTA />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
