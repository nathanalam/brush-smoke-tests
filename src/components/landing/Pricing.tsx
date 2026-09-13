import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackSignupClick } from "@/lib/analytics";

const INCLUDED = [
  "Walls, doors, windows, cabinets",
  "As many jobs as you want",
  "Phone scanning",
  "Client links, free for them",
  "Print plans as PDF or DWG",
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/4 -z-10 h-[380px] w-[640px] max-w-[110vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.14),transparent)] blur-3xl"
      />
      <div className="container">
        <h2 className="mx-auto max-w-xl text-balance text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          One price. That is the whole thing.
        </h2>

        <div className="mx-auto mt-12 max-w-md">
          <div className="rounded-3xl border border-signal/40 bg-ink-800/80 p-8 text-center shadow-glow-emerald md:p-10">
            <div className="flex items-end justify-center gap-2">
              <span className="text-6xl font-extrabold tracking-tight text-white">$5</span>
              <span className="pb-2 text-lg text-muted-foreground">a month</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Per person on your team. Clients and subs are free.
            </p>

            <ul className="mt-8 flex flex-col gap-3 text-left">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/15">
                    <Check className="h-3 w-3 text-signal" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="emerald" size="lg" className="mt-8 w-full">
              <a href="#pricing" onClick={() => trackSignupClick("pricing_card")}>
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <p className="mt-4 text-xs text-muted-foreground">
              No contract. Cancel whenever you want.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
