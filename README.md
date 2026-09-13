# Brush — Landing Page

High-converting landing page for **Brush**, a mobile-first reality capture and 3D
intelligence app. Built to convert visitors into mobile app downloads and Brush Cloud
early-access sign-ups.

## Stack

- **React 18** + **TypeScript** + **Vite 5**
- **Tailwind CSS 3** with a dark spatial design-token palette
- **Radix UI** primitives wrapped in shadcn/ui-style components
- **lucide-react** icons
- No runtime data fetching — the page is fully static

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production bundle into dist/
npm run preview    # serve the production build locally
npm run typecheck  # tsc --noEmit
```

## Deploying to Netlify

The build is a plain static bundle, and `netlify.toml` is already configured:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 22
- SPA fallback redirect (`/* -> /index.html`, 200) plus long-lived cache headers on
  hashed assets in `/assets/*`

Either connect the repo in the Netlify UI (settings are picked up from `netlify.toml`)
or deploy from the CLI:

```bash
npx netlify-cli deploy --build          # draft URL
npx netlify-cli deploy --build --prod   # production
```

## Structure

```
src/
  App.tsx                     # section composition + skip link
  index.css                   # design tokens, glass/grid utilities, reduced-motion
  data/content.ts             # all marketing copy, pricing tiers, FAQ, footer links
  components/ui/              # shadcn-style primitives (button, badge,
                              #   accordion, switch, tabs)
  components/landing/
    Navbar.tsx                # sticky glass nav + mobile sheet
    Hero.tsx                  # headline, CTAs, proof stats
    HeroVisual.tsx            # phone capture -> WebGPU viewer mockup w/ prompt bar
    PointCloudScene.tsx       # seeded, projected point cloud (raw/labeled/ai modes)
    Integrations.tsx          # partner strip + format badges
    Workflow.tsx              # 3-step core workflow grid
    ViewerSpotlight.tsx       # tabbed Raw -> Labeled -> AI demo + viewer features
    Pricing.tsx               # 3 tiers with monthly/annual toggle
    FAQ.tsx                   # accordion
    DownloadCTA.tsx           # closing conversion block
    Footer.tsx                # product/dev/community/legal links
```

### Editing copy

Nearly all user-facing text lives in `src/data/content.ts`, so pricing, FAQ, and
navigation can be changed without touching layout code.

### The point cloud visual

`PointCloudScene.tsx` generates points from a seeded PRNG (`mulberry32`) and projects
them through a simple pinhole camera, so the illustration is deterministic across
renders and builds — no assets, no WebGL dependency. It has three modes that drive the
product narrative: `raw` (unclassified capture), `labeled` (semantic bounding boxes),
and `ai` (a prompt-applied +20cm translation with a visible delta callout).

## Accessibility & responsiveness

- Semantic landmarks, a skip link, and labeled nav regions
- Radix primitives supply keyboard and ARIA behaviour for tabs, accordion, and switch
- Visible focus rings on all interactive elements
- `prefers-reduced-motion` disables the looping hero animation and transitions
- Verified with no horizontal overflow down to 390px width
