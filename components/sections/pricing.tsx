"use client";

import { Check, MessageCircle, ArrowRight, Boxes, CreditCard, Database, LayoutGrid } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";

const PACKS = [
  {
    name: "Launch Web",
    price: "Desde 150€ - 250€",
    desc: "Ideal para negocios locales y profesionales independientes que necesitan una landing page premium para captar clientes.",
    inclusions: [
      "Landing page ultra-rápida y responsive",
      "Copywriting persuasivo orientado a ventas",
      "Botón e integración directa de WhatsApp",
      "Secciones esenciales de marca",
      "Ajustes de SEO básico e indexación en Google",
      "Hospedaje inicial y publicación rápida",
    ],
    cta: "Quiero este pack web",
    link: "https://wa.me/351931056365?text=Hola%20Alex%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20pack%20Launch%20Web%20para%20mi%20negocio.",
    highlight: false,
  },
  {
    name: "WhatsApp IA Starter",
    price: "Desde 250€ - 500€",
    desc: "Ideal para negocios que reciben muchos mensajes repetidos y quieren automatizar respuestas, calificar leads y agendar citas.",
    inclusions: [
      "Flujo automatizado de chat con respuestas 24/7",
      "Calificación de prospectos (leads) invisible",
      "Integración con Google Calendar / Calendly",
      "Conexión con CRM o bases de datos recomendadas",
      "Configuración base en n8n sin costos fijos altos",
      "Textos redactados para máxima respuesta",
    ],
    cta: "Quiero este pack de WhatsApp",
    link: "https://wa.me/351931056365?text=Hola%20Alex%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20pack%20WhatsApp%20IA%20Starter%20para%20mi%20negocio.",
    highlight: true,
  },
  {
    name: "Facturas Automáticas",
    price: "Desde 90€",
    desc: "Para negocios que aún llevan las facturas a mano en Excel o papel y quieren un panel claro, automático y cómodo.",
    inclusions: [
      "Panel visual de facturas (cobrado / pendiente)",
      "Registro y búsqueda instantánea por cliente o fecha",
      "Gráficos de ingresos y totales del mes",
      "Avisos de facturas por cobrar y vencimientos",
      "Exportable e integrable con tu sistema actual",
      "Pensado para restaurantes, tiendas, talleres y autónomos",
    ],
    cta: "Quiero ordenar mis facturas",
    link: "https://wa.me/351931056365?text=Hola%20Alex%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20sistema%20de%20Facturas%20Autom%C3%A1ticas%20para%20mi%20negocio.",
    highlight: false,
  },
  {
    name: "Growth System",
    price: "Desde 500€+",
    desc: "Ecosistema comercial completo para negocios que quieren dominar su presencia local, captar leads y automatizar el cierre.",
    inclusions: [
      "Diseño de Web Premium completa (multipage)",
      "Sistema de WhatsApp IA y n8n integrado",
      "Estrategia de posicionamiento SEO Local (Maps)",
      "Embudo de captación y anuncios configurado",
      "Consistencia de identidad digital y marca",
      "Auditoría mensual y roadmap de optimización",
    ],
    cta: "Quiero el sistema completo",
    link: "https://wa.me/351931056365?text=Hola%20Alex%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20pack%20Growth%20System%20para%20mi%20negocio.",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section
      id="tarifas"
      className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 border-t border-line bg-void/5"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,157,87,0.01),transparent_65%)] blur-3xl" />

      <Reveal>
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-ember font-mono">
            Puntos de Entrada
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-4xl">
            Elige el punto de partida de tu sistema digital
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-ink-mute max-w-2xl mx-auto">
            Trabajamos desde una automatización sencilla hasta sistemas completos a medida. Tarifas transparentes y orientativas, adaptadas a la fase de tu negocio. Sin contratos de permanencia abusivos.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 items-stretch">
        {PACKS.map((pack, idx) => (
          <Reveal key={pack.name} delay={idx * 0.08} className="flex">
            <div
              className={`premium-surface w-full flex flex-col justify-between rounded-card border p-6 sm:p-8 bg-void/25 relative transition-all duration-300 ${
                pack.highlight
                  ? "border-ember bg-gradient-to-b from-ember/5 via-void/10 to-void/10 shadow-[0_15px_45px_-20px_rgba(255,157,87,0.1)]"
                  : "border-line bg-deep/15 hover:border-ink-soft"
              }`}
            >
              {pack.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ember border border-line px-3 py-1 text-[8px] uppercase tracking-[0.16em] text-void font-bold">
                  Más Solicitado
                </span>
              )}

              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {pack.name}
                </h3>
                <span className="mt-4 block font-display text-2xl font-bold text-ink sm:text-3xl">
                  {pack.price}
                </span>
                <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                  {pack.desc}
                </p>

                <ul className="mt-6 space-y-3.5 border-t border-line/45 pt-6">
                  {pack.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-ink-soft">
                      <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-void border border-line text-ember">
                        <Check size={10} className="stroke-[3]" />
                      </span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href={pack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`micro-glint group flex w-full items-center justify-center gap-1.5 rounded-full py-3 text-xs font-semibold transition-all ${
                    pack.highlight
                      ? "bg-ink text-void hover:bg-white"
                      : "border border-line bg-void text-ink hover:border-ink-soft"
                  }`}
                >
                  <MessageCircle size={14} />
                  {pack.cta}
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Banda: proyectos a medida (sin techo) — capta al cliente grande */}
      <Reveal delay={0.1}>
        <div className="panel-edge premium-surface mt-8 overflow-hidden rounded-card p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-nebula/30 bg-nebula/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-nebula-soft">
                <Boxes size={13} />
                Proyectos a medida · sin techo
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                ¿Necesitas algo más grande? Lo construimos.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Tiendas online, catálogos interactivos tipo configurador, áreas de
                cliente con login, pagos con Stripe, conexión con bases de datos y
                sistemas completos. Webs serias para negocios en crecimiento, startups
                y marcas que se quedaron atrás en WordPress. <span className="text-ink">Desde 1.500€</span>, según alcance.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { icon: LayoutGrid, label: "Catálogo / e-commerce" },
                  { icon: CreditCard, label: "Pagos con Stripe" },
                  { icon: Database, label: "Login y base de datos" },
                ].map((f) => {
                  const Icon = f.icon;
                  return (
                    <span
                      key={f.label}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-void/40 px-3 py-1.5 text-xs text-ink-soft"
                    >
                      <Icon size={13} className="text-nebula-soft" />
                      {f.label}
                    </span>
                  );
                })}
              </div>
            </div>
            <a
              href="https://wa.me/351931056365?text=Hola%20Alex%2C%20tengo%20un%20proyecto%20m%C3%A1s%20grande%20(tienda%2Fcat%C3%A1logo%2Fsistema%20a%20medida)%20y%20quiero%20comentarlo."
              target="_blank"
              rel="noopener noreferrer"
              className="micro-glint group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-void transition-colors hover:bg-white"
            >
              <MessageCircle size={16} />
              Hablar de mi proyecto
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
