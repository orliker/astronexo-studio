"use client";

import {
  Bot,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileText,
  Globe,
  Images,
  Megaphone,
  MessageCircle,
  Palette,
  ScanSearch,
  Search,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { WHATSAPP_URL } from "@/lib/site";

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-32"
    >
      <SectionHeading
        index="02"
        kicker="Capacidades del estudio"
        title={
          <>
            No vendemos páginas web sueltas.
            <br />
            Construimos <span className="text-gradient">activos</span> que
            venden.
          </>
        }
        intro="Estrategia, web, contenido, automatización y conversión trabajando juntos. Menos piezas sueltas, más presencia digital capaz de sostener una conversación seria."
      />

      <div className="mt-10 grid auto-rows-[minmax(150px,auto)] grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-3">
        {PACKAGES.map((pack, index) => (
          <PackageCard key={pack.title} {...pack} index={index} />
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
  tags?: string[];
};

function ServiceCard({
  title,
  desc,
  icon: Icon,
  span,
  feature,
  tags = [],
  index,
}: Service & { index: number }) {
  function onMove(e: React.MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <Reveal delay={Math.min(index * 0.045, 0.28)} className={span}>
      <motion.article
        onMouseMove={onMove}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative flex h-full min-h-[170px] flex-col justify-start gap-8 overflow-hidden rounded-card border border-line p-5 sm:min-h-[190px] sm:justify-between sm:p-7 ${
          feature
            ? "bg-[linear-gradient(160deg,rgba(17,19,32,0.88),rgba(7,8,13,0.98))]"
            : "bg-deep/60"
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(255,157,87,0.12), transparent 62%)",
          }}
        />

        {feature && <FeatureSignal />}

        <div className="relative flex items-start justify-between gap-4">
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
          {feature ? (
            <span className="rounded-full border border-line bg-deep/70 px-3 py-1 text-[10px] uppercase tracking-wider text-ember sm:text-[11px]">
              Lo más pedido
            </span>
          ) : null}
        </div>

        <div className={`relative ${feature ? "mt-0 sm:mt-20" : "mt-0 sm:mt-8"}`}>
          {tags.length > 0 ? (
            <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-void/35 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-ink-mute"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          <h3
            className={`font-display font-semibold tracking-tight ${
              feature ? "text-2xl sm:text-3xl" : "text-lg"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-2 text-pretty leading-relaxed text-ink-soft ${
              feature ? "max-w-xl text-[15px] sm:text-base" : "text-sm"
            }`}
          >
            {desc}
          </p>
        </div>
      </motion.article>
    </Reveal>
  );
}

function FeatureSignal() {
  return (
    <div className="pointer-events-none absolute inset-x-6 top-20 hidden h-28 sm:block">
      <motion.div
        animate={{ opacity: [0.42, 0.82, 0.42], x: [0, 10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-ember/70 to-transparent"
      />
      <div className="absolute left-0 top-5 grid w-full grid-cols-3 gap-3">
        {["Estrategia", "Interfaz", "Cierre"].map((label, i) => (
          <motion.div
            key={label}
            animate={{ y: [0, i % 2 ? -5 : 5, 0] }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-2xl border border-line bg-void/40 p-3"
          >
            <span className="block h-1.5 w-10 rounded-full bg-ember/55" />
            <span className="mt-3 block text-[10px] uppercase tracking-[0.18em] text-ink-mute">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
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
      <motion.article
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25 }}
        className={`flex h-full flex-col rounded-card border p-5 sm:p-7 ${
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

        <h3 className="mt-5 font-display text-[1.35rem] font-semibold tracking-tight sm:mt-6 sm:text-2xl">
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
      </motion.article>
    </Reveal>
  );
}

const SERVICES: Service[] = [
  {
    title: "Web premium para negocios",
    desc: "Una presencia digital rápida, visual y vendible: propuesta clara, autoridad, prueba real y camino directo hacia contacto.",
    icon: Globe,
    span: "sm:col-span-2 lg:col-span-2 sm:row-span-2",
    feature: true,
    tags: ["Estrategia", "Copy", "Deploy"],
  },
  {
    title: "Propuestas comerciales",
    desc: "Estructuramos tu oferta para que el cliente entienda qué vendes, cuánto valor tiene y cuál es el siguiente paso.",
    icon: FileText,
    span: "",
  },
  {
    title: "WhatsApp y automatizacion",
    desc: "Mensajes preescritos, formularios y flujos simples para convertir visitas en conversaciones sin perseguir leads.",
    icon: Bot,
    span: "",
  },
  {
    title: "Marketing y campañas",
    desc: "Landings y piezas de captación para promociones, lanzamientos, anuncios y ofertas con una ruta de conversión clara.",
    icon: Megaphone,
    span: "",
  },
  {
    title: "SEO local y estructura",
    desc: "Títulos, secciones, contenido y señales base para que Google y tus clientes entiendan rápido tu negocio.",
    icon: Search,
    span: "",
  },
  {
    title: "Analizador de Instagram",
    desc: "Revisamos biografía, highlights, oferta, confianza y coherencia visual para detectar por qué no te escriben.",
    icon: ScanSearch,
    span: "sm:col-span-2 lg:col-span-1",
  },
  {
    title: "Identidad digital",
    desc: "Ajustamos tono, visuales y mensajes para que tu presencia se sienta como una marca real, no como perfiles sueltos.",
    icon: Palette,
    span: "",
  },
  {
    title: "Menus digitales",
    desc: "Para restaurantes y cafés: carta visual, rápida, sin apps, con acceso fácil desde QR y WhatsApp.",
    icon: UtensilsCrossed,
    span: "",
  },
  {
    title: "Catalogos visuales",
    desc: "Tu producto presentado como una marca, con fotos, categorías y CTA de compra sin parecer una lista improvisada.",
    icon: Images,
    span: "",
  },
  {
    title: "Reservas y contacto",
    desc: "Sistemas para que reserven, pidan información o te contacten con el mensaje correcto desde el primer toque.",
    icon: CalendarCheck,
    span: "",
  },
  {
    title: "Auditoria premium anti IA",
    desc: "Revisamos jerarquía, copy, mobile y confianza para quitar señales genéricas y hacer la web más humana.",
    icon: ScanSearch,
    span: "",
  },
  {
    title: "Pagos integrados",
    desc: "Cuando tiene sentido, dejamos una ruta de cobro simple para reservas, productos o servicios concretos.",
    icon: CreditCard,
    span: "",
  },
];

const PACKAGES: Package[] = [
  {
    label: "Diagnóstico",
    title: "Radar de presencia digital",
    desc: "Para saber qué cambiar antes de construir. Revisamos Instagram, web, oferta y CTA con mirada comercial.",
    delivery: "24-48h",
    items: [
      "Auditoría de Instagram e identidad digital",
      "Mapa de fricciones que frenan mensajes",
      "Prioridades de web, copy y automatización",
    ],
  },
  {
    label: "Más pedido",
    title: "Sistema Web Premium",
    desc: "Para negocios que necesitan una presencia seria: landing o web corta con copy, diseño, desarrollo y contacto listo.",
    delivery: "48-72h",
    highlight: true,
    items: [
      "Hero con propuesta de valor real",
      "Servicios, portfolio, proceso y prueba visual",
      "Publicación responsive y lista para compartir",
    ],
  },
  {
    label: "Conversión",
    title: "WhatsApp + automatizacion",
    desc: "Para convertir visitas en conversaciones sin perseguir manualmente a cada cliente.",
    delivery: "72h máx.",
    items: [
      "Botones y mensajes preescritos",
      "Formulario o captura de leads simple",
      "Flujo de contacto pensado para cerrar dudas",
    ],
  },
];
