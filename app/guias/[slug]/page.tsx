import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { serviceBySlug } from "@/lib/content";
import { GUIDES, guideBySlug } from "@/lib/guides";
import { solutionBySlug } from "@/lib/solutions";
import { SITE, waLink } from "@/lib/site";
import { JsonLd, articleSchema, faqSchema } from "@/lib/schema";
import { CosmosBackdrop } from "@/components/cosmos-backdrop";
import { SiteNav } from "@/components/site-nav";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Faq } from "@/components/home/faq";
import { ContactCTA, SiteFooter } from "@/components/home/contact";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) return {};
  const path = `/guias/${g.slug}`;
  return {
    title: g.seoTitle,
    description: g.description,
    alternates: { canonical: path },
    authors: [{ name: SITE.fullName, url: SITE.url }],
    openGraph: {
      type: "article",
      url: path,
      title: g.seoTitle,
      description: g.description,
      publishedTime: g.published,
      modifiedTime: g.updated,
      authors: [SITE.fullName],
    },
    twitter: { card: "summary_large_image", title: g.seoTitle, description: g.description },
  };
}

const fecha = (d: string) =>
  new Date(d + "T12:00:00").toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) notFound();

  const services = g.services.map(serviceBySlug).filter((x) => x !== undefined);
  const solutions = g.solutions.map(solutionBySlug).filter((x) => x !== undefined);
  const others = GUIDES.filter((o) => o.slug !== g.slug);

  return (
    <>
      <JsonLd data={articleSchema({ ...g, title: g.title })} />
      <JsonLd data={faqSchema(g.faq)} />
      <CosmosBackdrop />
      <SiteNav />
      <main id="contenido" className="relative overflow-x-clip">
        <article>
          <header className="relative pt-32 pb-12 sm:pt-40 sm:pb-16">
            <div className="shell shell-narrow relative">
              <nav aria-label="Migas de pan" className="text-sm text-ink-mute">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link href="/" className="premium-focus rounded hover:text-ink">
                      Inicio
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/guias" className="premium-focus rounded hover:text-ink">
                      Guías
                    </Link>
                  </li>
                </ol>
              </nav>
              <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.08] text-balance sm:text-5xl">{g.title}</h1>
              <div className="mt-7 flex items-center gap-3 text-sm text-ink-mute">
                <Image src={SITE.photo} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                <p>
                  <span className="font-semibold text-ink">{SITE.fullName}</span>, AstroNexo Studio
                  <br />
                  Actualizada el <time dateTime={g.updated}>{fecha(g.updated)}</time> · {g.minutes} min de lectura
                </p>
              </div>
              <p className="mt-8 text-pretty text-lg leading-relaxed text-ink-soft">{g.intro}</p>
            </div>
          </header>

          <div className="shell shell-narrow pb-16 sm:pb-24">
            {g.sections.map((s) => (
              <section key={s.h2} className="border-t border-line py-10">
                <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">{s.h2}</h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-pretty text-[17px] leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-5 space-y-3">
                    {s.list.map((li) => (
                      <li key={li} className="flex gap-3 text-[17px] leading-relaxed text-ink">
                        <Check size={17} className="mt-1.5 shrink-0 text-aurora" aria-hidden="true" />
                        {li}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <aside className="panel-edge premium-surface mt-6 rounded-card p-7 sm:p-8">
              <p className="font-display text-xl font-semibold">¿Quieres el precio de tu caso?</p>
              <p className="mt-2 leading-relaxed text-ink-soft">
                Cuéntame tu negocio por WhatsApp y te respondo yo, con precio cerrado y por escrito en 24 a 48 horas. El
                diagnóstico es gratis.
              </p>
              <a
                href={waLink(g.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-focus micro-glint mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-void transition-colors hover:bg-white"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Pedir diagnóstico gratis
              </a>
            </aside>
          </div>
        </article>

        <Faq items={g.faq} index="" title="Preguntas sobre este tema" />

        <section className="py-16 sm:py-24">
          <div className="shell grid gap-12 lg:grid-cols-3">
            <div>
              <h2 className="font-display text-xl font-semibold">Servicios relacionados</h2>
              <ul className="mt-6 space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/servicios/${s.slug}`} className="premium-focus rounded text-ink-soft hover:text-ink">
                      {s.name} <span className="text-ink-mute">· {s.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold">Por tipo de negocio</h2>
              <ul className="mt-6 space-y-3">
                {solutions.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/soluciones/${s.slug}`} className="premium-focus rounded text-ink-soft hover:text-ink">
                      {s.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold">Otras guías</h2>
              <ul className="mt-6 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/guias/${o.slug}`} className="premium-focus rounded text-ink-soft hover:text-ink">
                      {o.short}
                    </Link>
                  </li>
                ))}
              </ul>
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
