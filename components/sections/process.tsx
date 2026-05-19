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
      className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36"
    >
      <SectionHeading
        index="04"
        kicker="Cómo trabajamos"
        title={
          <>
            Un proceso corto,
            <br /> sin humo y{" "}
            <span className="text-gradient">sin sorpresas</span>.
          </>
        }
        intro="Auditoría, propuesta, diseño, desarrollo y entrega. Todo enfocado a que puedas enseñar algo profesional en 48-72 horas."
      />

      <div ref={ref} className="relative mt-20">
        {/* Riel base */}
        <div className="absolute left-[22px] top-2 h-full w-px bg-line md:left-1/2 md:-translate-x-1/2" />
        {/* Riel iluminado */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[22px] top-2 h-full w-px origin-top bg-gradient-to-b from-nebula via-nebula-soft to-ember md:left-1/2 md:-translate-x-1/2"
        />

        <ol className="space-y-12 md:space-y-0">
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
          <h3 className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">
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
    tag: "Día 0",
    title: "Auditoría rápida",
    desc: "Nos envías tu Instagram, web o idea. Detectamos qué falta para que el cliente confíe antes y escriba antes.",
  },
  {
    tag: "Día 1",
    title: "Propuesta clara",
    desc: "Te devolvemos una dirección: qué crear, qué secciones necesita y cuál será el CTA principal.",
  },
  {
    tag: "Día 1-2",
    title: "Diseño premium",
    desc: "Convertimos la idea en una página visual, con copy directo, pruebas por nicho y una primera impresión fuerte.",
  },
  {
    tag: "Día 2-3",
    title: "Desarrollo + WhatsApp",
    desc: "Construimos la web responsive, conectamos el embudo de contacto y dejamos el mensaje de WhatsApp listo.",
  },
  {
    tag: "48-72h",
    title: "Entrega y próximos pasos",
    desc: "Te entregamos una versión lista para compartir, con ajustes finales y recomendaciones para seguir creciendo.",
  },
];
