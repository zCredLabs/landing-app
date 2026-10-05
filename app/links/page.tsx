"use client"

import React, { useState } from "react"
import Image from "next/image"
import {
  FileText,
  Calendar,
  ShieldCheck,
  Globe,
  Code,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  FileCode,
} from "lucide-react"

interface LinkItem {
  id: string
  title: string
  href: string
  badge: string
  icon: React.ComponentType<{ className?: string }>
  isExternal?: boolean
  highlight?: boolean
  contractAddress?: string
}

const LINKS: LinkItem[] = [
  {
    id: "pitch-deck",
    title: "Investor Pitch Deck",
    href: "/deck.html",
    badge: "View Slides",
    icon: FileText,
    isExternal: true,
    highlight: true,
  },
  {
    id: "calendly",
    title: "Schedule 30-Min Technical Diligence",
    href: "https://calendly.com/0xshikhar/30min",
    badge: "Book Call",
    icon: Calendar,
    isExternal: true,
  },
  {
    id: "platform-demo",
    title: "Platform & Verification Engine",
    href: "/",
    badge: "Live App",
    icon: Globe,
    isExternal: false,
  },
  {
    id: "smart-contract",
    title: "Verified Base Sepolia Attestation Registry",
    href: "https://sepolia.basescan.org/address/0xD27e6A8e297177C4Cb284b5C7E2Ccf8d9C69C11a",
    badge: "BaseScan",
    icon: ShieldCheck,
    isExternal: true,
    contractAddress: "0xD27e6A8e297177C4Cb284b5C7E2Ccf8d9C69C11a",
  },
  {
    id: "technical-spec",
    title: "Technical Architecture & APA Specification",
    href: "/apa-brief",
    badge: "Whitepaper",
    icon: FileCode,
    isExternal: false,
  },
  {
    id: "github",
    title: "GitHub Protocol Repositories",
    href: "https://github.com/zcredlabs",
    badge: "zcredlabs",
    icon: Code,
    isExternal: true,
  },
  {
    id: "twitter",
    title: "Official X Profile",
    href: "https://x.com/zCredLabs",
    badge: "@zCredLabs",
    icon: Globe,
    isExternal: true,
  },
  {
    id: "inquiries",
    title: "Direct Founder & Diligence Email",
    href: "mailto:hi@zcred.xyz",
    badge: "hi@zcred.xyz",
    icon: Mail,
    isExternal: true,
  },
]

export default function LinksPage() {
  const [copiedContract, setCopiedContract] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyContract = async (e: React.MouseEvent, address: string) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(address)
      setCopiedContract(true)
      setTimeout(() => setCopiedContract(false), 2000)
    } catch {
      // ignore
    }
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hi@zcred.xyz")
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch {
      // ignore
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-slate-200">
      <main className="mx-auto max-w-xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Profile / Header */}
        <header className="flex flex-col items-center text-center pb-8 border-b border-slate-200">
          <div className="h-16 w-16 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm flex items-center justify-center mb-4">
            <Image
              src="/logo.png"
              alt="zCred Protocol Logo"
              width={48}
              height={48}
              className="rounded-xl object-contain"
              priority
            />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            zCred Protocol
          </h1>
          <p className="mt-1 text-sm font-medium text-slate-600">
            Private Evidence. Onchain Decisions.
          </p>

          <div className="mt-4 flex items-center gap-2">
            <a
              href="mailto:hi@zcred.xyz"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-mono font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors shadow-2xs"
            >
              <Mail className="h-3.5 w-3.5 text-slate-400" />
              hi@zcred.xyz
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-2xs"
              title="Copy email address"
            >
              {copiedEmail ? (
                <Check className="h-3.5 w-3.5 text-emerald-600" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
        </header>

        {/* Linktree Button List */}
        <section className="mt-8 space-y-3" aria-label="Official Resource Links">
          {LINKS.map((item) => {
            const Icon = item.icon
            const isHighlight = item.highlight

            return (
              <a
                key={item.id}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={`group block rounded-xl border p-4 transition-all duration-150 ${
                  isHighlight
                    ? "border-slate-950 bg-slate-950 text-white hover:bg-slate-900 shadow-sm"
                    : "border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50 shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`rounded-lg p-2 shrink-0 ${
                        isHighlight
                          ? "bg-slate-800 text-white"
                          : "bg-slate-100 text-slate-700 group-hover:bg-slate-200/80"
                      }`}
                    >
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    <span
                      className={`text-sm sm:text-base font-semibold tracking-tight ${
                        isHighlight ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5">
                    <span
                      className={`hidden sm:inline-block rounded-md px-2 py-0.5 text-xs font-mono font-medium ${
                        isHighlight
                          ? "bg-slate-800 text-slate-200"
                          : "bg-slate-100 text-slate-600 group-hover:bg-slate-200/70"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <ArrowUpRight
                      className={`h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isHighlight ? "text-slate-300" : "text-slate-400 group-hover:text-slate-900"
                      }`}
                    />
                  </div>
                </div>

                {item.contractAddress && (
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <code className="text-[11px] font-mono text-slate-600 truncate">
                      {item.contractAddress}
                    </code>
                    <button
                      type="button"
                      onClick={(e) => handleCopyContract(e, item.contractAddress!)}
                      className="inline-flex items-center gap-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 text-[11px] font-medium transition-colors shrink-0"
                    >
                      {copiedContract ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </a>
            )
          })}
        </section>

        {/* Minimal Footer */}
        <footer className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} zCred Protocol. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
