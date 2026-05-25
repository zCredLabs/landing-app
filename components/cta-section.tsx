"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Github, ArrowRight } from "lucide-react"
import { MeetingModal } from "@/components/meeting-modal"

export function CTASection() {
  const [meetingModalOpen, setMeetingModalOpen] = useState(false)

  return (
    <>
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="rounded-3xl bg-slate-950 p-8 sm:p-14 text-white shadow-xl relative overflow-hidden border border-slate-800">
            
            <span className="inline-block rounded-full bg-[#e4ff54] px-4 py-1 text-xs font-bold text-black mb-4">
              Get Started with zCred
            </span>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Build Confidential Verification into Your App
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base text-slate-300">
              Empower your Web3 application, DeFi lending protocol, or institutional compliance pipeline with confidential decision execution.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setMeetingModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#e4ff54] px-7 py-3.5 text-sm font-bold text-black hover:bg-[#d8f547] transition-all"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Meeting
              </button>
              
              <Link
                href="https://github.com/Zauth-HQ"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-all"
              >
                <Github className="h-4 w-4" />
                Explore Repositories
              </Link>
            </div>

          </div>
        </div>
      </section>

      <MeetingModal open={meetingModalOpen} onOpenChange={setMeetingModalOpen} />
    </>
  )
}
