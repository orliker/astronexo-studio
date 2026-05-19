"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

/**
 * Botón con atracción magnética sutil al cursor. El efecto solo se aplica
 * con puntero fino (no en móvil) y se anula con prefers-reduced-motion.
 */
export function MagneticButton({
  children,
  href,
  variant = "primary",
  className,
  external,
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-300 will-change-transform";

  const skin =
    variant === "primary"
      ? "bg-ink text-void hover:bg-white"
      : "border border-line text-ink-soft hover:text-ink hover:border-ink-soft";

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn(base, skin, className)}
    >
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60 bg-[radial-gradient(circle_at_center,#7c6cff,transparent_70%)]" />
      )}
      {children}
    </motion.a>
  );
}
