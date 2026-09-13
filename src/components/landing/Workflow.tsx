import { Boxes, Check, ScanLine, Sparkles, type LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { WORKFLOW_STEPS } from "@/data/content"

const ICONS: Record<string, LucideIcon> = {
  scan: ScanLine,
  boxes: Boxes,
  sparkles: Sparkles,
}

export function Workflow() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="violet">Core workflow</Badge>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Phone in hand to prompt-edited geometry — in three steps
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground">
            No desktop licence to buy before you start, and no export tax when you finish.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {WORKFLOW_STEPS.map((step) => {
            const Icon = ICONS[step.icon] ?? ScanLine
            return (
              <li key={step.step}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-laser-cyan/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-laser-cyan/5">
                  {/* Accent wash on hover. */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                    style={{
                      background:
                        "radial-gradient(70% 60% at 50% 0%, rgba(6,182,212,0.10) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-laser-cyan/20 to-laser-violet/20 text-laser-cyan transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-xs font-semibold text-white/25">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-[13px] text-white/75">
                          <Check
                            className="mt-0.5 size-3.5 shrink-0 text-laser-cyan"
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
