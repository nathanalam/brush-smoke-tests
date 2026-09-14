import { ArrowLeftRight, ShieldCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { FORMATS, INTEGRATIONS } from "@/data/content"

export function Integrations() {
  return (
    <section id="integrations" className="border-y border-white/10 bg-white/[0.02] py-14">
      <div className="container">
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge variant="default">
            <ArrowLeftRight className="size-3" />
            Works with the tools you already own
          </Badge>
          <p className="max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base">
            <span className="font-semibold text-white">Handoff without a rebuild.</span> Export
            to Revit, Rhino, AutoCAD, and Archicad — materials and parameters intact.
          </p>
        </div>

        <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {INTEGRATIONS.map((tool) => (
            <li key={tool.name}>
              <div className="group h-full rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-laser-cyan/30 hover:bg-white/[0.06]">
                <p className="text-sm font-semibold text-white transition-colors group-hover:text-laser-cyan">
                  {tool.name}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">{tool.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5 text-laser-cyan" />
            Round-trips:
          </span>
          {FORMATS.map((format) => (
            <span
              key={format}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/80 backdrop-blur-md"
            >
              .{format.toLowerCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
