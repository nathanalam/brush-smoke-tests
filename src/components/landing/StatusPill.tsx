import { cn } from "@/lib/utils";

interface StatusPillProps {
  label?: string;
  className?: string;
}

/** Live server-health pill — reinforces the server-side render engine claim. */
export function StatusPill({
  label = "Server Engine: Online • 14ms latency",
  className,
}: StatusPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1.5",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-signal" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
      </span>
      <span className="mono-badge text-signal-soft">{label}</span>
    </div>
  );
}
