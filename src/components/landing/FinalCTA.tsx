import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/landing/StatusPill";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-ink-600/70 bg-ink-800/60 px-6 py-14 text-center md:px-14 md:py-20">
          <div
            aria-hidden="true"
            className="blueprint-grid absolute inset-0 opacity-25"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-64 w-[680px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(14,165,233,0.22),transparent)] blur-3xl"
          />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <StatusPill />
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Your next remodel doesn&apos;t need a $4,000 license.
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Open a browser tab, drop in a scan, and send the link to your crew. Early access
              seats are $5/month and stay $5/month.
            </p>
            <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#pricing">
                  Start Renovating for $5/mo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href="#collaboration">Explore Live Interactive Model</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
