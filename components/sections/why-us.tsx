"use client";

import { Check, X, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Bloque comparativo "¿Por qué AstroNexo?".
 *
 * Muestra las ventajas competitivas reales sin nombrar a nadie:
 * la columna "Lo habitual" agrupa plantillas/WordPress/agencias lentas,
 * la columna "AstroNexo" su contraparte. Traduce la ventaja técnica a
 * beneficio de cliente. Va antes de precios para justificar el valor.
 */

const ROWS = [
  {
    habitual: "Plantilla genérica o WordPress lento",
    astronexo: "Web a medida en Next.js, ultrarrápida",
  },
  {
    habitual: "Un simple botón de WhatsApp",
    astronexo: "WhatsApp con IA que responde, califica y agenda solo",
  },
  {
    habitual: "Las facturas, a mano en Excel",
    astronexo: "Facturación automática en un panel claro",
  },
  {
    habitual: "Semanas o meses de espera",
    astronexo: "Entrega ágil: tu landing en días",
  },
  {
    habitual: "Hablas con un comercial o un ticket",
    astronexo: "Hablas directo con quien diseña tu proyecto",
  },
  {
    habitual: "Te atan a su plataforma y suscripción",
    astronexo: "La web y el código son tuyos, sin permanencia",
  },
  {
    habitual: "Precio de agencia (miles de euros)",
    astronexo: "Calidad de agencia a precio fundador",
  },
];

export function WhyUsSection() {
  return (
    <section
      id="por-que-astronexo"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 border-t border-line"
    >
      <div className="pointer-events-none absolute left-1/2 top-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.04),transparent_65%)] blur-3xl" />

      <SectionHeading
        index="10"
        kicker="Por qué AstroNexo"
        title={
          <>
            La diferencia entre una web <span className="premium-word">y un sistema que vende</span>
          </>
        }
        intro="La mayoría de negocios elige entre una plantilla barata que se ve como todas, o una agencia cara y lenta. Nosotros somos el punto medio que no existía: calidad premium, automatización real y trato directo."
      />

      <Reveal delay={0.1}>
        <div className="mt-10 overflow-hidden rounded-card border border-line">
          {/* Cabeceras */}
          <div className="grid grid-cols-2 border-b border-line bg-deep/30">
            <div className="px-4 py-4 sm:px-6">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-mute">
                Lo habitual
              </span>
            </div>
            <div className="border-l border-line bg-ember/5 px-4 py-4 sm:px-6">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ember">
                Con AstroNexo
              </span>
            </div>
          </div>

          {/* Filas comparativas */}
          {ROWS.map((row, i) => (
            <div
              key={row.astronexo}
              className={`grid grid-cols-2 ${i !== ROWS.length - 1 ? "border-b border-line/60" : ""}`}
            >
              <div className="flex items-start gap-2.5 px-4 py-4 sm:px-6">
                <X size={15} className="mt-0.5 shrink-0 text-ink-mute" />
                <span className="text-xs leading-relaxed text-ink-mute sm:text-sm">
                  {row.habitual}
                </span>
              </div>
              <div className="flex items-start gap-2.5 border-l border-line/60 bg-ember/[0.03] px-4 py-4 sm:px-6">
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-ember/15 text-ember">
                  <Check size={11} className="stroke-[3]" />
                </span>
                <span className="text-xs font-medium leading-relaxed text-ink sm:text-sm">
                  {row.astronexo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="micro-glint group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-void transition-colors hover:bg-white"
          >
            <MessageCircle size={16} />
            Quiero un sistema, no una plantilla
          </a>
        </div>
      </Reveal>
    </section>
  );
}
