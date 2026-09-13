/**
 * PostHog project API key. This is a public, write-only ingestion token: it can
 * send events in and cannot read anything out, which is why PostHog ships it in
 * their own copy-paste snippet. It belongs in the source, not in build config.
 */
const POSTHOG_KEY = "";

/** US cloud. Use https://eu.i.posthog.com for an EU project. */
const POSTHOG_HOST = "https://us.i.posthog.com";

type PostHog = typeof import("posthog-js").default;

let pending: Promise<PostHog> | null = null;

/** Local dev should not land in the data. Deploy previews are filtered in PostHog by $host. */
function isLocal() {
  const { hostname } = window.location;
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".local");
}

/**
 * posthog-js is ~290kB, so it loads in its own chunk rather than blocking first
 * paint. Every call below is a no-op until POSTHOG_KEY is filled in.
 */
function load(): Promise<PostHog> | null {
  if (!POSTHOG_KEY || isLocal()) return null;

  if (!pending) {
    pending = import("posthog-js").then(({ default: posthog }) => {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
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
