"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMeetingModal } from "@/components/landing/meeting-context"
import { buttonStyles } from "@/components/landing/primitives"
import { NAV_LINKS } from "@/lib/constants"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const openMeeting = useMeetingModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        scrolled || mobileOpen ? "border-slate-200/80 bg-white/85 backdrop-blur-lg" : "border-transparent bg-white/0",
      )}
    >
      <div className="mx-auto flex h-14 sm:h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5" aria-label="zCred home">
          <Image src="/logo.png" alt="" width={26} height={26} className="rounded-lg sm:h-[30px] sm:w-[30px]" priority />
          <span className="text-base sm:text-[17px] font-semibold tracking-tight text-slate-950">zCred</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button type="button" onClick={openMeeting} className={cn(buttonStyles.primary, "px-4 py-2")}>
            Request Pilot
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-4.5 w-4.5 sm:h-5 sm:w-5" /> : <Menu className="h-4.5 w-4.5 sm:h-5 sm:w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col space-y-0.5" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false)
              openMeeting()
            }}
            className={cn(buttonStyles.primary, "mt-3 w-full py-2.5 text-sm")}
          >
            Request Pilot
          </button>
        </div>
      )}
    </header>
  )
}
