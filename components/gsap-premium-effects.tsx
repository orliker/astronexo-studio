"use client";

import { useEffect } from "react";

export function GsapPremiumEffects() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let cleanup: (() => void) | undefined;

    import("gsap").then(({ default: gsap }) => {
      const ctx = gsap.context(() => {
        gsap.to("[data-gsap-orbit]", {
          rotate: 360,
          transformOrigin: "50% 50%",
          duration: 18,
          repeat: -1,
          ease: "none",
        });

        gsap.to("[data-gsap-breathe]", {
          y: -6,
          scale: 1.012,
          duration: 3.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.18,
        });

        gsap.to("[data-gsap-scan]", {
          xPercent: 115,
          opacity: 0.9,
          duration: 2.9,
          repeat: -1,
          repeatDelay: 1.2,
          ease: "power2.inOut",
          stagger: 0.28,
        });

        gsap.fromTo(
          "[data-gsap-line]",
          { scaleX: 0.35, opacity: 0.28, transformOrigin: "left center" },
          {
            scaleX: 1,
            opacity: 0.82,
            duration: 2.1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.2,
          },
        );
      });

      cleanup = () => ctx.revert();
    });

    return () => cleanup?.();
  }, []);

  return null;
}
