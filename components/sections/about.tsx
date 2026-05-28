"use client";

import { MapPin, MessageCircle, Sparkles, Layers } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { WHATSAPP_URL } from "@/lib/site";
import { useLang, dict } from "@/components/lang-provider";
import { BrandLogo } from "@/components/brand-logo";

/**
 * Sección "Quiénes somos". Humaniza la marca: estudio real de Oporto,
 * trato directo con Alex, filosofía y alcance sin techo técnico.
 * Es lo que faltaba: cara humana detrás de toda la maquinaria.
 */

export function AboutSection() {
  const { tr } = useLang();

  const points = [
    { icon: MapPin, t: dict.about.point1Title, d: dict.about.point1 },
    { icon: MessageCircle, t: dict.about.point2Title, d: dict.about.point2 },
    { icon: Sparkles, t: dict.about.point3Title, d: dict.about.point3 },
    { icon: Layers, t: dict.about.point4Title, d: dict.about.point4 },
  ];

  return (
    <section
      id="sobre-nosotros"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 border-t border-line"
    >
      <div className="pointer-events-none absolute -left-16 top-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.05),transparent_65%)] blur-3xl" />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-center">
        {/* Texto */}
        <div>
          <SectionHeading
            index="11"
            kicker={tr(dict.about.kicker)}
            title={tr(dict.about.title)}
          />
          <Reveal delay={0.12}>
            <p className="mt-6 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              {tr(dict.about.p1)}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-4 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              {tr(dict.about.p2)}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="micro-glint group mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-void transition-colors hover:bg-white"
            >
              <MessageCircle size={16} />
              {tr(dict.about.cta)}
            </a>
          </Reveal>
        </div>

        {/* Tarjeta de marca + 4 puntos */}
        <Reveal delay={0.1}>
          <div className="panel-edge premium-surface relative overflow-hidden rounded-card p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-line/50 pb-5">
              <BrandLogo compact={false} />
              <span className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-ember">
                <MapPin size={12} />
                Oporto · PT
              </span>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {points.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col gap-1.5 rounded-2xl border border-line bg-void/30 p-4"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-panel text-nebula-soft">
                      <Icon size={15} />
                    </span>
                    <span className="mt-1 text-sm font-semibold text-ink">
                      {tr(p.t)}
                    </span>
                    <span className="text-xs leading-relaxed text-ink-mute">
                      {tr(p.d)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
