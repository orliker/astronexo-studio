import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { SERVICES, caseBySlug, serviceBySlug } from "@/lib/content";
import { waLink } from "@/lib/site";
import { JsonLd, faqSchema, serviceSchema } from "@/lib/schema";
import { CosmosBackdrop } from "@/components/cosmos-backdrop";
import { SiteNav } from "@/components/site-nav";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ServiceIcon } from "@/components/service-icon";
import { Faq } from "@/components/home/faq";
import { ContactCTA, SiteFooter } from "@/components/home/contact";
import { Process } from "@/components/home/process";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  const path = `/servicios/${s.slug}`;
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title: s.seoTitle, description: s.seoDescription },
    twitter: { card: "summary_large_image", title: s.seoTitle, description: s.seoDescription },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();

  const cases = s.related.map(caseBySlug).filter((c) => c !== undefined);
  const others = SERVICES.filter((o) => o.slug !== s.slug);
  const message = `Hola Alex, he visto tu página de ${s.name} y quiero contarte mi caso. Mi negocio es: `;

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      {s.faq.length > 0 && <JsonLd data={faqSchema(s.faq)} />}
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
                  <Link href="/#servicios" className="premium-focus rounded hover:text-ink">
                    Servicios
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink-soft">
                  {s.name}
                </li>
              </ol>
            </nav>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-line bg-deep/70 text-ember">
                  <ServiceIcon name={s.icon} size={26} />
                </span>
                <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
                  {s.h1}
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">{s.intro}</p>
              </div>
              <div className="panel-edge premium-surface rounded-card p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-nebula-soft">Precio orientativo</p>
                <p className="mt-2 font-display text-4xl font-semibold">{s.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Precio cerrado y por escrito después de un diagnóstico gratuito de tu caso.
                </p>
                <a
                  href={waLink(message)}
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

        {/* Para quién */}
        <section className="border-t border-line bg-deep/30 py-16 sm:py-24">
          <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              ¿Es para <span className="premium-word">ti</span>?
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {s.forWho.map((f) => (
                <li key={f} className="flex gap-3 rounded-2xl border border-line bg-void/50 p-5 leading-relaxed text-ink">
                  <Check size={17} className="mt-1 shrink-0 text-aurora" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-16 sm:py-24">
          <div className="shell">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Qué <span className="premium-word">incluye</span>
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.includes.map((i, n) => (
                <li key={i.title} className="panel-edge rounded-card p-6">
                  <span className="font-mono text-xs text-ember">{String(n + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{i.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{i.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-2">
              <span className="mr-2 text-xs uppercase tracking-[0.16em] text-ink-mute">Herramientas</span>
              {s.stack.map((t) => (
                <span key={t} className="rounded-md border border-line bg-void/50 px-2.5 py-1 text-xs text-ink-soft">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Casos relacionados */}
        {cases.length > 0 && (
          <section className="border-t border-line bg-deep/30 py-16 sm:py-24">
            <div className="shell">
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Trabajo <span className="premium-word">relacionado</span>
              </h2>
              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {cases.map((c) => (
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
                        sizes="(min-width: 1280px) 22vw, (min-width: 768px) 46vw, 92vw"
                        className="block h-auto w-full"
                      />
                    </div>
                    <div className="flex items-center justify-between px-1 pt-4">
                      <h3 className="font-display text-lg font-semibold">{c.client}</h3>
                      <ArrowUpRight size={17} className="text-ink-mute group-hover:text-ink" aria-hidden="true" />
                    </div>
                    <p className="px-1 pt-1 text-xs text-ink-mute">{c.sector}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <Process index="" />

        {s.faq.length > 0 && <Faq items={s.faq} index="" title={`Dudas sobre ${s.name.toLowerCase()}`} />}

        {/* Otros servicios */}
        <section className="py-16 sm:py-24">
          <div className="shell">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Otros servicios</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/servicios/${o.slug}`}
                    className="premium-focus flex items-center gap-3 rounded-2xl border border-line bg-void/50 p-4 text-sm font-medium transition-colors hover:border-ink-mute"
                  >
                    <ServiceIcon name={o.icon} size={17} className="shrink-0 text-ember" />
                    {o.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/" className="premium-focus mt-10 inline-flex items-center gap-2 rounded text-sm text-ink-soft hover:text-ink">
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
