"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Proyectos / demos. Sin clientes inventados: cada tarjeta es una
 * "demo conceptual" con un mockup abstracto generado en CSS (no stock
 * genérico). Tamaños alternos para evitar la rejilla idéntica.
 */
export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          index="05"
          kicker="Previews por nicho"
          title={
            <>
              Cómo se ve el trabajo
              <br />
              cuando se hace <span className="text-gradient">en serio</span>.
            </>
          }
          intro="No son plantillas genéricas: son direcciones visuales para que un cliente entienda rápido qué podríamos crear para su negocio."
        />
        <Reveal delay={0.2}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
        >
            Quiero una preview
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} {...p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  sector,
  desc,
  mockup,
  span,
  index,
}: Project & { index: number }) {
  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)} className={span}>
      <motion.article
        whileHover="hover"
        className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-deep/50"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Mockup variant={mockup} />
          <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-line bg-void/60 px-3 py-1 text-[11px] uppercase tracking-wider text-ink-soft backdrop-blur">
            {sector}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-lg font-semibold tracking-tight">
              {title}
            </h3>
            <motion.span
              variants={{
                hover: { rotate: 45, color: "#ff9d57" },
              }}
              transition={{ duration: 0.3 }}
              className="text-ink-mute"
            >
              <ArrowUpRight size={18} />
            </motion.span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {desc}
          </p>
          <div className="mt-auto pt-5">
            <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-mute">
              Demo conceptual
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink-soft transition-colors hover:border-ink-soft hover:text-ink"
            >
              <MessageCircle size={14} />
              Pedir preview similar
            </a>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

/* Mockups abstractos en CSS — distintos entre sí, nada de stock IA */
function Mockup({ variant }: { variant: Project["mockup"] }) {
  const common =
    "absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]";
  switch (variant) {
    case "resto":
      return (
        <div className={`${common} bg-[radial-gradient(ellipse_at_30%_20%,#2a1c14,#0a0c14_70%)]`}>
          <div className="absolute inset-x-8 bottom-7 space-y-2">
            <div className="h-2.5 w-1/2 rounded-full bg-ember/70" />
            <div className="h-2 w-3/4 rounded-full bg-ink/15" />
            <div className="h-2 w-2/3 rounded-full bg-ink/10" />
          </div>
          <div className="absolute right-7 top-7 h-12 w-12 rounded-full border border-ember/40" />
        </div>
      );
    case "clinic":
      return (
        <div className={`${common} bg-[radial-gradient(ellipse_at_70%_30%,#0e2230,#0a0c14_70%)]`}>
          <div className="absolute inset-x-8 top-8 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((k) => (
              <div key={k} className="h-10 rounded-lg bg-aurora/10" />
            ))}
          </div>
          <div className="absolute bottom-7 left-8 h-2.5 w-2/5 rounded-full bg-aurora/60" />
        </div>
      );
    case "beauty":
      return (
        <div className={`${common} bg-[radial-gradient(ellipse_at_40%_60%,#241430,#0a0c14_70%)]`}>
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-nebula-soft/40" />
          <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nebula/20" />
        </div>
      );
    case "cleaning":
      return (
        <div className={`${common} bg-[radial-gradient(ellipse_at_60%_40%,#10222a,#0a0c14_70%)]`}>
          <div className="absolute inset-8 rounded-xl border border-aurora/25" />
          <div className="absolute left-12 top-12 h-2 w-1/3 rounded-full bg-aurora/50" />
        </div>
      );
    case "portfolio":
      return (
        <div className={`${common} bg-[radial-gradient(ellipse_at_50%_30%,#1c1d33,#0a0c14_70%)]`}>
          <div className="absolute left-8 top-1/2 -translate-y-1/2 space-y-2">
            <div className="h-3 w-28 rounded-full bg-ink/30" />
            <div className="h-2 w-20 rounded-full bg-nebula-soft/40" />
          </div>
        </div>
      );
    default:
      return (
        <div className={`${common} bg-[radial-gradient(ellipse_at_50%_50%,#1a1726,#0a0c14_70%)]`}>
          <div className="absolute inset-8 grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, k) => (
              <div key={k} className="rounded-md bg-ink/10" />
            ))}
          </div>
        </div>
      );
  }
}

type Project = {
  title: string;
  sector: string;
  desc: string;
  mockup: "resto" | "clinic" | "beauty" | "cleaning" | "portfolio" | "catalog";
  span: string;
};

const PROJECTS: Project[] = [
  {
    title: "Restaurante interactivo",
    sector: "Hostelería",
    desc: "Para locales que necesitan carta visual, reservas y una primera pantalla que invite a entrar.",
    mockup: "resto",
    span: "md:col-span-4",
  },
  {
    title: "Clínica moderna",
    sector: "Salud",
    desc: "Para consultas que venden confianza: tratamientos claros, equipo visible y contacto directo.",
    mockup: "clinic",
    span: "md:col-span-2",
  },
  {
    title: "Estudio de belleza",
    sector: "Estética",
    desc: "Para servicios donde la estética decide: oferta clara, galería visual y reserva en pocos toques.",
    mockup: "beauty",
    span: "md:col-span-2",
  },
  {
    title: "Cleaning service",
    sector: "Servicios locales",
    desc: "Para negocios locales que necesitan presupuesto rápido por WhatsApp y prueba social visible.",
    mockup: "cleaning",
    span: "md:col-span-2",
  },
  {
    title: "Catálogo / e-commerce visual",
    sector: "Producto",
    desc: "Para marcas con productos que necesitan verse premium antes de vender online.",
    mockup: "catalog",
    span: "md:col-span-2",
  },
  {
    title: "Portfolio personal",
    sector: "Marca personal",
    desc: "Para expertos, creadores o freelancers que necesitan autoridad, no un currículum disfrazado.",
    mockup: "portfolio",
    span: "md:col-span-6",
  },
];
