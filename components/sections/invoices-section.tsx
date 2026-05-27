"use client";

import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  MessageCircle,
  ArrowUpRight,
  Check,
  TrendingUp,
  Bell,
  Search,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";

/**
 * Sección de Automatización de Facturas.
 *
 * Argumento de venta: muchos negocios (restaurantes, tiendas, talleres,
 * autónomos) guardan facturas a mano en Excel o en papel. Es lento,
 * se pierde info y no da visibilidad. Lo traducimos a un panel
 * automático, visual y cómodo. Mostramos el contraste caos→orden.
 */

const BENEFITS = [
  {
    icon: Search,
    title: "Todo encontrable al instante",
    detail: "Busca cualquier factura por cliente, fecha o importe en segundos.",
  },
  {
    icon: TrendingUp,
    title: "Visión clara de tu dinero",
    detail: "Ingresos, pendientes y totales en gráficos, no en celdas sueltas.",
  },
  {
    icon: Bell,
    title: "Avisos automáticos",
    detail: "Recordatorios de facturas por cobrar y vencimientos sin perseguir a nadie.",
  },
  {
    icon: Check,
    title: "Menos errores manuales",
    detail: "Se acabó duplicar, perder o teclear mal números en una hoja.",
  },
];

export function InvoicesSection() {
  const whatsappLink =
    "https://wa.me/351931056365?text=Hola%20Alex%2C%20quiero%20automatizar%20la%20gesti%C3%B3n%20de%20facturas%20de%20mi%20negocio%20(ahora%20las%20llevo%20a%20mano).";

  return (
    <section
      id="facturas"
      className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 border-t border-line"
    >
      <div className="pointer-events-none absolute -right-16 top-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(56,224,201,0.03),transparent_65%)] blur-3xl" />

      <SectionHeading
        index="04"
        kicker="Automatización de Facturas"
        title={
          <>
            Deja el Excel manual. <span className="premium-word">Tus facturas, ordenadas solas</span>
          </>
        }
        intro="Si llevas las facturas a mano en hojas de Excel o en papel, pierdes tiempo, visibilidad y a veces dinero. Te montamos un panel donde todo se registra, organiza y visualiza de forma automática, clara y cómoda."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        {/* Beneficios */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {BENEFITS.map((b, index) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={index * 0.07}>
                <div className="flex h-full flex-col gap-2 rounded-card border border-line bg-void/30 p-4 transition-colors hover:border-aurora/35">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-aurora/25 bg-aurora/5 text-aurora">
                    <Icon size={16} />
                  </span>
                  <span className="font-display text-sm font-semibold text-ink">
                    {b.title}
                  </span>
                  <span className="text-xs leading-relaxed text-ink-soft">
                    {b.detail}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Mini-demo visual: caos Excel → panel limpio */}
        <Reveal delay={0.1}>
          <div className="panel-edge premium-surface relative overflow-hidden rounded-card p-5 sm:p-6">
            <span className="text-[10px] uppercase tracking-wider text-ink-mute flex items-center gap-1.5 mb-4 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-aurora animate-pulse" />
              De la hoja caótica al panel claro
            </span>

            <div className="grid gap-3 sm:grid-cols-2">
              {/* Antes: Excel manual */}
              <div className="rounded-xl border border-red-400/20 bg-deep/20 p-3">
                <span className="block text-[10px] font-bold uppercase tracking-wide text-red-400 mb-2">
                  Antes · Excel a mano
                </span>
                <div className="space-y-1.5 font-mono text-[9px] text-ink-mute">
                  {["fact_001_final_v2.xlsx", "cliente??  —  120€?", "pago: ¿pendiente?", "fila 47: #REF! error", "...buscar 20 min"].map(
                    (row) => (
                      <div
                        key={row}
                        className="truncate rounded bg-void/40 px-2 py-1"
                      >
                        {row}
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Después: panel automático */}
              <div className="rounded-xl border border-aurora/25 bg-aurora/5 p-3">
                <span className="block text-[10px] font-bold uppercase tracking-wide text-aurora mb-2">
                  Después · Panel AstroNexo
                  <span className="ml-1 font-normal normal-case text-ink-mute">(ejemplo)</span>
                </span>
                <div className="space-y-2">
                  {[
                    ["Cobrado", "8.240€", "100%"],
                    ["Pendiente", "1.150€", "62%"],
                    ["Este mes", "32 facturas", "88%"],
                  ].map(([label, value, w]) => (
                    <div key={label} className="space-y-1">
                      <div className="flex justify-between text-[9px] font-mono text-ink-soft">
                        <span>{label}</span>
                        <span className="text-ink">{value}</span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-void/50">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-nebula-soft to-aurora"
                          initial={{ width: 0 }}
                          whileInView={{ width: w as string }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-ink-soft">
              Ideal para restaurantes, tiendas, talleres, clínicas y autónomos
              que aún llevan la facturación en hojas sueltas.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="micro-glint group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-void transition-colors hover:bg-white"
            >
              <FileSpreadsheet size={16} />
              Ordenar mis facturas
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center sm:justify-start">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-aurora/35 bg-aurora/10 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-aurora hover:bg-aurora/15"
          >
            <MessageCircle size={16} />
            Cuéntame cómo llevas tus facturas y te propongo el sistema
          </a>
        </div>
      </Reveal>
    </section>
  );
}
