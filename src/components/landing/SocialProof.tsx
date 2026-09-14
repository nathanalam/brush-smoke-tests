import { TYPOLOGIES } from "@/data/content"

export function SocialProof() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-10">
      <div className="container">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Built for schematic design — housing, civic, workplace, and more
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {TYPOLOGIES.map((item) => (
            <li key={item}>
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-white/80">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
