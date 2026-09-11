"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Menu, X } from "lucide-react"
import { MeetingModal } from "@/components/meeting-modal"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [meetingModalOpen, setMeetingModalOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl">
                <Image src="/logo.png" alt="zCred" width={36} height={36} className="object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight text-black">zCred</span>
            </Link>
          </div>

          {/* Institutional Selection Badge */}
          <div className="hidden md:flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50/80 px-3.5 py-1 text-xs font-semibold text-purple-900">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600 animate-pulse"></span>
            Selected for Horizen Acceleration Season
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMeetingModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-black/90 shadow-sm"
            >
              <Calendar className="h-3.5 w-3.5" />
              Schedule a Meeting
            </button>
          </div>
        </div>
      </header>

      {/* Meeting Modal */}
      <MeetingModal open={meetingModalOpen} onOpenChange={setMeetingModalOpen} />
    </>
  )
}
