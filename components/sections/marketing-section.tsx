"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check, ArrowUpRight, Megaphone, TrendingUp, Star, HelpCircle, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { SITE } from "@/lib/site";

// Constantes declaradas al inicio para evitar errores de hoisting/TypeScript en el compilador
export const OPTIONS = [
  {
    title: "Embudos de Instagram / Facebook Ads",
    desc: "Configuración técnica de campañas en Meta Ads estructuradas para generar mensajes directos al perfil.",
  },
  {
    title: "Anuncios de Conversión a WhatsApp",
    desc: "Campañas enfocadas en iniciar chats directos con botones de llamada a la acción integrados en las stories.",
  },
  {
    title: "Landings de Ofertas Promocionales",
    desc: "Páginas de aterrizaje rápidas de alta retención para campañas y descuentos específicos del mes.",
  },
  {
    title: "Estrategias de Retargeting Automatizado",
    desc: "Recordatorios automáticos vía WhatsApp o anuncios dirigidos a personas que iniciaron chat pero no agendaron.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Las campañas directas de anuncios de Instagram a WhatsApp bajaron nuestro costo de adquisición en un 40% y triplicaron los chats iniciados. Logramos automatizar las consultas y cerrar más pedidos de inmediato.",
    name: "Singularu (España)",
    result: "3.5x ROI medio",
  },
  {
    quote: "Lanzamos anuncios dirigidos al WhatsApp de reservas para captar nuevas membresías. Logramos 150 altas el primer mes con un costo por cliente potencial bajísimo y 100% trazable en piloto automático.",
    name: "Minimalism Brand (España)",
    result: "+150 altas/mes",
  },
  {
    quote: "Redirigir a los clientes fríos directamente a un embudo conversacional filtrado nos dio una escalabilidad en la captación de leads que las landings clásicas no logran. Retorno inmediato.",
    name: "Blue Banana Brand (España)",
    result: "Captación express",
  },
  {
    quote: "Nuestras campañas locales para eventos flash se llenan al instante desde que automatizamos el inicio del chat en Instagram y WhatsApp. Una coordinación técnica impecable del equipo.",
    name: "Alohas (España)",
    result: "Lleno en eventos",
  },
];

export function MarketingSection() {
  // Estado para el configurador (Derecha)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "Embudos de Instagram / Facebook Ads",
  ]);

  // Estado para la calculadora (Izquierda)
  const [adBudget, setAdBudget] = useState(400);
  const [calcStatus, setCalcStatus] = useState<"idle" | "calculating" | "result">("idle");
  const [marketingStep, setMarketingStep] = useState(0);

  const toggleOption = (opt: string) => {
    if (selectedOptions.includes(opt)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== opt));
    } else {
      setSelectedOptions([...selectedOptions, opt]);
    }
  };

  const getWhatsAppLinkConfig = () => {
    const baseMsg = "Hola AstroNexo. Me interesa tu solución de Marketing de Campañas y Tráfico.";
    const selectedText =
      selectedOptions.length > 0
        ? ` He seleccionado: ${selectedOptions.join(", ")}.`
        : "";
    const fullMsg = `${baseMsg}${selectedText} Mi negocio es: `;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`;
  };

  const runAdCalculator = (e: React.FormEvent) => {
    e.preventDefault();
    setCalcStatus("calculating");
    setMarketingStep(0);

    const steps = [
      "Evaluando CTR promedio en tu categoría...",
      "Estimando rebote por carga lenta de Landing...",
      "Analizando fuga de clics sin conversión directa...",
    ];

    const timer = setInterval(() => {
      setMarketingStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setCalcStatus("result");
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  // Fórmulas
  const budgetWasted = Math.round(adBudget * 0.40);
  const potentialChats = Math.round(adBudget * 1.2);

  const getWhatsAppLinkCalc = () => {
    const msg = `Hola AstroNexo. He usado el estimador de fugas de Ads para una inversión de €${adBudget} al mes. El sistema indica un desperdicio estimado de €${budgetWasted}/mes. Quiero corregir los 3 puntos de fuga en mis campañas de publicidad.`;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const marketingSteps = [
    "Evaluando CTR promedio en tu categoría...",
    "Estimando rebote por carga lenta de Landing...",
    "Analizando fuga de clics sin conversión directa...",
  ];

  return (
    <section
      id="campanas-y-trafico"
      className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-32 border-t border-line bg-deep/10"
    >
      <div className="pointer-events-none absolute -right-12 top-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.03),transparent_65%)] blur-3xl" />

      <SectionHeading
        index="06"
        kicker="Servicios de Alta Demanda"
        title={
          <>
            Marketing de Campañas y{" "}
            <span className="premium-word">Tráfico de Anuncios</span>
          </>
        }
        intro="Atrae un flujo constante de clientes potenciales. Diseñamos y optimizamos campañas en redes sociales para enviar personas interesadas directamente a tu embudo conversacional de WhatsApp."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-14">
        {/* Lado Izquierdo: Dashboard de Embudo y Calculadora de Ads */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-8 h-full">
          {/* Dashboard de Tráfico: 4 Gráficos y Métricas */}
          <Reveal>
            <div className="premium-surface rounded-card border border-line bg-void/35 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <span className="text-[10px] uppercase tracking-wider text-ink-mute flex items-center gap-1.5 mb-5">
                <Sparkles size={11} className="text-ember animate-pulse" />
                Conversión del Embudo Conversacional (AstroNexo vs Tradicional)
              </span>

              <div className="grid gap-5 md:grid-cols-12">
                {/* Gráfico 1 (Principal): SVG Funnel Chart - Fugas vs Captura */}
                <div className="md:col-span-8 rounded-xl border border-line/60 bg-deep/20 p-4">
                  <span className="block text-[11px] font-semibold text-ink-soft mb-3">
                    Embudos de Tráfico y Conversión Directa
                  </span>
                  
                  {/* SVG de Embudo */}
                  <div className="relative h-32 w-full flex items-center justify-center">
                    <svg className="h-full w-full max-w-[240px]" viewBox="0 0 100 60">
                      {/* Embudo Fondo */}
                      <polygon points="5,5 95,5 75,55 25,55" fill="none" stroke="#2a2550" strokeWidth="1" />
                      
                      {/* Tráfico (Fila 1) */}
                      <polygon points="6,6 94,6 87,20 13,20" fill="#2a2550" opacity="0.4" />
                      <text x="50" y="15" fill="#a49eff" fontSize="6" textAnchor="middle" fontWeight="bold">Tráfico (100%)</text>
                      
                      {/* Interés (Fila 2) */}
                      <polygon points="14,21 86,21 78,35 22,35" fill="#7c6cff" opacity="0.6" />
                      <text x="50" y="30" fill="#fff" fontSize="6" textAnchor="middle" fontWeight="bold">Clics (Meta/Google)</text>

                      {/* Chats (Fila 3) */}
                      <polygon points="23,36 77,36 69,45 31,45" fill="#ff9d57" opacity="0.8" />
                      <text x="50" y="42" fill="#000" fontSize="5" textAnchor="middle" fontWeight="bold">Conversación (35%)</text>

                      {/* Conversión (Fila 4) */}
                      <polygon points="32,46 68,46 66,54 34,54" fill="#38e0c9" />
                      <text x="50" y="52" fill="#000" fontSize="5" textAnchor="middle" fontWeight="bold">Venta / Cita (2.5%)</text>
                    </svg>

                    {/* Leyenda de Eficiencia */}
                    <div className="absolute right-0 top-0 text-[8px] font-mono text-aurora bg-void/80 px-1 border border-aurora/25 rounded">
                      5x Eficiencia
                    </div>
                  </div>
                  <div className="mt-2 text-center text-[9px] text-ink-mute font-mono">
                    Atención directa a WhatsApp: Mayor retención, menor coste.
                  </div>
                </div>

                {/* Gráfico 2: Medidor Radial de ROAS */}
                <div className="md:col-span-4 rounded-xl border border-line/60 bg-deep/20 p-4 flex flex-col justify-between items-center text-center">
                  <span className="block text-[11px] font-semibold text-ink-soft">
                    ROAS Promedio
                  </span>
                  
                  <div className="relative my-2 flex items-center justify-center">
                    <svg className="h-20 w-20 transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        className="stroke-line"
                        strokeWidth="5"
                        fill="transparent"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        className="stroke-ember"
                        strokeWidth="5"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 32}
                        strokeDashoffset={2 * Math.PI * 32 * (1 - 0.85)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-sm font-bold text-ink">3.5x</span>
                      <span className="text-[7px] text-ink-mute font-mono">Retorno (x€)</span>
                    </div>
                  </div>
                  
                  <span className="block text-[9px] leading-tight text-ink-mute">
                    Retorno sobre el gasto publicitario.
                  </span>
                </div>
              </div>

              {/* Sparklines / KPI Mini Cards (Gráficos 3 y 4) */}
              <div className="mt-4 grid gap-4 grid-cols-2">
                {/* Gráfico 3: CAC Sparkline */}
                <div className="rounded-xl border border-line/60 bg-deep/20 p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[10px] uppercase tracking-wider text-ink-mute font-mono">Costo Adquisición (CAC)</span>
                    <span className="block font-display text-base font-bold text-aurora">-40% Ahorro</span>
                  </div>
                  <div className="w-14 h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <path
                        d="M0,2 L10,5 L20,15 L30,12 L40,18 L50,19"
                        fill="none"
                        stroke="#38e0c9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Gráfico 4: Chats Iniciados Sparkline */}
                <div className="rounded-xl border border-line/60 bg-deep/20 p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[10px] uppercase tracking-wider text-ink-mute font-mono">Nuevos Chats / Sem</span>
                    <span className="block font-display text-base font-bold text-ember">+120% Crecimiento</span>
                  </div>
                  <div className="w-14 h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <path
                        d="M0,17 L10,15 L20,13 L30,8 L40,6 L50,2"
                        fill="none"
                        stroke="#ff9d57"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Calculadora de Desperdicio de Anuncios */}
          <Reveal delay={0.08}>
            <div className="premium-surface rounded-card border border-line bg-deep/55 p-6 shadow-[0_15px_45px_-20px_rgba(124,108,255,0.1)]">
              <h3 className="font-display text-base font-semibold text-ink flex items-center gap-2">
                <Megaphone size={16} className="text-ember" />
                Estimador de Desperdicio en Anuncios (Ads)
              </h3>
              <p className="mt-1 text-xs text-ink-mute">
                Calcula qué porcentaje de tu presupuesto mensual en Google/Meta Ads se pierde por fugas técnicas.
              </p>

              <AnimatePresence mode="wait">
                {calcStatus === "idle" && (
                  <motion.form
                    key="idle-form"
                    onSubmit={runAdCalculator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 space-y-4"
                  >
                    <div>
                      <div className="flex justify-between text-[11px] uppercase tracking-wider text-ink-mute mb-1.5">
                        <span>Inversión mensual en publicidad (EUR / USD)</span>
                        <span className="text-ember font-bold">€{adBudget}</span>
                      </div>
                      <input
                        type="range"
                        min="100"
                        max="2000"
                        step="50"
                        value={adBudget}
                        onChange={(e) => setAdBudget(Number(e.target.value))}
                        className="w-full h-1.5 bg-line rounded-lg appearance-none cursor-pointer accent-ember"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-full bg-panel border border-line text-xs font-semibold text-ink hover:border-ink-soft transition-colors cursor-pointer"
                    >
                      Calcular Fuga de Ads
                    </button>
                  </motion.form>
                )}

                {calcStatus === "calculating" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center flex flex-col items-center justify-center"
                  >
                    <div className="h-6 w-6 rounded-full border-2 border-t-transparent border-ember animate-spin" />
                    <span className="mt-3 block text-xs font-mono text-ink-mute transition-all duration-300">
                      {marketingSteps[marketingStep]}
                    </span>
                  </motion.div>
                )}

                {calcStatus === "result" && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 space-y-4 text-left"
                  >
                    {/* Alerta de Auditoría con preguntas provocativas */}
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-red-400 uppercase tracking-wide flex items-center gap-1">
                          <HelpCircle size={13} />
                          Reporte de Publicidad: 3 Fugas Críticas Detectadas
                        </span>
                        <span className="rounded bg-red-400/25 px-2 py-0.5 text-[9px] font-bold text-red-300">
                          Fuga estimada: 40% del Gasto
                        </span>
                      </div>
                      
                      <ol className="list-decimal pl-4 text-xs text-ink-soft space-y-2 leading-relaxed">
                        <li>
                          <strong>Pérdida por velocidad de Landing (20% de Fuga):</strong> El 20% de tus clics pagados cierran antes de que tu web termine de cargar. ¿Cuánto estás pagando a Meta por clics que no ven tu oferta?
                        </li>
                        <li>
                          <strong>Sin pixel de conversión en WhatsApp:</strong> El algoritmo de anuncios busca clics baratos en lugar de personas que realmente conversen. Tus campañas optimizan al revés de lo rentable.
                        </li>
                        <li>
                          <strong>Inexistencia de Retargeting Automatizado:</strong> El 90% de la gente no reserva en el primer clic. Sin un flujo automático para recuperar interesados a las 24 horas, estás perdiendo ese lead.
                        </li>
                      </ol>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-line bg-void/45 p-3 text-center">
                        <span className="block text-[9px] uppercase tracking-wider text-ink-mute">Presupuesto desperdiciado</span>
                        <span className="block mt-1 font-display text-xl font-bold text-red-400">€{budgetWasted} / mes</span>
                        <span className="block text-[8px] text-ink-mute mt-0.5">En clics abandonados</span>
                      </div>
                      <div className="rounded-xl border border-line bg-void/45 p-3 text-center">
                        <span className="block text-[9px] uppercase tracking-wider text-ink-mute">Chats potenciales extras</span>
                        <span className="block mt-1 font-display text-xl font-bold text-aurora">+{potentialChats} nuevos/mes</span>
                        <span className="block text-[8px] text-ink-mute mt-0.5">Sin aumentar tu inversión</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={getWhatsAppLinkCalc()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 inline-flex justify-center items-center gap-1.5 rounded-full bg-ink text-xs font-semibold text-void hover:bg-white transition-colors text-center"
                      >
                        <MessageCircle size={14} />
                        Detener fuga de dinero y optimizar anuncios
                      </a>
                      <button
                        onClick={() => {
                          setCalcStatus("idle");
                        }}
                        className="px-4 py-2.5 rounded-full border border-line text-xs text-ink-soft hover:text-ink transition-colors"
                      >
                        Reiniciar
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        {/* Lado Derecho: Bloque interactivo con seleccionables */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="premium-surface relative overflow-hidden rounded-card border border-line bg-deep/45 p-6 sm:p-8">
              <span className="absolute right-4 top-4 rounded-full border border-line bg-void/50 px-3 py-1 text-[10px] uppercase tracking-wider text-ink-soft">
                Configurador en vivo
              </span>
              
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                Selecciona tu estrategia de tráfico:
              </h3>
              <p className="mt-1 text-xs text-ink-mute">
                Genera clics de alta intención hacia tu chat comercial.
              </p>

              {/* Lista de Seleccionables */}
              <div className="mt-6 space-y-3">
                {OPTIONS.map((opt) => {
                  const isSelected = selectedOptions.includes(opt.title);
                  return (
                    <button
                      key={opt.title}
                      type="button"
                      onClick={() => toggleOption(opt.title)}
                      className={`w-full text-left flex items-start gap-4 rounded-2xl border transition-all duration-300 ${
                        isSelected
                          ? "border-ember bg-ember/5 shadow-[0_0_15px_rgba(255,157,87,0.06)]"
                          : "border-line bg-void/35 hover:border-ink-soft"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors ${
                          isSelected
                            ? "border-ember bg-ember text-void"
                            : "border-line bg-void"
                        }`}
                      >
                        {isSelected && <Check size={14} className="stroke-[3]" />}
                      </span>
                      <div>
                        <span className={`block text-sm font-semibold tracking-tight transition-colors ${
                          isSelected ? "text-ink" : "text-ink-soft"
                        }`}>
                          {opt.title}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-ink-mute">
                          {opt.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Botón dinámico */}
              <div className="mt-8">
                <a
                  href={getWhatsAppLinkConfig()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="micro-glint group flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 text-sm font-semibold text-void transition-colors hover:bg-white"
                >
                  <Megaphone size={16} />
                  Escalar mis Ventas
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <span className="mt-3 block text-center text-[10px] text-ink-mute">
                  Enviará tus elecciones a WhatsApp para trazar un mapa de inversión publicitaria gratuito.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Testimonios de Clientes Reales (4 Reseñas) */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t, index) => (
          <Reveal key={t.name} delay={0.1 + index * 0.08}>
            <div className="premium-surface h-full flex flex-col justify-between rounded-card border border-line bg-gradient-to-r from-deep/40 via-ember/5 to-deep/40 p-6">
              <div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-ember fill-ember" />
                  ))}
                </div>
                <p className="text-xs italic leading-relaxed text-ink-soft">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-line/35 pt-4">
                <span className="block text-[11px] font-bold text-ink leading-tight">
                  {t.name}
                </span>
                <span className="rounded-full bg-void/50 border border-line px-2.5 py-0.5 text-[8px] uppercase tracking-wider text-ember font-semibold shrink-0">
                  {t.result}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
