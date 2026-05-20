"use client";

import { MessageCircle, Mail } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import { MagneticButton } from "@/components/magnetic-button";
import { SITE, WHATSAPP_URL } from "@/lib/site";
import { BrandLogo } from "@/components/brand-logo";

/**
 * CTA final + footer. Cierre humano, no agresivo. El panel tiene borde
 * luminoso (panel-edge) y vive sobre el telón cosmos global.
 */
export function FinalCTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-36">
      <Reveal>
        <div
          data-gsap-breathe
          className="panel-edge grain relative overflow-hidden rounded-[1.5rem] px-5 py-14 text-center sm:rounded-[2rem] sm:px-16 sm:py-28"
        >
          <div className="pointer-events-none absolute -top-1/3 left-1/2 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,157,87,0.12),transparent_65%)] blur-3xl" />

          <p className="relative text-xs uppercase tracking-[0.3em] text-ink-mute">
            Diagnóstico privado
          </p>
          <h2 className="relative mx-auto mt-6 max-w-3xl font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-balance sm:mt-7 sm:text-5xl lg:text-6xl">
            Envíanos tu web o Instagram,
            <br />
            y te decimos{" "}
            <span className="premium-word">qué está frenando la venta</span>.
          </h2>
          <p className="relative mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Revisamos tu presencia con mirada de diseño, estrategia y
            conversión. Si vemos una oportunidad clara, te devolvemos una ruta
            concreta para convertir tu web en un activo más serio.
          </p>

          <div className="relative mt-9 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
            <MagneticButton
              href={WHATSAPP_URL}
              variant="primary"
              className="w-full sm:w-auto"
              external
            >
              <MessageCircle size={17} />
              Pedir auditoría por WhatsApp
            </MagneticButton>
            <MagneticButton
              href={`mailto:${SITE.email}`}
              variant="ghost"
              className="w-full sm:w-auto"
            >
              <Mail size={16} />
              Enviar por email
            </MagneticButton>
          </div>

          <p className="relative mt-8 text-sm text-ink-mute">
            Normalmente respondemos el mismo día con una lectura directa, sin
            reunión innecesaria.
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
          <BrandLogo compact={false} />
          <p className="mt-1 text-sm text-ink-mute">
            Webs premium, estrategia visual, automatización y embudos de WhatsApp.
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
          © {new Date().getFullYear()} AstroNexo Studio. Diseñado con criterio,
          probado con detalle y construido para vender confianza.
        </p>
      </div>
    </footer>
  );
}
