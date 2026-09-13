import { Laptop, Smartphone, Users, type LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  step: string;
  title: string;
  body: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Smartphone,
    step: "1",
    title: "Scan the room with your phone",
    body: "Walk the space and Brush picks up the walls and measurements. You get a drawing of the room as it is now, ready to change.",
  },
  {
    icon: Laptop,
    step: "2",
    title: "Draw the new layout",
    body: "Move walls, open things up, drop in cabinets and islands. The hard work happens on our computers, so your laptop stays quiet.",
  },
  {
    icon: Users,
    step: "3",
    title: "Send it to your client",
    body: "They open the link and see the whole thing in 3D. They can leave notes right on the drawing. It costs them nothing.",
  },
];

export function Benefits() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container">
        <h2 className="mx-auto max-w-xl text-balance text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Three steps, start to sign off.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, step, title, body }) => (
            <article key={step} className="card-surface card-surface-hover p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blueprint/25 bg-blueprint/10 text-blueprint">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-ink-500">Step {step}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
