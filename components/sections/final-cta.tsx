"use client";

import { useState, useEffect } from "react";
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
  const [selectedOption, setSelectedOption] = useState<'whatsapp' | 'web' | 'demo'>('whatsapp');

  useEffect(() => {
    const handleSelectOption = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === 'whatsapp' || detail === 'web' || detail === 'demo') {
        setSelectedOption(detail);
      }
    };
    
    window.addEventListener('select-cta-option', handleSelectOption);
    return () => {
      window.removeEventListener('select-cta-option', handleSelectOption);
    };
  }, []);

  const getWhatsAppUrl = (option: 'whatsapp' | 'web' | 'demo') => {
    const number = SITE.whatsappNumber;
    let message = "";
    if (option === 'whatsapp') {
      message = "Hola AstroNexo. Quiero automatizar mi WhatsApp con IA y solicitar la auditoría gratuita de mi sistema. Mi Instagram/web es: ";
    } else if (option === 'web') {
      message = "Hola AstroNexo. Necesito modernizar mi Web y solicitar la auditoría gratuita de mi presencia digital. Mi Instagram/web es: ";
    } else {
      message = "Hola AstroNexo. Quiero ver una Demo de vuestras automatizaciones y solicitar una auditoría gratuita de mi presencia digital. Mi Instagram/web es: ";
    }
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contacto-interactivo" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-36">
      <Reveal>
        <div
          data-gsap-breathe
          className="panel-edge grain relative overflow-hidden rounded-[1.5rem] px-5 py-14 text-center sm:rounded-[2rem] sm:px-16 sm:py-28"
        >
          <div className="pointer-events-none absolute -top-1/3 left-1/2 h-[50vh] w-[50vh] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,157,87,0.12),transparent_65%)] blur-3xl" />

          <p className="relative text-xs uppercase tracking-[0.22em] text-ink-mute">
            <span className="text-nebula-soft font-mono">10</span>
            <span className="mx-3 inline-block h-px w-8 align-middle bg-line" />
            Auditoría final / Contacto
          </p>
          <h2 className="relative mx-auto mt-6 max-w-3xl font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-balance sm:mt-7 sm:text-5xl lg:text-6xl">
            Personaliza tu consulta y
            <br />
            solicita tu <span className="premium-word">auditoría gratuita</span>.
          </h2>
          <p className="relative mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            Selecciona qué necesita tu negocio para que prepare la respuesta adecuada. Analizaremos tu presencia y te daremos un plan de acción directo por WhatsApp.
          </p>

          {/* Selector de Opción Pre-cualificadora */}
          <div className="relative mt-8 mb-6 flex flex-wrap justify-center gap-3">
            {[
              { id: 'whatsapp', label: 'Quiero automatizar mi WhatsApp con IA' },
              { id: 'web', label: 'Necesito modernizar mi Web Premium' },
              { id: 'demo', label: 'Quiero ver una Demo en vivo' },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedOption(opt.id as any)}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide border transition-all duration-300 ${
                  selectedOption === opt.id
                    ? "border-ember bg-ember/15 text-ink shadow-[0_0_15px_rgba(255,157,87,0.15)]"
                    : "border-line bg-void/45 text-ink-soft hover:border-ink-soft hover:text-ink"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="relative mt-9 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
            <MagneticButton
              href={getWhatsAppUrl(selectedOption)}
              variant="primary"
              className="w-full sm:w-auto"
              external
            >
              <MessageCircle size={17} />
              Solicitar Auditoría Gratuita de tu Sistema
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
            Normalmente respondemos en el mismo día con una auditoría directa y accionable. Sin reuniones de ventas aburridas.
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
          <a href="#automatizaciones" className="transition-colors hover:text-ink">
            Automatización
          </a>
          <a href="#webs-y-qr" className="transition-colors hover:text-ink">
            Webs & QR
          </a>
          <a href="#facturas" className="transition-colors hover:text-ink">
            Facturas
          </a>
          <a href="#seo-local" className="transition-colors hover:text-ink">
            SEO Local
          </a>
          <a href="#campanas-y-trafico" className="transition-colors hover:text-ink">
            Campañas
          </a>
          <a href="#identidad-digital" className="transition-colors hover:text-ink">
            Identidad
          </a>
          <a href="#faq" className="transition-colors hover:text-ink">
            FAQ
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
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-mute">
            © {new Date().getFullYear()} AstroNexo Studio · Estudio digital con base en Oporto, Portugal.
          </p>
          <div className="flex items-center gap-5 text-xs text-ink-mute">
            <a href="mailto:hola@astronexostudio.com" className="transition-colors hover:text-ink">
              hola@astronexostudio.com
            </a>
            <a href="/privacidad" className="transition-colors hover:text-ink">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
