import { Check, X } from "lucide-react";

const ROWS = [
  { label: "Price", old: "$200 to $400 a month", brush: "$5 a month" },
  { label: "Getting set up", old: "Big download, license, IT help", brush: "Open a link" },
  { label: "Your computer", old: "Needs an expensive one", brush: "Any laptop or tablet" },
  { label: "Showing a client", old: "Email them a PDF", brush: "Send them a link" },
];

export function Comparison() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="mx-auto max-w-xl text-balance text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Big CAD programs were not built for your jobs.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          AutoCAD and Revit are made for office towers, and they are priced that way. You are
          doing a kitchen.
        </p>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-ink-600/70">
          <div className="grid grid-cols-2 border-b border-ink-600/70 bg-ink-800/60">
            <p className="px-5 py-4 text-sm font-semibold text-muted-foreground">
              The old way
            </p>
            <p className="border-l border-ink-600/70 bg-signal/[0.06] px-5 py-4 text-sm font-semibold text-white">
              Brush
            </p>
          </div>

          {ROWS.map((row) => (
            <div key={row.label} className="border-b border-ink-600/60 last:border-b-0">
              <p className="bg-ink-800/30 px-5 pt-4 text-xs uppercase tracking-wider text-ink-500">
                {row.label}
              </p>
              <div className="grid grid-cols-2 bg-ink-800/30">
                <div className="flex items-start gap-2.5 px-5 pb-4 pt-2">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" aria-hidden="true" />
                  <p className="text-sm text-muted-foreground">{row.old}</p>
                </div>
                <div className="flex items-start gap-2.5 border-l border-ink-600/60 bg-signal/[0.04] px-5 pb-4 pt-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  <p className="text-sm font-medium text-foreground">{row.brush}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
