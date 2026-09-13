import { FOOTER_LINKS } from "@/data/content"

function BrushMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <defs>
        <linearGradient id="brush-mark-footer" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      {[4, 12, 20].map((cx) =>
        [4, 12, 20].map((cy) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={cx === 12 && cy === 12 ? 3 : 2}
            fill="url(#brush-mark-footer)"
            opacity={cx === 12 && cy === 12 ? 1 : 0.55}
          />
        )),
      )}
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="container py-14">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <a href="#top" className="inline-flex items-center gap-2 text-base font-bold text-white">
              <BrushMark />
              Brush
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI-native design for architects. Describe a space, generate a model, iterate at the
              speed of thought.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="text-xs font-semibold uppercase tracking-wide text-white">
                {group.heading}
              </h2>
              <ul className="mt-3.5 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-muted-foreground transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Brush. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for architects who are done redrawing the same plan.
          </p>
        </div>
      </div>
    </footer>
  )
}
