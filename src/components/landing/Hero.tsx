import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroShowcase } from "@/components/landing/HeroShowcase";
import { SIGNUP_HREF } from "@/data/navigation";
import { track, trackSignupClick } from "@/lib/analytics";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div
        aria-hidden="true"
        className="blueprint-grid mask-fade-b absolute inset-0 -z-10 opacity-[0.35]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] max-w-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(14,165,233,0.18),transparent)] blur-3xl"
      />

      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Badge variant="blueprint">Now in early access</Badge>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Draw your remodel in a browser. $5 a month.
          </h1>

          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Brush is design software for kitchens, baths and additions. Scan the room with
            your phone, draw the new layout, then send your client a link.
          </p>

          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={SIGNUP_HREF} onClick={() => trackSignupClick("hero")}>
                Get started for $5
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a
                href="#how-it-works"
                onClick={() => track("secondary_cta_click", { location: "hero" })}
              >
                See how it works
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Nothing to install. Cancel whenever you want.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <HeroShowcase />
        </div>
      </div>
    </section>
  );
}
