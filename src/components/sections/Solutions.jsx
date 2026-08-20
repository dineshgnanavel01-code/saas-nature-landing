/*
 * CANOPY EDITORIAL — Solutions section. Cream paper, editorial split with a
 * vertical leaf close-up, plus three solution cards with hover lift.
 */
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../SectionLabel.jsx";

const LEAF_IMG = "/images/leaf-texture.png";
const WORK_IMG = "/images/nature-work.png";

const SOLUTIONS = [
  {
    tag: "For Retail & E-commerce",
    title: "Green Commerce Suite",
    desc: "Track product-level carbon, optimize packaging impact, and surface eco-ratings customers actually trust.",
  },
  {
    tag: "For Manufacturers",
    title: "Supply Chain Clarity",
    desc: "Map every supplier tier, flag high-emission partners, and model reduction scenarios before you commit.",
  },
  {
    tag: "For Growing Startups",
    title: "Impact Foundations",
    desc: "Start lean with automated baseline measurement that scales into full ESG reporting as you grow.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative bg-background py-24 md:py-32">
      <div className="container">
        <div className="reveal mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <SectionLabel index="03" label="Solutions" />
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              One platform, rooted in your industry
            </h2>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14">
          {/* Visual column */}
          <div className="reveal relative hidden lg:block">
            <img
              src={LEAF_IMG}
              alt="Macro photograph of a green leaf with delicate veins"
              className="h-full w-full rounded-2xl object-cover shadow-lg"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-display text-xl font-medium text-cream">
              Detail matters. So does the big picture.
            </p>
          </div>

          {/* Solution cards */}
          <div className="flex flex-col gap-6">
            {SOLUTIONS.map((s, i) => (
              <div
                key={s.title}
                className="reveal group flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_var(--leaf-dark)] sm:flex-row sm:items-start md:p-8"
              >
                <span className="inline-block min-w-[44px] font-display text-2xl font-semibold text-amber">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-leaf-dark">
                    {s.tag}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-leaf-dark" />
              </div>
            ))}
          </div>
        </div>

        {/* Editorial band image */}
        <div className="reveal relative mt-16">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={WORK_IMG}
              alt="A quiet sunlit desk surrounded by green plants, work in progress"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <p className="font-display absolute -bottom-5 left-8 rounded-full bg-card px-5 py-2.5 text-sm font-medium text-ink shadow-md sm:left-12">
            Work that feels like it belongs among the trees.
          </p>
          <div
            className="absolute -right-5 -top-5 h-20 w-20 rounded-full border border-amber/40"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
