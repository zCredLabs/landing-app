"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, ArrowRight, ShieldCheck, Cpu, Database, CheckCircle2 } from "lucide-react"
import { MeetingModal } from "@/components/meeting-modal"

export function HeroSection() {
  const [meetingModalOpen, setMeetingModalOpen] = useState(false)

  return (
    <>
      <div className="relative w-full overflow-hidden bg-white pt-12 pb-16 md:pt-20 md:pb-24 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 items-center">

            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 border border-purple-200 px-3.5 py-1 text-xs font-semibold text-purple-800 w-fit mb-4">
                <span className="h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
                Privacy-Preserving Decision Infrastructure
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl leading-[1.12]">
                The Confidential Decision Layer for{" "}
                <span className="text-purple-600 block mt-1">
                  Identity & Compliance
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl"
              >
                zCred lets Web3 applications verify identity, creditworthiness, and regulatory eligibility — without ever seeing the underlying data or exposing how the decision was made.
              </motion.p>

              {/* Clean Professional CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-4 items-center"
              >
                <button
                  onClick={() => setMeetingModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-xl bg-black px-7 py-3.5 text-sm font-semibold text-white hover:bg-black/90 transition-all shadow-sm"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Meeting
                </button>
                <Link
                  href="#platform"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-black hover:bg-gray-50 transition-all"
                >
                  Explore Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Hero Visual: Outcome-Focused Confidential Pipeline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative flex items-center justify-center"
            >
              <div className="w-full max-w-lg rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 shadow-xl">

                <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-purple-600"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-black">
                      Confidential Decision Pipeline
                    </span>
                  </div>
                  <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-[11px] font-bold text-purple-700">
                    Dual-Sided Shield
                  </span>
                </div>

                {/* Flow Step 1: Input Claims */}
                <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-4 mb-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-sm">
                    1
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-black text-sm">zkTLS Signal Ingestion</span>
                      <span className="text-[10px] text-blue-700 bg-blue-100 px-2 py-0.5 rounded font-medium">Zero PII Leaked</span>
                    </div>
                    <p className="text-gray-600 text-[11px] mt-0.5">Bank cashflow, CEX balance & compliance proofs generated client-side</p>
                  </div>
                </div>

                {/* Down Arrow Connector */}
                <div className="flex justify-center -my-1 mb-1">
                  <div className="h-5 w-0.5 bg-purple-300"></div>
                </div>

                {/* Flow Step 2: Enclave Decision Coprocessor */}
                <div className="flex items-center gap-4 rounded-2xl border border-purple-200 bg-purple-950 text-white p-4 mb-3 shadow-md">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#e4ff54] text-black font-bold text-sm">
                    2
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">Horizen Vela TEE Coprocessor</span>
                      <span className="text-[10px] text-black bg-[#e4ff54] px-2 py-0.5 rounded font-bold">Policy IP Sealed</span>
                    </div>
                    <p className="text-purple-200 text-[11px] mt-0.5">Proprietary risk weights & underwriting rules execute in encrypted silicon</p>
                  </div>
                </div>

                {/* Down Arrow Connector */}
                <div className="flex justify-center -my-1 mb-1">
                  <div className="h-5 w-0.5 bg-purple-300"></div>
                </div>

                {/* Flow Step 3: Onchain Settlement */}
                <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold text-sm">
                    3
                  </div>
                  <div className="flex-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-black text-sm">Verifiable Onchain Attestation</span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-medium">1-Line Verification</span>
                    </div>
                    <p className="text-gray-600 text-[11px] mt-0.5">Minimal attestation & domain-bound nullifier settled on Base & Horizen</p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

          {/* Clean Generic Technology Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 pt-8 border-t border-gray-100"
          >
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Built on Leading Confidential Computing & Cryptographic Infrastructure
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">

              <div className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-2.5">
                <Cpu className="h-5 w-5 text-purple-600" />
                <div className="text-left">
                  <span className="block text-xs font-bold text-black">Hardware TEE Enclaves</span>
                  <span className="block text-[10px] text-gray-500">Sealed Memory Execution</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-2.5">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <span className="block text-xs font-bold text-black">Zero-Knowledge Verification</span>
                  <span className="block text-[10px] text-gray-500">Cryptographic Input Proofs</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-2.5">
                <Database className="h-5 w-5 text-emerald-600" />
                <div className="text-left">
                  <span className="block text-xs font-bold text-black">EVM Smart Contracts</span>
                  <span className="block text-[10px] text-gray-500">Instant On-Chain Settlement</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <MeetingModal open={meetingModalOpen} onOpenChange={setMeetingModalOpen} />
    </>
  )
}
