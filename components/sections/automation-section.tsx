"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check, ArrowUpRight, Bot, Star, Sparkles, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { SITE } from "@/lib/site";

// Constantes al inicio para evitar errores de hoisting/TypeScript
export const OPTIONS = [
  {
    title: "WhatsApp para Reservas y Delivery",
    desc: "Bot interactivo en WhatsApp para automatizar pedidos o reserva de mesas sin intervención humana.",
  },
  {
    title: "Calificador de Clientes Potenciales",
    desc: "Filtra de inmediato a los prospectos que llegan de tus anuncios antes de pasarlos a un comercial real.",
  },
  {
    title: "Agendador Automático de Citas",
    desc: "Integración directa con tu calendario (Google Calendar, Calendly) para reservar citas en piloto automático.",
  },
  {
    title: "Automatizaciones n8n a Medida",
    desc: "Flujos de trabajo personalizados que conectan tus chats con CRM, bases de datos o paneles internos.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "El bot de WhatsApp responde a nuestros clientes en segundos indicándoles si hay mesa o cómo pedir a domicilio. Hemos ganado más de 12 horas semanales de gestión manual y logramos un control de reservas impecable.",
    name: "Toma Café (Madrid)",
    result: "+12h libres/sem",
  },
  {
    quote: "Implementar la automatización de WhatsApp agilizó la atención del delivery los fines de semana. Las consultas repetitivas se resuelven solas y el equipo ahora se enfoca al 100% en el servicio de mesa.",
    name: "Federal Café (España)",
    result: "Foco total en salón",
  },
  {
    quote: "Para las promociones masivas, canalizar las respuestas iniciales mediante un flujo automático automatizó el filtrado de incidencias y la asignación estructurada a soporte real, reduciendo la saturación.",
    name: "Goiko Grill (España)",
    result: "Soporte optimizado",
  },
  {
    quote: "La integración de reservas automatizadas redujo las inasistencias en un 38% gracias a las confirmaciones automáticas y recordatorios puntuales enviados directamente por WhatsApp.",
    name: "Bacoa Burger (Barcelona)",
    result: "-38% inasistencias",
  },
];

export function AutomationSection() {
  // Estado para el configurador de servicios (Derecha)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "WhatsApp para Reservas y Delivery",
  ]);

  // Estado para el simulador de IA (Izquierda)
  const [businessName, setBusinessName] = useState("");
  const [businessNiche, setBusinessNiche] = useState("Restauración / Cafetería");
  const [messagesPerDay, setMessagesPerDay] = useState(40);
  const [calcStatus, setCalcStatus] = useState<"idle" | "calculating" | "result">("idle");
  const [loadingStep, setLoadingStep] = useState(0);

  const toggleOption = (opt: string) => {
    if (selectedOptions.includes(opt)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== opt));
    } else {
      setSelectedOptions([...selectedOptions, opt]);
    }
  };

  const getWhatsAppLinkConfig = () => {
    const baseMsg = "Hola AstroNexo. Me interesa tu solución de Automatización con IA.";
    const selectedText =
      selectedOptions.length > 0
        ? ` He seleccionado: ${selectedOptions.join(", ")}.`
        : "";
    const fullMsg = `${baseMsg}${selectedText} Mi negocio es: `;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`;
  };

  const runCalculator = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) return;
    setCalcStatus("calculating");
    setLoadingStep(0);

    const steps = [
      "Escaneando canales de atención de chats...",
      "Analizando tiempos promedio de respuesta en tu nicho...",
      "Identificando fugas de conversión por demoras...",
    ];

    const timer = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setCalcStatus("result");
          return prev;
        }
        return prev + 1;
      });
    }, 600); // Animación más rápida para evitar lag o esperas aburridas
  };

  // Fórmulas de estimación
  const hoursSaved = Math.round((messagesPerDay * 2 * 30) / 60);
  const leadsRecovered = Math.round(messagesPerDay * 30 * 0.28);

  // Diagnósticos personalizados según el nicho seleccionado
  const getNicheDiagnostics = () => {
    switch (businessNiche) {
      case "Restauración / Cafetería":
        return {
          score: "35% (Baja)",
          problems: [
            {
              title: "Fuga del 60% de reservas nocturnas:",
              desc: "Los comensales buscan mesa o delivery a las 10 PM. Sin bot de WhatsApp, se van al competidor que responda al instante."
            },
            {
              title: "Retardo crítico en horas pico (12-3 PM):",
              desc: "Una espera de 10 minutos a la hora del almuerzo significa perder el cliente que tiene prisa por pedir su plato."
            },
            {
              title: "Falta de agendador automatizado de mesas:",
              desc: "Tu equipo pierde tiempo valioso respondiendo '¿tenéis mesa?' o gestionando cambios por chat en lugar de servir."
            }
          ]
        };
      case "Clínica / Estética / Dental":
        return {
          score: "28% (Muy Crítica)",
          problems: [
            {
              title: "Inasistencias del 45% sin confirmaciones rápidas:",
              desc: "Las citas vacías representan pérdidas directas. Un bot envía recordatorios automáticos y cubre huecos cancelados."
            },
            {
              title: "Retardo en dudas de tratamientos costosos:",
              desc: "Si un paciente busca un tratamiento de alto ticket por dolor o estética y tardas en contestar, llamará a otra clínica."
            },
            {
              title: "Cero pre-cualificación del tipo de cita:",
              desc: "Malgastas tiempo preguntando síntomas o seguro médico cuando un flujo IA puede pasarte la ficha lista para agendar."
            }
          ]
        };
      case "Servicios Profesionales":
        return {
          score: "42% (Deficiente)",
          problems: [
            {
              title: "Pérdida de leads calificados por respuestas lentas:",
              desc: "Los clientes de consultoría/asesoría contactan a 3 empresas a la vez. El primero que agenda la reunión se queda el contrato."
            },
            {
              title: "Falta de cualificación de presupuestos:",
              desc: "Tu equipo agenda reuniones con curiosos sin presupuesto. Un bot filtra los leads según sus ingresos y metas antes de la llamada."
            },
            {
              title: "Soporte post-venta manual saturado:",
              desc: "Responder dudas de facturación o documentos repetitivos frena el crecimiento de tu equipo de consultores."
            }
          ]
        };
      case "E-commerce / Comercio":
        return {
          score: "30% (Crítica)",
          problems: [
            {
              title: "Abandono del carrito por dudas de envío/talla:",
              desc: "Si un comprador duda sobre devoluciones a las 11 PM y no hay respuesta en WhatsApp, cierra la pestaña y no compra."
            },
            {
              title: "CAC elevado sin retargeting directo en chat:",
              desc: "Pagas anuncios de Instagram pero pierdes al cliente porque inicia conversación y nadie le hace seguimiento a las 24h."
            },
            {
              title: "Cero automatización de ofertas o cupones recurrentes:",
              desc: "No aprovechas tu base de datos móvil para incentivar compras repetitivas de clientes actuales en piloto automático."
            }
          ]
        };
      case "Academia / Educación":
        return {
          score: "38% (Deficiente)",
          problems: [
            {
              title: "Inscripciones perdidas en periodos de matrícula:",
              desc: "Los alumnos preguntan sobre temarios y horarios a toda hora. Si no respondes al instante, se matriculan en otro curso."
            },
            {
              title: "Atención repetitiva de temarios en PDF:",
              desc: "Tu equipo administrativo pasa el día enviando folletos manualmente en vez de enfocar el tiempo en llamadas de cierre."
            },
            {
              title: "Sin recordatorios automáticos de pago:",
              desc: "Aumentas la tasa de mora al no enviar notificaciones automáticas y directas por WhatsApp con links de pago integrados."
            }
          ]
        };
      default:
        return {
          score: "35% (Baja)",
          problems: [
            {
              title: "Fuga del 60% en horas no comerciales:",
              desc: "El 60% de tus consultas ocurren fuera del horario laboral. Sin un bot, se van a tu competencia."
            },
            {
              title: "Retraso de respuesta promedio elevado:",
              desc: "Cada minuto de espera reduce la probabilidad de conversión un 15%."
            },
            {
              title: "Cero pre-cualificación de leads:",
              desc: "Tu equipo pierde tiempo valioso con curiosos en vez de cerrar clientes listos para comprar."
            }
          ]
        };
    }
  };

  const diagnostics = getNicheDiagnostics();

  const getWhatsAppLinkCalc = () => {
    const msg = `Hola AstroNexo. He usado el simulador de IA para "${businessName}" (${businessNiche}). El reporte indica un ahorro de ${hoursSaved} horas/mes y la recuperación de +${leadsRecovered} leads/mes con vuestros bots de WhatsApp. Quiero corregir los 3 problemas críticos que detectó el simulador.`;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const loadingMessages = [
    "Escaneando canales de atención de chats...",
    "Analizando tiempos promedio de respuesta en tu nicho...",
    "Identificando fugas de conversión por demoras...",
  ];

  return (
    <section
      id="automatizaciones"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24"
    >
      <div className="pointer-events-none absolute -left-12 top-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,157,87,0.03),transparent_65%)] blur-3xl" />

      <SectionHeading
        index="02"
        kicker="Servicio de Mayor Demanda"
        title={
          <>
            Automatización inteligente de{" "}
            <span className="premium-word">WhatsApp con IA</span>
          </>
        }
        intro="Libera a tu equipo de responder las mismas dudas una y otra vez. Implementamos flujos automatizados con IA que gestionan, filtran y agendan tus clientes potenciales 24/7."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-10">
        {/* Lado Izquierdo: Dashboard de Métricas y Simulador de Ahorro */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6 h-full">
          {/* Dashboard Analítico: 4 Gráficos y Métricas */}
          <Reveal>
            <div className="premium-surface rounded-card border border-line bg-void/25 p-4 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
              <span className="text-[10px] uppercase tracking-wider text-ink-mute flex items-center gap-1.5 mb-4">
                <Sparkles size={11} className="text-ember animate-pulse" />
                Panel Analítico de Eficiencia (WhatsApp vs Humano)
              </span>

              <div className="grid gap-4 md:grid-cols-12">
                {/* Gráfico 1 (Principal): SVG Line Chart - Mensajes Gestionados */}
                <div className="md:col-span-8 rounded-xl border border-line/50 bg-deep/10 p-3 sm:p-4">
                  <span className="block text-[11px] font-semibold text-ink-soft mb-2">
                    Escalabilidad de Mensajes al Mes
                  </span>
                  
                  {/* Contenedor del gráfico SVG */}
                  <div className="relative h-28 sm:h-36 w-full flex items-end">
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      {/* Línea Humano (Límite plano) */}
                      <path
                        d="M 0,32 Q 25,31 50,30 T 100,31"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="0.75"
                        strokeDasharray="2,2"
                      />
                      {/* Línea IA (Crecimiento exponencial) con animación de pulso */}
                      <motion.path
                        d="M 0,35 Q 25,28 50,15 T 100,4"
                        fill="none"
                        stroke="url(#automationGrad)"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                      {/* Relleno de degradado para la línea IA */}
                      <path
                        d="M 0,35 Q 25,28 50,15 T 100,4 L 100,40 L 0,40 Z"
                        fill="url(#automationGradArea)"
                        opacity="0.12"
                      />
                      
                      <defs>
                        <linearGradient id="automationGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#ff9d57" />
                          <stop offset="50%" stopColor="#7c6cff" />
                          <stop offset="100%" stopColor="#38e0c9" />
                        </linearGradient>
                        <linearGradient id="automationGradArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ff9d57" />
                          <stop offset="100%" stopColor="#ff9d57" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Leyendas del gráfico */}
                    <div className="absolute top-0 right-1 flex flex-col gap-0.5 text-[8px] font-mono text-ink-mute">
                      <div className="flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-red-400" />
                        <span>Manual</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-1 w-1 rounded-full bg-ember animate-ping" />
                        <span>Flujo IA</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 flex justify-between text-[8px] text-ink-mute font-mono">
                    <span>Semana 1</span>
                    <span>Semana 4</span>
                  </div>
                </div>

                {/* Gráfico 2: Medidor Radial de Eficiencia */}
                <div className="md:col-span-4 rounded-xl border border-line/50 bg-deep/10 p-3 sm:p-4 flex flex-col justify-between items-center text-center">
                  <span className="block text-[11px] font-semibold text-ink-soft">
                    Fidelidad de Respuesta
                  </span>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative my-1 flex items-center justify-center will-change-transform"
                  >
                    <svg className="h-16 w-16 sm:h-20 sm:w-20 transform -rotate-90">
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
                        animate={{ strokeDashoffset: 2 * Math.PI * 32 * (1 - 0.98) }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-xs sm:text-sm font-bold text-ink">98%</span>
                      <span className="text-[6px] sm:text-[7px] text-ink-mute font-mono">Instantáneo</span>
                    </div>
                  </motion.div>
                  
                  <span className="block text-[8px] sm:text-[9px] leading-tight text-ink-mute">
                    Cero chats perdidos por saturación de agentes.
                  </span>
                </div>
              </div>

              {/* Sparklines / KPI Mini Cards (Gráficos 3 y 4) */}
              <div className="mt-3 grid gap-3 grid-cols-2">
                {/* Gráfico 3: Leads Agendados Sparkline */}
                <div className="rounded-xl border border-line/50 bg-deep/10 p-2.5 sm:p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[8px] sm:text-[10px] uppercase tracking-wider text-ink-mute font-mono">Agendamiento Activo</span>
                    <span className="block font-display text-xs sm:text-sm font-bold text-aurora">+42 leads / día</span>
                  </div>
                  <div className="w-10 sm:w-14 h-6 sm:h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <motion.path
                        d="M0,15 L10,13 L20,18 L30,8 L40,11 L50,2"
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

                {/* Gráfico 4: Tiempo Liberado Sparkline */}
                <div className="rounded-xl border border-line/50 bg-deep/10 p-2.5 sm:p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[8px] sm:text-[10px] uppercase tracking-wider text-ink-mute font-mono">Tiempo Liberado</span>
                    <span className="block font-display text-xs sm:text-sm font-bold text-ember">48 hrs / mes</span>
                  </div>
                  <div className="w-10 sm:w-14 h-6 sm:h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <motion.path
                        d="M0,18 L10,14 L20,15 L30,9 L40,8 L50,3"
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

          {/* Simulador de Ahorro IA / Auditoría Especializada */}
          <Reveal delay={0.08}>
            <div className="premium-surface rounded-card border border-line bg-deep/45 p-4 sm:p-6 shadow-[0_12px_35px_-20px_rgba(255,157,87,0.1)]">
              <h3 className="font-display text-sm sm:text-base font-semibold text-ink flex items-center gap-2">
                <Bot size={16} className="text-ember animate-bounce" />
                Auditor IA de WhatsApp y Conversión de Chats
              </h3>
              <p className="mt-1 text-[11px] sm:text-xs text-ink-mute">
                Descubre cómo responde tu negocio y simula las fugas de conversión actuales.
              </p>

              <AnimatePresence mode="wait">
                {calcStatus === "idle" && (
                  <motion.form
                    key="idle-form"
                    onSubmit={runCalculator}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 space-y-3.5"
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-[9px] uppercase tracking-wider text-ink-mute mb-1">
                          Nombre del negocio
                        </label>
                        <input
                          type="text"
                          required
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="Ej: Toma Café"
                          className="w-full h-9 px-3 rounded-full border border-line bg-void/40 text-ink text-xs focus:outline-none focus:border-ember transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[9px] uppercase tracking-wider text-ink-mute mb-1">
                          Sector o Nicho
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
                    </div>

                    <div>
                      <div className="flex justify-between text-[9px] uppercase tracking-wider text-ink-mute mb-1">
                        <span>Consultas / Chats diarios recibidos</span>
                        <span className="text-ember font-bold">{messagesPerDay}</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="200"
                        step="5"
                        value={messagesPerDay}
                        onChange={(e) => setMessagesPerDay(Number(e.target.value))}
                        className="w-full h-1 bg-line rounded-lg appearance-none cursor-pointer accent-ember animate-pulse"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 rounded-full bg-panel border border-line text-xs font-semibold text-ink hover:border-ink-soft transition-colors cursor-pointer"
                    >
                      Ejecutar Diagnóstico IA
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
                      {loadingMessages[loadingStep]}
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
                    {/* Alerta de Auditoría con preguntas provocativas específicas */}
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide flex items-center gap-1">
                          <AlertCircle size={12} />
                          Reporte de Fugas: 3 Problemas Críticos
                        </span>
                        <span className="rounded bg-red-400/25 px-1.5 py-0.5 text-[8px] font-bold text-red-300">
                          Eficiencia: {diagnostics.score}
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
                        <span className="block text-[8px] uppercase tracking-wider text-ink-mute">Tiempo libre mensual</span>
                        <span className="block mt-0.5 font-display text-base font-bold text-ember">~{hoursSaved} hrs</span>
                      </div>
                      <div className="rounded-xl border border-line bg-void/45 p-2.5 text-center">
                        <span className="block text-[8px] uppercase tracking-wider text-ink-mute">Leads recuperados</span>
                        <span className="block mt-0.5 font-display text-base font-bold text-aurora">+{leadsRecovered} / mes</span>
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
                        Corregir fallos en WhatsApp
                      </a>
                      <button
                        onClick={() => {
                          setCalcStatus("idle");
                          setBusinessName("");
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
                Selecciona tu mejora:
              </h3>
              <p className="mt-0.5 text-[11px] text-ink-mute">
                Marcarás las opciones que deseas discutir en nuestra auditoría gratuita.
              </p>

              {/* Lista de Seleccionables - Ajustada a p-2.5 para ser más compacta en móvil */}
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
                  <MessageCircle size={15} />
                  Construir mi Sistema con IA
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Testimonios de Clientes Reales - Oculta los últimos 2 en móviles (hidden md:flex) */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t, index) => (
          <Reveal 
            key={t.name} 
            delay={0.05 + index * 0.05}
            className={index >= 2 ? "hidden md:flex" : "flex"} // Hides last 2 testimonials on mobile to prevent endless scrolling
          >
            <div className="premium-surface w-full h-full flex flex-col justify-between rounded-card border border-line bg-gradient-to-r from-deep/40 via-ember/5 to-deep/40 p-4.5 sm:p-6">
              <div>
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
                <span className="rounded-full bg-void/50 border border-line px-2 py-0.5 text-[8px] uppercase tracking-wider text-ember font-semibold shrink-0">
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
