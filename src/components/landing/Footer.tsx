import { Logo } from "@/components/landing/Logo";

const LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Questions", href: "#faq" },
  { label: "Privacy", href: "#top" },
  { label: "Terms", href: "#top" },
  { label: "Contact", href: "#top" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-600/70 bg-ink-950">
      <div className="container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-sm text-muted-foreground">
            Design software for home remodelers.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {LINKS.map((link) => (
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
      </div>

      <div className="container border-t border-ink-600/60 py-5">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Brush
        </p>
      </div>
    </footer>
  );
}
