import { FormaMark } from "@/components/landing/FormaMark"
import { BRAND, FOOTER_LINKS } from "@/data/content"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="container py-14">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <a href="#top" className="inline-flex items-center gap-2 text-base font-bold text-white">
              <FormaMark className="size-5" gradientId="forma-mark-footer" />
              {BRAND.name}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The AI design workspace for architects. Brief to editable model, client revisions in
              language, clean handoff to BIM.
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
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for architects who are done redrawing the same plan.
          </p>
        </div>
      </div>
    </footer>
  )
}
