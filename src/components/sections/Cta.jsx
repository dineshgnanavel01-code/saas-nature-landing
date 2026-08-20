/*
 * CANOPY EDITORIAL — CTA as an asymmetric editorial panel on deep forest.
 * Large serif statement left, leaf imagery overlapping the right edge,
 * single focused conversion path.
 */
import { ArrowRight } from "lucide-react";

const CTA_IMG = "/images/hero-forest.png";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="container relative z-10 grid gap-12 py-24 md:grid-cols-[7fr_4fr] md:items-center md:py-32">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.75_0.08_145)]">
            Ready when you are
          </p>
          <h2 className="font-display mt-5 max-w-xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[3.25rem]">
            One platform. Zero guesswork.{" "}
            <span className="text-amber">Measurable green impact.</span>
          </h2>
          <p className="mt-5 max-w-md text-cream/75">
            Plant the seed today — your 14-day trial includes full access to
            every capability, with a real human ready to help you grow.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-leaf px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/20 transition-all duration-200 hover:bg-amber hover:text-ink hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="link-underline text-sm font-medium text-cream/90">
              Book a demo instead
            </a>
          </div>
        </div>

        <div className="reveal relative hidden md:block">
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
            <img
              src={CTA_IMG}
              alt="Morning light through the forest canopy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
          </div>
          <div
            className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-amber/40"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-5 -right-5 h-16 w-16 rounded-full border border-cream/25"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
