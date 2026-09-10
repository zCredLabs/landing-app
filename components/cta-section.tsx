"use client"

import { useState } from "react"
import { Calendar, ArrowRight, ShieldCheck, Cpu } from "lucide-react"
import { MeetingModal } from "@/components/meeting-modal"

export function CTASection() {
  const [meetingModalOpen, setMeetingModalOpen] = useState(false)

  return (
    <>
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="rounded-3xl bg-slate-950 p-8 sm:p-14 text-white shadow-xl relative overflow-hidden border border-slate-800">
            
            <span className="inline-block rounded-full bg-[#e4ff54] px-4 py-1 text-xs font-black text-black mb-4 uppercase tracking-wider">
              Integration & Ecosystem Access
            </span>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl max-w-2xl mx-auto">
              Build Confidential Verification into Your App
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 leading-relaxed">
              Whether you are building DeFi lending protocols, institutional compliance rails, or autonomous AI agents, empower your application with zCred&apos;s confidential decision engine.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setMeetingModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#e4ff54] px-7 py-3.5 text-sm font-bold text-black hover:bg-[#d8f547] transition-all shadow-md"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Meeting
              </button>
              
              <a
                href="#platform"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-all"
              >
                Explore Platform Architecture
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Zero Raw Data Custody
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Cpu className="h-4 w-4 text-purple-400" />
                Hardware-Isolated TEE Silicon
              </span>
              <span>•</span>
              <span>1-Line EVM Settlement</span>
            </div>

          </div>
        </div>
      </section>

      <MeetingModal open={meetingModalOpen} onOpenChange={setMeetingModalOpen} />
    </>
  )
}
