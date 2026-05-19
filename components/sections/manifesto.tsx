"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion-primitives";

/**
 * Pieza emocional / prueba visual. Tipografía masiva con parallax suave
 * de las palabras clave. Es la sección que "se siente cara".
 */
export function ManifestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-line py-32 sm:py-48"
    >
      <motion.div
        style={{ opacity: glow }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.25),transparent_65%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-ink-mute">
            La diferencia
          </p>
        </Reveal>

        <h2 className="mt-8 font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-6xl lg:text-[5rem]">
          <Reveal>
            <span className="block">No fabricamos páginas.</span>
          </Reveal>
          <Reveal delay={0.12}>
            <motion.span style={{ y: y1 }} className="block">
              Diseñamos{" "}
              <span className="text-gradient">percepción</span>
            </motion.span>
          </Reveal>
          <Reveal delay={0.2}>
            <motion.span style={{ y: y2 }} className="block text-ember">
              que vende.
            </motion.span>
          </Reveal>
        </h2>

        <Reveal delay={0.28}>
          <p className="mx-auto mt-10 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Cuando alguien con presupuesto entra en tu web, no está mirando
            solo diseño. Está midiendo riesgo, criterio y confianza. Nosotros
            hacemos que esos segundos trabajen a tu favor.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
