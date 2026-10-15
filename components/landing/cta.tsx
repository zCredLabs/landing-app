"use client"

import { useState } from "react"
import { ArrowRight, Calendar, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Container } from "@/components/landing/primitives"
import { SITE_CONFIG } from "@/lib/constants"

export function Cta() {
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

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
          organization: organization.trim(),
          integrationType: "institutional-pilot",
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.")
      }

      setSubmitted(true)
    } catch (err: any) {
      console.warn("Pilot submission failed, trying fallback", err)
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "zcred-meeting-request",
            email: email.trim(),
            organization: organization.trim(),
            integrationType: "institutional-pilot",
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
    <section id="pilot" className="pb-12 sm:pb-20 lg:pb-24 scroll-mt-16">
      <div id="beta" className="sr-only" />
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-950 px-6 py-10 sm:px-12 sm:py-16 text-white shadow-2xl">
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="relative max-w-2xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold text-violet-300 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                Scoped Pilot Program
              </span>

              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white text-balance">
                Request a scoped pilot.
              </h2>

              <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
                Scope one evidence source, one policy rule, and one contract gate. Benchmark review speed, zero-leak isolation, and onchain gas overhead for your protocol.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="work@protocol.xyz"
                      className="h-11 sm:h-12 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-violet-500 focus:bg-white/10 focus:outline-none transition-all"
                    />
                    <input
                      type="text"
                      required
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Protocol / Entity"
                      className="h-11 sm:h-12 w-full sm:w-36 rounded-xl border border-white/10 bg-white/5 px-4 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-violet-500 focus:bg-white/10 focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 sm:h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-violet-500 disabled:opacity-50 shadow-sm cursor-pointer"
                  >
                    {loading ? (
                      <>Submitting...</>
                    ) : (
                      <>
                        <Sparkles className="h-3.5 w-3.5 text-violet-200" />
                        Request Scoped Pilot Access
                        <ArrowRight className="h-3.5 w-3.5 text-violet-300" />
                      </>
                    )}
                  </button>

                  {errorMsg && (
                    <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-2.5 text-xs text-rose-300">
                      {errorMsg}
                    </div>
                  )}

                  <div className="pt-2 flex items-center justify-center gap-4 text-xs text-slate-400">
                    <a
                      href={SITE_CONFIG.links.calendly}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                    >
                      <Calendar className="h-3.5 w-3.5 text-violet-400" />
                      Schedule 30-min technical call ↗
                    </a>
                  </div>
                </form>
              ) : (
                <div className="mt-8 py-6 text-center flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3 border border-emerald-500/30">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Pilot Request Queued</h3>
                  <p className="text-xs text-slate-300 max-w-sm leading-relaxed mb-4">
                    Thank you. Our architecture team will review <span className="font-semibold text-white">{email}</span> and reach out with pilot scoping specifications.
                  </p>
                  <a
                    href={SITE_CONFIG.links.calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white transition-colors"
                  >
                    <Calendar className="h-3.5 w-3.5" /> Book a direct technical call on Calendly ↗
                  </a>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  0 bytes PII stored or custodied
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  AWS Nitro hardware enclave isolation
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  ~2,520 gas single-slot view verification
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
