# Brush — Landing Page

High-converting landing page for **Brush**, a web-first CAD platform positioned as a
lightweight replacement for Autodesk / SolidWorks in the home renovation and remodeling
market. Single conversion goal: sign up for a **$5/month** seat.

## Stack

- **React 18** + **TypeScript** + **Vite 5**
- **Tailwind CSS 3** with a dark blueprint design system (`#0D1117` base, `#161B22` cards,
  `#30363D` borders, `#0EA5E9` / `#10B981` accents)
- **Radix UI** primitives wrapped shadcn/ui-style (`src/components/ui`)
- **Lucide React** icons
- **Inter** (UI) + **JetBrains Mono** (dimension/coordinate badges)

## Getting started

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # type-check + emit static site to dist/
npm run preview  # serve the production build locally
```

## Deploying to Netlify

The site is fully static — `npm run build` emits `dist/` with no server runtime.

`netlify.toml` is already configured:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 22 |

It also sets an SPA fallback (`/* → /index.html`, 200), immutable caching for
`/assets/*` (hashed filenames), and baseline security headers. `public/_redirects`
carries the same fallback so a drag-and-drop deploy of `dist/` behaves identically.

**Deploy:** connect the repo in Netlify — the settings above are picked up
automatically. Or via CLI:

```bash
npx netlify-cli deploy --prod
```

## Structure

```
src/
├── App.tsx                     # section composition / page order
├── index.css                   # design tokens + component layer
├── data/navigation.ts          # nav links and CTA copy
├── components/ui/              # Button, Badge, Accordion, Tabs (Radix + CVA)
└── components/landing/
    ├── Navbar.tsx              # sticky nav, scroll state, mobile sheet
    ├── Hero.tsx                # headline, dual CTA, proof points
    ├── HeroShowcase.tsx        # browser mockup: LiDAR scan → modeled remodel,
    │                           #   multiplayer cursors, live markup, status bar
    ├── ComparisonStrip.tsx     # legacy CAD vs. Brush, row by row
    ├── FeaturePillars.tsx      # 4 workflow pillars
    ├── FeatureSpotlight.tsx    # tabbed demo: scan / multi-device / client review
    ├── Pricing.tsx             # single $5 card, feature checklist, CTA
    ├── FAQ.tsx                 # 5 accordion items
    ├── FinalCTA.tsx            # closing conversion band
    ├── Footer.tsx              # links, infra notes, early-access status
    ├── SectionHeading.tsx      # shared eyebrow/title/description
    ├── StatusPill.tsx          # "Server Engine: Online • 14ms latency"
    └── Logo.tsx                # wordmark + spatial mark
```

Every CTA points at `#pricing`. To wire real signup, change `SIGNUP_HREF` in
`src/data/navigation.ts` and the `href` on the pricing and final-CTA buttons.

## Notes

- All marketing figures (latency, scan tolerances, SOC 2 status, competitor pricing) are
  placeholder copy — confirm them before going live.
- `npm audit` flags a moderate esbuild advisory via Vite. It affects the **dev server
  only** and has no bearing on the static build deployed to Netlify; the fix requires a
  major Vite upgrade, so it was left alone.
