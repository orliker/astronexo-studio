import { cn } from "@/lib/utils";

type BrandLogoProps = {
  showWord?: boolean;
  compact?: boolean;
  className?: string;
};

export function BrandLogo({
  showWord = true,
  compact = false,
  className,
}: BrandLogoProps) {
  return (
    <span className={cn("group inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "brand-mark relative grid shrink-0 place-items-center overflow-hidden rounded-[0.9rem] border border-line bg-panel",
          compact ? "h-8 w-8" : "h-10 w-10",
        )}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 48 48"
          className="relative z-10 h-full w-full"
          role="img"
          aria-label="AstroNexo Studio"
        >
          <defs>
            <linearGradient id="nexo-core" x1="11" y1="10" x2="38" y2="39">
              <stop stopColor="#F4F5FB" />
              <stop offset="0.48" stopColor="#FF9D57" />
              <stop offset="1" stopColor="#7C6CFF" />
            </linearGradient>
            <linearGradient id="nexo-ring" x1="4" y1="20" x2="44" y2="28">
              <stop stopColor="#38E0C9" stopOpacity="0.2" />
              <stop offset="0.5" stopColor="#F4F5FB" stopOpacity="0.85" />
              <stop offset="1" stopColor="#FF9D57" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="17" fill="none" stroke="#1B2030" />
          <g data-gsap-orbit>
            <ellipse
              cx="24"
              cy="24"
              rx="19"
              ry="7.4"
              fill="none"
              stroke="url(#nexo-ring)"
              strokeWidth="1.35"
              transform="rotate(-25 24 24)"
            />
            <circle cx="38.5" cy="17.5" r="2" fill="#FF9D57" />
          </g>
          <path
            d="M15.2 32.2V15.8h3.2l11.3 10.9V15.8h3.1v16.4h-3.1L18.4 21.3v10.9h-3.2Z"
            fill="url(#nexo-core)"
          />
          <path
            d="M14 34.4h20"
            stroke="#38E0C9"
            strokeOpacity="0.45"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {showWord ? (
        <span className="min-w-0 leading-none">
          <span className="block font-display text-[15px] font-semibold tracking-tight text-ink">
            AstroNexo
          </span>
          <span className="mt-0.5 block text-[10px] uppercase tracking-[0.2em] text-ink-mute">
            Studio
          </span>
        </span>
      ) : null}
    </span>
  );
}
