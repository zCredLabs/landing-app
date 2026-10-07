"use client"

import { useState } from "react"
import { ArrowRight, Calendar, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMeetingModal } from "@/components/landing/meeting-context"
import { buttonStyles } from "@/components/landing/primitives"
import { SITE_CONFIG } from "@/lib/constants"

export function HeroCta() {
  const [email, setEmail] = useState("")
  const openModal = useMeetingModal()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    openModal({ email: email.trim() })
  }

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:flex-row sm:items-center max-w-lg">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work or protocol email..."
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-2xs placeholder:text-slate-400 focus:border-violet-600 focus:outline-none transition-all"
          />
        </div>
        <button
          type="submit"
          className={cn(
            buttonStyles.primary,
            "h-12 px-5 text-sm font-semibold whitespace-nowrap shadow-sm group",
          )}
        >
          <Sparkles className="h-4 w-4 text-violet-300" />
          Join Beta List
          <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
        </button>
      </form>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
        <span className="flex items-center gap-1.5 font-medium text-slate-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Beta Cohort 1 Onboarding Open
        </span>
        <span className="text-slate-300 hidden sm:inline">|</span>
        <a
          href={SITE_CONFIG.links.calendly}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-medium text-violet-700 hover:text-violet-900 transition-colors"
        >
          <Calendar className="h-3.5 w-3.5" />
          Schedule a 30-min technical call ↗
        </a>
      </div>
    </div>
  )
}
