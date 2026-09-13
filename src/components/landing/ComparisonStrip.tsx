import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/landing/SectionHeading";

const ROWS = [
  {
    dimension: "Price per seat",
    legacy: "$200–$400 / month, annual contracts",
    brush: "Flat $5 / month, per user",
  },
  {
    dimension: "Install footprint",
    legacy: "20GB+ desktop download and license manager",
    brush: "100% web-native — open a URL",
  },
  {
    dimension: "Hardware required",
    legacy: "$2,500 workstation with a certified pro GPU",
    brush: "Any laptop, Chromebook, or tablet — we render server-side",
  },
  {
    dimension: "File access",
    legacy: "Files locked in local silos and vaults",
    brush: "Every project lives at a shareable link",
  },
  {
    dimension: "Client & trade sharing",
    legacy: "Zero client-friendly sharing — export a PDF and hope",
    brush: "Instant multiplayer links for trades and homeowners",
  },
  {
    dimension: "Onboarding a sub",
    legacy: "Procurement, license seat, IT install",
    brush: "Paste a link. They're in.",
  },
];

export function ComparisonStrip() {
  return (
    <section id="why-web-first" className="relative py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="The Old Way vs. Brush"
          title="You're renting a factory to hang a cabinet."
          description="Legacy CAD was built for aerospace assemblies and 40-story towers — then priced that way. Here's the same job, side by side."
        />

        <div className="mx-auto mt-14 max-w-5xl">
          {/* Column headers */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-t-2xl border border-ink-600/70 bg-ink-800/40 px-6 py-5">
              <Badge variant="danger" className="mono-badge">
                Legacy CAD
              </Badge>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Autodesk / SolidWorks
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Enterprise tooling, enterprise overhead.
              </p>
            </div>
            <div className="rounded-t-2xl border border-signal/40 bg-signal/[0.06] px-6 py-5 shadow-glow-emerald">
              <Badge variant="signal" className="mono-badge">
                Brush
              </Badge>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Web-first renovation CAD
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Everything a remodel needs. Nothing it doesn&apos;t.
              </p>
            </div>
          </div>

          {/* Rows */}
          <div className="mt-4 divide-y divide-ink-600/60 overflow-hidden rounded-2xl border border-ink-600/70 bg-ink-800/40">
            {ROWS.map((row) => (
              <div key={row.dimension} className="grid grid-cols-1 md:grid-cols-2">
                {/* Stacked on mobile, the dimension reads once as a row header. */}
                <p className="mono-badge px-6 pb-1 pt-5 text-ink-500 md:hidden">
                  {row.dimension}
                </p>
                <div className="flex gap-3 px-6 py-4 md:border-r md:border-ink-600/60 md:py-5">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" aria-hidden="true" />
                  <div>
                    <p className="mono-badge hidden text-ink-500 md:block">{row.dimension}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground md:mt-1.5">
                      {row.legacy}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 bg-signal/[0.03] px-6 py-4 md:py-5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  <div>
                    {/* Invisible spacer keeps both columns' values on the same baseline. */}
                    <p
                      aria-hidden="true"
                      className="mono-badge hidden text-ink-500 md:invisible md:block"
                    >
                      {row.dimension}
                    </p>
                    <p className="text-sm font-medium leading-relaxed text-foreground md:mt-1.5">
                      {row.brush}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            A three-person remodel crew on Brush costs{" "}
            <span className="font-semibold text-white">$15/month</span> — about{" "}
            <span className="font-semibold text-white">0.4%</span> of three legacy seats.
          </p>
        </div>
      </div>
    </section>
  );
}
