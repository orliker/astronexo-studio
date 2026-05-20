"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Gauge,
  Layers3,
  LockKeyhole,
  Radar,
  ServerCog,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/motion-primitives";

const SIGNALS = [
  { label: "Auditoria", detail: "Web, Instagram y oferta", icon: Radar },
  { label: "Estrategia", detail: "Mensaje, nicho y CTA", icon: Target },
  { label: "Diseno", detail: "Direccion visual premium", icon: Layers3 },
  { label: "Conversion", detail: "WhatsApp y lead flow", icon: TrendingUp },
  { label: "Performance", detail: "Carga rapida y mobile", icon: Gauge },
  { label: "Deploy", detail: "Publicacion y ajustes", icon: ServerCog },
  { label: "Seguridad", detail: "Headers y buenas practicas", icon: ShieldCheck },
  { label: "Confianza", detail: "Enlaces y tracking claro", icon: LockKeyhole },
];

export function AuthorityStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-y border-line bg-deep/35">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-ember">
              Sistema de presencia digital
            </p>
            <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Para negocios que no pueden permitirse parecer improvisados.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <div className="relative max-w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-deep to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-deep to-transparent" />
            <motion.div
              animate={reduce ? undefined : { x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex w-max gap-3"
            >
              {[...SIGNALS, ...SIGNALS].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${item.label}-${index}`}
                    data-anime="float-soft"
                    className="flex min-w-[220px] items-center gap-3 rounded-full border border-line bg-void/45 px-4 py-3"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-panel text-nebula-soft">
                      <Icon size={17} />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-ink">
                        {item.label}
                      </span>
                      <span className="block text-xs text-ink-mute">
                        {item.detail}
                      </span>
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
