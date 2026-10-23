import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOLUTIONS } from "@/lib/solutions";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { CosmosBackdrop } from "@/components/cosmos-backdrop";
import { SiteNav } from "@/components/site-nav";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ContactCTA, SiteFooter } from "@/components/home/contact";

const TITLE = "Páginas web y automatización por tipo de negocio";
const DESCRIPTION =
  "Qué construyo para clínicas, restaurantes, autónomos, inmobiliarias, pymes e ideas de app: webs, reservas, WhatsApp con IA y automatizaciones con precio cerrado desde 90 €.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/soluciones" },
  openGraph: { type: "website", url: "/soluciones", title: TITLE, description: DESCRIPTION },
};

export default function SolucionesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: TITLE,
              url: `${SITE.url}/soluciones`,
              hasPart: SOLUTIONS.map((s) => ({ "@type": "WebPage", name: s.h1, url: `${SITE.url}/soluciones/${s.slug}` })),
            },
            breadcrumbSchema([
              ["Inicio", ""],
              ["Soluciones", "/soluciones"],
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
              / <span className="text-ink-soft">Soluciones</span>
            </nav>
            <h1 className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              Qué te construyo según <span className="premium-word">tu negocio</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Cada negocio pierde tiempo o clientes en un sitio distinto. Elige el tuyo y verás qué haría, cuánto cuesta y
              las dudas que me suelen plantear. Si no está, escríbeme igual: el diagnóstico es gratis.
            </p>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SOLUTIONS.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/soluciones/${s.slug}`}
                    className="premium-focus panel-edge group flex h-full flex-col rounded-card p-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h2 className="font-display text-lg font-semibold">{s.short}</h2>
                      <span className="shrink-0 text-sm font-semibold text-ember">{s.price}</span>
                    </div>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{s.seoDescription}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                      Ver qué te haría
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
