"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";

/**
 * Proceso como timeline vertical. Una línea central se "rellena" de
 * luz según el scroll (scaleY ligado a progreso). Cada paso entra
 * alternando lado en desktop para romper la simetría plana.
 */
export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="proceso"
      className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-36"
    >
      <SectionHeading
        index="04"
        kicker="Cómo trabajamos"
        title={
          <>
            Un proceso de alto criterio,
            <br /> sin humo y{" "}
            <span className="text-gradient">sin sorpresas</span>.
          </>
        }
        intro="Auditoría, estrategia, diseño, desarrollo y entrega. El primer sprint puede ser rápido, pero la decisión detrás de cada sección es deliberada."
      />

      <div ref={ref} className="relative mt-14 sm:mt-20">
        {/* Riel base */}
        <div className="absolute left-[22px] top-2 h-full w-px bg-line md:left-1/2 md:-translate-x-1/2" />
        {/* Riel iluminado */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[22px] top-2 h-full w-px origin-top bg-gradient-to-b from-nebula via-nebula-soft to-ember md:left-1/2 md:-translate-x-1/2"
        />

        <ol className="space-y-10 md:space-y-0">
          {STEPS.map((s, i) => (
            <Step key={s.title} {...s} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Step({
  title,
  desc,
  tag,
  index,
}: {
  title: string;
  desc: string;
  tag: string;
  index: number;
}) {
  const left = index % 2 === 0;
  return (
    <li className="relative md:grid md:min-h-[150px] md:grid-cols-2 md:gap-16">
      {/* Nodo */}
      <span className="absolute left-[14px] top-1.5 z-10 grid h-4 w-4 place-items-center rounded-full border border-nebula-soft bg-void md:left-1/2 md:-translate-x-1/2">
        <span className="h-1.5 w-1.5 rounded-full bg-ember" />
      </span>

      <Reveal
        delay={0.05}
        className={`pl-12 md:pl-0 ${
          left
            ? "md:col-start-1 md:pr-4 md:text-right"
            : "md:col-start-2 md:pl-4"
        }`}
      >
        <div className="md:py-6">
          <span className="text-xs uppercase tracking-[0.2em] text-ember">
            {tag}
          </span>
          <h3 className="mt-2 font-display text-lg font-semibold tracking-tight sm:text-2xl">
            <span className="mr-2 text-ink-mute tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            {title}
          </h3>
          <p
            className={`mt-2 max-w-md text-sm leading-relaxed text-ink-soft ${
              left ? "md:ml-auto" : ""
            }`}
          >
            {desc}
          </p>
        </div>
      </Reveal>
    </li>
  );
}

const STEPS = [
  {
    tag: "Fase 01",
    title: "Diagnóstico de presencia",
    desc: "Analizamos tu web, Instagram, oferta y ruta de contacto para detectar dónde se pierde confianza o intención de compra.",
  },
  {
    tag: "Fase 02",
    title: "Estrategia de conversión",
    desc: "Definimos mensaje, secciones, prueba visual, CTA principal y el camino que debe seguir un cliente interesado.",
  },
  {
    tag: "Fase 03",
    title: "Dirección visual premium",
    desc: "Diseñamos una interfaz con jerarquía, movimiento y copy para que la marca se perciba más seria desde el primer vistazo.",
  },
  {
    tag: "Fase 04",
    title: "Desarrollo y sistema de contacto",
    desc: "Construimos la web responsive, conectamos WhatsApp, cuidamos rendimiento y dejamos cada enlace listo para convertir.",
  },
  {
    tag: "Sprint 48-72h",
    title: "Entrega, seguridad y próximos pasos",
    desc: "Publicamos una versión sólida, revisamos mobile, headers, metadata y dejamos recomendaciones para escalar el activo.",
  },
];
