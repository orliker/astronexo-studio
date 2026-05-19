"use client";

import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Sección problema. Composición asimétrica: una frase grande a la
 * izquierda y "síntomas" reales del negocio a la derecha, no una
 * rejilla de cards. El contraste tipográfico hace el trabajo visual.
 */
export function ProblemSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-ink-mute">
              <span className="text-nebula-soft">01</span>
              <span className="mx-3 inline-block h-px w-8 align-middle bg-line" />
              El problema real
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-[2.7rem] lg:text-[3.4rem]">
              Tu negocio ya vale.
              <br />
              <span className="text-ink-soft">
                Pero online parece que improvisa.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
              La mayoría de negocios buenos viven atrapados en un perfil de
              Instagram, un WhatsApp saturado y un PDF que se envía a mano.
              Funciona… hasta que el cliente compara y elige al que{" "}
              <span className="text-ink">se ve más profesional</span>.
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
              Auditar mi Instagram/web
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
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
              No es falta de talento. Es falta de una{" "}
              <span className="text-ember">primera impresión</span> que
              esté a la altura.
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
    t: "Dependes de que te escriban primero",
    d: "Sin una estructura clara, cada venta empieza por un mensaje frío que tú tienes que empujar.",
  },
  {
    n: "→",
    t: "El precio se discute, no se comunica",
    d: "Una oferta sin contexto visual hace que el cliente compare por precio, no por valor.",
  },
  {
    n: "→",
    t: "Pareces más pequeño de lo que eres",
    d: "Negocios con peor servicio venden más solo porque se ven mejor.",
  },
  {
    n: "→",
    t: "Las visitas no se convierten en contactos",
    d: "Si el siguiente paso no está claro, el cliente mira, duda y se va sin escribirte.",
  },
];
