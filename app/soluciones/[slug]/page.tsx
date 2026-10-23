import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, MessageCircle, X } from "lucide-react";
import { caseBySlug, serviceBySlug, TESTIMONIALS } from "@/lib/content";
import { SOLUTIONS, solutionBySlug } from "@/lib/solutions";
import { GUIDES } from "@/lib/guides";
import { waLink } from "@/lib/site";
import { JsonLd, faqSchema, solutionSchema } from "@/lib/schema";
import { CosmosBackdrop } from "@/components/cosmos-backdrop";
import { SiteNav } from "@/components/site-nav";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ServiceIcon } from "@/components/service-icon";
import { Faq } from "@/components/home/faq";
import { ContactCTA, SiteFooter } from "@/components/home/contact";
import { Process } from "@/components/home/process";

export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = solutionBySlug(slug);
  if (!s) return {};
  const path = `/soluciones/${s.slug}`;
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title: s.seoTitle, description: s.seoDescription },
    twitter: { card: "summary_large_image", title: s.seoTitle, description: s.seoDescription },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = solutionBySlug(slug);
  if (!s) notFound();

  const services = s.services.map(serviceBySlug).filter((x) => x !== undefined);
  const cases = s.cases.map(caseBySlug).filter((c) => c !== undefined);
  const quotes = TESTIMONIALS.filter((t) => s.cases.includes(t.caseSlug));
  const others = SOLUTIONS.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd data={solutionSchema(s)} />
      <JsonLd data={faqSchema(s.faq)} />
      <CosmosBackdrop />
      <SiteNav />
      <main id="contenido" className="relative overflow-x-clip">
        {/* Cabecera */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,108,255,0.14),transparent)]" />
          <div className="shell relative">
            <nav aria-label="Migas de pan" className="text-sm text-ink-mute">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="premium-focus rounded hover:text-ink">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/soluciones" className="premium-focus rounded hover:text-ink">
                    Soluciones
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink-soft">
                  {s.short}
                </li>
              </ol>
            </nav>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                <h1 className="font-display text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
                  {s.h1}
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">{s.intro}</p>
              </div>
              <div className="panel-edge premium-surface rounded-card p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-nebula-soft">Precio orientativo</p>
                <p className="mt-2 font-display text-4xl font-semibold">{s.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.priceNote}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Precio cerrado y por escrito después de un diagnóstico gratuito. Mis precios no llevan IVA.
                </p>
                <a
                  href={waLink(s.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-focus micro-glint mt-6 flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-void transition-colors hover:bg-white"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Pedir diagnóstico gratis
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Lo que pasa hoy */}
        <section className="border-t border-line bg-deep/30 py-16 sm:py-24">
          <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              ¿Te suena <span className="premium-word">alguna?</span>
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {s.pains.map((p) => (
                <li key={p} className="flex gap-3 rounded-2xl border border-line bg-void/50 p-5 leading-relaxed text-ink">
                  <X size={17} className="mt-1 shrink-0 text-ember" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Lo que construyo */}
        <section className="py-16 sm:py-24">
          <div className="shell">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Lo que te <span className="premium-word">construyo</span>
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              No hace falta todo a la vez. En el diagnóstico elegimos lo que más tiempo o clientes te está costando y
              empezamos por ahí.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.build.map((b, n) => (
                <li key={b.title} className="panel-edge rounded-card p-6">
                  <span className="font-mono text-xs text-ember">{String(n + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-card border border-dashed border-line p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-mute">Para empezar, basta con algo así</p>
              <p className="mt-3 font-display text-lg leading-relaxed text-ink sm:text-xl">“{s.example}”</p>
              <a
                href={waLink(s.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-focus mt-5 inline-flex items-center gap-2 rounded text-sm font-semibold text-ember hover:text-ink"
              >
                Escribirme por WhatsApp <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Trabajo real */}
        {cases.length > 0 && (
          <section className="border-t border-line bg-deep/30 py-16 sm:py-24">
            <div className="shell">
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Trabajo <span className="premium-word">real</span>, en producción
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
                No es de tu mismo sector, pero usa las mismas piezas: puedes abrir la web y probarla.
              </p>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {cases.map((c) => {
                  const q = quotes.find((t) => t.caseSlug === c.slug);
                  return (
                    <a
                      key={c.slug}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="premium-focus panel-edge group flex flex-col rounded-card p-4"
                    >
                      <div className="browser overflow-hidden rounded-lg">
                        <Image
                          src={c.image}
                          alt={`Captura de la web de ${c.client}`}
                          width={1440}
                          height={900}
                          sizes="(min-width: 768px) 46vw, 92vw"
                          className="block h-auto w-full"
                        />
                      </div>
                      <div className="flex items-center justify-between px-1 pt-4">
                        <h3 className="font-display text-lg font-semibold">{c.client}</h3>
                        <ArrowUpRight size={17} className="text-ink-mute group-hover:text-ink" aria-hidden="true" />
                      </div>
                      <p className="px-1 pt-1 text-sm text-ink-mute">{c.sector}</p>
                      {q && (
                        <blockquote className="mx-1 mt-4 border-t border-line pt-4 text-[15px] leading-relaxed text-ink-soft">
                          “{q.quote}” <span className="text-ink-mute">({q.author})</span>
                        </blockquote>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        <Process index="" />

        <Faq items={s.faq} index="" title={`Dudas de ${s.short.toLowerCase()}`} />

        {/* Enlaces internos */}
        <section className="py-16 sm:py-24">
          <div className="shell grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Servicios que entran aquí</h2>
              <ul className="mt-8 grid gap-3">
                {services.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/servicios/${o.slug}`}
                      className="premium-focus flex items-center gap-3 rounded-2xl border border-line bg-void/50 p-4 text-sm font-medium transition-colors hover:border-ink-mute"
                    >
                      <ServiceIcon name={o.icon} size={17} className="shrink-0 text-ember" />
                      {o.name}
                      <span className="ml-auto text-ink-mute">{o.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Otros negocios</h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/soluciones/${o.slug}`}
                      className="premium-focus flex h-full items-center rounded-2xl border border-line bg-void/50 p-4 text-sm font-medium transition-colors hover:border-ink-mute"
                    >
                      {o.short}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-ink-soft">
                ¿Quieres saber cuánto cuesta antes de escribir?{" "}
                <Link href={`/guias/${GUIDES[0].slug}`} className="premium-focus rounded text-ember hover:text-ink">
                  {GUIDES[0].short}
                </Link>
              </p>
            </div>
          </div>
          <div className="shell">
            <Link href="/" className="premium-focus mt-12 inline-flex items-center gap-2 rounded text-sm text-ink-soft hover:text-ink">
              <ArrowLeft size={15} aria-hidden="true" /> Volver al inicio
            </Link>
          </div>
        </section>

        <ContactCTA />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
