import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        // Glassmorphic default per the design tokens.
        default: "border border-white/10 bg-white/5 text-white backdrop-blur-md",
        cyan: "border border-laser-cyan/30 bg-laser-cyan/10 text-laser-cyan backdrop-blur-md",
        violet:
          "border border-laser-violet/30 bg-laser-violet/10 text-laser-violet backdrop-blur-md",
        solid: "bg-white text-[#090A0F]",
      },
    },
    defaultVariants: { variant: "default" },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
