"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Vídeo del hero — reproducción NATIVA estable.
 *
 * El loop "ping-pong" (forward → reverse → forward…) NO se hace en JS
 * (frágil: pausa el vídeo y un fallo de timing lo deja congelado).
 * Se hace en el propio archivo: `astronexo-cinematic-smooth-loop.mp4`
 * es el clip + su reverso concatenados con FFmpeg. Como el último
 * frame del reverso == el primer frame del original, el `loop` nativo
 * NO tiene salto perceptible. Cero JS para el efecto.
 *
 * JS aquí solo hace tres cosas, todas a prueba de fallos:
 *  - Forzar play() y tragar el rechazo de autoplay sin romper la UI.
 *  - Pausar/reanudar cuando el hero sale/entra de pantalla (ahorro),
 *    SIN dejarlo nunca congelado.
 *  - Mostrar un fallback visual si el archivo no carga.
 */
export function PingPongVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  // Solo true si el USUARIO realmente pide menos movimiento.
  const [reduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (reduced) {
      // Respeta la preferencia: frame fijo agradable, sin movimiento.
      const seek = () => {
        try {
          video.currentTime = Math.min(3, (video.duration || 6) / 2);
        } catch {
          /* algunos navegadores no permiten seek inmediato */
        }
      };
      if (video.readyState >= 1) seek();
      else video.addEventListener("loadedmetadata", seek, { once: true });
      return;
    }

    // Intenta reproducir. Si el navegador rechaza el autoplay (raro con
    // muted+playsInline) lo reintentamos al primer gesto del usuario.
    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          const resume = () => {
            video.play().catch(() => {});
            window.removeEventListener("pointerdown", resume);
            window.removeEventListener("touchstart", resume);
          };
          window.addEventListener("pointerdown", resume, { once: true });
          window.addEventListener("touchstart", resume, { once: true });
        });
      }
    };

    if (video.readyState >= 2) tryPlay();
    else video.addEventListener("canplay", tryPlay, { once: true });

    // Ahorro de recursos: pausa fuera de pantalla, REANUDA al volver.
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 },
    );
    io.observe(video);

    // Si el usuario vuelve a la pestaña, asegúrate de que sigue vivo.
    const onVis = () => {
      if (!document.hidden) video.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduced]);

  if (failed) {
    // Fallback visual coherente con la estética espacial del clip.
    return (
      <div
        className={className}
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 70% 45%, #2b3b6b 0%, #10172e 45%, #05060a 75%)",
        }}
      />
    );
  }

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
      onError={() => setFailed(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
