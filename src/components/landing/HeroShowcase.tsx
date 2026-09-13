import { useMemo } from "react";
import { Lock, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

/** Deterministic PRNG so the scan dots render identically on every build. */
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function ScanDots() {
  const points = useMemo(() => {
    const rand = seeded(20260913);
    return Array.from({ length: 220 }, () => ({
      x: 18 + rand() * 344,
      y: 40 + rand() * 380,
      r: 0.7 + rand() * 1.4,
      o: 0.18 + rand() * 0.6,
    }));
  }, []);

  return (
    <g>
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r} fill="#38BDF8" opacity={p.o} />
      ))}
    </g>
  );
}

function Cursor({
  name,
  role,
  color,
  className,
}: {
  name: string;
  role: string;
  color: string;
  className?: string;
}) {
  return (
    <div className={cn("pointer-events-none absolute z-20 hidden sm:block", className)}>
      <MousePointer2
        className="h-5 w-5 drop-shadow-lg"
        style={{ color, fill: color }}
        aria-hidden="true"
      />
      <div
        className="mt-1 whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-semibold text-ink-950 shadow-lg"
        style={{ backgroundColor: color }}
      >
        {name} <span className="opacity-75">({role})</span>
      </div>
    </div>
  );
}

export function HeroShowcase() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[3rem] bg-[radial-gradient(60%_55%_at_50%_0%,rgba(14,165,233,0.2),transparent_70%)] blur-2xl"
      />

      <div className="overflow-hidden rounded-2xl border border-ink-600/80 bg-ink-800 shadow-panel">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-ink-600/80 bg-ink-900/80 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-ink-600/70 bg-ink-800 px-3 py-1.5">
            <Lock className="h-3 w-3 shrink-0 text-signal" aria-hidden="true" />
            <span className="truncate font-mono text-[11px] text-muted-foreground">
              brush.app/miller-kitchen
            </span>
          </div>
          <div className="hidden items-center -space-x-2 sm:flex">
            {["#0EA5E9", "#F59E0B"].map((c) => (
              <span
                key={c}
                className="h-6 w-6 rounded-full border-2 border-ink-900"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        {/* Drawing area */}
        <div className="relative overflow-hidden bg-ink-950">
          <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden="true" />

          <svg
            viewBox="0 0 760 460"
            className="relative block h-auto w-full"
            role="img"
            aria-label="A phone scan of an old kitchen on the left, redrawn as a new open layout on the right."
          >
            <defs>
              <linearGradient id="floorAfter" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.06" />
              </linearGradient>
              <linearGradient id="counter" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* LEFT: the room as it is today */}
            <g>
              <ScanDots />
              <path
                d="M30 70 L350 70 L350 410 L30 410 Z"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1.4"
                strokeDasharray="5 4"
                opacity="0.75"
              />
              {/* the wall that comes out */}
              <rect x="188" y="70" width="14" height="200" fill="#38BDF8" opacity="0.28" />
              <rect x="44" y="86" width="128" height="34" fill="#38BDF8" opacity="0.16" />
              <rect x="44" y="300" width="96" height="30" fill="#38BDF8" opacity="0.16" />
              <rect x="230" y="320" width="104" height="64" fill="#38BDF8" opacity="0.13" />
            </g>

            <line
              x1="380"
              y1="24"
              x2="380"
              y2="436"
              stroke="#30363D"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />

            {/* RIGHT: the new layout */}
            <g>
              <path d="M410 70 L730 70 L730 410 L410 410 Z" fill="url(#floorAfter)" />
              <path
                d="M410 70 L730 70 L730 410 L410 410 Z"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
              />
              <line x1="568" y1="70" x2="568" y2="120" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
              <line x1="568" y1="240" x2="568" y2="270" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
              {/* island */}
              <rect x="470" y="210" width="180" height="58" rx="6" fill="url(#counter)" />
              <rect x="470" y="210" width="180" height="58" rx="6" fill="none" stroke="#34D399" strokeWidth="1.4" />
              {/* cabinet runs */}
              <rect x="424" y="84" width="120" height="30" rx="4" fill="#10B981" opacity="0.28" />
              <rect x="596" y="84" width="120" height="30" rx="4" fill="#10B981" opacity="0.28" />
              <rect x="596" y="330" width="110" height="62" rx="8" fill="#0EA5E9" opacity="0.2" />

              {/* the new opening, with its width called out */}
              <g>
                <line x1="568" y1="150" x2="700" y2="150" stroke="#F59E0B" strokeWidth="1.4" />
                <line x1="568" y1="142" x2="568" y2="158" stroke="#F59E0B" strokeWidth="1.4" />
                <line x1="700" y1="142" x2="700" y2="158" stroke="#F59E0B" strokeWidth="1.4" />
                <text
                  x="634"
                  y="140"
                  textAnchor="middle"
                  fill="#FBBF24"
                  fontSize="13"
                  fontFamily="JetBrains Mono, monospace"
                >
                  12&apos; 4&quot;
                </text>
              </g>
            </g>
          </svg>

          <div className="pointer-events-none absolute left-4 top-4 hidden rounded-md border border-blueprint/30 bg-ink-900/85 px-2.5 py-1.5 text-xs text-blueprint-soft backdrop-blur sm:block">
            Before
          </div>
          <div className="pointer-events-none absolute right-4 top-4 hidden rounded-md border border-signal/30 bg-ink-900/85 px-2.5 py-1.5 text-xs text-signal-soft backdrop-blur sm:block">
            After
          </div>

          <Cursor name="Dave" role="you" color="#0EA5E9" className="left-[24%] top-[58%] animate-float" />
          <Cursor
            name="Sarah"
            role="homeowner"
            color="#F59E0B"
            className="left-[68%] top-[44%] animate-float [animation-delay:1.2s]"
          />

          <div className="pointer-events-none absolute left-[62%] top-[62%] z-20 hidden max-w-[190px] rounded-lg border border-amber-400/40 bg-ink-900/95 p-2.5 shadow-lg backdrop-blur sm:block">
            <p className="text-[11px] font-semibold text-amber-300">Sarah</p>
            <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
              Love it. Can the island be a little longer?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
