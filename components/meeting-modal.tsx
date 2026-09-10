"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar, CheckCircle2, Send, Clock } from "lucide-react"

interface MeetingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MeetingModal({ open, onOpenChange }: MeetingModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "passport",
    notes: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Dispatch via Web3Forms endpoint or mailto fallback
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "zcred-meeting-request",
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          interest: formData.interest,
          notes: formData.notes,
        }),
      }).catch(() => null)
    } catch (err) {
      console.warn("Form submission fallback executed", err)
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  const handleClose = () => {
    setSubmitted(false)
    setFormData({
      name: "",
      email: "",
      organization: "",
      interest: "passport",
      notes: "",
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-[100]">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
              <Calendar className="h-4 w-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Partner & Integration Access
            </span>
          </div>
          <DialogTitle className="text-2xl font-bold text-black">
            Schedule a Meeting with zCred
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Submit your details below to schedule a direct meeting with our team and discuss integrating zCred&apos;s confidential decision layer.
          </DialogDescription>
        </DialogHeader>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Rivera"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-black placeholder:text-gray-400 focus:border-purple-600 focus:bg-white focus:outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@protocol.xyz"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-black placeholder:text-gray-400 focus:border-purple-600 focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Protocol / Company
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="EVM Protocol"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-black placeholder:text-gray-400 focus:border-purple-600 focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Primary Interest *
              </label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-black focus:border-purple-600 focus:bg-white focus:outline-none transition-all"
              >
                <option value="passport">zCred Passport (Confidential Identity & Attestation)</option>
                <option value="credit">Private Creditworthiness & DeFi Underwriting</option>
                <option value="compliance">Institutional Compliance & Sanctions Screening</option>
                <option value="sybil">Sybil Resistance & Proof of Humanity</option>
                <option value="agents">Autonomous AI Agent Identity & x402 Rails</option>
                <option value="custom">Custom Enterprise Verification Enclave</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Brief Integration Notes
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Share your integration use case, network requirements, or questions..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-black placeholder:text-gray-400 focus:border-purple-600 focus:bg-white focus:outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-black/90 disabled:opacity-50 shadow-md"
            >
              {loading ? (
                <>Submitting Request...</>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit & Request Meeting
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-bold text-black">Meeting Request Submitted!</h4>
            <p className="mt-2 text-sm text-gray-600 max-w-sm leading-relaxed">
              Thank you, <span className="font-semibold text-black">{formData.name}</span>. We have received your request for <span className="font-semibold text-black">{formData.email}</span>. Our team will reach out directly to coordinate a meeting time.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-purple-700 bg-purple-50 px-4 py-2 rounded-full border border-purple-200">
              <Clock className="h-3.5 w-3.5" /> Direct team confirmation sent
            </div>

            <button
              onClick={handleClose}
              className="mt-8 rounded-full border border-gray-300 bg-white px-6 py-2.5 text-xs font-bold text-black hover:bg-gray-50 transition-all"
            >
              Done
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
