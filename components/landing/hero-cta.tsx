"use client"

import { useState } from "react"
import { ArrowRight, Calendar, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMeetingModal } from "@/components/landing/meeting-context"
import { buttonStyles } from "@/components/landing/primitives"
import { SITE_CONFIG } from "@/lib/constants"

export function HeroCta() {
  const openModal = useMeetingModal()

  return (
    <div className="mt-5 sm:mt-8">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md">
        <a
          href={SITE_CONFIG.links.calendly}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonStyles.primary,
            "h-11 sm:h-12 px-5 text-xs sm:text-sm font-semibold justify-center shadow-sm group",
          )}
        >
          <Calendar className="h-4 w-4 text-violet-300" />
          Book Technical Call
          <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
        </a>

        <a
          href="#pilot"
          className="inline-flex h-11 sm:h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-xs sm:text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 hover:border-slate-300"
        >
          Request Scoped Pilot
        </a>
      </div>

      <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1.5 text-[11px] sm:text-xs text-slate-500">
        <span className="flex items-center gap-1.5 font-medium text-slate-700">
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-pulse" />
          Design Partner Pilot Program Live
        </span>
        <span className="text-slate-300 hidden sm:inline">|</span>
        <button
          type="button"
          onClick={() => openModal()}
          className="font-medium text-violet-700 hover:text-violet-900 transition-colors cursor-pointer"
        >
          or join beta list ↗
        </button>
      </div>
    </div>
  )
}
