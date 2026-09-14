import * as React from "react"
import { Boxes, Download, LayoutGrid, MessageSquare, Zap, type LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VIEWER_FEATURES } from "@/data/content"

const ICONS: Record<string, LucideIcon> = {
  boxes: Boxes,
  message: MessageSquare,
  layout: LayoutGrid,
  download: Download,
}

interface DemoStage {
  id: string
  label: string
  caption: string
  readout: string
  image: string
  alt: string
}

const STAGES: DemoStage[] = [
  {
    id: "plan",
    label: "Sketch & Plan",
    caption:
      "Drop a floor plan, a napkin sketch, or a short brief. Forma reads the intent — rooms, circulation, light — not just the pixels.",
    readout: "input://east-house-plan.pdf · sketch + brief",
    image: "/images/plan.jpg",
    alt: "Architect marking up a floor plan on the drawing board",
  },
  {
    id: "model",
    label: "Generated Model",
    caption:
      "An editable architectural model in minutes: walls, slabs, stairs, and openings you can still push, pull, and dimension.",
    readout: "model: kitchen, stair, living · 4 layouts explored",
    image: "/images/house.jpg",
    alt: "Generated two-storey house model with stair and kitchen visible",
  },
  {
    id: "revision",
    label: "Client Revision",
    caption:
      "“Make the kitchen 20% larger, move the staircase to the east wall, and add more natural light.” The model updates. Drawings stay in sync.",
    readout: "Kitchen +20% · stair → east wall · openings added · undo available",
    image: "/images/kitchen.jpg",
    alt: "Revised kitchen with a larger island and more daylight",
  },
]

export function ViewerSpotlight() {
  const [stage, setStage] = React.useState("model")

  return (
    <section id="product" className="relative overflow-hidden py-20 sm:py-28">
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
            From intent to model
          </Badge>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Client changes land in the model, not another redraw
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground">
            Describe the revision in the same language the client used. Forma applies it to live,
            editable geometry.
          </p>
        </div>

        <Tabs value={stage} onValueChange={setStage} className="mt-12">
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
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute left-3 top-3 rounded border border-white/10 bg-black/60 px-2 py-1 font-mono text-[10px] text-white/70 backdrop-blur-md">
                    {s.id === "plan" ? "reading intent…" : "editable model"}
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
