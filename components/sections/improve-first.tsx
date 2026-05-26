"use client";

import { MessageCircle, Globe, Search, Palette, ArrowRight, FileSpreadsheet } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";

const PRIORITIES = [
  {
    title: "Automatizar WhatsApp",
    desc: "Responde preguntas frecuentes, filtra leads y guía clientes sin hacerlo todo a mano.",
    cta: "Quiero automatizar",
    icon: MessageCircle,
    color: "text-ember border-ember/20 bg-ember/5",
    link: "https://wa.me/351931056365?text=Hola%20Alex%2C%20quiero%20automatizar%20WhatsApp%20o%20respuestas%20de%20clientes%20con%20IA.",
  },
  {
    title: "Automatizar facturas",
    desc: "Deja el Excel manual: registra, organiza y visualiza tus facturas en un panel claro y automático.",
    cta: "Quiero ordenar facturas",
    icon: FileSpreadsheet,
    color: "text-aurora border-aurora/20 bg-aurora/5",
    link: "https://wa.me/351931056365?text=Hola%20Alex%2C%20quiero%20automatizar%20la%20gesti%C3%B3n%20de%20facturas%20de%20mi%20negocio.",
  },
  {
    title: "Crear una web premium",
    desc: "Convierte tu Instagram o idea en una web rápida, visual y preparada para vender.",
    cta: "Quiero una web",
    icon: Globe,
    color: "text-aurora border-aurora/20 bg-aurora/5",
    link: "https://wa.me/351931056365?text=Hola%20Alex%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20web%20premium%20para%20mi%20negocio.",
  },
  {
    title: "Aparecer mejor en Google",
    desc: "Optimiza tu presencia local para recibir más llamadas, visitas y solicitudes.",
    cta: "Mejorar SEO local",
    icon: Search,
    color: "text-nebula-soft border-nebula/20 bg-nebula/5",
    link: "https://wa.me/351931056365?text=Hola%20Alex%2C%20quiero%20mejorar%20mi%20presencia%20en%20Google%20y%20captar%20m%C3%A1s%20clientes%20locales.",
  },
  {
    title: "Mejorar imagen y marca",
    desc: "Haz que tu negocio se vea más profesional, confiable y premium desde el primer clic.",
    cta: "Mejorar mi presencia",
    icon: Palette,
    color: "text-ink border-line bg-void/45",
    link: "https://wa.me/351931056365?text=Hola%20Alex%2C%20quiero%20mejorar%20la%20imagen%20y%20presencia%20digital%20de%20mi%20negocio.",
  },
];

export function ImproveFirst() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20 border-t border-line">
      <div className="pointer-events-none absolute -right-24 top-0 h-[25rem] w-[25rem] rounded-full bg-[radial-gradient(circle,rgba(255,157,87,0.02),transparent_65%)] blur-3xl" />
      
      <Reveal>
        <div className="text-center sm:text-left mb-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-ember font-mono">
            Ruta de Acción Rápida
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-4xl">
            ¿Qué quieres mejorar primero?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-ink-mute max-w-xl">
            Selecciona tu prioridad y activa un plan de acción directo con nosotros por WhatsApp.
          </p>
        </div>
      </Reveal>

      {/* Grid en desktop, micro-carrusel táctil con scroll-snap en móvil */}
      <div className="mt-8 flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-5 px-5 pb-4 md:grid md:grid-cols-5 md:gap-5 md:mx-0 md:px-0 md:pb-0">
        {PRIORITIES.map((p, idx) => {
          const Icon = p.icon;
          return (
            <Reveal key={p.title} delay={idx * 0.05} className="flex shrink-0 snap-center w-[275px] md:w-auto md:shrink">
              <div className="premium-surface w-full flex flex-col justify-between rounded-card border border-line bg-void/25 p-5 transition-all duration-300 hover:border-ink-soft hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
                <div>
                  <span className={`grid h-9 w-9 place-items-center rounded-xl border ${p.color} mb-4`}>
                    <Icon size={17} />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft min-h-[50px]">
                    {p.desc}
                  </p>
                </div>
                
                <div className="mt-5 pt-4 border-t border-line/45">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-ember transition-colors group"
                  >
                    {p.cta}
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
