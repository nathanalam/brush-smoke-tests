import { Lock, ServerCog, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/landing/Logo";
import { Badge } from "@/components/ui/badge";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Why Web-First", href: "#why-web-first" },
      { label: "Home Renovation", href: "#home-renovation" },
      { label: "Collaboration", href: "#collaboration" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Export formats", href: "#faq" },
      { label: "Scan accuracy guide", href: "#faq" },
      { label: "Changelog", href: "#top" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Privacy Policy", href: "#top" },
      { label: "Terms of Service", href: "#top" },
      { label: "Security", href: "#top" },
      { label: "Contact", href: "#top" },
    ],
  },
];

const INFRA_NOTES = [
  { icon: ServerCog, text: "Render fleet: US-East / EU-West cloud GPUs" },
  { icon: Lock, text: "TLS 1.3 in transit · AES-256 at rest" },
  { icon: ShieldCheck, text: "SOC 2 Type II in progress" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink-600/70 bg-ink-950">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Browser-native CAD for the people actually swinging the hammer. Built for
              residential renovation, priced like a coffee.
            </p>
            <Badge variant="signal" className="w-fit mono-badge">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-signal" />
              Early Access — Open
            </Badge>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="mono-badge text-ink-500">{col.heading}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-ink-600/60 pt-8">
          {INFRA_NOTES.map(({ icon: Icon, text }) => (
            <span
              key={text}
              className="flex items-center gap-2 font-mono text-[11px] text-ink-500"
            >
              <Icon className="h-3.5 w-3.5 text-blueprint/70" aria-hidden="true" />
              {text}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-ink-600/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Brush. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-ink-500">
            Built web-first. No installers, ever.
          </p>
        </div>
      </div>
    </footer>
  );
}
