"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight, Eye, MessageCircle, ShieldCheck } from "lucide-react";
import { PingPongVideo } from "@/components/pingpong-video";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Hero — layout editorial dividido.
 *
 * Decisión de dirección de arte: el vídeo NO es un fondo, es un
 * logo-reveal animado (la marca "ASTRONEXO STUDIO" ocupa su centro
 * los 9 s). Por eso el branding NO se repite en el copy: el vídeo ya
 * dice quién somos; el texto dice qué hacemos y por qué importa.
 *
 * Composición: copy + CTA a la izquierda, el vídeo enmarcado como
 * pieza de marca a la derecha (mobile: copy arriba para que el CTA
 * aparezca antes, vídeo debajo como prueba visual).
 * El sticky scroll se mantiene pero sutil: el panel del vídeo se
 * asienta levemente y el copy entra escalonado mientras haces scroll.
 */
export function HeroCinematic() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[100svh] pb-10 sm:h-[160vh] sm:pb-0"
    >
      <div className="flex min-h-[100svh] items-center overflow-hidden sm:sticky sm:top-0 sm:min-h-screen">
        {reduce ? (
          <HeroContent />
        ) : (
          <HeroContentAnimated progress={scrollYProgress} />
        )}
      </div>
    </section>
  );
}

/* ── Versión animada (sutil, no invasiva) ────────────────────── */

function HeroContentAnimated({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  // El bloque entero se despega y desvanece muy ligeramente al salir.
  const y = useTransform(progress, [0, 1], [0, -70]);
  const opacity = useTransform(progress, [0, 0.7, 1], [1, 1, 0]);
  // El panel del vídeo "respira" un punto al hacer scroll.
  const videoScale = useTransform(progress, [0, 1], [1, 1.04]);
  const glow = useTransform(progress, [0, 0.5, 1], [0.5, 0.8, 0.4]);

  return (
    <motion.div style={{ y, opacity }} className="w-full">
      <HeroContent videoScale={videoScale} glow={glow} />
    </motion.div>
  );
}

/* ── Contenido (compartido por ambas versiones) ──────────────── */

function HeroContent({
  videoScale,
  glow,
}: {
  videoScale?: MotionValue<number>;
  glow?: MotionValue<number>;
}) {
  return (
    <div className="mx-auto grid w-full max-w-7xl items-center gap-7 px-5 pb-8 pt-24 sm:gap-10 sm:px-8 sm:pb-16 sm:pt-28 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-0 lg:pt-0">
      {/* ── Copy (orden 2 en mobile para que el vídeo vaya arriba) ── */}
      <div className="order-1">
        <FadeUp delay={0}>
          <span
            data-anime="hero-item"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-deep/60 px-4 py-1.5 text-xs tracking-wide text-ink-soft backdrop-blur"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
            Presencia premium · estrategia + conversión
          </span>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h1
            data-anime="hero-item"
            className="mt-6 font-display text-[2.18rem] font-semibold leading-[1.04] tracking-tight sm:mt-7 sm:text-5xl lg:text-[3.65rem]"
          >
            Tu negocio no necesita otra web.
            <br className="hidden sm:block" /> Necesita un{" "}
            <span className="premium-word">activo digital</span>.
          </h1>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p
            data-anime="hero-item"
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:mt-6 sm:text-lg"
          >
            Diseñamos sistemas web para empresas que ya tienen valor, pero
            necesitan que su presencia online transmita confianza, claridad
            comercial y capacidad de cerrar oportunidades desde el primer clic.
          </p>
        </FadeUp>

        <FadeUp delay={0.24}>
          <div
            data-anime="hero-item"
            className="mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="micro-glint group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-void transition-colors hover:bg-white sm:min-h-0 sm:justify-start sm:px-7"
            >
              <MessageCircle size={17} />
              Solicitar auditoría privada
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#proyectos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm text-ink-soft transition-colors hover:border-ink-soft hover:text-ink sm:min-h-0 sm:justify-start sm:px-7"
            >
              <Eye size={16} />
              Ver casos reales
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.32}>
          <div
            data-anime="hero-item"
            className="mt-7 grid max-w-xl grid-cols-1 gap-2 text-sm text-ink-mute sm:mt-10 sm:grid-cols-3 sm:gap-3"
          >
            {[
              "Auditoría + estrategia",
              "Diseño + copy",
              "WhatsApp + automatización",
            ].map((item, index) => (
              <span
                key={item}
                className="flex items-center gap-2 border-l border-line pl-3"
              >
                <span className="text-ember tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div
            data-anime="hero-item"
            className="mt-5 flex flex-wrap gap-2 text-xs text-ink-mute sm:mt-8"
          >
            {["Sprint 48-72h", "Mobile-first", "Seguridad base"].map(
              (item) => (
                <span
                  key={item}
                  data-anime="float-soft"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-void/35 px-3 py-1.5"
                >
                  <ShieldCheck size={13} className="text-aurora" />
                  {item}
                </span>
              ),
            )}
          </div>
        </FadeUp>
      </div>

      {/* ── Vídeo de marca enmarcado como pieza editorial ── */}
      <div className="order-2 hidden sm:block">
        <FadeUp delay={0.12}>
          <BrandVideoFrame videoScale={videoScale} glow={glow} />
        </FadeUp>
      </div>
    </div>
  );
}

/**
 * Marco del vídeo. El vídeo ya trae su propia marca centrada, así que
 * aquí solo lo "presentamos": panel con borde luminoso, glow detrás y
 * una viñeta muy suave en los bordes para fundirlo con el fondo cosmos
 * sin tapar el centro (donde vive el logo del clip).
 */
function BrandVideoFrame({
  videoScale,
  glow,
}: {
  videoScale?: MotionValue<number>;
  glow?: MotionValue<number>;
}) {
  return (
    <div className="relative">
      {/* Glow ambiental detrás del panel */}
      <motion.div
        style={glow ? { opacity: glow } : undefined}
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(124,108,255,0.28),transparent_68%)] blur-2xl"
      />

      <motion.div
        style={videoScale ? { scale: videoScale } : undefined}
        className="panel-edge premium-surface group relative overflow-hidden rounded-[1.6rem] shadow-[0_40px_120px_-30px_rgba(8,10,25,0.9)]"
      >
        <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.18em] text-ink-soft">
          <span data-anime="float-soft" className="rounded-full border border-line bg-void/55 px-3 py-1 backdrop-blur">
            Executive cosmos
          </span>
          <span data-anime="float-soft" className="rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-ember backdrop-blur">
            Live build
          </span>
        </div>
        <div className="aspect-video w-full overflow-hidden">
          <PingPongVideo
            src="/videos/astronexo-cinematic-smooth-loop.mp4"
            poster="/videos/hero-poster.svg"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Viñeta sutil: oscurece solo los bordes, respeta el centro */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_70px_rgba(5,6,10,0.55)]" />
        {/* Reflejo de luz superior, muy tenue */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
      </motion.div>

      {/* Pie editorial discreto bajo el panel */}
      <div className="mt-4 flex items-center justify-between gap-4 px-1 text-[11px] uppercase tracking-[0.18em] text-ink-mute">
        <span>Showreel · estrategia · interfaz</span>
        <span className="flex items-center gap-2">
          <span className="h-1 w-1 animate-pulse rounded-full bg-ember" />
          Sistema en vivo
        </span>
      </div>
    </div>
  );
}

/* Reveal local: respeta reduced-motion y no depende del scroll */
function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
