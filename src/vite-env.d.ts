/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** PostHog project API key (public, write-only). Optional — falls back to the built-in default. */
  readonly VITE_POSTHOG_KEY?: string
  /** PostHog ingestion host. Optional — defaults to the US cloud. */
  readonly VITE_POSTHOG_HOST?: string
  /** Set to "true" to capture events from a local dev server. */
  readonly VITE_POSTHOG_DEV?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
