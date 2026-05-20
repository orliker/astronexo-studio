"use client";

import { useEffect } from "react";
import { animate, createScope, stagger } from "animejs";

export function AnimePageMotion() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const scope = createScope({ root: "body" }).add(() => {
      animate("[data-anime='hero-item']", {
        opacity: [0, 1],
        translateY: [14, 0],
        duration: 820,
        delay: stagger(70),
        ease: "out(4)",
      });

      animate("[data-anime='float-soft']", {
        translateY: [-4, 4],
        duration: 2800,
        delay: stagger(140),
        direction: "alternate",
        loop: true,
        ease: "inOutSine",
      });

      animate("[data-anime='pulse-line']", {
        scaleX: [0.36, 1],
        opacity: [0.22, 0.75],
        duration: 2400,
        direction: "alternate",
        loop: true,
        ease: "inOutSine",
      });
    });

    return () => scope.revert();
  }, []);

  return null;
}
