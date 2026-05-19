"use client";

import {
  Globe,
  Rocket,
  UtensilsCrossed,
  Images,
  CalendarCheck,
  MessageCircle,
  Workflow,
  ScanSearch,
  Inbox,
  CreditCard,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Servicios con jerarquía editorial:
 * - 1 servicio "ancla" grande (web premium) ocupa 2 columnas y 2 filas.
 * - El resto entra en un bento de tamaños mixtos, no una rejilla plana.
 * El movimiento de luz sigue al cursor sobre cada panel (desktop).
 */
export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36"
    >
      <SectionHeading
        index="02"
        kicker="Lo que diseñamos"
        title={
          <>
            No vendemos páginas web sueltas.
            <br />
            Construimos <span className="text-gradient">activos</span> que
            venden.
          </>
        }
        intro="Diseño premium, claridad comercial y contacto directo. Cada pieza está pensada para que tu cliente entienda, confíe y te escriba."
      />

      <div className="mt-16 grid auto-rows-[minmax(170px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} />
        ))}
      </div>

      <div className="mt-16 grid gap-4 lg:grid-cols-3">
        {PACKAGES.map((p, i) => (
          <PackageCard key={p.title} {...p} index={i} />
        ))}
      </div>
    </section>
  );
}

type Service = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  span: string;
  feature?: boolean;
};

function ServiceCard({
  title,
  desc,
  icon: Icon,
  span,
  feature,
  index,
}: Service & { index: number }) {
  function onMove(e: React.MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <Reveal
      delay={Math.min(index * 0.05, 0.3)}
      className={span}
    >
      <motion.article
        onMouseMove={onMove}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-card border border-line p-6 sm:p-7 ${
          feature
            ? "bg-[linear-gradient(160deg,#11132099,#0a0c14)]"
            : "bg-deep/60"
        }`}
      >
        {/* Luz que sigue al cursor */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(124,108,255,0.13), transparent 60%)",
          }}
        />

        <div className="relative flex items-start justify-between">
          <span
            className={`grid place-items-center rounded-xl border border-line ${
              feature ? "h-12 w-12 bg-panel" : "h-10 w-10 bg-panel/70"
            }`}
          >
            <Icon
              size={feature ? 22 : 18}
              className="text-nebula-soft transition-colors group-hover:text-ink"
            />
          </span>
          {feature && (
            <span className="rounded-full border border-line bg-deep/70 px-3 py-1 text-[11px] uppercase tracking-wider text-ember">
              Lo más pedido
            </span>
          )}
        </div>

        <div className="relative mt-8">
          <h3
            className={`font-display font-semibold tracking-tight ${
              feature ? "text-2xl sm:text-3xl" : "text-lg"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-2 text-pretty leading-relaxed text-ink-soft ${
              feature ? "max-w-md text-base" : "text-sm"
            }`}
          >
            {desc}
          </p>
        </div>
      </motion.article>
    </Reveal>
  );
}

type Package = {
  label: string;
  title: string;
  desc: string;
  delivery: string;
  items: string[];
  highlight?: boolean;
};

function PackageCard({
  label,
  title,
  desc,
  delivery,
  items,
  highlight,
  index,
}: Package & { index: number }) {
  return (
    <Reveal delay={0.12 + index * 0.06}>
      <article
        className={`flex h-full flex-col rounded-card border p-6 sm:p-7 ${
          highlight
            ? "border-ember/45 bg-[linear-gradient(160deg,rgba(255,157,87,0.12),rgba(13,16,25,0.78))]"
            : "border-line bg-deep/55"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-[0.2em] text-ember">
            {label}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-void/45 px-3 py-1 text-xs text-ink-soft">
            <Clock3 size={14} />
            {delivery}
          </span>
        </div>

        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{desc}</p>

        <ul className="mt-6 space-y-3 text-sm text-ink-soft">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-aurora"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink-soft hover:bg-panel"
        >
          <MessageCircle size={15} />
          Pedir este paquete
        </a>
      </article>
    </Reveal>
  );
}

const SERVICES: Service[] = [
  {
    title: "Webs premium para negocios",
    desc: "Una experiencia visual, rápida y memorable que posiciona tu negocio donde merece estar y lleva al cliente a escribirte.",
    icon: Globe,
    span: "sm:col-span-2 sm:row-span-2",
    feature: true,
  },
  {
    title: "Landing pages de venta",
    desc: "Una sola página con un objetivo: convertir. Ideal para campañas, lanzamientos y captación.",
    icon: Rocket,
    span: "",
  },
  {
    title: "Menús digitales",
    desc: "Para restaurantes y cafés. Carta visual, rápida, sin apps, que da hambre con solo verla.",
    icon: UtensilsCrossed,
    span: "",
  },
  {
    title: "Catálogos visuales",
    desc: "Tu oferta presentada como una marca, no como una lista de WhatsApp.",
    icon: Images,
    span: "sm:col-span-2 lg:col-span-1",
  },
  {
    title: "Reservas y contacto",
    desc: "Sistemas para que reserven o te contacten sin fricción, directo a tu canal.",
    icon: CalendarCheck,
    span: "",
  },
  {
    title: "Integración con WhatsApp",
    desc: "El cliente pasa de mirar a escribirte con un toque, con el mensaje correcto ya escrito.",
    icon: MessageCircle,
    span: "",
  },
  {
    title: "Automatizaciones simples",
    desc: "Respuestas, leads, avisos y pasos repetitivos conectados para que tu negocio parezca más ágil.",
    icon: Workflow,
    span: "",
  },
  {
    title: "Auditoría y presencia digital",
    desc: "Revisamos cómo te ve tu cliente hoy y qué cambiar para que confíe antes.",
    icon: ScanSearch,
    span: "",
  },
  {
    title: "Formularios y captación",
    desc: "Convierte visitas en contactos reales con formularios que la gente sí completa.",
    icon: Inbox,
    span: "",
  },
  {
    title: "Pagos integrados",
    desc: "Si tu negocio lo necesita, cobra online de forma simple y segura.",
    icon: CreditCard,
    span: "",
  },
];

const PACKAGES: Package[] = [
  {
    label: "Arranque",
    title: "Propuesta Express",
    desc: "Para saber qué crear sin perder semanas pensando. Revisamos tu Instagram, web o idea y te devolvemos una dirección clara.",
    delivery: "48h",
    items: [
      "Auditoría rápida de presencia digital",
      "Idea visual y estructura de la página",
      "CTA principal y embudo de WhatsApp",
    ],
  },
  {
    label: "Más pedido",
    title: "Web Premium 72h",
    desc: "Para negocios que necesitan verse profesionales ya: landing o web corta con copy, diseño, desarrollo y contacto listo.",
    delivery: "48-72h",
    highlight: true,
    items: [
      "Hero potente con propuesta de valor",
      "Servicios, nichos, pruebas visuales y proceso",
      "Publicación responsive y lista para compartir",
    ],
  },
  {
    label: "Conversión",
    title: "WhatsApp + automatización",
    desc: "Para convertir visitas en conversaciones sin perseguir manualmente a cada cliente.",
    delivery: "72h máx.",
    items: [
      "Botones y mensajes preescritos",
      "Formulario o captura de leads simple",
      "Flujo de contacto pensado para cerrar dudas",
    ],
  },
];
