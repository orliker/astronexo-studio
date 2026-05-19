"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Eye, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { WHATSAPP_URL } from "@/lib/site";

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-32"
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          index="05"
          kicker="Portfolio real"
          title={
            <>
              Cómo se ve el trabajo
              <br />
              cuando va <span className="text-gradient">en serio</span>.
            </>
          }
          intro="Casos y previews ya publicados. Cada uno tiene una función comercial: elevar percepción, explicar mejor la oferta y acercar al visitante a una conversación real."
        />
        <Reveal delay={0.2}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            Quiero una preview para mi negocio
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  sector,
  desc,
  result,
  image,
  url,
  span,
  index,
}: Project & { index: number }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.28)} className={span}>
      <motion.article
        whileHover="hover"
        className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-deep/60"
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-[16/10] overflow-hidden bg-panel"
          aria-label={`Abrir ${title}`}
        >
          <Image
            src={image}
            alt={`Vista previa de ${title}`}
            fill
            sizes="(min-width: 1024px) 44vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top opacity-90 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
          <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3">
            <span className="rounded-full border border-line bg-void/70 px-3 py-1 text-[11px] uppercase tracking-wider text-ink-soft backdrop-blur">
              {sector}
            </span>
            <motion.span
              variants={{ hover: { rotate: 45, color: "#ff9d57" } }}
              transition={{ duration: 0.25 }}
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-void/65 text-ink-soft backdrop-blur"
            >
              <ArrowUpRight size={16} />
            </motion.span>
          </div>
        </a>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display text-lg font-semibold tracking-tight">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
          <p className="mt-4 rounded-2xl border border-line bg-void/35 px-4 py-3 text-xs uppercase tracking-[0.16em] text-ember">
            {result}
          </p>

          <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row sm:flex-wrap sm:pt-6">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-ink-soft hover:bg-panel sm:justify-start"
            >
              <Eye size={14} />
              Ver web
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm text-ink-soft transition-colors hover:text-ink sm:justify-start"
            >
              <MessageCircle size={14} />
              Pedir algo similar
            </a>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

type Project = {
  title: string;
  sector: string;
  desc: string;
  result: string;
  image: string;
  url: string;
  span: string;
};

const PROJECTS: Project[] = [
  {
    title: "CS Clinica",
    sector: "Clínica estética",
    desc: "Presencia médica con confianza inmediata: tratamiento claro, tono premium y contacto visible.",
    result: "Confianza + reserva",
    image: "/portfolio/portfolio-cs-clinica.jpeg",
    url: "https://cs-clinica.vercel.app/",
    span: "md:col-span-3",
  },
  {
    title: "Mundo de Papel Portugal",
    sector: "Producto personalizado",
    desc: "Catálogo visual para vender piezas personalizadas sin que parezcan una lista improvisada.",
    result: "Producto + compra",
    image: "/portfolio/portfolio-mundo-papel.jpeg",
    url: "https://www.mundodepapelportugal.com/",
    span: "md:col-span-3",
  },
  {
    title: "Sams Lyart",
    sector: "Marca creativa",
    desc: "Una web de autor con una primera impresión más editorial, directa y memorable.",
    result: "Autoridad visual",
    image: "/portfolio/portfolio-sams-lyart.jpeg",
    url: "https://sams-lyart.vercel.app/",
    span: "md:col-span-2",
  },
  {
    title: "Dom Cortes",
    sector: "Barbearia premium",
    desc: "Look masculino, reserva clara y posicionamiento de servicio premium desde el primer scroll.",
    result: "Reserva + valor",
    image: "/portfolio/portfolio-cortes-classicos.jpeg",
    url: "https://cortes-cl-ssicos.vercel.app/",
    span: "md:col-span-2",
  },
  {
    title: "Anderbrows Academy",
    sector: "Formación beauty",
    desc: "Landing para curso con autoridad, promesa específica y ruta directa hacia inscripción.",
    result: "Curso + lead",
    image: "/portfolio/portfolio-anderbrows.jpeg",
    url: "https://anderbrows.vercel.app/",
    span: "md:col-span-2",
  },
  {
    title: "KIRE Tattoo Studio",
    sector: "Tattoo studio",
    desc: "Identidad visual intensa, portfolio protagonista y contacto preparado para cerrar citas.",
    result: "Portfolio + cita",
    image: "/portfolio/portfolio-kire-tattoo.jpeg",
    url: "https://kire-tattoo-studio.vercel.app/",
    span: "md:col-span-3",
  },
  {
    title: "CURB Porto",
    sector: "Restaurante",
    desc: "Una preview de restaurante con deseo visual, energía local y CTA rápido para clientes hambrientos.",
    result: "Deseo + visita",
    image: "/portfolio/portfolio-curb.jpeg",
    url: "https://curbwebpreviewe.vercel.app/",
    span: "md:col-span-3",
  },
  {
    title: "Lado B Cafe",
    sector: "Café y restaurante",
    desc: "Página para hostelería con producto al frente, narrativa corta y conversión a visita/reserva.",
    result: "Producto + decisión",
    image: "/portfolio/portfolio-lado-b-cafe.jpeg",
    url: "https://lado-b-cafe.vercel.app/",
    span: "md:col-span-6",
  },
];
