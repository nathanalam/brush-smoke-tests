import { ArrowRight, Building2, Calendar } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 50%, rgba(6,182,212,0.16) 0%, transparent 70%), radial-gradient(40% 50% at 75% 40%, rgba(139,92,246,0.16) 0%, transparent 70%)",
        }}
      />
      <div className="container relative">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-md sm:p-12">
          <Badge variant="cyan">
            <Building2 className="size-3" />
            Start with a live project
          </Badge>

          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Design your next building at the speed you think
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-muted-foreground">
            Bring a brief, a sketch, or last week’s client comments. Walk out with an editable
            model — and a file you can open in Revit tomorrow.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#">
                Start free for 14 days
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <a href="#">
                <Calendar className="size-4" />
                Book a studio demo
              </a>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            No credit card. Cancel anytime. Your geometry stays yours.
          </p>
        </div>
      </div>
    </section>
  )
}
