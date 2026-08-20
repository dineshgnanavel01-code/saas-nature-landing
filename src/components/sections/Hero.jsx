/*
 * CANOPY EDITORIAL — dark forest hero, 7/5 asymmetric split:
 * serif editorial headline left, layered canopy imagery right.
 * Warm sunlight god-rays over deep forest green ink.
 */
import { ArrowRight, Leaf } from "lucide-react";

const HERO_IMG = "/images/hero-forest.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Grain texture overlay */}
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="container relative z-10 grid gap-12 py-28 md:grid-cols-[7fr_5fr] md:items-center md:py-36">
        <div className="reveal">
          <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.75_0.08_145)]">
            <Leaf className="h-4 w-4 text-amber" />
            Sustainability Operations, Simplified
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[4.25rem]">
            Grow your operations{" "}
            <em className="not-italic text-amber">the way forests grow</em>
            &nbsp;— resiliently.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
            Verdant helps nature-conscious teams measure, manage, and report
            their environmental impact from one elegant platform. No
            spreadsheets. No guesswork. Just measurable green growth.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-leaf px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-200 hover:bg-amber hover:text-ink hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="link-underline text-sm font-medium text-cream/90">
              Explore the platform
            </a>
          </div>
          <p className="mt-8 text-xs tracking-wide text-cream/50">
            Free 14-day trial · No credit card required · Cancel anytime
          </p>
        </div>

        <div className="reveal relative mx-auto w-full max-w-md md:max-w-none">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
            <img
              src={HERO_IMG}
              alt="Sunlight filtering through a lush forest canopy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-4 rounded-xl bg-card px-5 py-4 shadow-xl sm:-left-8">
            <p className="font-display text-2xl font-semibold text-ink">
              42% avg. reduction
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              in operational carbon footprint
            </p>
          </div>
          {/* Leaf accent circle */}
          <div
            className="absolute -right-4 -top-6 hidden h-24 w-24 rounded-full border border-amber/40 md:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
