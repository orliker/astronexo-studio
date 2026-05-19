"use client";

import { MessageCircle, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Sección problema. Composición asimétrica: una frase grande a la
 * izquierda y "síntomas" reales del negocio a la derecha, no una
 * rejilla de cards. El contraste tipográfico hace el trabajo visual.
 */
export function ProblemSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-36">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-ink-mute">
              <span className="text-nebula-soft">01</span>
              <span className="mx-3 inline-block h-px w-8 align-middle bg-line" />
              Diagnóstico de oportunidad
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-tight text-balance sm:text-[2.7rem] lg:text-[3.4rem]">
              Tu empresa puede facturar bien.
              <br />
              <span className="text-ink-soft">
                Pero online puede estar vendiendo menos de lo que merece.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:mt-7 sm:text-lg">
              Muchos negocios con equipo, producto y margen pierden clientes
              porque la primera impresión no sostiene su precio. La web no
              explica, el Instagram no ordena la oferta y el WhatsApp carga con
              todo el trabajo comercial.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ember/35 bg-ember/10 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ember hover:bg-ember/15"
            >
              <MessageCircle size={16} />
              Detectar mis puntos débiles
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.05}>
            <div className="panel-edge mb-6 rounded-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-ember">
                    Lectura en 5 segundos
                  </p>
                  <p className="mt-3 font-display text-3xl font-semibold tracking-tight">
                    Si no se entiende, no se compra.
                  </p>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-void/45 text-aurora">
                  <TrendingUp size={20} />
                </span>
              </div>
              <div className="mt-7 space-y-4">
                {[
                  ["Confianza visual", "72%"],
                  ["Claridad de oferta", "64%"],
                  ["Ruta a contacto", "88%"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-xs text-ink-mute">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-line">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-nebula-soft to-ember"
                        style={{ width: value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-line border-y border-line">
              {SYMPTOMS.map((s) => (
                <li
                  key={s.t}
                  className="group flex items-start gap-4 py-5 transition-colors"
                >
                  <span className="mt-1 font-display text-sm text-ink-mute tabular-nums">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-medium text-ink transition-colors group-hover:text-nebula-soft">
                      {s.t}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-mute">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-sm text-ink-soft">
              No es falta de calidad. Es falta de un sistema digital que
              traduzca esa calidad en{" "}
              <span className="text-ember">confianza comprable</span>.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const SYMPTOMS = [
  {
    n: "→",
    t: "La web no justifica tu precio",
    d: "Si parece simple, genérica o antigua, el cliente negocia antes de entender tu valor.",
  },
  {
    n: "→",
    t: "La oferta se entiende tarde",
    d: "Servicios, paquetes y prueba social aparecen desordenados o demasiado lejos del primer impacto.",
  },
  {
    n: "→",
    t: "WhatsApp hace todo el trabajo",
    d: "Cada lead llega con dudas básicas porque la página no precalifica ni responde lo esencial.",
  },
  {
    n: "→",
    t: "Tu presencia no parece proporcional a tu negocio",
    d: "Una empresa seria necesita una primera impresión seria, especialmente cuando el cliente compara alternativas.",
  },
];
