import * as React from "react"
import { Gauge, Lock, Users, Zap, type LucideIcon } from "lucide-react"

import { PointCloudScene, type SceneMode } from "@/components/landing/PointCloudScene"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VIEWER_FEATURES } from "@/data/content"

const ICONS: Record<string, LucideIcon> = { zap: Zap, gauge: Gauge, users: Users, lock: Lock }

interface DemoStage {
  id: SceneMode
  label: string
  caption: string
  readout: string
}

const STAGES: DemoStage[] = [
  {
    id: "raw",
    label: "Raw Scan",
    caption:
      "Straight off the phone: 8.4M unclassified returns, captured handheld in about four minutes.",
    readout: "capture://warehouse-b7.laz · 8,412,660 pts · unclassified",
  },
  {
    id: "labeled",
    label: "Labeled Cloud",
    caption:
      "Boxes snap to primitives as you draw. Classes persist through every export, in any format.",
    readout: "labels: structural_pillar ×1, mep_conduit ×3 · snapping: on",
  },
  {
    id: "ai",
    label: "AI Language Manipulation",
    caption:
      "Prompt the scene in plain language. Brush resolves it to an exact, reviewable transform.",
    readout: '"Reposition the electrical conduits +20cm" → Δy +0.200m · 41,208 pts',
  },
]

export function ViewerSpotlight() {
  const [stage, setStage] = React.useState<SceneMode>("labeled")

  return (
    <section id="cloud-ai" className="relative overflow-hidden py-20 sm:py-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(45% 40% at 15% 40%, rgba(139,92,246,0.13) 0%, transparent 70%), radial-gradient(45% 40% at 85% 60%, rgba(6,182,212,0.11) 0%, transparent 70%)",
        }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="cyan">
            <Zap className="size-3" />
            Interactive web viewer
          </Badge>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A full spatial workstation, running in a browser tab
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground">
            Zero-install WebGPU rendering means fast manipulation without the desktop bloat —
            open a link and you are already working.
          </p>
        </div>

        <Tabs
          value={stage}
          onValueChange={(v) => setStage(v as SceneMode)}
          className="mt-12"
        >
          <div className="flex justify-center">
            <TabsList className="w-full max-w-full overflow-x-auto sm:w-auto">
              {STAGES.map((s) => (
                <TabsTrigger key={s.id} value={s.id}>
                  {s.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {STAGES.map((s) => (
            <TabsContent key={s.id} value={s.id}>
              <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f16] shadow-2xl shadow-black/50">
                <div className="relative aspect-[16/10]">
                  {/* One scene instance per tab keeps the transition state honest. */}
                  <PointCloudScene
                    mode={s.id}
                    scanning={s.id === "raw"}
                    className="absolute inset-0 h-full w-full"
                  />
                  <div className="absolute left-3 top-3 rounded border border-white/10 bg-black/60 px-2 py-1 font-mono text-[10px] text-white/70 backdrop-blur-md">
                    {s.id === "raw" ? "streaming…" : "142M pts · 60 fps"}
                  </div>
                </div>
                <div className="space-y-2 border-t border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm text-white">{s.caption}</p>
                  <p className="truncate font-mono text-[11px] text-laser-cyan/80">
                    {s.readout}
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          {VIEWER_FEATURES.map((feature) => {
            const Icon = ICONS[feature.icon] ?? Zap
            return (
              <li key={feature.title}>
                <div className="flex h-full gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-laser-violet/30 hover:bg-white/[0.05]">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-laser-violet">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
