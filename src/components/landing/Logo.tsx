import { cn } from "@/lib/utils";

/** Wordmark + minimalist spatial mark (isometric plane + vertex node). */
export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900",
        className,
      )}
      aria-label="Brush, back to top"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-ink-600 bg-ink-800 transition-colors group-hover:border-blueprint/60">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M4 15.5 12 4l8 11.5-8 4.5-8-4.5Z"
            fill="none"
            stroke="#0EA5E9"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 4v16" stroke="#0EA5E9" strokeWidth="1.1" opacity="0.45" />
          <circle cx="12" cy="4" r="2" fill="#10B981" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-white">Brush</span>
    </a>
  );
}
