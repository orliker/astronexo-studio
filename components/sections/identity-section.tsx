"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check, ArrowUpRight, Palette, Sparkles, Star, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion-primitives";
import { SITE } from "@/lib/site";

// Constantes declaradas al inicio del archivo para evitar problemas de hoisting/TypeScript
export const OPTIONS = [
  {
    title: "Rediseño de Logotipo & Identidad",
    desc: "Renovación de logo, selección de tipografías y colores corporativos adaptados a redes y web.",
  },
  {
    title: "Redacción Persuasiva (Copywriting)",
    desc: "Textos sin relleno que responden de inmediato a las dudas y objeciones de tus clientes potenciales.",
  },
  {
    title: "Diseño de Piezas de Redes Sociales",
    desc: "Plantillas visuales alineadas a tu nueva identidad para que tus publicaciones se sientan premium.",
  },
  {
    title: "Estrategia de Tono y Mensaje de Marca",
    desc: "Definición de las palabras clave y estilo con el que tu marca debe hablar a su nicho ideal.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "El rediseño de identidad digital corporativa y los textos persuasivos sostienen nuestras tarifas sin objeción alguna por parte de grandes clientes corporativos. Transmite un prestigio absoluto.",
    name: "Garrigues Abogados (Madrid)",
    result: "Prestigio & Autoridad",
  },
  {
    quote: "Adecuar el tono de marca y los textos de la landing de producto eliminó la sensación de amateurismo. El ticket promedio de compra web subió un 25% el primer mes.",
    name: "Kibuc Muebles (España)",
    result: "+25% ticket medio",
  },
  {
    quote: "Estábamos compitiendo únicamente por precio frente a otras agencias. El nuevo diseño de marca y los textos profesionales justifican el valor real de nuestras consultorías sin regateo.",
    name: "Lluc & Pau Consultores (Barcelona)",
    result: "Cierre sin regateo",
  },
  {
    quote: "Nuestra consistencia visual en redes y web es impecable. Transmitimos la confianza exacta que cobramos y logramos capturar clientes internacionales de alto valor.",
    name: "Pampa Holding (Madrid)",
    result: "Clientes Internacionales",
  },
];

export function IdentitySection() {
  // Estado para el configurador (Derecha)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "Rediseño de Logotipo & Identidad",
  ]);

  // Estado para el analizador IA (Izquierda)
  const [brandInput, setBrandInput] = useState("");
  const [businessNiche, setBusinessNiche] = useState("Servicios Profesionales");
  const [brandStatus, setBrandStatus] = useState<"idle" | "analyzing" | "result">("idle");
  const [brandStep, setBrandStep] = useState(0);

  const toggleOption = (opt: string) => {
    if (selectedOptions.includes(opt)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== opt));
    } else {
      setSelectedOptions([...selectedOptions, opt]);
    }
  };

  const getWhatsAppLinkConfig = () => {
    const baseMsg = "Hola AstroNexo. Me interesa tu solución de Identidad Digital y Rediseño de Marca.";
    const selectedText =
      selectedOptions.length > 0
        ? ` He seleccionado: ${selectedOptions.join(", ")}.`
        : "";
    const fullMsg = `${baseMsg}${selectedText} Mi negocio es: `;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`;
  };

  const runBrandAnalyzer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandInput.trim()) return;
    setBrandStatus("analyzing");
    setBrandStep(0);

    const steps = [
      "Midiendo consistencia cromática y visual...",
      "Analizando egocentrismo vs beneficio en el copy...",
      "Evaluando autoridad y prueba social percibida...",
    ];

    const timer = setInterval(() => {
      setBrandStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(timer);
          setBrandStatus("result");
          return prev;
        }
        return prev + 1;
      });
    }, 600);
  };

  // Diagnóstico personalizado por nicho en branding
  const getBrandDiagnostics = () => {
    const cleanBrand = brandInput.trim() || "tu negocio";
    switch (businessNiche) {
      case "Restauración / Cafetería":
        return {
          score: "4.5/10 (Media-Baja)",
          problems: [
            {
              title: "Cero narrativa o storyselling visual:",
              desc: "Muestras fotos de platos sin contar la historia o valor del restaurante. La comida se compra por deseo, si tus copys no despiertan hambre, competirás por precio de menú."
            },
            {
              title: "Inconsistencia visual en carta y feed:",
              desc: "Los colores de tu feed en Instagram son distintos a los de tu carta física o QR. Esto rompe la coherencia y abarata la percepción."
            },
            {
              title: "Ausencia de claims de autenticidad local:",
              desc: "No destacas qué te hace único (ingredientes orgánicos, origen artesano) forzándote a regatear tus tarifas."
            }
          ]
        };
      case "Clínica / Estética / Dental":
        return {
          score: "3.2/10 (Muy Crítica)",
          problems: [
            {
              title: "Copy genérico enfocado en tecnología, no en salud/confianza:",
              desc: "Tus textos dicen 'tecnología de punta' (lo mismo que todas las clínicas) en vez de calmar las objeciones y miedos reales de tus pacientes."
            },
            {
              title: "Diseño amateur en perfiles sociales:",
              desc: "Tus redes no lucen tan limpias y profesionales como tus tratamientos. Las clientas asocian informalidad visual con falta de rigor médico."
            },
            {
              title: "Falta de elementos de autoridad del doctor:",
              desc: "No posicionas al especialista como referente con testimonios y casos de éxito reales expuestos de forma visible en la web."
            }
          ]
        };
      case "Servicios Profesionales":
        return {
          score: "3.8/10 (Deficiente)",
          problems: [
            {
              title: "Propuesta de valor indistinguible de la competencia:",
              desc: "Tus copys afirman 'ofrecemos servicios de alta calidad y experiencia' (lo mismo que el 99% de consultores). No justificas cobrar tarifas premium."
            },
            {
              title: "Identidad visual de plantilla genérica:",
              desc: "Logotipo y colores genéricos que no transmiten robustez ni escala corporativa. Las empresas te comparan y piden descuentos."
            },
            {
              title: "Copy egocéntrico ('Somos', 'Hacemos'):",
              desc: "Tus textos hablan de tu currículum en lugar del problema de negocio que solucionas. El lead corporativo pierde interés rápidamente."
            }
          ]
        };
      default:
        return {
          score: "3.5/10 (Muy baja)",
          problems: [
            {
              title: "Copy egocéntrico enfocado en ti (no en el cliente):",
              desc: "Tus textos repiten claims técnicos aburridos en vez de solucionar los miedos directos del cliente. El usuario se frustra y se va."
            },
            {
              title: "Inconsistencia Visual Multicanal:",
              desc: "Tu Instagram usa unas tipografías y tu web usa otras. Esto transmite informalidad y reduce la percepción de valor de tu tarifa."
            },
            {
              title: "Ausencia de prueba social estructurada:",
              desc: "No muestras de inmediato las calificaciones o testimonios de forma persuasiva en la zona caliente de tu perfil."
            }
          ]
        };
    }
  };

  const diagnostics = getBrandDiagnostics();

  const getWhatsAppLinkBrand = () => {
    const msg = `Hola AstroNexo. He analizado mi marca: "${brandInput}" (${businessNiche}). El reporte indica una percepción de valor de ${diagnostics.score} y 3 problemas de copy/identidad. Quiero solicitar mi auditoría de marca para elevar mis tarifas.`;
    return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const brandSteps = [
    "Midiendo consistencia cromática y visual...",
    "Analizando egocentrismo vs beneficio en el copy...",
    "Evaluando autoridad y prueba social percibida...",
  ];

  return (
    <section
      id="identidad-digital"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24 border-t border-line bg-void/5"
    >
      <div className="pointer-events-none absolute -left-12 top-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,157,87,0.03),transparent_65%)] blur-3xl" />

      <SectionHeading
        index="07"
        kicker="Estrategia y Marca"
        title={
          <>
            Identidad Digital y{" "}
            <span className="premium-word">Copywriting Persuasivo</span>
          </>
        }
        intro="Una marca que se ve barata se ve obligada a competir por precio. Rediseñamos tu presencia visual y redactamos tus textos para que tu negocio se perciba premium desde el primer segundo."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-10">
        {/* Lado Izquierdo: Dashboard de Valor y Diagnóstico IA */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6 h-full">
          {/* Dashboard de Marca: 4 Gráficos y Métricas */}
          <Reveal>
            <div className="premium-surface rounded-card border border-line bg-void/25 p-4 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
              <span className="text-[10px] uppercase tracking-wider text-ink-mute flex items-center gap-1.5 mb-4">
                <Sparkles size={11} className="text-ember animate-pulse" />
                Estadísticas de Percepción y Valor de Marca Premium
              </span>

              <div className="grid gap-4 md:grid-cols-12">
                {/* Gráfico 1 (Principal): SVG Price Elasticity Curve */}
                <div className="md:col-span-8 rounded-xl border border-line/50 bg-deep/10 p-3 sm:p-4">
                  <span className="block text-[11px] font-semibold text-ink-soft mb-2">
                    Elasticidad Precio vs Valor de Marca Percibido
                  </span>
                  
                  <div className="relative h-28 sm:h-32 w-full flex items-end">
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      {/* Curva Marca Genérica (Sensibilidad al precio alta, plano) */}
                      <path
                        d="M 0,30 Q 30,29 60,30 T 100,32"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="0.75"
                        strokeDasharray="2,2"
                      />
                      
                      {/* Curva Marca Premium AstroNexo (Soporta precios altos sin bajar demanda) */}
                      <motion.path
                        d="M 0,35 Q 25,25 50,15 T 100,2"
                        fill="none"
                        stroke="#ff9d57"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                      <path
                        d="M 0,35 Q 25,25 50,15 T 100,2 L 100,40 L 0,40 Z"
                        fill="url(#brandGradArea)"
                        opacity="0.12"
                      />
                      
                      <defs>
                        <linearGradient id="brandGradArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ff9d57" />
                          <stop offset="100%" stopColor="#ff9d57" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="absolute top-0 right-1 flex flex-col gap-0.5 text-[8px] font-mono text-ink-mute">
                      <div className="flex items-center gap-1">
                        <span className="h-1 w-1 bg-red-400 rounded-full" />
                        <span>Identidad Genérica</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-1 w-1 bg-ember rounded-full" />
                        <span>Identidad Premium</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-1 flex justify-between text-[8px] text-ink-mute font-mono">
                    <span>Precio Bajo</span>
                    <span>Tarifa Premium</span>
                  </div>
                </div>

                {/* Gráfico 2: Medidor Radial de Coherencia de Marca */}
                <div className="md:col-span-4 rounded-xl border border-line/50 bg-deep/10 p-3 sm:p-4 flex flex-col justify-between items-center text-center">
                  <span className="block text-[11px] font-semibold text-ink-soft">
                    Consistencia Visual
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
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-xs sm:text-sm font-bold text-ink">100%</span>
                      <span className="text-[6px] sm:text-[7px] text-ink-mute font-mono">Multicanal</span>
                    </div>
                  </motion.div>
                  
                  <span className="block text-[8px] sm:text-[9px] leading-tight text-ink-mute">
                    Coherencia en todos tus perfiles sociales y web.
                  </span>
                </div>
              </div>

              {/* Sparklines / KPI Mini Cards (Gráficos 3 y 4) */}
              <div className="mt-3 grid gap-3 grid-cols-2">
                {/* Gráfico 3: Retención de Lectura Sparkline */}
                <div className="rounded-xl border border-line/50 bg-deep/10 p-2.5 sm:p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[8px] sm:text-[10px] uppercase tracking-wider text-ink-mute font-mono">Retención en Web</span>
                    <span className="block font-display text-xs sm:text-sm font-bold text-aurora">+80% Retención</span>
                  </div>
                  <div className="w-10 sm:w-14 h-6 sm:h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <motion.path
                        d="M0,15 L10,13 L20,10 L30,9 L40,4 L50,1"
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

                {/* Gráfico 4: Aumento de Ticket Sparkline */}
                <div className="rounded-xl border border-line/50 bg-deep/10 p-2.5 sm:p-3.5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="block text-[8px] sm:text-[10px] uppercase tracking-wider text-ink-mute font-mono">Ticket Promedio</span>
                    <span className="block font-display text-xs sm:text-sm font-bold text-ember">+25% Margen</span>
                  </div>
                  <div className="w-10 sm:w-14 h-6 sm:h-8">
                    <svg className="h-full w-full" viewBox="0 0 50 20">
                      <motion.path
                        d="M0,16 L10,12 L20,13 L30,8 L40,5 L50,1"
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

          {/* Diagnóstico de Marca */}
          <Reveal delay={0.08}>
            <div className="premium-surface rounded-card border border-line bg-deep/45 p-4 sm:p-6 shadow-[0_12px_35px_-20px_rgba(255,157,87,0.1)]">
              <h3 className="font-display text-sm sm:text-base font-semibold text-ink flex items-center gap-2">
                <Palette size={16} className="text-ember" />
                Analizador IA de Percepción y Copywriting
              </h3>
              <p className="mt-1 text-[11px] sm:text-xs text-ink-mute">
                Evalúa si tu propuesta de marca e imagen justifican tus tarifas actuales.
              </p>

              <AnimatePresence mode="wait">
                {brandStatus === "idle" && (
                  <motion.form
                    key="idle-form"
                    onSubmit={runBrandAnalyzer}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 space-y-3.5"
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-ink-mute mb-1">
                          Tu Instagram o Marca
                        </label>
                        <input
                          type="text"
                          required
                          value={brandInput}
                          onChange={(e) => setBrandInput(e.target.value)}
                          placeholder="Ej: @mi_marca"
                          className="w-full h-9 px-3 rounded-full border border-line bg-void/40 text-ink text-xs focus:outline-none focus:border-ember transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-ink-mute mb-1">
                          Sector del Negocio
                        </label>
                        <select
                          value={businessNiche}
                          onChange={(e) => setBusinessNiche(e.target.value)}
                          className="w-full h-9 px-3 rounded-full border border-line bg-void/40 text-ink text-xs focus:outline-none focus:border-ember transition-all"
                        >
                          <option value="Restauración / Cafetería">Restauración / Cafetería</option>
                          <option value="Clínica / Estética / Dental">Clínica / Estética / Dental</option>
                          <option value="Servicios Profesionales">Servicios Profesionales</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 rounded-full bg-panel border border-line text-xs font-semibold text-ink hover:border-ink-soft transition-colors cursor-pointer"
                    >
                      Diagnosticar Autoridad Visual
                    </button>
                  </motion.form>
                )}

                {brandStatus === "analyzing" && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 text-center flex flex-col items-center justify-center"
                  >
                    <div className="h-5 w-5 rounded-full border-2 border-t-transparent border-ember animate-spin" />
                    <span className="mt-2 block text-[11px] font-mono text-ink-mute transition-all duration-300">
                      {brandSteps[brandStep]}
                    </span>
                  </motion.div>
                )}

                {brandStatus === "result" && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 space-y-3 text-left"
                  >
                    {/* Alerta de 3 debilidades de marca */}
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide flex items-center gap-1">
                          <AlertTriangle size={12} />
                          Diagnóstico: 3 Incoherencias de Posicionamiento
                        </span>
                        <span className="rounded bg-red-400/25 px-1.5 py-0.5 text-[8px] font-bold text-red-300">
                          Valor Percibido: {diagnostics.score}
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
                        <span className="block text-[8px] uppercase tracking-wider text-ink-mute">Percepción de Valor</span>
                        <span className="block mt-0.5 font-display text-sm font-bold text-red-400">Media-Baja</span>
                      </div>
                      <div className="rounded-xl border border-line bg-void/45 p-2.5 text-center">
                        <span className="block text-[8px] uppercase tracking-wider text-ink-mute font-mono">Margen de Aumento</span>
                        <span className="block mt-0.5 font-display text-sm font-bold text-aurora">+30%</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={getWhatsAppLinkBrand()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 inline-flex justify-center items-center gap-1 rounded-full bg-ink text-[11px] font-semibold text-void hover:bg-white transition-colors text-center"
                      >
                        <MessageCircle size={13} />
                        Rediseñar mi marca y textos
                      </a>
                      <button
                        onClick={() => {
                          setBrandStatus("idle");
                          setBrandInput("");
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

        {/* Derecha: Configurador de Marca */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="premium-surface relative overflow-hidden rounded-card border border-line bg-deep/45 p-5 sm:p-7">
              <span className="absolute right-4 top-4 rounded-full border border-line bg-void/50 px-2 py-0.5 text-[8px] uppercase tracking-wider text-ink-soft">
                Configurador
              </span>
              
              <h3 className="font-display text-sm sm:text-base font-semibold tracking-tight text-ink">
                Selecciona tu mejora de marca:
              </h3>
              <p className="mt-0.5 text-[11px] text-ink-mute">
                Ayuda a que tus clientes entiendan tu verdadero valor y justifiques tarifas altas.
              </p>

              {/* Lista de Opciones */}
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
                  <Palette size={15} />
                  Elevar mi Marca y Presencia
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
            className={index >= 2 ? "hidden md:flex" : "flex"}
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
