import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { SITE, WHATSAPP_URL, waLink } from "@/lib/site";
import { SERVICES } from "@/lib/content";
import { SOLUTIONS } from "@/lib/solutions";
import { GUIDES } from "@/lib/guides";
import { BrandLogo } from "@/components/brand-logo";
import { Reveal } from "@/components/motion-primitives";

export function ContactCTA() {
  return (
    <section id="contacto" className="scroll-mt-20 py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <div className="panel-edge premium-surface relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,157,87,0.16),transparent)]" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-ember">Diagnóstico gratis</p>
            <h2 className="relative mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              Cuéntame qué te quita tiempo o clientes. <span className="premium-word">Te digo cómo lo resolvería.</span>
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-pretty text-ink-soft sm:text-lg">
              Mándame tu web, tu Instagram o tu idea. En 24 a 48 horas tienes una respuesta concreta, sin compromiso.
            </p>
            <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-focus micro-glint inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-void transition-colors hover:bg-white sm:w-auto"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Escribir por WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent("Proyecto para AstroNexo Studio")}`}
                className="premium-focus inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-void/40 px-7 py-4 text-sm font-semibold transition-colors hover:border-ink-mute sm:w-auto"
              >
                <Mail size={17} aria-hidden="true" />
                {SITE.email}
              </a>
            </div>
            <p className="relative mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ink-soft">
              ¿Prefieres hablar? Llámame al{" "}
              <a href={`tel:+${SITE.whatsappNumber}`} className="premium-focus whitespace-nowrap rounded font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink-mute">
                {SITE.phoneDisplay}
              </a>{" "}
              o{" "}
              <a
                href={waLink("Hola Alex, prefiero que me llames. Mi nombre y horario: ")}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-focus rounded font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink-mute"
              >
                pídeme que te llame yo
              </a>
              .
            </p>
            <p className="relative mx-auto mt-3 max-w-xl text-sm italic leading-relaxed text-ink-mute">
              Por ejemplo: «Tengo una clínica en Lisboa, contestamos WhatsApp a mano y perdemos citas. Esta es mi web: …»
            </p>
            <a
              href={waLink("Olá Alex, vi o seu site e quero falar sobre um projeto. O meu negócio é: ")}
              target="_blank"
              rel="noopener noreferrer"
              lang="pt"
              className="premium-focus relative mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink-soft transition-colors hover:border-ink-mute hover:text-ink"
            >
              <MessageCircle size={14} aria-hidden="true" />
              Escrever em português
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line pb-28 pt-14 sm:pb-12">
      <div className="shell grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <BrandLogo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
            Webs, aplicaciones, automatizaciones e inteligencia artificial para negocios. Estudio de {SITE.founder} en{" "}
            {SITE.city}, {SITE.country}.
          </p>
        </div>
        <nav aria-label="Servicios">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">Servicios</h2>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="premium-focus rounded text-sm text-ink-soft hover:text-ink">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Por tipo de negocio y guías">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">Para tu negocio</h2>
          <ul className="mt-4 space-y-2.5">
            {SOLUTIONS.map((s) => (
              <li key={s.slug}>
                <Link href={`/soluciones/${s.slug}`} className="premium-focus rounded text-sm text-ink-soft hover:text-ink">
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">
            <Link href="/guias" className="premium-focus rounded hover:text-ink">
              Guías
            </Link>
          </h2>
          <ul className="mt-4 space-y-2.5">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <Link href={`/guias/${g.slug}`} className="premium-focus rounded text-sm text-ink-soft hover:text-ink">
                  {g.short}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">Contacto</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="premium-focus inline-flex items-center gap-2 rounded text-ink-soft hover:text-ink">
                <MessageCircle size={15} aria-hidden="true" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:+${SITE.whatsappNumber}`} className="premium-focus inline-flex items-center gap-2 rounded text-ink-soft hover:text-ink">
                <Phone size={15} aria-hidden="true" /> {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="premium-focus inline-flex items-center gap-2 rounded text-ink-soft hover:text-ink">
                <Mail size={15} aria-hidden="true" /> {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="premium-focus inline-flex items-center gap-2 rounded text-ink-soft hover:text-ink">
                <ArrowUpRight size={15} aria-hidden="true" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="shell mt-12 flex flex-col justify-between gap-3 border-t border-line pt-6 text-xs text-ink-mute sm:flex-row">
        <p>
          © {year} AstroNexo Studio · {SITE.legalName} · NIF {SITE.taxId} · {SITE.city}, {SITE.country}
        </p>
        <Link href="/privacidad" className="premium-focus rounded hover:text-ink">
          Privacidad y cookies
        </Link>
      </div>
    </footer>
  );
}
