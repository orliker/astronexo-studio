"use client";

import { MapPin, Globe2, ShieldCheck, FileCheck2, Clock4 } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";

/**
 * Franja de confianza — va justo después del hero.
 *
 * Objetivo: que un visitante que no nos conoce entienda en 4 segundos
 * que somos un estudio real (base física en Oporto, servicio
 * internacional) y que contratar tiene bajo riesgo (pago por fases,
 * sin permanencia, código propio). Es el antídoto contra "¿será una
 * estafa?". Datos verificables, nada inflado.
 */

const TRUST = [
  {
    icon: MapPin,
    title: "Estudio real en Oporto",
    detail: "Base física en Portugal, no una cuenta anónima.",
  },
  {
    icon: Globe2,
    title: "Trabajamos para el mundo",
    detail: "Portugal, España, Reino Unido, EE. UU. y toda Europa.",
  },
  {
    icon: FileCheck2,
    title: "Pago por fases",
    detail: "Empiezas con una parte y el resto al entregar. Sin sorpresas.",
  },
  {
    icon: Clock4,
    title: "Sin permanencia",
    detail: "Ningún contrato que te ate. La web es tuya, el código es tuyo.",
  },
];

export function TrustBar() {
  return (
    <section
      aria-label="Por qué confiar en AstroNexo Studio"
      className="relative border-y border-line bg-void/40"
    >
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-8">
        <Reveal>
          <div className="mb-5 flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-ink-mute">
            <ShieldCheck size={14} className="text-aurora" />
            Por qué puedes confiar en nosotros
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.07}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-deep/30 px-4 py-3.5 transition-colors hover:border-ink-soft/45">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-panel text-ember">
                    <Icon size={16} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-ink-mute">
                      {item.detail}
                    </span>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
