"use client";

import { useEffect, useRef } from "react";

/**
 * Telón de fondo cósmico: nebulosas con blur (CSS) + campo de estrellas
 * en canvas con deriva mínima. Pausa el rAF cuando no es visible y se
 * congela si el usuario pide menos movimiento.
 */
export function CosmosBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = {
      x: number;
      y: number;
      r: number;
      a: number;
      tw: number;
      drift: number;
    };
    const count = Math.min(180, Math.floor((w * h) / 11500));
    const stars: Star[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.25,
      a: Math.random() * 0.6 + 0.2,
      tw: Math.random() * 0.02 + 0.004,
      drift: Math.random() * 0.18 + 0.04,
    }));

    function size() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();

    let t = 0;
    let raf = 0;
    let running = true;

    function frame() {
      if (!running) return;
      ctx!.clearRect(0, 0, w, h);
      t += 1;
      const gradient = ctx!.createRadialGradient(
        w * 0.5,
        h * 0.42,
        0,
        w * 0.5,
        h * 0.42,
        Math.max(w, h) * 0.65,
      );
      gradient.addColorStop(0, "rgba(124,108,255,0.045)");
      gradient.addColorStop(0.45, "rgba(56,224,201,0.018)");
      gradient.addColorStop(1, "rgba(5,6,10,0)");
      ctx!.fillStyle = gradient;
      ctx!.fillRect(0, 0, w, h);

      for (const s of stars) {
        const flicker = reduce ? s.a : s.a + Math.sin(t * s.tw) * 0.28;
        const x = reduce ? s.x : (s.x + t * s.drift) % w;
        ctx!.beginPath();
        ctx!.arc(x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(220,224,255,${Math.max(0.05, flicker)})`;
        ctx!.fill();
      }
      if (!reduce) raf = requestAnimationFrame(frame);
    }
    frame();

    const io = new IntersectionObserver(
      ([e]) => {
        running = e.isIntersecting;
        if (running && !reduce) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(frame);
        }
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const onResize = () => size();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-void" />
      {/* Nebulosa nebula superior-izquierda */}
      <div className="absolute -left-[15%] -top-[20%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(124,108,255,0.22),transparent_65%)] blur-3xl animate-pulse-slow" />
      {/* Brasa cálida inferior-derecha — el contrapunto cromático */}
      <div className="absolute -bottom-[25%] -right-[10%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(255,157,87,0.14),transparent_65%)] blur-3xl" />
      {/* Halo aurora central muy tenue */}
      <div className="absolute left-1/2 top-1/3 h-[40vh] w-[70vh] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(56,224,201,0.07),transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(244,245,251,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(244,245,251,0.2)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-nebula/10" />
      <div className="absolute left-1/2 top-1/2 h-[45vh] w-[45vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ember/10" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Viñeta para anclar la atención al centro */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,6,10,0.85))]" />
    </div>
  );
}
