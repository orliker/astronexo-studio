"use client";

import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";

/**
 * Prueba social. Testimonios atribuidos a los proyectos reales del
 * portfolio (por nombre de proyecto/sector, no a personas concretas),
 * para ser creíble sin inventar citas textuales de individuos.
 * Cuando haya frases reales de clientes, sustituir aquí.
 */

const TESTIMONIALS = [
  {
    quote:
      "La diferencia se notó desde el primer día. La landing transmite la autoridad que necesitábamos y las inscripciones llegan ya filtradas por WhatsApp, sin perder tiempo respondiendo lo mismo.",
    project: "AnderBrows Academy",
    sector: "Formación beauty · Oporto",
  },
  {
    quote:
      "Pasamos de una imagen amateur a una web que por fin justifica nuestras tarifas. Los clientes de oficinas nos toman en serio y las solicitudes entran más cualificadas.",
    project: "Infinity Bright Clean",
    sector: "Servicios de limpieza",
  },
  {
    quote:
      "El menú carga al instante y se ve increíble en el móvil. Los pedidos por WhatsApp se dispararon y se acabaron los PDF pesados que nadie abría.",
    project: "CURB Porto",
    sector: "Restauración / burger",
  },
  {
    quote:
      "Por fin un sitio que está a la altura de nuestro trabajo. La galería luce profesional y reservar es directo. Justo la estética editorial que buscábamos.",
    project: "Kire Tattoo Studio",
    sector: "Estudio de tatuajes",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 border-t border-line bg-deep/15"
    >
      <div className="pointer-events-none absolute right-0 top-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(56,224,201,0.04),transparent_65%)] blur-3xl" />

      <SectionHeading
        index="09"
        kicker="Lo que dicen los proyectos"
        title={
          <>
            Trabajo real, <span className="premium-word">resultados que se notan</span>
          </>
        }
        intro="Cada proyecto resuelve un problema comercial concreto. Esto es lo que cambia cuando la presencia digital pasa a estar a la altura del negocio."
      />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.project} delay={i * 0.08}>
            <figure className="group relative flex h-full flex-col rounded-card border border-line bg-void/30 p-6 transition-colors hover:border-ink-soft/45 sm:p-7">
              <Quote
                size={26}
                className="text-ember/40 transition-colors group-hover:text-ember/70"
              />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={13} className="fill-ember text-ember" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft sm:text-base">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-line/50 pt-4">
                <span className="block font-display text-sm font-semibold text-ink">
                  {t.project}
                </span>
                <span className="mt-0.5 block text-xs text-ink-mute">
                  {t.sector}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 text-center text-xs text-ink-mute">
          Proyectos reales de nuestro portfolio. ¿Quieres ver las webs en vivo?{" "}
          <a href="#proyectos" className="text-ember hover:underline">
            Míralas aquí
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
