import { ScanLine, Server, Users, Hammer, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/landing/SectionHeading";

interface Pillar {
  icon: LucideIcon;
  step: string;
  title: string;
  body: string;
  meta: string;
}

const PILLARS: Pillar[] = [
  {
    icon: ScanLine,
    step: "01",
    title: "Scan Real Spaces in Minutes",
    body: "Ingest room scans and point clouds directly into the browser from a phone, tablet, or LiDAR rig. Skip manual tape measurements and the baseline drafting errors that follow them.",
    meta: "iPhone LiDAR · Matterport · E57 · PLY",
  },
  {
    icon: Server,
    step: "02",
    title: "Server-Side Heavy Lifting",
    body: "Don't let your laptop sound like a jet engine. Complex 3D booleans, photorealistic lighting, and dense spatial models render on our cloud GPUs and stream seamlessly to your screen.",
    meta: "60+ FPS · 14ms median latency",
  },
  {
    icon: Users,
    step: "03",
    title: "Multiplayer Collaboration in a URL",
    body: "Invite electricians, framers, interior designers, and clients into the same live canvas. Mark up spans, test material layouts, and approve changes in real time.",
    meta: "Unlimited viewers · Free for guests",
  },
  {
    icon: Hammer,
    step: "04",
    title: "Straightforward Remodeling Toolkit",
    body: "All the walls, openings, structural callouts, and joinery tools you need — without 90% of the industrial bloatware you never touch.",
    meta: "Walls · Headers · Millwork · Schedules",
  },
];

export function FeaturePillars() {
  return (
    <section id="home-renovation" className="relative py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent"
      />
      <div className="container">
        <SectionHeading
          eyebrow="Built for Renovations"
          title="The whole remodel workflow, start to punch list."
          description="From the first walkthrough scan to the final client sign-off — one browser tab, four moves."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PILLARS.map(({ icon: Icon, step, title, body, meta }) => (
            <article
              key={step}
              className="card-surface card-surface-hover group relative flex flex-col overflow-hidden p-7"
            >
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 font-mono text-[7rem] font-bold leading-none text-ink-700 transition-colors group-hover:text-blueprint/10"
              >
                {step}
              </div>

              <div className="relative flex flex-1 flex-col">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blueprint/25 bg-blueprint/10 text-blueprint transition-colors group-hover:border-blueprint/50">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mb-5 mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <p className="mono-badge mt-auto border-t border-ink-600/60 pt-4 text-ink-500">
                  {meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
