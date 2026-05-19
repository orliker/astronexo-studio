"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion-primitives";

/**
 * "Para quién creamos". En vez de una rejilla de iconos, una lista
 * tipográfica grande tipo índice: al pasar por cada sector cambia la
 * frase de contexto a la derecha. Editorial, vivo, distinto.
 */
export function AudienceSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="para-quien"
      className="relative border-y border-line bg-deep/40"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-28 sm:px-8 sm:py-36 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-ink-mute">
              <span className="text-nebula-soft">03</span>
              <span className="mx-3 inline-block h-px w-8 align-middle bg-line" />
              Cliente ideal
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-[3rem]">
              Estas demos son para negocios que ya tienen algo bueno
              <span className="text-ink-soft">
                {" "}
                y necesitan que se vea en segundos.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 min-h-[7rem] border-l border-line pl-6">
              <motion.p
                key={active}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="text-pretty text-lg leading-relaxed text-ink-soft"
              >
                {AUDIENCE[active].note}
              </motion.p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-line border-t border-line">
            {AUDIENCE.map((a, i) => (
              <li key={a.label}>
                <Reveal delay={Math.min(i * 0.04, 0.25)}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`font-display text-2xl font-medium tracking-tight transition-colors sm:text-4xl ${
                        active === i
                          ? "text-ink"
                          : "text-ink-mute group-hover:text-ink-soft"
                      }`}
                    >
                      {a.label}
                    </span>
                    <span
                      className={`shrink-0 text-sm tabular-nums transition-colors ${
                        active === i ? "text-ember" : "text-ink-mute"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const AUDIENCE = [
  {
    label: "Restaurantes y cafés",
    note: "Ideal si tu comida, local o experiencia se vende mejor cuando se ve: carta visual, reservas y WhatsApp sin fricción.",
  },
  {
    label: "Clínicas y estética",
    note: "Ideal si necesitas confianza inmediata: tratamientos claros, profesionales visibles, antes/después y contacto directo.",
  },
  {
    label: "Startups",
    note: "Ideal si tienes un producto potente pero difícil de explicar: narrativa visual, propuesta clara y demo entendible.",
  },
  {
    label: "Creadores y cursos",
    note: "Ideal si vendes conocimiento: landing de autoridad, oferta ordenada y una ruta simple para pedir información.",
  },
  {
    label: "Servicios locales",
    note: "Ideal si compites por confianza: que te elijan a ti y no al de al lado porque tu presencia se ve más seria.",
  },
  {
    label: "Marcas premium",
    note: "Ideal si ya cobras bien y quieres que la web sostenga ese valor: visual elegante, argumentos claros y cero plantilla genérica.",
  },
];
