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
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="zCred home">
          <Image src="/logo.png" alt="" width={30} height={30} className="rounded-lg" priority />
          <span className="text-[17px] font-semibold tracking-tight text-slate-950">zCred</span>
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
          <Link href="/apa-brief" className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-950">
            Whitepaper
          </Link>
          <button type="button" onClick={openMeeting} className={cn(buttonStyles.primary, "px-4 py-2")}>
            Join Beta
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-5 pb-6 pt-3 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <Link href="/apa-brief" className="rounded-md px-2 py-3 text-base font-medium text-slate-700 hover:bg-slate-50">
              Whitepaper
            </Link>
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false)
              openMeeting()
            }}
            className={cn(buttonStyles.primary, "mt-4 w-full")}
          >
            Join Beta
          </button>
        </div>
      )}
    </header>
  )
}
