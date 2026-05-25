"use client"

import { useState } from "react"
import { ShieldCheck, Cpu, CreditCard, FileCheck, ArrowRight } from "lucide-react"
import { MeetingModal } from "@/components/meeting-modal"

export function ProductsSuite() {
  const [meetingModalOpen, setMeetingModalOpen] = useState(false)

  const capabilities = [
    {
      icon: ShieldCheck,
      title: "Identity & Humanity Verification",
      description: "Sybil-resistant proof of human identity and credential ownership without tracking user activity or logging PII.",
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: CreditCard,
      title: "Private Creditworthiness Evaluation",
      description: "Evaluates financial signals and repayment history inside sealed enclaves to attest credit eligibility for Web3 lending protocols.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: FileCheck,
      title: "Regulatory & Compliance Checks",
      description: "Verifies jurisdiction, accredited investor status, and sanctions rules for GDPR-compliant tokenized asset onboarding.",
      color: "bg-emerald-100 text-emerald-700",
    },
  ]

  return (
    <>
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold text-purple-700 mb-4">
            Flagship Platform
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            zCred Passport
          </h2>
          <p className="text-base text-gray-600 mt-4 leading-relaxed">
            Confidential identity and eligibility verification for financial, Web3, and compliance-sensitive applications.
          </p>
        </div>

        {/* FLAGSHIP PRODUCT MAIN CARD */}
        <div className="rounded-3xl bg-slate-950 p-8 md:p-12 text-white shadow-xl border border-slate-800 relative overflow-hidden mb-12">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

            <div className="lg:col-span-2 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#e4ff54] px-3.5 py-1 text-xs font-black text-black uppercase tracking-wider">
                Flagship Infrastructure
              </div>

              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                One Confidential Attestation Engine
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                zCred Passport evaluates complex eligibility criteria inside hardware-isolated compute enclaves. It publishes minimal, tamper-proof attestations onchain — enabling dApps and institutional platforms to verify user qualifications instantly with complete privacy.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setMeetingModalOpen(true)}
                  className="rounded-xl bg-[#e4ff54] px-6 py-3.5 text-xs font-bold text-black hover:bg-[#d5f043] transition-all flex items-center gap-2"
                >
                  Schedule Technical Demo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-1 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 text-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400 font-semibold">Privacy Model</span>
                <span className="text-emerald-400 font-bold font-mono">Dual-Sided Confidential</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400 font-semibold">Execution Security</span>
                <span className="text-purple-300 font-bold font-mono">Hardware Isolated</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400 font-semibold">Attestation Type</span>
                <span className="text-blue-300 font-bold font-mono">Verifiable Onchain</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-semibold">Integration</span>
                <span className="text-[#e4ff54] font-bold font-mono">Simple Smart Contract Call</span>
              </div>
            </div>

          </div>
        </div>

        {/* THREE CORE CAPABILITIES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${cap.color} mb-5 shadow-sm`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setMeetingModalOpen(true)}
                    className="text-xs font-bold text-black hover:underline inline-flex items-center gap-1"
                  >
                    Learn More <ArrowRight className="h-3 w-3" />
                  </button>
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
