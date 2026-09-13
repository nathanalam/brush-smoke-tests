import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/landing/SectionHeading";

const FEATURES = [
  "Full web CAD suite & modeling tools",
  "Unlimited home renovation projects",
  "Real-time multiplayer canvas & client review links",
  "Mobile scan ingestion & point-cloud alignment",
  "Cloud-streamed server GPU rendering",
  "Universal export (DWG, DXF, STEP, OBJ, PDF plans)",
];

const ASSURANCES = [
  "No seat minimums",
  "No annual lock-ins",
  "Cancel anytime",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/4 -z-10 h-[420px] w-[720px] max-w-[130vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.14),transparent)] blur-3xl"
      />
      <div className="container">
        <SectionHeading
          eyebrow="Radically Simple Pricing"
          title="One plan. Five dollars. That's the whole pricing page."
          description="No tier gates, no module add-ons, no quote form, no annual commitment buried in a PDF."
        />

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="relative rounded-3xl border border-signal/40 bg-ink-800/80 p-8 shadow-glow-emerald backdrop-blur-sm md:p-10">
            <div
              aria-hidden="true"
              className="blueprint-grid absolute inset-0 rounded-3xl opacity-20"
            />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="signal" className="mono-badge">
                  Early Access
                </Badge>
                <span className="mono-badge text-ink-500">Per user / per month</span>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-6xl font-extrabold tracking-tight text-white md:text-7xl">
                  $5
                </span>
                <span className="pb-2 text-lg text-muted-foreground">/ month</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Everything below is included. There is no higher tier to upsell you to — and
                viewers, clients, and subcontractors are always free.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15">
                      <Check className="h-3 w-3 text-signal" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="emerald" size="lg" className="mt-9 w-full">
                <a href="#pricing">
                  Claim Your Seat — $5/mo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                {ASSURANCES.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 text-signal" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Comparing against a $300/mo legacy seat? Brush pays for itself{" "}
            <span className="font-semibold text-white">60 times over</span> in month one.
          </p>
        </div>
      </div>
    </section>
  );
}
