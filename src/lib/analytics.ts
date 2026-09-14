import type { PostHog } from "posthog-js"

declare global {
  interface Window {
    posthog?: PostHog
  }
}

const POSTHOG_KEY = "phc_BY23i9WY2n7wn4jked5NkDZT2S8yewnipjddfy86FkWX"
const POSTHOG_HOST = "https://us.i.posthog.com"

let client: Promise<PostHog> | null = null

function load(): Promise<PostHog> {
  return import("posthog-js").then(({ default: posthog }) => {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      defaults: "2026-05-30",
      person_profiles: "identified_only",
    })
    window.posthog = posthog
    return posthog
  })
}

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

export function getPostHog(): Promise<PostHog> | null {
  if (typeof window !== "undefined" && window.posthog) {
    return Promise.resolve(window.posthog)
  }
  if (!import.meta.env.PROD) return null
  client ??= load()
  return client
}

export interface SignupEvent {
  email: string
  name: string
  studio: string
  role: string
  typology: string
  intent: string
  source: string
  plan?: string
}

function withClient(run: (ph: PostHog) => void) {
  if (typeof window !== "undefined" && window.posthog?.capture) {
    run(window.posthog)
    return
  }
  void getPostHog()?.then(run)
}

export function captureSignup(event: SignupEvent) {
  withClient((ph) => {
    ph.identify(event.email, {
      email: event.email,
      name: event.name,
      studio: event.studio,
      role: event.role,
    })
    ph.capture("signup_submitted", event)
  })
}

export function captureConfirmation(event: Partial<SignupEvent>) {
  withClient((ph) => {
    ph.capture("$pageview", {
      $current_url: window.location.href,
      title: "Confirmation",
    })
    ph.capture("signup_completed", {
      ...event,
      path: "/confirmation",
    })
  })

  window.gtag?.("event", "page_view", {
    page_path: "/confirmation",
    page_title: "Confirmation",
  })
  window.gtag?.("event", "signup_completed", {
    send_to: "AW-18449746205",
    intent: event.intent,
    source: event.source,
    plan: event.plan,
  })
}
