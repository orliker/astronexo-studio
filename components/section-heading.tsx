import { Reveal } from "@/components/motion-primitives";

/**
 * Encabezado de sección con "eyebrow" numerado estilo editorial.
 * El número de capítulo da continuidad narrativa entre secciones.
 */
export function SectionHeading({
  index,
  kicker,
  title,
  intro,
  align = "left",
}: {
  index: string;
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      <Reveal>
        <div
          className={`flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-mute ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="text-nebula-soft">{index}</span>
          <span className="h-px w-8 bg-line" />
          <span>{kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
