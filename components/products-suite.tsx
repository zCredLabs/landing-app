"use client"

import { useState } from "react"
import { TrendingUp, Lock, Bot, ShieldCheck, ArrowRight, CheckCircle2, Award } from "lucide-react"
import { MeetingModal } from "@/components/meeting-modal"

export function ProductsSuite() {
  const [meetingModalOpen, setMeetingModalOpen] = useState(false)

  const capabilities = [
    {
      icon: TrendingUp,
      title: "Private Credit & DeFi Underwriting",
      subtitle: "Capital-Efficient Lending with Zero PII Custody",
      badge: "DeFi & Credit",
      description:
        "Enable money markets and decentralized lending protocols to safely disburse undercollateralized loans. Evaluate off-chain bank cashflows, CEX custody balances, and historical credit metrics inside sealed TEE enclaves—with zero lender data liability and zero balance-sheet risk.",
      color: "bg-blue-100 text-blue-700",
      accent: "border-blue-200 hover:border-blue-300",
      features: [
        "Undercollateralized credit terms (up to 105% LTV)",
        "zkTLS bank cashflow & financial signal ingestion",
        "Zero lender custody of sensitive borrower PII",
      ],
    },
    {
      icon: Lock,
      title: "Institutional Compliance & Dark Pools",
      subtitle: "Zero-Leakage Regulatory Clearance",
      badge: "Compliance & RWA",
      description:
        "Enforce real-time OFAC sanctions screening, KYC accreditation, and jurisdiction eligibility checks for shielded DEXs, prediction markets, and tokenized real-world assets (RWA). Institutional market makers trade confidentially without public wallet doxxing or trading strategy leakage.",
      color: "bg-purple-100 text-purple-700",
      accent: "border-purple-200 hover:border-purple-300",
      features: [
        "Real-time OFAC sanctions & AML verification",
        "Zero public wallet doxxing or strategy leakage",
        "On-demand encrypted regulatory audit reports",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Sybil Resistance & Proof of Humanity",
      subtitle: "Privacy-Preserving Bot & Fraud Defense",
      badge: "Identity & Trust",
      description:
        "Protect protocol governance, grants, and token distributions from bot farms and Sybil attackers. Verify human uniqueness and credentials cryptographically—without invasive biometric palm scans, iris harvesting, or public wallet clustering.",
      color: "bg-amber-100 text-amber-800",
      accent: "border-amber-200 hover:border-amber-300",
      features: [
        "Sybil-resistant proof of human uniqueness",
        "No biometric harvesting or iris scanning",
        "Domain-bound nullifiers prevent cross-app tracking",
      ],
    },
    {
      icon: Bot,
      title: "Autonomous AI Agent Identity & x402",
      subtitle: "Cryptographic Provenance for the Machine Economy",
      badge: "AI Agents & Payments",
      description:
        "Issue hardware-attested agent passports that bind developer code provenance and enforce execution bounds in hardware-isolated silicon. Automatically embed cryptographic attestation tokens into HTTP 402 machine-to-machine payment headers for autonomous agent trading.",
      color: "bg-emerald-100 text-emerald-700",
      accent: "border-emerald-200 hover:border-emerald-300",
      features: [
        "Deterministic key derivation from agent signers",
        "HTTP 402 micropayment authorization headers",
        "Bounded execution parameters sealed in TEE",
      ],
    },
  ]

  return (
    <>
      <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold text-purple-700 mb-4">
            Platform Capabilities
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            One Engine. Complete Identity & Compliance.
          </h2>
          <p className="text-base text-gray-600 mt-4 leading-relaxed">
            zCred gives developers an expansive, modular attestation infrastructure designed to verify identity, creditworthiness, and compliance without toxic data custody.
          </p>
        </div>

        {/* FLAGSHIP PLATFORM OVERVIEW CARD */}
        <div className="rounded-3xl bg-slate-950 p-8 md:p-12 text-white shadow-xl border border-slate-800 relative overflow-hidden mb-12">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-2 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#e4ff54] px-3.5 py-1 text-xs font-black text-black uppercase tracking-wider">
                Flagship Infrastructure • zCred Passport
              </div>

              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                Confidential Identity & Attestation Engine
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                zCred Passport evaluates complex eligibility criteria inside hardware-isolated compute enclaves. It publishes minimal, tamper-proof attestations on-chain—enabling consuming dApps, institutional markets, and autonomous agents to verify user qualifications instantly with complete privacy.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setMeetingModalOpen(true)}
                  className="rounded-xl bg-[#e4ff54] px-6 py-3.5 text-xs font-bold text-black hover:bg-[#d5f043] transition-all flex items-center gap-2 shadow-sm"
                >
                  Schedule a Technical Briefing
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="#platform"
                  className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3.5 text-xs font-semibold text-white hover:bg-slate-800 transition-all flex items-center gap-2"
                >
                  Explore Platform Architecture
                </a>
              </div>
            </div>

            <div className="lg:col-span-1 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 text-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400 font-semibold">Privacy Model</span>
                <span className="text-emerald-400 font-bold font-mono">Dual-Sided Shield</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400 font-semibold">Security Core</span>
                <span className="text-purple-300 font-bold font-mono">Hardware-Isolated TEE</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400 font-semibold">Settlement Rails</span>
                <span className="text-blue-300 font-bold font-mono">Base, Ethereum & EVM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-semibold">Verification Cost</span>
                <span className="text-[#e4ff54] font-bold font-mono">1-Line View Call (&lt;26k gas)</span>
              </div>
            </div>

          </div>
        </div>

        {/* FOUR BROAD CAPABILITIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <div
                key={idx}
                className={`rounded-2xl border bg-white p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${cap.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${cap.color} shadow-sm`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-bold text-gray-700">
                      {cap.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-black mb-1">
                    {cap.title}
                  </h4>
                  <div className="text-xs font-semibold text-purple-600 mb-3">
                    {cap.subtitle}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2">
                  {cap.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}

                  <div className="pt-3">
                    <button
                      onClick={() => setMeetingModalOpen(true)}
                      className="text-xs font-bold text-black hover:text-purple-700 hover:underline inline-flex items-center gap-1 transition-colors"
                    >
                      Discuss Integration <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </section>

      <MeetingModal open={meetingModalOpen} onOpenChange={setMeetingModalOpen} />
    </>
  )
}
