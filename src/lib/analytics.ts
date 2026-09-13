import type { PostHog } from "posthog-js"

declare global {
  interface Window {
    posthog?: PostHog
  }
}

/**
 * PostHog setup.
 *
 * The project API key is a *public*, write-only client key — PostHog designs it
 * to ship in browser bundles, so the default below is safe to commit. It is read
 * from the environment first so a fork or a staging deploy can point at its own
 * project without touching code.
 */
const POSTHOG_KEY =
  import.meta.env.VITE_POSTHOG_KEY ?? "phc_BY23i9WY2n7wn4jked5NkDZT2S8yewnipjddfy86FkWX"

const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST ?? "https://us.i.posthog.com"

/**
 * Local `npm run dev` traffic is excluded by default so it does not pollute
 * funnel and conversion numbers. Set VITE_POSTHOG_DEV=true to opt a dev server
 * in when you are specifically testing the integration.
 */
const enabled =
  Boolean(POSTHOG_KEY) &&
  (import.meta.env.PROD || import.meta.env.VITE_POSTHOG_DEV === "true")

let client: Promise<PostHog> | null = null

function load(): Promise<PostHog> {
  return import("posthog-js").then(({ default: posthog }) => {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      defaults: "2026-05-30",
      // Anonymous visitors stay anonymous; profiles are only created once
      // someone identifies (e.g. after sign-up).
      person_profiles: "identified_only",
    })
    // The inline snippet exposes `window.posthog`; the module build does not.
    // Restoring it enables the PostHog toolbar and console debugging.
    window.posthog = posthog
    return posthog
  })
}

/**
 * Loads PostHog off the critical path.
 *
 * The library is ~100kB gzipped — bundling it statically would delay first paint
 * on a page whose whole job is conversion. Importing it dynamically on idle keeps
 * it out of the main chunk; the pageview lands a few hundred ms later, which
 * PostHog handles fine.
 */
export function initAnalytics() {
  if (!enabled || client) return

  const start = () => {
    client ??= load()
  }

  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(start, { timeout: 2000 })
  } else {
    window.setTimeout(start, 1)
  }
}

/**
 * Access the client for custom events, e.g.
 * `void getPostHog()?.then((ph) => ph.capture("cta_clicked"))`.
 * Returns null when analytics is disabled (dev, or no key configured).
 */
export function getPostHog(): Promise<PostHog> | null {
  if (!enabled) return null
  client ??= load()
  return client
}
