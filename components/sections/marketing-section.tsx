"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check, ArrowUpRight, Megaphone, Star, HelpCircle, Sparkles } from "lucide-react";
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
  const [businessNiche, setBusinessNiche] = useState("Restauración / Cafetería");
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
    }, 600);
  };

  // Fórmulas
  const budgetWasted = Math.round(adBudget * 0.40);
  const potentialChats = Math.round(adBudget * 1.2);

  // Diagnósticos personalizados según el presupuesto e industria
  const getMarketingDiagnostics = () => {
    switch (businessNiche) {
      case "Restauración / Cafetería":
        return {
          lossTitle: `Fuga del 40% del presupuesto (€${budgetWasted}/mes):`,
          problems: [
            {
              title: "Pérdida de clics en la carga de la carta digital:",
              desc: "Los clientes pulsan tu anuncio de comida pero cierran antes de que cargue tu menú pesado. Tirás dinero en clics perdidos."
            },
            {
              title: "Sin píxel de conversión en el botón de reserva:",
              desc: "Meta optimiza tus anuncios buscando clics baratos, no personas realmente propensas a agendar una mesa hoy."
            },
            {
              title: "Cero retargeting automático de ofertas de fin de semana:",
              desc: "No envías recordatorios de ofertas al 90% de leads que te preguntaron precios pero no concretaron la reserva."
            }
          ]
        };
      case "Clínica / Estética / Dental":
        return {
          lossTitle: `Fuga del 40% del presupuesto (€${budgetWasted}/mes):`,
          problems: [
            {
              title: "Pagar demasiado por leads fríos (CAC elevado):",
              desc: "Diriges tus anuncios a un formulario frío de contacto. Pagarás el triple por lead que si los llevases directo a un pre-cualificador."
            },
            {
              title: "Sin retargeting por tratamiento de interés:",
              desc: "Si un paciente pregunta por implantes y no contrata de inmediato, tus anuncios no vuelven a mostrarle testimonios del doctor."
            },
            {
              title: "Pérdida de clics por landing page no optimizada:",
              desc: "Tus campañas cargan una web lenta. El 25% de los leads se desesperan y vuelven atrás antes de ver tu clínica."
            }
          ]
        };
      case "E-commerce / Comercio":
        return {
          lossTitle: `Fuga del 40% del presupuesto (€${budgetWasted}/mes):`,
          problems: [
            {
              title: "Fuga del 25% de compras por dudas sin resolver:",
              desc: "Los leads entran con dudas de envío o tallas y tus anuncios no les redirigen a un bot conversacional 24/7."
            },
            {
              title: "Anuncios optimizados para clics, no para ventas:",
              desc: "Google/Meta envían tráfico genérico porque no tienes integrado el evento de conversión en tu botón de chat."
            },
            {
              title: "Cero automatización de carritos abandonados:",
              desc: "Pierdes al comprador que mostró interés y se fue. Con un embudo de WhatsApp, recuperas hasta el 30% en piloto automático."
            }
          ]
        };
      default:
        return {
          lossTitle: `Fuga del 40% del presupuesto (€${budgetWasted}/mes):`,
          problems: [
            {
              title: "Pérdida por velocidad de carga (20% de Fuga):",
              desc: "Tus anuncios cargan una página lenta. El 20% de los usuarios que hacen clic se van antes de ver tu oferta."
            },
            {
              title: "Sin píxel de conversión conversacional:",
              desc: "Meta y Google no optimizan tus campañas para buscar personas propensas a conversar porque no registras el evento de chat."
            },
            {
              title: "Sin seguimiento o retargeting automático:",
              desc: "El 90% de la gente no te comprará de inmediato. Si no tienes un bot que retome la conversación a las 24 horas, estás tirando tu dinero."
            }
          ]
        };
    }
  };

  const diagnostics = getMarketingDiagnostics();

  const getWhatsAppLinkCalc = () => {
    const msg = `Hola AstroNexo. He usado el estimador de fugas de Ads para una inversión de €${adBudget} al mes en ${businessNiche}. El reporte indica un desperdicio estimado de €${budgetWasted}/mes. Quiero corregir los 3 puntos de fuga en mis campañas de publicidad.`;
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
      className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24 border-t border-line bg-deep/10"
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

      <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-10">
        {/* Lado Izquierdo: Dashboard de Embudo y Calculadora de Ads */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6 h-full">
          {/* Dashboard de Tráfico: 4 Gráficos y Métricas */}
          <Reveal>
            <div className="premium-surface rounded-card border border-line bg-void/25 p-4 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
              <span className="text-[10px] uppercase tracking-wider text-ink-mute flex flex-wrap items-center gap-1.5 mb-4">
                <Sparkles size={11} className="text-ember animate-pulse" />
                Conversión del Embudo Conversacional (AstroNexo vs Tradicional)
              </span>

              <div className="grid gap-4 md:grid-cols-12">
                {/* Gráfico 1 (Principal): SVG Funnel Chart - Fugas vs Captura */}
                <div className="md:col-span-8 rounded-xl border border-line/50 bg-deep/10 p-3 sm:p-4">
                  <span className="block text-[11px] font-semibold text-ink-soft mb-2">
                    Embudos de Tráfico y Conversión Directa
                  </span>
                  
                  {/* SVG de Embudo */}
                  <div className="relative h-28 sm:h-32 w-full flex items-center justify-center">
                    <svg className="h-full w-full max-w-[220px]" viewBox="0 0 100 60">
                      <polygon points="5,5 95,5 75,55 25,55" fill="none" stroke="#2a2550" strokeWidth="0.75" />
                      
                      {/* Tráfico (Fila 1) */}
                      <polygon points="6,6 94,6 87,20 13,20" fill="#2a2550" opacity="0.4" />
                      <text x="50" y="15" fill="#a49eff" fontSize="6" textAnchor="middle" fontWeight="bold">Tráfico (100%)</text>
                      
                      {/* Interés (Fila 2) */}
                      <polygon points="14,21 86,21 78,35 22,35" fill="#7c6cff" opacity="0.6" />
                      <text x="50" y="30" fill="#fff" fontSize="6" textAnchor="middle" fontWeight="bold">Clics Ads</text>

                      {/* Chats (Fila 3) */}
                      <polygon points="23,36 77,36 69,45 31,45" fill="#ff9d57" opacity="0.8" />
                      <text x="50" y="42" fill="#000" fontSize="5" textAnchor="middle" fontWeight="bold">WhatsApp (35%)</text>

                      {/* Conversión (Fila 4) */}
                      <polygon points="32,46 68,46 66,54 34,54" fill="#38e0c9" />
                      <text x="50" y="52" fill="#000" fontSize="5" textAnchor="middle" fontWeight="bold">Venta / Cita (2.5%)</text>
                    </svg>

                    {/* Leyenda de Eficiencia */}
                    <div className="absolute right-0 top-0 text-[8px] font-mono text-aurora bg-void/80 px-1 border border-aurora/25 rounded">
                      5x Conversión
                    </div>
                  </div>
                  <div className="mt-1 text-center text-[8px] sm:text-[9px] text-ink-mute font-mono">
                    Atención directa a WhatsApp: Mayor retención, menor coste.
                  </div>
                </div>

                {/* Gráfico 2: Medidor Radial de ROAS */}
                <div className="md:col-span-4 rounded-xl border border-line/50 bg-deep/10 p-3 sm:p-4 flex flex-col justify-between items-center text-center">
                  <span className="block text-[11px] font-semibold text-ink-soft">
                    ROAS Promedio
                  </span>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative my-1 flex items-center justify-center will-change-transform"
                  >
                    <svg viewBox="0 0 80 80" className="h-16 w-16 sm:h-20 sm:w-20 transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="32"
                        className="stroke-line"
                        strokeWidth="4"
                        fill="transparent"
                      />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="32"
                        className="stroke-ember"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 32}
                        initial={{ strokeDashoffset: 2 * Math.PI * 32 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 32 * (1 - 0.85) }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-xs sm:text-sm font-bold text-ink">3.5x</span>
                      <span className="text-[6px] sm:text-[7px] text-ink-mute font-mono">ROAS (x€)</span>
                    </div>
                  </motion.div>
                  
                  <span className="block text-[8px] sm:text-[9px] leading-tight text-ink-mute">
                    Retorno sobre el gasto publicitario.
                  </span>
                </div>
              </div>

              {/* Sparklines / KPI Mini Cards (Gráficos 3 y 4) */}
              <div className="mt-3 grid gap-3 grid-cols-2">
                {/* Gráfico 3: CAC Sparkline */}
                <div className="rounded-xl border border-line/50 bg-deep/10 p-2.5 sm:p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[8px] sm:text-[10px] uppercase tracking-wider text-ink-mute font-mono">Costo Adquisición (CAC)</span>
                    <span className="block font-display text-xs sm:text-sm font-bold text-aurora">-40% Ahorro</span>
                  </div>
                  <div className="w-10 sm:w-14 h-6 sm:h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <motion.path
                        d="M0,2 L10,5 L20,15 L30,12 L40,18 L50,19"
                        fill="none"
                        stroke="#38e0c9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Gráfico 4: Chats Iniciados Sparkline */}
                <div className="rounded-xl border border-line/50 bg-deep/10 p-2.5 sm:p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[8px] sm:text-[10px] uppercase tracking-wider text-ink-mute font-mono">Nuevos Chats / Sem</span>
                    <span className="block font-display text-xs sm:text-sm font-bold text-ember">+120% Crecimiento</span>
                  </div>
                  <div className="w-10 sm:w-14 h-6 sm:h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <motion.path
                        d="M0,17 L10,15 L20,13 L30,8 L40,6 L50,2"
                        fill="none"
                        stroke="#ff9d57"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Calculadora de Desperdicio de Anuncios */}
          <Reveal delay={0.08}>
            <div className="premium-surface rounded-card border border-line bg-deep/45 p-4 sm:p-6 shadow-[0_12px_35px_-20px_rgba(124,108,255,0.1)]">
              <h3 className="font-display text-sm sm:text-base font-semibold text-ink flex items-center gap-2">
                <Megaphone size={16} className="text-ember animate-bounce" />
                Estimador de Desperdicio en Anuncios (Ads)
              </h3>
              <p className="mt-1 text-[11px] sm:text-xs text-ink-mute">
                Calcula qué porcentaje de tu presupuesto mensual en Google/Meta Ads se pierde por fugas de conversión.
              </p>

              <AnimatePresence mode="wait">
                {calcStatus === "idle" && (
                  <motion.form
                    key="idle-form"
                    onSubmit={runAdCalculator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 space-y-3.5"
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-[9px] uppercase tracking-wider text-ink-mute mb-1">
                          Nicho de negocio
                        </label>
                        <select
                          value={businessNiche}
                          onChange={(e) => setBusinessNiche(e.target.value)}
                          className="w-full h-9 px-3 rounded-full border border-line bg-void/40 text-ink text-xs focus:outline-none focus:border-ember transition-all"
                        >
                          <option value="Restauración / Cafetería">Restauración / Cafetería</option>
                          <option value="Clínica / Estética / Dental">Clínica / Estética / Dental</option>
                          <option value="Servicios Profesionales">Servicios Profesionales</option>
                          <option value="E-commerce / Comercio">E-commerce / Comercio</option>
                          <option value="Academia / Educación">Academia / Educación</option>
                        </select>
                      </div>
                      <div>
                        <div className="flex justify-between text-[9px] uppercase tracking-wider text-ink-mute mb-1">
                          <span>Inversión mensual</span>
                          <span className="text-ember font-bold">€{adBudget}</span>
                        </div>
                        <input
                          type="range"
                          min="100"
                          max="2000"
                          step="50"
                          value={adBudget}
                          onChange={(e) => setAdBudget(Number(e.target.value))}
                          className="w-full h-1 bg-line rounded-lg appearance-none cursor-pointer accent-ember"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 rounded-full bg-panel border border-line text-xs font-semibold text-ink hover:border-ink-soft transition-colors cursor-pointer"
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
                    className="py-8 text-center flex flex-col items-center justify-center"
                  >
                    <div className="h-5 w-5 rounded-full border-2 border-t-transparent border-ember animate-spin" />
                    <span className="mt-2 block text-[11px] font-mono text-ink-mute transition-all duration-300">
                      {marketingSteps[marketingStep]}
                    </span>
                  </motion.div>
                )}

                {calcStatus === "result" && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 space-y-3 text-left"
                  >
                    {/* Alerta de Auditoría con preguntas provocativas */}
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide flex items-center gap-1">
                          <HelpCircle size={12} />
                          Reporte de Anuncios: 3 Fugas Críticas
                        </span>
                        <span className="rounded bg-red-400/25 px-1.5 py-0.5 text-[8px] font-bold text-red-300">
                          {diagnostics.lossTitle}
                        </span>
                      </div>
                      
                      <ol className="list-decimal pl-4 text-[11px] text-ink-soft space-y-1.5 leading-relaxed">
                        {diagnostics.problems.map((p, idx) => (
                          <li key={idx}>
                            <strong>{p.title}</strong> {p.desc}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="rounded-xl border border-line bg-void/45 p-2.5 text-center">
                        <span className="block text-[8px] uppercase tracking-wider text-ink-mute font-mono">Fuga estimada</span>
                        <span className="block mt-0.5 font-display text-base font-bold text-red-400">€{budgetWasted} / mes</span>
                      </div>
                      <div className="rounded-xl border border-line bg-void/45 p-2.5 text-center">
                        <span className="block text-[8px] uppercase tracking-wider text-ink-mute font-mono">Extra con Embudo</span>
                        <span className="block mt-0.5 font-display text-base font-bold text-aurora">+{potentialChats} chats</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={getWhatsAppLinkCalc()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 inline-flex justify-center items-center gap-1 rounded-full bg-ink text-[11px] font-semibold text-void hover:bg-white transition-colors text-center"
                      >
                        <MessageCircle size={13} />
                        Detener fugas de Ads
                      </a>
                      <button
                        onClick={() => {
                          setCalcStatus("idle");
                        }}
                        className="px-3.5 py-2 rounded-full border border-line text-[11px] text-ink-soft hover:text-ink transition-colors"
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
            <div className="premium-surface relative overflow-hidden rounded-card border border-line bg-deep/45 p-5 sm:p-7">
              <span className="absolute right-4 top-4 rounded-full border border-line bg-void/50 px-2 py-0.5 text-[8px] uppercase tracking-wider text-ink-soft">
                Configurador
              </span>
              
              <h3 className="font-display text-sm sm:text-base font-semibold tracking-tight text-ink">
                Selecciona tu estrategia de tráfico:
              </h3>
              <p className="mt-0.5 text-[11px] text-ink-mute">
                Genera clics de alta intención hacia tu chat comercial.
              </p>

              {/* Lista de Seleccionables */}
              <div className="mt-4 space-y-2">
                {OPTIONS.map((opt) => {
                  const isSelected = selectedOptions.includes(opt.title);
                  return (
                    <button
                      key={opt.title}
                      type="button"
                      onClick={() => toggleOption(opt.title)}
                      className={`w-full text-left flex items-start gap-3 rounded-xl border p-2.5 sm:p-3 transition-all duration-300 ${
                        isSelected
                          ? "border-ember bg-ember/5 shadow-[0_0_15px_rgba(255,157,87,0.06)]"
                          : "border-line bg-void/35 hover:border-ink-soft"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border transition-colors ${
                          isSelected
                            ? "border-ember bg-ember text-void"
                            : "border-line bg-void"
                        }`}
                      >
                        {isSelected && <Check size={11} className="stroke-[3]" />}
                      </span>
                      <div>
                        <span className={`block text-xs font-semibold tracking-tight transition-colors ${
                          isSelected ? "text-ink" : "text-ink-soft"
                        }`}>
                          {opt.title}
                        </span>
                        <span className="mt-0.5 block text-[10px] leading-relaxed text-ink-mute">
                          {opt.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Botón dinámico */}
              <div className="mt-6">
                <a
                  href={getWhatsAppLinkConfig()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="micro-glint group flex w-full items-center justify-center gap-1.5 rounded-full bg-ink py-3 text-xs font-semibold text-void transition-colors hover:bg-white"
                >
                  <Megaphone size={15} />
                  Escalar mis Ventas
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Testimonios de Referencia en el Sector */}
      <div className="mt-12 flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 -mx-5 px-5 pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:mx-0 md:px-0 md:pb-0">
        {TESTIMONIALS.map((t, index) => (
          <Reveal 
            key={t.name} 
            delay={0.05 + index * 0.05}
            className="flex shrink-0 snap-center w-[285px] md:w-auto md:shrink"
          >
            <div className="premium-surface w-full h-full flex flex-col justify-between rounded-card border border-line bg-gradient-to-r from-deep/40 via-ember/5 to-deep/40 p-4.5 sm:p-6">
              <div>
                <span className="rounded-full bg-void/50 border border-line px-2 py-0.5 text-[8px] uppercase tracking-wider text-ink-mute font-semibold inline-block mb-3.5">
                  Benchmark de Referencia
                </span>
                <div className="flex gap-1 mb-2.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-ember fill-ember" />
                  ))}
                </div>
                <p className="text-[11px] sm:text-xs italic leading-relaxed text-ink-soft">
                  "{t.quote}"
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-line/35 pt-3">
                <span className="block text-[10px] sm:text-[11px] font-bold text-ink leading-tight">
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
