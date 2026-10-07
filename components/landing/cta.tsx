"use client"

import { useState } from "react"
import { ArrowRight, Calendar, CheckCircle2, Send, ShieldCheck, Sparkles } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Container } from "@/components/landing/primitives"
import { SITE_CONFIG } from "@/lib/constants"

const INTEGRATION_CHOICES = [
  { value: "rwa-compliance", label: "Institutional KYC & Sanctions (RWA / DeFi)" },
  { value: "riskx-credit", label: "Undercollateralized Lending (RiskX Credit)" },
  { value: "agent-passport", label: "AI Agent Spending & Safety Passport" },
  { value: "custom-policy", label: "Custom Enclave Policy & Web2 Data Ingress" },
  { value: "general-diligence", label: "General Technical Diligence" },
] as const

export function Cta() {
  const [email, setEmail] = useState("")
  const [integrationType, setIntegrationType] = useState<string>("rwa-compliance")
  const [explorationGoal, setExplorationGoal] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [position, setPosition] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg(null)

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          integrationType,
          explorationGoal: explorationGoal.trim(),
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.")
      }

      if (data.position) {
        setPosition(data.position)
      }
      setSubmitted(true)
    } catch (err: any) {
      console.warn("Waitlist submission failed, trying fallback", err)
      // Fallback
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "zcred-meeting-request",
            email: email.trim(),
            integrationType,
            explorationGoal: explorationGoal.trim(),
          }),
        }).catch(() => null)
        setSubmitted(true)
      } catch {
        setErrorMsg(err.message || "An error occurred. Please contact hi@zcred.xyz directly.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="beta" className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-14 sm:px-12 sm:py-16 text-white shadow-2xl">
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Context & Scheduling */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                  Cohort 1 Beta Onboarding
                </div>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl text-balance">
                  Bring confidential compliance decisions to your protocol.
                </h2>

                <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
                  We are onboarding our first cohort of protocols, tokenized asset issuers, and fintech partners. Join the beta list to test in-enclave evaluation and Base attestation registry integration.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={SITE_CONFIG.links.calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100 shadow-sm"
                  >
                    <Calendar className="h-4 w-4" />
                    Book 30-Min Technical Call
                  </a>
                </div>

                <ul className="mt-8 space-y-2.5 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    0 bytes persistent PII custody by design
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    AWS Nitro hardware TEE evaluation via Horizen Vela
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    Single-slot &lt;26,000 gas verification on Base
                  </li>
                </ul>
              </div>

              {/* Right Column: Beta Onboarding Form */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-semibold text-slate-200">
                            Work or Protocol Email <span className="text-violet-400">*</span>
                          </label>
                          <span className="text-[11px] text-slate-400">Priority Review</span>
                        </div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alex@protocol.xyz"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-violet-500 focus:bg-white/10 focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                          How do you want to integrate? <span className="text-violet-400">*</span>
                        </label>
                        <select
                          value={integrationType}
                          onChange={(e) => setIntegrationType(e.target.value)}
                          className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-sm text-white focus:border-violet-500 focus:outline-none transition-all cursor-pointer"
                        >
                          {INTEGRATION_CHOICES.map((choice) => (
                            <option key={choice.value} value={choice.value} className="bg-slate-900 text-white">
                              {choice.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                          What would you like to explore?
                        </label>
                        <textarea
                          rows={2}
                          value={explorationGoal}
                          onChange={(e) => setExplorationGoal(e.target.value)}
                          placeholder="e.g., Gating our institutional vault on Base, scoring cashflows for private credit..."
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-violet-500 focus:bg-white/10 focus:outline-none transition-all resize-none"
                        />
                      </div>

                      {errorMsg && (
                        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
                          {errorMsg}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500 disabled:opacity-50 shadow-sm cursor-pointer"
                      >
                        {loading ? (
                          <>Submitting...</>
                        ) : (
                          <>
                            <Sparkles className="h-4 w-4 text-violet-200" />
                            Join the Beta List
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-[11px] text-slate-400">
                        Direct response within 24 hours. Your details will never be shared.
                      </p>
                    </form>
                  ) : (
                    <div className="py-6 text-center flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3 border border-emerald-500/30">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">You're on the Beta List</h3>
                      <p className="text-xs text-slate-300 max-w-xs leading-relaxed mb-4">
                        Thank you for registering. We have queued <span className="font-semibold text-white">{email}</span> for Phase 1 beta onboarding.
                      </p>
                      {position && (
                        <div className="mb-4 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/20 px-3.5 py-1 text-xs font-mono font-semibold text-violet-300">
                          Cohort Member #{position}
                        </div>
                      )}
                      <a
                        href={SITE_CONFIG.links.calendly}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white transition-colors"
                      >
                        <Calendar className="h-3.5 w-3.5" /> Need immediate scoping? Pick a slot on Calendly ↗
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
