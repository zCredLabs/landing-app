"use client"

import { useState } from "react"
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
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-purple-600 text-white font-bold text-lg">
              z
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-black">zCred</span>
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-700">
                Confidential Layer
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="#platform" className="transition-colors hover:text-black">
              Platform
            </Link>
            <Link href="#products" className="transition-colors hover:text-black">
              Products
            </Link>
            <Link href="#security" className="transition-colors hover:text-black">
              Security
            </Link>
            <Link href="#ecosystem" className="transition-colors hover:text-black">
              Ecosystem
            </Link>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setMeetingModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-black/90 shadow-sm"
            >
              <Calendar className="h-3.5 w-3.5" />
              Schedule a Meeting
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-black md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-gray-100 bg-white px-6 pb-6 pt-4 md:hidden">
            <nav className="flex flex-col gap-4 text-base font-medium text-gray-800">
              <Link href="#platform" onClick={() => setMobileMenuOpen(false)}>Platform</Link>
              <Link href="#products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
              <Link href="#security" onClick={() => setMobileMenuOpen(false)}>Security</Link>
              <Link href="#ecosystem" onClick={() => setMobileMenuOpen(false)}>Ecosystem</Link>
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setMeetingModalOpen(true)
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-semibold text-white"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Meeting
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Meeting Modal */}
      <MeetingModal open={meetingModalOpen} onOpenChange={setMeetingModalOpen} />
    </>
  )
}
