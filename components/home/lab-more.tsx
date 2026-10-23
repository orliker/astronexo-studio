"use client";

import { ChevronDown } from "lucide-react";

/** En móvil el Laboratorio enseña 3 proyectos; este botón despliega el resto y las herramientas. */
export function LabMore() {
  return (
    <button
      type="button"
      onClick={(e) => {
        const section = e.currentTarget.closest("section");
        if (section) section.dataset.open = "true";
        section?.querySelectorAll(".lab-extra .reveal").forEach((el) => el.classList.add("is-in"));
        section?.querySelectorAll(".lab-extra.reveal").forEach((el) => el.classList.add("is-in"));
      }}
      className="lab-more premium-focus mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-line px-5 py-3.5 text-sm font-semibold text-ink-soft transition-colors hover:border-ink-mute hover:text-ink md:hidden"
    >
      Ver los 6 proyectos y las herramientas
      <ChevronDown size={16} aria-hidden="true" />
    </button>
  );
}
