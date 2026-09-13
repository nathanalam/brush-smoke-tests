import * as React from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/data/content"
import { cn } from "@/lib/utils"

function BrushMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-6", className)} aria-hidden="true">
      <defs>
        <linearGradient id="brush-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      {/* A 3x3 lattice of returns — a point cloud reduced to its mark. */}
      {[4, 12, 20].map((cx) =>
        [4, 12, 20].map((cy) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={cx === 12 && cy === 12 ? 3 : 2}
            fill="url(#brush-mark)"
            opacity={cx === 12 && cy === 12 ? 1 : 0.55}
          />
        )),
      )}
    </svg>
  )
}

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile sheet when the viewport grows past the breakpoint.
  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-[#090A0F]/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav
        className="container flex h-16 items-center justify-between gap-4"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded-md text-lg font-bold tracking-tight text-white"
        >
          <BrushMark />
          Brush
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href="#">Sign In</a>
          </Button>
          <Button size="sm" asChild>
            <a href="#download">Download App (Free)</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="container pb-4 md:hidden">
          <ul className="flex flex-col gap-1 border-t border-white/10 pt-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2">
            <Button variant="outline" asChild>
              <a href="#" onClick={() => setOpen(false)}>
                Sign In
              </a>
            </Button>
            <Button asChild>
              <a href="#download" onClick={() => setOpen(false)}>
                Download App (Free)
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
