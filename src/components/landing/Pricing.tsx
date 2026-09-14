import * as React from "react"
import { Check, Cpu, HardDrive, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useSignup } from "@/components/signup/SignupFlow"
import { PLANS } from "@/data/content"
import { cn } from "@/lib/utils"

/** Annual billing bills 10 months for 12 — i.e. two months free. */
const ANNUAL_MONTHS_CHARGED = 10

function formatPrice(value: number) {
  return Number.isInteger(value) ? `$${value}` : `$${value.toFixed(2)}`
}

export function Pricing() {
  const { openSignup } = useSignup()
  const [annual, setAnnual] = React.useState(false)

  return (
    <section id="pricing" className="border-t border-white/10 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="violet">Pricing</Badge>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Priced like software your studio will actually buy
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground">
            14-day Studio trial on every plan. Imports and editable exports never meter.
            Pay for projects and revisions — not seats that sit idle.
          </p>
        </div>

        {/* Billing period toggle. */}
        <div className="mt-9 flex items-center justify-center gap-3">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              annual ? "text-muted-foreground" : "text-white",
            )}
          >
            Monthly
          </span>
          <Switch
            checked={annual}
            onCheckedChange={setAnnual}
            aria-label="Bill annually and save two months"
          />
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              annual ? "text-white" : "text-muted-foreground",
            )}
          >
            Annual
          </span>
          <Badge variant="cyan" className="ml-1">
            2 months free
          </Badge>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const perMonth = annual
              ? (plan.monthly * ANNUAL_MONTHS_CHARGED) / 12
              : plan.monthly
            const billedYearly = plan.monthly * ANNUAL_MONTHS_CHARGED
            const isCustom = Boolean(plan.custom)

            return (
              <div
                key={plan.id}
                className={cn(
                  "group relative flex h-full flex-col rounded-2xl border bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1",
                  plan.popular
                    ? "border-laser-cyan/40 bg-white/[0.05] shadow-xl shadow-laser-cyan/10 lg:-mt-3 lg:pb-8 lg:pt-8"
                    : "border-white/10 hover:border-white/25",
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge
                      variant="solid"
                      className="shadow-lg shadow-laser-cyan/20"
                    >
                      <Sparkles className="size-3" />
                      Most Popular
                    </Badge>
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    {plan.tagline}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold tracking-tight text-white">
                      {isCustom ? "Custom" : formatPrice(perMonth)}
                    </span>
                    {!isCustom && (
                      <span className="text-sm text-muted-foreground">/ month</span>
                    )}
                  </div>
                  <p className="mt-1.5 h-4 text-xs text-muted-foreground">
                    {isCustom
                      ? "Annual firm agreement"
                      : annual
                        ? `${formatPrice(billedYearly)} billed annually`
                        : "Billed monthly"}
                  </p>
                </div>

                {/* The two meters that actually govern the tier. */}
                <dl className="mt-6 grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                    <dt className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      <HardDrive className="size-3 text-laser-cyan" aria-hidden="true" />
                      Projects
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-white">{plan.storage}</dd>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                    <dt className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      <Cpu className="size-3 text-laser-violet" aria-hidden="true" />
                      AI credits
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-white">{plan.aiCredits}</dd>
                  </div>
                </dl>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[13px] text-white/80">
                      <Check
                        className={cn(
                          "mt-0.5 size-3.5 shrink-0",
                          plan.popular ? "text-laser-cyan" : "text-laser-violet",
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-7 w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() =>
                    openSignup({
                      intent: plan.custom ? "demo" : "start",
                      source: "pricing",
                      plan: plan.id,
                    })
                  }
                >
                  {plan.cta}
                </Button>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Studio includes a 14-day trial. Practice includes SSO, a DPA, and a security review.
        </p>
      </div>
    </section>
  )
}
