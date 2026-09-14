import { Badge } from "@/components/ui/badge"
import { TESTIMONIALS } from "@/data/content"

export function Testimonials() {
  return (
    <section id="stories" className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="default">From the studio</Badge>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Leave the meeting with a decision, not another redraw
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <li key={item.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                <blockquote className="flex-1 text-[15px] leading-relaxed text-white/85">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="mt-0.5 text-[13px] text-muted-foreground">
                    {item.role} · {item.studio}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
