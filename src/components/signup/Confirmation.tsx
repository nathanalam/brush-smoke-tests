import * as React from "react"
import { ArrowLeft, Check } from "lucide-react"

import { FormaMark } from "@/components/landing/FormaMark"
import { Button } from "@/components/ui/button"
import { captureConfirmation, type SignupEvent } from "@/lib/analytics"
import { navigate } from "@/lib/nav"

const STORAGE_KEY = "forma_signup"

export function readSignup(): Partial<SignupEvent> | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Partial<SignupEvent>) : null
  } catch {
    return null
  }
}

export function writeSignup(event: SignupEvent) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(event))
}

export function Confirmation() {
  const signup = React.useMemo(() => readSignup(), [])

  React.useEffect(() => {
    document.title = "Confirmation — Forma Architect"
    captureConfirmation(signup ?? {})
    return () => {
      document.title = "Forma Architect — Design buildings at the speed you think"
    }
  }, [signup])

  return (
    <div className="relative min-h-screen bg-background">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(6,182,212,0.16) 0%, transparent 70%), radial-gradient(40% 40% at 80% 10%, rgba(139,92,246,0.14) 0%, transparent 70%)",
        }}
      />

      <header className="relative">
        <div className="container flex h-16 items-center">
          <a
            href="/"
            className="flex items-center gap-2 text-[15px] font-bold tracking-tight text-white"
            onClick={(e) => {
              e.preventDefault()
              navigate("/")
            }}
          >
            <FormaMark gradientId="forma-mark-confirm" />
            Forma Architect
          </a>
        </div>
      </header>

      <main className="relative flex justify-center px-4 pb-24 pt-16">
        <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-md sm:p-10">
          <span className="inline-flex size-12 items-center justify-center rounded-full border border-laser-cyan/30 bg-laser-cyan/10 text-laser-cyan">
            <Check className="size-6" />
          </span>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-laser-cyan">
            /confirmation
          </p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            You’re on the list
          </h1>
          <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            We were notified
            {signup?.email ? (
              <>
                {" "}
                at <span className="text-white">{signup.email}</span>
              </>
            ) : null}
            . The team is working on reaching out to you.
          </p>
          {signup?.studio ? (
            <p className="mt-3 text-sm text-white/60">
              {signup.studio}
              {signup.intent === "demo" ? " · demo requested" : " · project requested"}
            </p>
          ) : null}
          <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Forma Architect is still being built. We’ll follow up as soon as a workspace or walkthrough
            is ready for your studio.
          </p>
          <Button
            className="mt-8"
            variant="outline"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="size-4" />
            Back to Forma Architect
          </Button>
        </div>
      </main>
    </div>
  )
}
