import { PenLine, Share2, Sparkles, type LucideIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useSignup } from "@/components/signup/SignupFlow"
import { CONTROL_POINTS } from "@/data/content"

const ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  pen: PenLine,
  share: Share2,
}

export function Control() {
  const { openSignup } = useSignup()

  return (
    <section id="control" className="py-20 sm:py-28">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge variant="violet">Human + AI</Badge>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              AI accelerates the workflow. You stay in control.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Forma is not a black box that spits out a pretty picture. It is a design partner that
              models fast, then gets out of the way when you take over — the same way a strong
              intern should.
            </p>
            <Button className="mt-8" onClick={() => openSignup({ intent: "start", source: "control" })}>
              Start a live project
            </Button>
          </div>

          <ol className="space-y-4">
            {CONTROL_POINTS.map((point, i) => {
              const Icon = ICONS[point.icon] ?? Sparkles
              return (
                <li key={point.title}>
                  <article className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-laser-cyan/20 to-laser-violet/20 text-laser-cyan">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] text-white/30">0{i + 1}</p>
                      <h3 className="mt-0.5 text-base font-semibold text-white">{point.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
