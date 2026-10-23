"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS = [
  {
    src: "/work/circulo-consciente.jpg",
    alt: "Web de Círculo Consciente, escuela de artes marciales en Burgos",
    host: "circuloconsciente.es",
    tag: "4 idiomas · Pagos con Stripe · Panel de gestión",
  },
  {
    src: "/work/banqa.jpg",
    alt: "Web de BANQA, mobiliario de diseño en Barcelona",
    host: "banqa.es",
    tag: "Interiorismo · Captación de clientes",
  },
  {
    src: "/work/mundo-de-papel.jpg",
    alt: "Web de Mundo de Papel Portugal",
    host: "mundodepapelportugal.com",
    tag: "Tienda de topos personalizados",
  },
];

/* Cada hueco de la pila, expresado como transform sobre la caja de la carta
   frontal (78 % del ancho, pegada abajo). Solo transform y filtro: se anima
   en la GPU y no mueve el layout. */
const SLOTS = [
  { transform: "translate3d(0,0,0) scale(1)", dim: 1, z: 30 },
  { transform: "translate3d(-15.4%,-24%,0) scale(0.795)", dim: 0.5, z: 20 },
  { transform: "translate3d(33%,-44%,0) scale(0.795)", dim: 0.35, z: 10 },
];

/** Pila de capturas reales que se gira con el dedo, con las flechas o tocando una carta de atrás. */
export function HeroDeck() {
  const [front, setFront] = useState(0);
  const [drag, setDrag] = useState(0);
  const start = useRef<{ x: number; y: number; id: number } | null>(null);
  const moved = useRef(false);
  const n = CARDS.length;

  const go = (step: number) => setFront((f) => (f + step + n) % n);
  const slotOf = (i: number) => (i - front + n) % n;

  function onPointerDown(e: React.PointerEvent) {
    start.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
    moved.current = false;
  }
  function onPointerMove(e: React.PointerEvent) {
    const s = start.current;
    if (!s || s.id !== e.pointerId) return;
    const dx = e.clientX - s.x;
    if (Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(e.clientY - s.y)) {
      moved.current = true;
      setDrag(dx);
    }
  }
  function onPointerEnd() {
    if (moved.current && Math.abs(drag) > 45) go(drag < 0 ? 1 : -1);
    start.current = null;
    setDrag(0);
  }

  const active = CARDS[front];

  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      <div
        className="relative aspect-[16/12] w-full cursor-grab select-none [perspective:1400px] active:cursor-grabbing"
        style={{ touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onPointerLeave={() => start.current && onPointerEnd()}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Proyectos reales"
      >
        {CARDS.map((c, i) => {
          const slot = slotOf(i);
          const s = SLOTS[slot];
          const isFront = slot === 0;
          const dragStyle = isFront && drag
            ? `translate3d(${drag * 0.6}px,0,0) rotateY(${drag * 0.06}deg) rotateZ(${drag * 0.012}deg)`
            : s.transform;
          return (
            <div
              key={c.host}
              className="absolute bottom-0 left-[12%] w-[78%] origin-top-left"
              style={{
                transform: dragStyle,
                filter: s.dim < 1 ? `brightness(${s.dim}) saturate(0.8)` : "none",
                zIndex: s.z,
                transition: drag && isFront
                  ? "none"
                  : "transform 0.7s cubic-bezier(0.16,1,0.3,1), filter 0.5s ease",
              }}
              onClick={() => {
                if (!moved.current && !isFront) setFront(i);
              }}
              aria-hidden={!isFront}
            >
              <div className={slot === 1 ? "float-a" : slot === 2 ? "float-b" : undefined}>
                <figure className="browser overflow-hidden rounded-xl">
                  <div className="browser-bar" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <span className="ml-2 truncate text-[10px] text-ink-mute">{c.host}</span>
                  </div>
                  <Image
                    src={c.src}
                    alt={c.alt}
                    width={1440}
                    height={900}
                    priority={i === 0}
                    draggable={false}
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="pointer-events-none block h-auto w-full"
                  />
                </figure>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="min-w-0 truncate text-xs text-ink-soft" aria-live="polite">
          <span className="text-ink">{active.host}</span>
          <span className="text-ink-mute"> · {active.tag}</span>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className="premium-focus grid h-10 w-10 place-items-center rounded-full border border-line bg-deep/70 text-ink-soft transition-colors hover:border-ink-mute hover:text-ink"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft size={17} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="premium-focus grid h-10 w-10 place-items-center rounded-full border border-line bg-deep/70 text-ink-soft transition-colors hover:border-ink-mute hover:text-ink"
            aria-label="Proyecto siguiente"
          >
            <ChevronRight size={17} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
