import * as React from "react"
import { ArrowRight, Cpu, Radio, Sparkles, Wifi } from "lucide-react"

import { PointCloudScene } from "@/components/landing/PointCloudScene"
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

/** Phone frame streaming a live capture. */
function PhoneCapture() {
  return (
    <div className="relative mx-auto w-[190px] shrink-0 sm:w-[210px]">
      <div className="relative rounded-[2rem] border border-white/15 bg-[#0d0f16] p-2 shadow-2xl shadow-black/60">
        <div className="absolute left-1/2 top-3.5 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/70" />
        <div className="relative aspect-[9/17] overflow-hidden rounded-[1.6rem] bg-[#090A0F]">
          <PointCloudScene mode="raw" scanning fit="slice" className="absolute inset-0 h-full w-full" />

          {/* Capture HUD. */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 pt-6 text-[9px] font-medium text-white/70">
            <span className="flex items-center gap-1">
              <Radio className="size-2.5 animate-pulse-dot text-laser-cyan" />
              LiDAR
            </span>
            <span className="font-mono">04:12</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 space-y-2 bg-gradient-to-t from-black/85 to-transparent px-3 pb-4 pt-8">
            <div className="flex items-center justify-between font-mono text-[9px] text-white/75">
              <span>8.4M pts</span>
              <span className="text-laser-cyan">98% coverage</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-laser-cyan to-laser-violet" />
            </div>
            <div className="flex justify-center pt-1">
              <div className="size-8 rounded-full border-2 border-white/80 p-0.5">
                <div className="size-full rounded-full bg-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center text-[11px] font-medium text-muted-foreground">
        Capture — free, on your phone
      </div>
    </div>
  )
}

/** Browser-framed WebGPU viewer with a natural language prompt bar. */
function ViewerPanel() {
  const reduced = usePrefersReducedMotion()
  const [applied, setApplied] = React.useState(false)

  // Loop the "prompt applied" state so the value prop is visible at a glance.
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
        {/* Browser chrome — sells the "zero install" claim. */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>
          <div className="ml-1 flex flex-1 items-center gap-1.5 truncate rounded-md bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/45">
            <Wifi className="size-2.5 shrink-0 text-laser-cyan" />
            <span className="truncate">app.brush.build/scan/warehouse-b7</span>
          </div>
          <span className="hidden items-center gap-1 rounded border border-laser-cyan/30 bg-laser-cyan/10 px-1.5 py-0.5 font-mono text-[9px] text-laser-cyan sm:flex">
            <Cpu className="size-2.5" />
            WebGPU
          </span>
        </div>

        <div className="relative aspect-[16/10]">
          <PointCloudScene
            mode={applied ? "ai" : "labeled"}
            className="absolute inset-0 h-full w-full"
          />

          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            <span className="rounded border border-white/10 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-white/70 backdrop-blur-md">
              142M pts
            </span>
            <span className="rounded border border-white/10 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-white/70 backdrop-blur-md">
              60 fps
            </span>
          </div>
        </div>

        {/* Prompt bar. */}
        <div className="space-y-2 border-t border-white/10 bg-white/[0.04] p-3">
          <div className="flex items-center gap-2 rounded-lg border border-laser-violet/30 bg-laser-violet/[0.08] px-3 py-2">
            <Sparkles className="size-3.5 shrink-0 text-laser-violet" />
            <p className="min-w-0 flex-1 truncate text-[12px] text-white">
              Reposition the electrical conduits +20cm
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
            3 conduit runs translated +0.200m · 41,208 points · undo available
          </p>
        </div>
      </div>

      <div className="mt-3 text-center text-[11px] font-medium text-muted-foreground">
        Brush Cloud — label, prompt, export
      </div>
    </div>
  )
}

export function HeroVisual({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative", className)} {...props}>
      {/* Ambient accent glow behind the mockup. */}
      <div
        className="pointer-events-none absolute -inset-x-8 -inset-y-10 -z-10 opacity-60 blur-3xl"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(50% 50% at 25% 55%, rgba(6,182,212,0.20) 0%, transparent 70%), radial-gradient(50% 50% at 78% 45%, rgba(139,92,246,0.22) 0%, transparent 70%)",
        }}
      />
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md sm:p-6 lg:flex-row lg:items-center lg:gap-8">
        <PhoneCapture />

        {/* Transition arrow between capture and cloud. */}
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
