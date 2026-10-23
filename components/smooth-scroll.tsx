"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Scroll suavizado con Lenis. Se desactiva por completo si el usuario
 * pide menos movimiento: en ese caso el scroll nativo es lo correcto.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Menos movimiento o pantalla táctil: scroll nativo (Lenis no aporta en táctil).
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
      // Los enlaces #seccion se desplazan con suavidad y dejan sitio a la barra fija.
      anchors: { offset: -80 },
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
