/*
 * CANOPY EDITORIAL — Features as an editorial index, not a tile grid.
 * Two editorial columns with large index numerals, thin rules, leaf-line
 * icons, and strong vertical rhythm (Kinfolk table-of-contents cadence).
 * Staggered column offsets create the art-directed asymmetry.
 */
import {
  BarChart3,
  CloudSun,
  Gauge,
  Globe2,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import SectionLabel from "../SectionLabel.jsx";

const FEATURES = [
  {
    icon: Gauge,
    title: "Carbon Tracking",
    desc: "Automatic emission measurement across your supply chain, updated in real time as your operations evolve.",
  },
  {
    icon: LineChart,
    title: "Impact Analytics",
    desc: "Beautiful dashboards that turn raw environmental data into clear, boardroom-ready insights.",
  },
  {
    icon: Globe2,
    title: "Supply Chain Mapping",
    desc: "Trace every tier of your supply network and surface risk before it becomes a headline.",
  },
  {
    icon: CloudSun,
    title: "ESG Reporting",
    desc: "One-click compliance reports for CSRD, GRI, and SASB frameworks — audit-ready in minutes.",
  },
  {
    icon: BarChart3,
    title: "Goal Setting",
    desc: "Set science-based reduction targets and watch your team close the gap, quarter over quarter.",
  },
  {
    icon: ShieldCheck,
    title: "Verification Ready",
    desc: "Every data point carries a full audit trail, so third-party verification never slows you down.",
  },
];

export default function Features() {
  const left = FEATURES.slice(0, 3);
  const right = FEATURES.slice(3);

  return (
    <section id="features" className="relative bg-background py-24 md:py-32">
      <div className="container">
        <div className="reveal mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <SectionLabel index="01" label="Features" />
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Six capabilities, one continuous workflow
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            From raw data to verified impact report — woven into a single
            rhythm your team can keep all year long.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {[left, right].map((col, ci) => (
            <div key={ci} className={ci === 1 ? "md:mt-16" : ""}>
              <ol className="flex flex-col">
                {col.map((f, i) => {
                  const num = String(ci * 3 + i + 1).padStart(2, "0");
                  return (
                    <li
                      key={f.title}
                      className="reveal group border-t border-ink/15 py-8 transition-colors duration-200 hover:bg-card"
                    >
                      <div className="flex items-start gap-5">
                        <span className="font-display mt-1 text-sm font-medium text-amber">
                          {num}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-leaf/40 bg-secondary text-leaf-dark transition-colors duration-200 group-hover:bg-leaf group-hover:text-primary-foreground group-hover:border-leaf">
                              <f.icon className="h-4 w-4" />
                            </div>
                            <h3 className="font-display text-2xl font-semibold text-ink">
                              {f.title}
                            </h3>
                          </div>
                          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                            {f.desc}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
                <li className="border-t border-ink/15" />
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
