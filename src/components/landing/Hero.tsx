import { ArrowRight, Calendar, Sparkles } from "lucide-react"

import { HeroVisual } from "@/components/landing/HeroVisual"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const PROOF = [
  { value: "Hours, not days", label: "Brief to an editable model" },
  { value: "In the meeting", label: "Client revisions, applied live" },
  { value: "Revit & Rhino", label: "Clean export, no lock-in" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(6,182,212,0.16) 0%, transparent 70%), radial-gradient(40% 40% at 80% 10%, rgba(139,92,246,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="cyan" className="animate-fade-up">
            <Sparkles className="size-3" />
            The AI design workspace for architects
          </Badge>

          <h1
            className="animate-fade-up mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            Design buildings at the{" "}
            <span className="text-gradient">speed you think.</span>
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            From brief to an editable model — then into Revit, Rhino, and CAD. Describe a space,
            sketch an idea, or upload a plan. AI accelerates iteration. You stay in control.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "180ms" }}
          >
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#download">
                Start a project
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <a href="#download">
                <Calendar className="size-4" />
                Book a demo
              </a>
            </Button>
          </div>

          <p
            className="animate-fade-up mt-4 text-xs text-muted-foreground"
            style={{ animationDelay: "220ms" }}
          >
            14-day Studio trial. No credit card. Export the geometry you generate.
          </p>
        </div>

        <div className="animate-fade-up mt-14" style={{ animationDelay: "260ms" }}>
          <HeroVisual />
        </div>

        <dl
          className="animate-fade-up mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
          style={{ animationDelay: "320ms" }}
        >
          {PROOF.map((item) => (
            <div key={item.label} className="text-center">
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block text-xl font-bold text-white sm:text-2xl">
                  {item.value}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{item.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
