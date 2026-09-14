import * as React from "react"
import { ArrowRight, Building2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { writeSignup } from "@/components/signup/Confirmation"
import { TYPOLOGIES } from "@/data/content"
import { captureSignup } from "@/lib/analytics"
import { navigate } from "@/lib/nav"
import { cn } from "@/lib/utils"

export type SignupIntent = "start" | "demo" | "login"

export interface SignupOptions {
  intent?: SignupIntent
  source?: string
  plan?: string
}

interface SignupContextValue {
  openSignup: (options?: SignupOptions) => void
}

const SignupContext = React.createContext<SignupContextValue | null>(null)

export function useSignup() {
  const ctx = React.useContext(SignupContext)
  if (!ctx) throw new Error("useSignup must be used within SignupProvider")
  return ctx
}

const ROLES = [
  "Principal / Partner",
  "Associate",
  "Project architect",
  "Designer",
  "BIM / VDC",
  "Student",
  "Other",
]

const COPY: Record<SignupIntent, { title: string; subtitle: string; submit: string }> = {
  start: {
    title: "Start a project",
    subtitle: "Set up your studio workspace. We’ll use this to provision the right project type.",
    submit: "Create workspace",
  },
  demo: {
    title: "Book a studio demo",
    subtitle: "Tell us who you are so we can walk a live project — not a canned deck.",
    submit: "Request demo",
  },
  login: {
    title: "Log in to Forma Architect",
    subtitle: "Enter your studio details so we can find your workspace.",
    submit: "Continue",
  },
}

const fieldClass =
  "mt-1.5 h-11 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-laser-cyan/50 focus:bg-white/[0.06]"

export function SignupProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState<Required<Pick<SignupOptions, "intent" | "source">> & { plan?: string }>({
    intent: "start",
    source: "unknown",
  })
  const [step, setStep] = React.useState<1 | 2>(1)
  const [submitting, setSubmitting] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [name, setName] = React.useState("")
  const [studio, setStudio] = React.useState("")
  const [role, setRole] = React.useState("")
  const [typology, setTypology] = React.useState("")

  const reset = React.useCallback(() => {
    setStep(1)
    setSubmitting(false)
    setEmail("")
    setName("")
    setStudio("")
    setRole("")
    setTypology("")
  }, [])

  const openSignup = React.useCallback((next?: SignupOptions) => {
    reset()
    setOptions({
      intent: next?.intent ?? "start",
      source: next?.source ?? "unknown",
      plan: next?.plan,
    })
    setOpen(true)
  }, [reset])

  const close = React.useCallback(() => {
    setOpen(false)
    reset()
  }, [reset])

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open, close])

  const copy = COPY[options.intent]

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
      return
    }
    setSubmitting(true)
    const event = {
      email: email.trim(),
      name: name.trim(),
      studio: studio.trim(),
      role,
      typology,
      intent: options.intent,
      source: options.source,
      plan: options.plan,
    }
    writeSignup(event)
    captureSignup(event)
    window.setTimeout(() => {
      close()
      navigate("/confirmation")
    }, 500)
  }

  return (
    <SignupContext.Provider value={{ openSignup }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="signup-title"
            className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0d0f16] shadow-2xl shadow-black/60"
          >
            <div className="flex items-start justify-between gap-3 border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-laser-cyan">
                  <Building2 className="size-4" />
                </span>
                <div>
                  <p id="signup-title" className="text-sm font-semibold text-white">
                    {copy.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Step {step} of 2
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex size-8 items-center justify-center rounded-md text-white/60 hover:bg-white/5 hover:text-white"
                aria-label="Close"
                onClick={close}
              >
                <X className="size-4" />
              </button>
            </div>

            <form onSubmit={onSubmit} className="p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">{copy.subtitle}</p>

                {step === 1 ? (
                  <div className="mt-5 space-y-4">
                    <label className="block text-[13px] font-medium text-white/80">
                      Work email
                      <input
                        required
                        type="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@studio.com"
                        className={fieldClass}
                      />
                    </label>
                    <fieldset>
                      <legend className="text-[13px] font-medium text-white/80">I want to</legend>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {(
                          [
                            ["start", "Start a project"],
                            ["demo", "Book a demo"],
                          ] as const
                        ).map(([value, label]) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() =>
                              setOptions((o) => ({ ...o, intent: value }))
                            }
                            className={cn(
                              "rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors",
                              options.intent === value || (value === "start" && options.intent === "login")
                                ? "border-laser-cyan/40 bg-laser-cyan/10 text-white"
                                : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20",
                            )}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ) : (
                  <div className="mt-5 space-y-4">
                    <label className="block text-[13px] font-medium text-white/80">
                      Full name
                      <input
                        required
                        type="text"
                        autoComplete="name"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Maya Chen"
                        className={fieldClass}
                      />
                    </label>
                    <label className="block text-[13px] font-medium text-white/80">
                      Studio / firm
                      <input
                        required
                        type="text"
                        autoComplete="organization"
                        value={studio}
                        onChange={(e) => setStudio(e.target.value)}
                        placeholder="Atelier North"
                        className={fieldClass}
                      />
                    </label>
                    <label className="block text-[13px] font-medium text-white/80">
                      Role
                      <select
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className={cn(fieldClass, "appearance-none")}
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" disabled>
                          Select role
                        </option>
                        {ROLES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block text-[13px] font-medium text-white/80">
                      Typical project
                      <select
                        required
                        value={typology}
                        onChange={(e) => setTypology(e.target.value)}
                        className={cn(fieldClass, "appearance-none")}
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" disabled>
                          Select typology
                        </option>
                        {TYPOLOGIES.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                )}

                <div className="mt-6 flex gap-2">
                  {step === 2 && (
                    <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(1)}>
                      Back
                    </Button>
                  )}
                  <Button type="submit" className="flex-1" disabled={submitting}>
                    {submitting ? "Provisioning…" : step === 1 ? "Continue" : copy.submit}
                    {!submitting && <ArrowRight className="size-4" />}
                  </Button>
                </div>
              </form>
          </div>
        </div>
      )}
    </SignupContext.Provider>
  )
}
