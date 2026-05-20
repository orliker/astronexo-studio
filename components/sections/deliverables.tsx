"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  CheckCircle2,
  FileText,
  Gauge,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Search,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";

const DELIVERABLES = [
  {
    title: "Diagnostico comercial",
    desc: "Detectamos donde se rompe la confianza: mensaje, oferta, visual, mobile, SEO y siguiente paso.",
    icon: Search,
  },
  {
    title: "Arquitectura de oferta",
    desc: "Ordenamos servicios, paquetes y CTA para que el visitante entienda por que escribirte ahora.",
    icon: Layers3,
  },
  {
    title: "Copy de venta",
    desc: "Textos especificos para tu sector, sin frases vacias ni promesas que suenan a plantilla.",
    icon: FileText,
  },
  {
    title: "Interfaz premium",
    desc: "Composicion, tipografia, contraste y motion para que la web se sienta trabajada, no generada.",
    icon: Sparkles,
  },
  {
    title: "Mobile de verdad",
    desc: "Jerarquia, botones y secciones pensadas para quien decide desde el movil en pocos segundos.",
    icon: Smartphone,
  },
  {
    title: "Embudo WhatsApp",
    desc: "Mensajes preescritos y rutas de contacto para convertir interes en conversacion.",
    icon: MessageCircle,
  },
  {
    title: "Automatizacion simple",
    desc: "Captura, respuesta o clasificacion de leads cuando el negocio ya necesita orden operativo.",
    icon: Bot,
  },
  {
    title: "SEO y seguridad base",
    desc: "Metadata, estructura, headers, enlaces seguros y deploy limpio para presentar con confianza.",
    icon: LockKeyhole,
  },
];

const QUALITY = [
  "Sin claims vacios",
  "Sin cards repetidas sin sentido",
  "Sin CTAs perdidos",
  "Sin mobile de segunda clase",
  "Sin dejar el negocio pareciendo pequeno",
];

export function DeliverablesSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-line bg-deep/30">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,224,201,0.08),transparent_68%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            index="03"
            kicker="Sistema AstroNexo"
            title={
              <>
                Lo que entregamos
                <br />
                no es una web. Es una{" "}
                <span className="premium-word">maquina de confianza</span>.
              </>
            }
            intro="Cada pieza tiene una funcion: explicar, elevar, convertir o reducir friccion. Si no ayuda a vender mejor, no entra."
          />

          <Reveal delay={0.1}>
            <div className="panel-edge relative overflow-hidden rounded-card p-6 sm:p-7">
              <motion.div
                data-anime="pulse-line"
                animate={reduce ? undefined : { x: ["-10%", "10%", "-10%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-aurora/70 to-transparent"
              />
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-void/50 text-aurora">
                  <Gauge size={20} />
                </span>
                <div>
                  <p className="font-display text-xl font-semibold tracking-tight">
                    Control de calidad premium
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    El criterio es simple: que un cliente con dinero te tome en
                    serio antes de hablar contigo.
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {QUALITY.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink-soft">
                    <CheckCircle2 size={16} className="shrink-0 text-aurora" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERABLES.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={Math.min(index * 0.045, 0.26)}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group relative h-full overflow-hidden rounded-card border border-line bg-void/45 p-5 sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-nebula/10 blur-2xl" />
                    <div className="absolute -bottom-10 left-4 h-24 w-24 rounded-full bg-ember/10 blur-2xl" />
                  </div>
                  <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-line bg-panel/70 text-nebula-soft">
                    <Icon size={18} />
                  </span>
                  <h3 className="relative mt-7 font-display text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.desc}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
