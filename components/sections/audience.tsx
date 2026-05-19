"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-36 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-ink-mute">
              <span className="text-nebula-soft">03</span>
              <span className="mx-3 inline-block h-px w-8 align-middle bg-line" />
              Clientes y escenarios
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-[2rem] font-semibold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-[3rem]">
              Trabajamos con negocios pequeños, medianos y grandes
              <span className="text-ink-soft">
                {" "}
                que necesitan vender confianza antes de hablar.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 min-h-[6rem] border-l border-line pl-5 sm:mt-10 sm:min-h-[7rem] sm:pl-6">
              <motion.p
                key={active}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="text-pretty text-base leading-relaxed text-ink-soft sm:text-lg"
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
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group flex w-full items-center justify-between gap-5 py-5 text-left sm:gap-6 sm:py-6"
                  >
                    <span className="min-w-0">
                      <span
                        className={`block font-display text-[1.45rem] font-medium tracking-tight transition-colors sm:text-4xl ${
                          active === i
                            ? "text-ink"
                            : "text-ink-mute group-hover:text-ink-soft"
                        }`}
                      >
                        {a.label}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink-mute transition-colors group-hover:text-ember">
                        Ver caso relacionado
                        <ArrowUpRight
                          size={13}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </span>
                    <span
                      className={`shrink-0 text-sm tabular-nums transition-colors ${
                        active === i ? "text-ember" : "text-ink-mute"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
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
    note: "Cuando el producto entra por los ojos, la web debe abrir hambre, resolver dudas y llevar a reserva o WhatsApp sin fricción.",
    href: "https://lado-b-cafe.vercel.app/",
  },
  {
    label: "Clínicas y estética",
    note: "Cuando vendes confianza, la web debe explicar tratamientos, elevar percepción y hacer que el contacto se sienta seguro.",
    href: "https://cs-clinica.vercel.app/",
  },
  {
    label: "Startups",
    note: "Cuando tienes algo potente pero difícil de explicar, convertimos complejidad en narrativa visual y propuesta entendible.",
    href: "https://sams-lyart.vercel.app/",
  },
  {
    label: "Creadores y cursos",
    note: "Cuando vendes conocimiento, la página debe posicionarte como autoridad y ordenar la decisión antes del mensaje.",
    href: "https://anderbrows.vercel.app/",
  },
  {
    label: "Servicios locales",
    note: "Cuando compites por confianza local, una presencia seria cambia la conversación antes de hablar de precio.",
    href: "https://cortes-cl-ssicos.vercel.app/",
  },
  {
    label: "Marcas premium",
    note: "Cuando ya cobras bien, la web tiene que sostener ese precio con estética, argumentos y cero sensación de plantilla.",
    href: "https://www.mundodepapelportugal.com/",
  },
];
