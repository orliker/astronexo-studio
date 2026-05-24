"use client";

import { motion } from "framer-motion";
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

          {/* Nuevo Gráfico Visual con animaciones al scroll y efectos de hover interactivos */}
          <Reveal delay={0.32}>
            <div className="mt-12 premium-surface rounded-card border border-line bg-void/25 p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.1)] relative overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(255,157,87,0.04)]">
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(56,224,201,0.05),transparent_65%)] blur-2xl" />
              
              <span className="text-[10px] uppercase tracking-wider text-ink-mute flex items-center gap-1.5 mb-4 font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
                Visualización del Embudo de Fuga Comercial (Interactivo)
              </span>
              
              <div className="grid gap-6 md:grid-cols-2">
                {/* Columna 1: Embudo Roto Tradicional */}
                <div className="rounded-xl border border-line/45 bg-deep/10 p-4 space-y-3 transition-all duration-300 hover:border-red-400/30">
                  <span className="block text-[11px] font-bold text-red-400 uppercase tracking-wide flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-ping" />
                    Embudo Roto Tradicional
                  </span>
                  <div className="space-y-2">
                    {/* Barra 1 */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5 text-[9px] text-ink-mute font-mono">
                        <span>Tráfico Inicial</span>
                        <span>100%</span>
                      </div>
                      <div className="h-1 bg-void/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-ink-mute/55" 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    {/* Barra 2 */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5 text-[9px] text-red-400 font-mono">
                        <span>Primera Impresión (Web lenta)</span>
                        <span>-58% Fuga</span>
                      </div>
                      <div className="h-1 bg-void/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-red-400/80" 
                          initial={{ width: 0 }}
                          whileInView={{ width: "42%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    {/* Barra 3 */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5 text-[9px] text-red-400 font-mono">
                        <span>Interés (Soporte Lento)</span>
                        <span>-27% Fuga</span>
                      </div>
                      <div className="h-1 bg-void/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-red-400/60" 
                          initial={{ width: 0 }}
                          whileInView={{ width: "15%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                  <span className="block text-[9px] text-ink-mute leading-relaxed">
                    El 85% del presupuesto publicitario se evapora antes de iniciar una conversación real.
                  </span>
                </div>

                {/* Columna 2: Sistema Optimizado AstroNexo */}
                <div className="rounded-xl border border-aurora/25 bg-aurora/5 p-4 space-y-3 transition-all duration-300 hover:border-aurora/40 hover:shadow-[0_0_15px_rgba(56,224,201,0.06)]">
                  <span className="block text-[11px] font-bold text-aurora uppercase tracking-wide flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-aurora animate-pulse" />
                    Sistema Optimizado AstroNexo
                  </span>
                  <div className="space-y-2">
                    {/* Barra 1 */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5 text-[9px] text-ink-soft font-mono">
                        <span>Tráfico Inicial</span>
                        <span>100%</span>
                      </div>
                      <div className="h-1 bg-void/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-nebula-soft via-aurora to-aurora" 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    {/* Barra 2 */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5 text-[9px] text-aurora font-mono">
                        <span>Primera Impresión (Next.js Edge)</span>
                        <span>92% Retención</span>
                      </div>
                      <div className="h-1 bg-void/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-nebula-soft via-aurora to-aurora" 
                          initial={{ width: 0 }}
                          whileInView={{ width: "92%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    {/* Barra 3 */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5 text-[9px] text-aurora font-mono">
                        <span>Interés (Respuesta WhatsApp IA)</span>
                        <span>78% Cualificado</span>
                      </div>
                      <div className="h-1 bg-void/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-nebula-soft via-aurora to-aurora" 
                          initial={{ width: 0 }}
                          whileInView={{ width: "78%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                  <span className="block text-[9px] text-ink-soft leading-relaxed">
                    Canalización inmediata al chat de ventas para evitar fugas y automatizar agendamientos.
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.05}>
            <div
              data-gsap-breathe
              className="panel-edge premium-surface executive-grid relative mb-6 overflow-hidden rounded-card p-6"
            >
              <span
                data-gsap-scan
                className="pointer-events-none absolute inset-y-0 left-[-45%] w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)]"
              />
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
                        data-gsap-line
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
