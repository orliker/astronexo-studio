import { type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Reveal por scroll sin librería: el HTML sale del servidor tal cual y
 * <RevealObserver /> añade .is-in cuando el bloque entra en pantalla.
 * Sin JS (o con menos movimiento pedido) todo se ve desde el principio:
 * el estado oculto solo existe bajo html.js (ver globals.css).
 */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <div className={cn("reveal", className)} style={delay ? ({ "--d": `${delay}s` } as CSSProperties) : undefined}>
      {children}
    </div>
  );
}

/** Contenedor: sus StaggerItem entran escalonados (retraso por posición en CSS). */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("reveal-group", className)}>{children}</div>;
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
