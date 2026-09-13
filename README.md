# Brush — Landing Page

Landing page for **Brush**, design software for home remodelers. One goal: get the visitor
to start a **$5/month** subscription.

Copy is written for a working remodeler, not a CAD engineer. Keep it plain.

## Stack

- **React 18** + **TypeScript** + **Vite 5**
- **Tailwind CSS 3**, dark blueprint palette (`#0D1117` base, `#161B22` cards, `#30363D`
  borders, `#0EA5E9` / `#10B981` accents)
- **Radix UI** primitives, shadcn/ui style (`src/components/ui`)
- **Lucide React** icons, **Inter** + **JetBrains Mono**
- **PostHog** for analytics

## Getting started

```bash
npm install
cp .env.example .env   # optional, only needed for analytics
npm run dev            # http://localhost:8080
npm run build          # type-check + emit static site to dist/
npm run preview        # serve the production build
```

## Analytics

PostHog is wired up in `src/lib/analytics.ts` and configured entirely through env vars:

| Variable | Notes |
| --- | --- |
| `VITE_POSTHOG_KEY` | Project API key (`phc_…`). Safe in the browser. |
| `VITE_POSTHOG_HOST` | `https://us.i.posthog.com` (default) or `https://eu.i.posthog.com` |

Set both in **Netlify → Site configuration → Environment variables**, then redeploy. They
are read at build time, so a rebuild is required after changing them.

With no key set, PostHog never loads and every tracking call is a no-op — local dev and
deploy previews stay out of your data. `posthog-js` is ~290kB, so it is dynamically
imported into its own chunk; when no key is present the bundler drops it entirely.

Events sent:

| Event | When |
| --- | --- |
| `$pageview`, `$pageleave` | Automatic |
| `signup_click` | Any "get started" button. Property `location`: `navbar`, `navbar_mobile`, `hero`, `pricing_card`, `faq_footer` |
| `secondary_cta_click` | "See how it works" |
| `faq_open` | An FAQ item is expanded. Property `question` |

`signup_click` is the conversion event — build the funnel on that.

## Deploying to Netlify

Fully static; `npm run build` emits `dist/` with no server runtime. `netlify.toml` sets the
build command, publish directory, Node 22, an SPA fallback (`/* → /index.html`, 200),
immutable caching for hashed `/assets/*`, and baseline security headers.
`public/_redirects` mirrors the fallback for drag-and-drop deploys.

Connect the repo in Netlify and it picks all of that up, or:

```bash
npx netlify-cli deploy --prod
```

## Structure

```
src/
├── App.tsx                    # section order
├── index.css                  # design tokens
├── data/navigation.ts         # nav links, CTA label, signup target
├── lib/analytics.ts           # PostHog init + event helpers
├── components/ui/             # Button, Badge, Accordion (Radix + CVA)
└── components/landing/
    ├── Navbar.tsx             # sticky nav, mobile menu
    ├── Hero.tsx               # headline, two CTAs
    ├── HeroShowcase.tsx       # browser mockup: before/after plan, two live cursors,
    │                          #   a homeowner comment
    ├── Comparison.tsx         # old way vs. Brush, four rows
    ├── Benefits.tsx           # scan, draw, send — three steps
    ├── Pricing.tsx            # single $5 card
    ├── FAQ.tsx                # six short answers
    ├── Footer.tsx
    └── Logo.tsx
```

Every CTA points at `#pricing`. To connect real signup, change `SIGNUP_HREF` in
`src/data/navigation.ts` and the `href` on the pricing and FAQ buttons.

## Before going live

- The `$200 to $400 a month` competitor figure and the `12' 4"` dimension in the mockup are
  placeholders. Check them.
- The page claims phone scanning, DWG/PDF export and free client links. Make sure the
  product does all of it.
- `npm audit` flags a moderate esbuild advisory via Vite. Dev server only; it does not
  affect the static build Netlify serves. Fixing it needs a major Vite upgrade.
