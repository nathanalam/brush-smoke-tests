import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/landing/Logo";
import { NAV_LINKS, CTA_LABEL, SIGNUP_HREF } from "@/data/navigation";
import { trackSignupClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-600/70 bg-ink-900/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-ink-800 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SIGNUP_HREF}
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-white sm:inline-flex"
          >
            Sign in
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={SIGNUP_HREF} onClick={() => trackSignupClick("navbar")}>
              {CTA_LABEL}
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600 text-muted-foreground transition-colors hover:text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-600/70 bg-ink-900/98 backdrop-blur-xl lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-ink-800 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="md" className="mt-3 w-full">
              <a
                href={SIGNUP_HREF}
                onClick={() => {
                  trackSignupClick("navbar_mobile");
                  setOpen(false);
                }}
              >
                {CTA_LABEL}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
