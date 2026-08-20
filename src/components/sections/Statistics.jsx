/*
 * CANOPY EDITORIAL — Statistics as an editorial ledger, not a centered grid.
 * Offset numeral column, thin rules, amber index accents, and overlapping
 * decorative circles echo the leaf-vein badge motif.
 */
import CountUp from "../CountUp.jsx";
import SectionLabel from "../SectionLabel.jsx";

const STATS = [
  { value: 1200, suffix: "+", label: "Teams measuring impact" },
  { value: 42, suffix: "%", label: "Average carbon reduction" },
  { value: 8, suffix: "M", label: "Tonnes of CO₂ tracked" },
  { value: 99, suffix: ".9%", label: "Data verification accuracy" },
];

export default function Statistics() {
  return (
    <section id="stats" className="relative bg-leaf-dark text-primary-foreground">
      {/* Decorative leaf-vein circles, recurring brand motif */}
      <div
        className="absolute -left-16 -top-16 hidden h-56 w-56 rounded-full border border-cream/10 md:block"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 right-8 hidden h-32 w-32 rounded-full border border-amber/30 lg:block"
        aria-hidden="true"
      />

      <div className="container relative z-10 py-20 md:py-24">
        <div className="reveal mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-lg">
            <SectionLabel index="04" label="Impact in Numbers" light />
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Roots go deep before they show
            </h2>
          </div>
          <p className="max-w-sm text-sm text-cream/65">
            Measured across Verdant teams over the last four quarters — a
            living ledger of what sustainable growth actually looks like.
          </p>
        </div>

        <div className="flex flex-col">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="reveal grid items-baseline gap-4 border-t border-cream/15 py-8 last:border-b md:grid-cols-[4rem_9rem_1fr] md:gap-8"
            >
              <span className="font-display text-sm text-amber">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-4xl font-semibold text-cream sm:text-5xl lg:text-6xl">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm text-cream/70 md:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
