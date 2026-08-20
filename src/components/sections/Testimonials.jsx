/*
 * CANOPY EDITORIAL — Testimonials as editorial pull-quotes. Index-led panels
 * with thin rules, oversized quotation numerals, offset vertical rhythm,
 * and the leaf-vein badge as avatar container. Illustrative demo copy.
 */
import SectionLabel from "../SectionLabel.jsx";

const TESTIMONIALS = [
  {
    quote:
      "Verdant replaced three spreadsheets and a consultant in one quarter. Our first CSRD report went out two weeks early — without a single panic night.",
    name: "Mira Okafor",
    role: "Head of Sustainability, Fernline Retail",
    initials: "MO",
  },
  {
    quote:
      "The supply-chain mapping alone paid for the platform. We found a Tier-2 emissions hotspot we had no idea existed, and fixed it within a season.",
    name: "Daniel Rivera",
    role: "COO, Canopy Manufacturing",
    initials: "DR",
  },
  {
    quote:
      "As a small team, we thought ESG reporting wasn't for us yet. Verdant's foundations plan made it feel native to our workflow from day one.",
    name: "Sana Whitfield",
    role: "Founder, Moss & Meridian",
    initials: "SW",
  },
  {
    quote:
      "Our investors used to ask for data we couldn't produce. Now they ask how we do it. That's the best marketing we've ever had.",
    name: "Tomas Lindqvist",
    role: "CFO, Northwind Logistics",
    initials: "TL",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-background py-24 md:py-32">
      <div className="container">
        <div className="reveal mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <SectionLabel index="05" label="Voices" />
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              What growing teams say under the canopy
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Illustrative scenarios for a demo product — built to show how
            Verdant reads in the wild.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal border-t-2 border-ink/20 pt-7 ${i % 2 === 1 ? "md:mt-14" : ""}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-6xl font-semibold leading-none text-leaf/40">
                  “
                </span>
                <span className="font-display text-sm text-amber">
                  No.{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <blockquote className="mt-4 font-display text-xl font-medium leading-relaxed text-ink md:text-[1.35rem]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-leaf/40 bg-secondary text-xs font-bold text-leaf-dark">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
