const KEY = import.meta.env.VITE_POSTHOG_KEY;
const HOST = import.meta.env.VITE_POSTHOG_HOST ?? "https://us.i.posthog.com";

type PostHog = typeof import("posthog-js").default;

let pending: Promise<PostHog> | null = null;

/**
 * posthog-js is ~290kB, so it is loaded in its own chunk instead of the main
 * bundle. Without a key (local dev, deploy previews) it never loads at all and
 * every call below is a no-op, so the page behaves the same either way.
 */
function load(): Promise<PostHog> | null {
  if (!KEY) return null;

  if (!pending) {
    pending = import("posthog-js").then(({ default: posthog }) => {
      posthog.init(KEY, {
        api_host: HOST,
        capture_pageview: true,
        capture_pageleave: true,
        person_profiles: "identified_only",
      });
      return posthog;
    });
  }

  return pending;
}

export function initAnalytics() {
  load();
}

export function track(event: string, properties?: Record<string, unknown>) {
  load()?.then((posthog) => posthog.capture(event, properties));
}

/** Conversion goal: every "get started" button reports where it was clicked. */
export function trackSignupClick(location: string) {
  track("signup_click", { location });
}
