"use client";

import { MessageCircle, Mail } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import { MagneticButton } from "@/components/magnetic-button";
import { SITE, WHATSAPP_URL } from "@/lib/site";

/**
 * CTA final + footer. Cierre humano, no agresivo. El panel tiene borde
 * luminoso (panel-edge) y vive sobre el telón cosmos global.
 */
export function FinalCTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <Reveal>
        <div className="panel-edge grain relative overflow-hidden rounded-[2rem] px-6 py-20 text-center sm:px-16 sm:py-28">
          <div className="pointer-events-none absolute -top-1/3 left-1/2 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,157,87,0.12),transparent_65%)] blur-3xl" />

          <p className="relative text-xs uppercase tracking-[0.3em] text-ink-mute">
            Hablemos
          </p>
          <h2 className="relative mx-auto mt-7 max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Envíanos tu Instagram o web,
            <br />
            y te decimos{" "}
            <span className="text-gradient">qué podemos crear</span>.
          </h2>
          <p className="relative mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Pide una propuesta rápida: revisamos tu presencia, aterrizamos una
            idea visual y te marcamos el camino para tener una versión lista en
            48-72 horas.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton href={WHATSAPP_URL} variant="primary" external>
              <MessageCircle size={17} />
              Pedir propuesta rápida
            </MagneticButton>
            <MagneticButton
              href={`mailto:${SITE.email}`}
              variant="ghost"
            >
              <Mail size={16} />
              Enviar por email
            </MagneticButton>
          </div>

          <p className="relative mt-8 text-sm text-ink-mute">
            Normalmente respondemos el mismo día con una dirección concreta.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">
            AstroNexo <span className="text-ink-mute">Studio</span>
          </p>
          <p className="mt-1 text-sm text-ink-mute">
            Webs premium, automatizaciones simples y embudos de WhatsApp.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink-soft">
          <a href="#servicios" className="transition-colors hover:text-ink">
            Servicios
          </a>
          <a href="#proceso" className="transition-colors hover:text-ink">
            Proceso
          </a>
          <a href="#proyectos" className="transition-colors hover:text-ink">
            Previews
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
        <div className="hairline" />
        <p className="mt-6 text-xs text-ink-mute">
          © {new Date().getFullYear()} AstroNexo Studio. Diseñado y
          construido a mano.
        </p>
      </div>
    </footer>
  );
}
