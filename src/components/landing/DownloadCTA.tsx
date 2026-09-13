import { Apple, ArrowRight, Smartphone } from "lucide-react"

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
            <Smartphone className="size-3" />
            Free forever on iOS & Android
          </Badge>

          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start scanning in the next five minutes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-muted-foreground">
            Download the app and capture your first cloud for free. Add Brush Cloud whenever you
            want hosted streaming, labeling, and prompt-driven editing.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#">
                <Apple className="size-4" />
                Download for iOS
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <a href="#">
                <Smartphone className="size-4" />
                Download for Android
              </a>
            </Button>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm text-muted-foreground">
              Want the cloud workspace?{" "}
              <a
                href="#pricing"
                className="inline-flex items-center gap-1 font-medium text-laser-cyan underline-offset-4 hover:underline"
              >
                Claim Brush Cloud early access
                <ArrowRight className="size-3" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
