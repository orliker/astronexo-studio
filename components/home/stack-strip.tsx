import { STACK } from "@/lib/content";

/** Cinta de herramientas. Duplicada para que el bucle no tenga salto. */
export function StackStrip() {
  const items = STACK.flatMap((g) => g.items);
  return (
    <section aria-label="Tecnologías con las que trabajo" className="border-y border-line bg-deep/40 py-5">
      <div className="marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee-track gap-10 pr-10">
          {[...items, ...items].map((t, i) => (
            <li
              key={`${t}-${i}`}
              aria-hidden={i >= items.length ? true : undefined}
              className="flex items-center gap-10 whitespace-nowrap font-display text-sm font-medium text-ink-mute"
            >
              {t}
              <span className="h-1 w-1 rounded-full bg-ember/60" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
