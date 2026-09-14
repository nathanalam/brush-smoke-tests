import { cn } from "@/lib/utils"

export function FormaMark({
  className,
  gradientId = "forma-mark",
}: {
  className?: string
  gradientId?: string
}) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-6", className)} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect x="3" y="14" width="18" height="7" rx="1.2" fill={`url(#${gradientId})`} opacity="0.95" />
      <rect x="6.5" y="8" width="11" height="6.2" rx="1.1" fill={`url(#${gradientId})`} opacity="0.72" />
      <rect x="9.5" y="3" width="7" height="5.2" rx="1" fill={`url(#${gradientId})`} opacity="0.5" />
    </svg>
  )
}
