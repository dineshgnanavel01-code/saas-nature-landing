/*
 * CANOPY EDITORIAL — About / Benefits. Dark forest section (wave transition
 * from cream), text + image split with benefits checklist and amber tick marks.
 */
import { Check } from "lucide-react";
import SectionLabel from "../SectionLabel.jsx";

const ABOUT_IMG = "/images/about-team.png";

const BENEFITS = [
  {
    title: "Cut reporting time by 70%",
    desc: "What took weeks of spreadsheets now takes an afternoon of clicks.",
  },
  {
    title: "Unify every data source",
    desc: "Utility bills, logistics, procurement — Verdant ingests them all automatically.",
  },
  {
    title: "Build stakeholder trust",
    desc: "Transparent, verified impact data turns sustainability into a growth asset.",
  },
  {
    title: "Stay ahead of regulation",
    desc: "Frameworks update themselves; you stay compliant without the research burden.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-primary text-primary-foreground">
      <div className="container grid gap-14 py-24 md:grid-cols-2 md:items-center md:py-32">
        <div className="reveal order-2 md:order-1">
          <SectionLabel index="02" label="About Verdant" light />
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Sustainability shouldn't feel like a chore
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-cream/75">
            We built Verdant because most teams dread their ESG workflow. Our
            founders spent years watching sustainability data drown in
            spreadsheets — so they planted a better way: a single living
            platform that grows alongside your business.
          </p>
          <ul className="mt-9 grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <li key={b.title} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber/20">
                  <Check className="h-3.5 w-3.5 text-amber" />
                </span>
                <div>
                  <p className="font-medium text-cream">{b.title}</p>
                  <p className="mt-1 text-sm text-cream/60">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal order-1 md:order-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
              <img
                src={ABOUT_IMG}
                alt="Team reviewing sustainability data in a plant-filled office"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-4 h-28 w-28 rounded-full border border-amber/40 md:-right-8"
              aria-hidden="true"
            />
            <div className="absolute -left-4 -top-4 rounded-xl bg-card px-5 py-4 shadow-xl sm:-left-6">
              <p className="font-display text-2xl font-semibold text-ink">
                Since 2019
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                helping teams measure what matters
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
