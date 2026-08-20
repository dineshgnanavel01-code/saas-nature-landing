/*
 * CANOPY EDITORIAL — Footer on deep forest. Brand mark, sitemap columns,
 * and a subtle "coming soon" placeholder. All links smooth-scroll.
 */
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

const LOGO = "/images/logo-mark.png";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Solutions", href: "#solutions" },
      { label: "Impact", href: "#stats" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Voices", href: "#testimonials" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
      { label: "ESG Guide", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
];

export default function Footer() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  useEffect(() => {
    if (!toastVisible) return;
    const t = setTimeout(() => setToastVisible(false), 3000);
    return () => clearTimeout(t);
  }, [toastVisible]);

  const onPlaceholder = (title) => {
    setToastMsg(`${title} is coming soon — this demo site uses placeholder links.`);
    setToastVisible(true);
  };

  return (
    <footer className="relative bg-primary text-primary-foreground">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="container relative z-10 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-[3fr_2fr_2fr_2fr] md:gap-8">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[oklch(0.24_0.05_155)] ring-2 ring-amber/50">
                <img
                  src={LOGO}
                  alt="Verdant leaf-vein badge"
                  className="h-7 w-7 rounded-full object-cover"
                />
              </span>
              <span className="font-display text-xl font-semibold text-cream">
                Verdant
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Sustainability operations for teams who want growth without
              ecological guilt.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.75_0.08_145)]">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href === "#" ? (
                      <button
                        onClick={() => onPlaceholder(col.title)}
                        className="text-sm text-cream/70 transition-colors hover:text-cream"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-cream/70 transition-colors hover:text-cream"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Verdant. A fictional brand built for a
            portfolio demo.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-cream/50">
            <Leaf className="h-3.5 w-3.5 text-amber" />
            Planted with care in Portland
          </p>
        </div>
      </div>

      {/* Placeholder-notice toast */}
      {toastVisible && <div className="toast toast-visible">{toastMsg}</div>}
    </footer>
  );
}
