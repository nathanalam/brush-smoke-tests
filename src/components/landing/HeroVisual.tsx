import * as React from "react"
import { ArrowRight, Building2, Sparkles, Upload } from "lucide-react"

import { cn } from "@/lib/utils"

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false)
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])
  return reduced
}

function SketchInput() {
  return (
    <div className="relative mx-auto w-[190px] shrink-0 sm:w-[210px]">
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0d0f16] shadow-2xl shadow-black/60">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
          <span className="flex items-center gap-1.5 text-[10px] font-medium text-white/70">
            <Upload className="size-2.5 text-laser-cyan" />
            Plan
          </span>
          <span className="font-mono text-[9px] text-white/45">east-house.pdf</span>
        </div>
        <div className="relative aspect-[9/14] bg-[#090A0F]">
          <img
            src="/images/plan.jpg"
            alt="Architect marking up a floor plan"
            className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-3 pb-3 pt-8">
            <p className="font-mono text-[9px] text-white/70">Sketch + brief attached</p>
            <p className="mt-0.5 font-mono text-[9px] text-laser-cyan">3 rooms · stair · north light</p>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center text-[11px] font-medium text-muted-foreground">
        Describe, sketch, or upload
      </div>
    </div>
  )
}

function ViewerPanel() {
  const reduced = usePrefersReducedMotion()
  const [applied, setApplied] = React.useState(false)

  React.useEffect(() => {
    if (reduced) {
      setApplied(true)
      return
    }
    const id = window.setInterval(() => setApplied((v) => !v), 3800)
    return () => window.clearInterval(id)
  }, [reduced])

  return (
    <div className="min-w-0 flex-1">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0f16] shadow-2xl shadow-black/60">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>
          <div className="ml-1 flex flex-1 items-center gap-1.5 truncate rounded-md bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/45">
            <Building2 className="size-2.5 shrink-0 text-laser-cyan" />
            <span className="truncate">app.forma.architect/project/east-house</span>
          </div>
          <span className="hidden items-center gap-1 rounded border border-laser-cyan/30 bg-laser-cyan/10 px-1.5 py-0.5 font-mono text-[9px] text-laser-cyan sm:flex">
            Live model
          </span>
        </div>

        <div className="relative aspect-[16/10]">
          <img
            src="/images/interior.jpg"
            alt="Generated open-plan living and kitchen model"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
              applied ? "opacity-0" : "opacity-100",
            )}
          />
          <img
            src="/images/kitchen.jpg"
            alt="Revised kitchen with more natural light"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
              applied ? "opacity-100" : "opacity-0",
            )}
          />

          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            <span className="rounded border border-white/10 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-white/70 backdrop-blur-md">
              editable
            </span>
            <span className="rounded border border-white/10 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-white/70 backdrop-blur-md">
              4 layouts
            </span>
          </div>
        </div>

        <div className="space-y-2 border-t border-white/10 bg-white/[0.04] p-3">
          <div className="flex items-center gap-2 rounded-lg border border-laser-violet/30 bg-laser-violet/[0.08] px-3 py-2">
            <Sparkles className="size-3.5 shrink-0 text-laser-violet" />
            <p className="min-w-0 flex-1 truncate text-[12px] text-white">
              Make the kitchen 20% larger, move the staircase to the east wall, and add more natural light.
            </p>
            <span
              className={cn(
                "hidden shrink-0 rounded px-1.5 py-0.5 font-mono text-[9px] transition-colors sm:block",
                applied
                  ? "bg-laser-violet/20 text-laser-violet"
                  : "bg-white/10 text-white/50",
              )}
            >
              {applied ? "applied" : "run"}
            </span>
          </div>
          <p
            className={cn(
              "flex items-center gap-1.5 pl-1 font-mono text-[10px] transition-opacity duration-500",
              applied ? "text-laser-cyan opacity-100" : "opacity-0",
            )}
            aria-live="polite"
          >
            <ArrowRight className="size-2.5" />
            Kitchen +20% · stair → east wall · openings added · undo available
          </p>
        </div>
      </div>

      <div className="mt-3 text-center text-[11px] font-medium text-muted-foreground">
        Model updates with the prompt
      </div>
    </div>
  )
}

export function HeroVisual({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative", className)} {...props}>
      <div
        className="pointer-events-none absolute -inset-x-8 -inset-y-10 -z-10 opacity-60 blur-3xl"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(50% 50% at 25% 55%, rgba(6,182,212,0.20) 0%, transparent 70%), radial-gradient(50% 50% at 78% 45%, rgba(139,92,246,0.22) 0%, transparent 70%)",
        }}
      />
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md sm:p-6 lg:flex-row lg:items-center lg:gap-8">
        <SketchInput />

        <div className="flex shrink-0 items-center justify-center lg:flex-col" aria-hidden="true">
          <div className="h-px w-12 bg-gradient-to-r from-laser-cyan/60 to-laser-violet/60 lg:h-16 lg:w-px lg:bg-gradient-to-b" />
          <div className="mx-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md lg:mx-0 lg:my-2">
            <ArrowRight className="size-3 text-white/70 lg:rotate-90" />
          </div>
          <div className="h-px w-12 bg-gradient-to-r from-laser-violet/60 to-transparent lg:h-16 lg:w-px lg:bg-gradient-to-b" />
        </div>

        <ViewerPanel />
      </div>
    </div>
  )
}
