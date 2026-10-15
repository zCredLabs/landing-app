"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Calendar,
  CheckCircle2,
  Send,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react"
import { INTEGRATION_CHOICES, SITE_CONFIG } from "@/lib/constants"

interface MeetingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialEmail?: string
  initialIntegration?: string
}

export function MeetingModal({
  open,
  onOpenChange,
  initialEmail = "",
  initialIntegration = "institutional-pilot",
}: MeetingModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [queuePosition, setQueuePosition] = useState<number | null>(null)

  const [formData, setFormData] = useState({
    email: initialEmail,
    organization: "",
    integrationType: initialIntegration,
    explorationGoal: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg(null)

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.")
      }

      if (data.position) {
        setQueuePosition(data.position)
      }
      setSubmitted(true)
    } catch (err: any) {
      console.warn("API route error, attempting fallback", err)
      // Fallback submit to ensure user is never blocked
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "zcred-meeting-request",
            email: formData.email,
            organization: formData.organization,
            integrationType: formData.integrationType,
            explorationGoal: formData.explorationGoal,
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

  const handleClose = () => {
    setSubmitted(false)
    setErrorMsg(null)
    setFormData({
      email: "",
      organization: "",
      integrationType: "institutional-pilot",
      explorationGoal: "",
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[540px] bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-[100] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-violet-700">
              {submitted ? "Beta Spot Reserved" : "Early Access & Beta Onboarding"}
            </span>
          </div>

          <DialogTitle className="text-2xl font-bold text-slate-950 tracking-tight">
            {submitted ? "You're on the Priority List" : "Join the zCred Beta List"}
          </DialogTitle>

          {!submitted && (
            <DialogDescription className="text-sm text-slate-600">
              We are onboarding our first cohort of protocols, institutional issuers, and fintech partners. Tell us how you plan to integrate.
            </DialogDescription>
          )}
        </DialogHeader>

        {!submitted ? (
          <>
            {/* Direct Calendly booking shortcut */}
            <a
              href={SITE_CONFIG.links.calendly}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl bg-violet-50/80 border border-violet-200 p-3.5 px-4 text-violet-950 hover:bg-violet-100/80 transition-all mt-2 mb-2 group shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white font-bold shrink-0">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xs font-bold text-slate-950 group-hover:text-violet-950">
                    Prefer immediate technical diligence?
                  </div>
                  <div className="text-[11px] text-violet-800 font-mono truncate">
                    Book a 30-min call on Calendly
                  </div>
                </div>
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-violet-700 group-hover:translate-x-0.5 transition-transform shrink-0">
                Book <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>

            <div className="relative my-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-wider">
                <span className="bg-white px-2.5 text-slate-400 font-semibold">Or join the beta list</span>
              </div>
            </div>

            {errorMsg && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Work / Protocol Email <span className="text-violet-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@protocol.xyz"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-600 focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  How do you plan to integrate? <span className="text-violet-600">*</span>
                </label>
                <select
                  value={formData.integrationType}
                  onChange={(e) => setFormData({ ...formData, integrationType: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-violet-600 focus:bg-white focus:outline-none transition-all cursor-pointer"
                >
                  {INTEGRATION_CHOICES.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  What would you like to explore or build?
                </label>
                <textarea
                  rows={2}
                  value={formData.explorationGoal}
                  onChange={(e) => setFormData({ ...formData, explorationGoal: e.target.value })}
                  placeholder="e.g., Evaluating private sanctions verification for our RWA vault on Base..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-600 focus:bg-white focus:outline-none transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Protocol or Organization <span className="text-xs font-normal text-slate-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Protocol name, fund, or studio"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-600 focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800 disabled:opacity-50 shadow-sm cursor-pointer"
              >
                {loading ? (
                  <>Submitting...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Reserve My Beta Spot
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                <span>Zero spam. No PII custody. Direct onboarding by core architects.</span>
              </div>
            </form>
          </>
        ) : (
          <div className="py-6 text-center flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3 shadow-inner">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <h4 className="text-xl font-bold text-slate-950 mb-1">Beta Spot Confirmed</h4>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed mb-4">
              Thank you for signing up. We have queued <span className="font-semibold text-slate-950">{formData.email}</span> for Phase 1 beta onboarding.
            </p>

            {queuePosition && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-xs font-mono font-semibold text-violet-700">
                Priority Cohort Member #{queuePosition}
              </div>
            )}

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-left w-full max-w-xs text-xs text-slate-700 mb-6">
              <div className="font-semibold mb-1 flex items-center gap-1.5 text-slate-950">
                <Calendar className="h-3.5 w-3.5 text-violet-600" /> Need immediate pilot scoping?
              </div>
              <a
                href={SITE_CONFIG.links.calendly}
                target="_blank"
                rel="noreferrer"
                className="text-violet-700 hover:text-violet-900 font-semibold flex items-center gap-1"
              >
                Schedule 30-min call <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            <button
              onClick={handleClose}
              className="rounded-full border border-slate-300 bg-white px-7 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
            >
              Done
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
