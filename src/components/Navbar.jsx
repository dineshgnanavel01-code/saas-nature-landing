/*
 * CANOPY EDITORIAL — sticky nav. Transparent over the dark forest hero,
 * transitions to solid cream + blur once scrolled. Logo mark + Fraunces
 * wordmark; mobile sheet-style menu; underline-draw link hovers.
 */
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LOGO = "/images/logo-mark.png";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Impact", href: "#stats" },
  { label: "Voices", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-xl shadow-[0_1px_0_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[oklch(0.32_0.06_155)] ring-2 ring-amber/60 shadow-md">
            <img
              src={LOGO}
              alt="Verdant leaf-vein badge"
              className="h-6 w-6 rounded-full object-cover"
            />
          </span>
          <span
            className={`font-display text-xl font-semibold tracking-tight transition-colors ${
              scrolled || open ? "text-ink" : "text-cream"
            }`}
          >
            Verdant
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`link-underline text-sm font-medium transition-colors ${
                  scrolled ? "text-foreground/80 hover:text-ink" : "text-cream/85 hover:text-cream"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-leaf-dark hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Start Free Trial
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled || open ? "text-ink" : "text-cream"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-background transition-all duration-300 md:hidden ${
          open ? "max-h-96 border-b border-border" : "max-h-0"
        }`}
      >
        <ul className="container flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-leaf px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Start Free Trial
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
