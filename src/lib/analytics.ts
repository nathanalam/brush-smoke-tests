import type { PostHog } from "posthog-js"

declare global {
  interface Window {
    posthog?: PostHog
  }
}

/**
 * PostHog project API key — public and write-only. PostHog designs this key to
 * ship in browser bundles, so it lives in source rather than behind a build-time
 * env var that would inline to this same string anyway.
 */
const POSTHOG_KEY = "phc_BY23i9WY2n7wn4jked5NkDZT2S8yewnipjddfy86FkWX"
const POSTHOG_HOST = "https://us.i.posthog.com"

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
 * The library is ~98kB gzipped — more than the rest of the app combined — so
 * bundling it statically would delay first paint on a page whose whole job is
 * conversion. Importing it dynamically on idle keeps it out of the main chunk;
 * the pageview lands a few hundred ms later, which PostHog handles fine.
 *
 * Dev-server traffic is skipped so local browsing does not skew conversion
 * metrics. To exercise analytics locally, run `npm run preview` against a
 * production build.
 */
export function initAnalytics() {
  if (!import.meta.env.PROD || client) return

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
 * Returns null on a dev server, where analytics is disabled.
 */
export function getPostHog(): Promise<PostHog> | null {
  if (!import.meta.env.PROD) return null
  client ??= load()
  return client
}
