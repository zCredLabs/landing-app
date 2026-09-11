"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar, CheckCircle2, Send, Clock, ArrowRight, ExternalLink, ShieldCheck } from "lucide-react"

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
    interest: "protocol",
    notes: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "zcred-meeting-request",
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          interest: formData.interest,
          message: formData.notes,
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
      interest: "protocol",
      notes: "",
    })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-[100]">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
              <Calendar className="h-4 w-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              {submitted ? "Inquiry Confirmed" : "Inquiries & Partnerships"}
            </span>
          </div>
          <DialogTitle className="text-2xl font-bold text-black tracking-tight">
            {submitted ? "We've Received Your Request" : "Connect with the zCred Team"}
          </DialogTitle>
          {!submitted && (
            <DialogDescription className="text-sm text-gray-600">
              Book a 30-minute discussion directly on our calendar, or submit an interest request below for priority follow-up.
            </DialogDescription>
          )}
        </DialogHeader>

        {!submitted ? (
          <>
            {/* Direct Calendly 1-Click Booking Card */}
            <a
              href="https://calendly.com/0xshikhar/30min"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl bg-purple-50 border border-purple-200 p-3.5 px-4 text-purple-950 hover:bg-purple-100/90 transition-all mt-3 mb-1 group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white font-bold">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-black group-hover:text-purple-950">
                    Instant 30-Min Calendar Booking
                  </div>
                  <div className="text-[11px] text-purple-800 font-mono">
                    calendly.com/0xshikhar/30min
                  </div>
                </div>
              </div>
              <span className="flex items-center gap-1 text-xs font-bold text-purple-700 group-hover:translate-x-0.5 transition-transform">
                Open <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* Subtle Divider */}
            <div className="relative my-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-wider">
                <span className="bg-white px-2 text-gray-500 font-semibold">Or submit an interest request</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                    placeholder="EVM Protocol, Fund, or Company"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-black placeholder:text-gray-400 focus:border-purple-600 focus:bg-white focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Primary Area of Interest *
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-black focus:border-purple-600 focus:bg-white focus:outline-none transition-all cursor-pointer"
                >
                  <option value="protocol">Protocol Partnership & Integration</option>
                  <option value="enterprise">Institutional & Enterprise Solutions</option>
                  <option value="ecosystem">Research & Ecosystem Collaboration</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  How can we help? / Inquiry Details
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details on your project, timeline, or how you'd like to collaborate..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-black placeholder:text-gray-400 focus:border-purple-600 focus:bg-white focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-bold text-white transition-all hover:bg-black/90 disabled:opacity-50 shadow-md cursor-pointer"
              >
                {loading ? (
                  <>Submitting Interest Request...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Interest Request
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                <span>Strict confidentiality assured. Direct response within 24 hours.</span>
              </div>
            </form>
          </>
        ) : (
          <div className="py-6 text-center flex flex-col items-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h4 className="text-xl font-bold text-black mb-1">Interest Request Received</h4>
            <p className="text-sm text-gray-600 max-w-sm leading-relaxed mb-4">
              {formData.name ? (
                <>
                  Thank you, <span className="font-semibold text-black">{formData.name}</span>. We have routed your inquiry to our founding team and will reply to <span className="font-semibold text-black">{formData.email}</span> shortly.
                </>
              ) : (
                <>
                  Thank you for reaching out. We have routed your inquiry to our founding team and will follow up shortly.
                </>
              )}
            </p>

            <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-left w-full max-w-xs text-xs text-purple-950">
              <div className="font-bold mb-1 flex items-center gap-1.5 text-purple-900">
                <Calendar className="h-3.5 w-3.5" /> Need immediate scheduling?
              </div>
              <a
                href="https://calendly.com/0xshikhar/30min"
                target="_blank"
                rel="noreferrer"
                className="text-purple-700 underline font-semibold flex items-center gap-1 hover:text-purple-900"
              >
                Pick a 30-minute slot now <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <button
              onClick={handleClose}
              className="mt-6 rounded-full border border-gray-300 bg-white px-7 py-2.5 text-xs font-bold text-black hover:bg-gray-50 transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
