import { ArrowRight, Play, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroShowcase } from "@/components/landing/HeroShowcase";
import { SIGNUP_HREF } from "@/data/navigation";

const PROOF_POINTS = [
  "No installs, no GPU workstation",
  "Unlimited projects",
  "Cancel anytime",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="blueprint-grid mask-fade-b absolute inset-0 -z-10 opacity-[0.35]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-[560px] w-[980px] max-w-[140vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(14,165,233,0.18),transparent)] blur-3xl"
      />

      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Badge variant="blueprint" className="animate-fade-up">
            <span className="h-1.5 w-1.5 rounded-full bg-blueprint" />
            A Modern CAD Alternative for Renovation Teams
          </Badge>

          <h1 className="animate-fade-up text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white [animation-delay:60ms] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Autodesk &amp; SolidWorks Power.{" "}
            <span className="text-gradient">In Your Browser.</span> For $5 a Month.
          </h1>

          <p className="animate-fade-up text-pretty text-base leading-relaxed text-muted-foreground [animation-delay:120ms] sm:text-lg md:text-xl">
            Stop paying $4,000/seat for legacy software you only use 20% of. Brush delivers
            server-powered 3D renovation design, mobile space scanning, and real-time
            multiplayer collaboration directly in a web link.
          </p>

          <div className="animate-fade-up flex w-full flex-col items-center gap-3 pt-2 [animation-delay:180ms] sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={SIGNUP_HREF}>
                Start Renovating for $5/mo
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#collaboration">
                <Play className="h-4 w-4" />
                Explore Live Interactive Model
              </a>
            </Button>
          </div>

          <ul className="animate-fade-up flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2 [animation-delay:240ms]">
            {PROOF_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up mx-auto mt-14 max-w-5xl [animation-delay:300ms] md:mt-20">
          <HeroShowcase />
        </div>
      </div>
    </section>
  );
}
