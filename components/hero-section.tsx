"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Lock,
  CheckCircle2,
} from "lucide-react"
import { MeetingModal } from "@/components/meeting-modal"

export function HeroSection() {
  const [meetingModalOpen, setMeetingModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"pipeline" | "telemetry">("pipeline")
  const [pulseIndex, setPulseIndex] = useState(0)

  // Subtle cyclic animation for pipeline flow
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 3)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="relative w-full overflow-hidden bg-white pt-10 pb-20 md:pt-16 md:pb-28">

        {/* Ambient Top Glow & High-Precision Grid Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-purple-100/60 via-indigo-50/40 to-transparent blur-3xl -z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_70%,transparent_100%)] -z-10 opacity-70 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          {/* Main Hero 2-Column Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center">

            {/* Left Hero Content (7 cols on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              {/* Modern Tech Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-purple-200/80 bg-gradient-to-r from-purple-50/90 via-white to-indigo-50/80 px-4 py-1.5 shadow-sm backdrop-blur-sm w-fit mb-6">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                </span>
                <span className="text-[11px] font-bold tracking-wider uppercase text-purple-900 font-mono">
                  VERIFIABLE ATTESTATION LAYER
                </span>
              </div>

              {/* Master Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-slate-950 leading-[1.08]">
                The Confidential <br />
                Decision Layer for{" "}
                <span className="bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 bg-clip-text text-transparent">
                  Identity & Compliance
                </span>
              </h1>

              {/* High-Converting CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-4 items-center"
              >
                <a
                  href="https://calendly.com/0xshikhar/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white hover:bg-slate-900 transition-all shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-purple-900/10 ring-1 ring-white/20 group cursor-pointer"
                >
                  <Calendar className="mr-2 h-4 w-4 text-purple-300 group-hover:scale-110 transition-transform" />
                  Schedule a Meeting
                </a>
                <button
                  onClick={() => setMeetingModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:border-purple-300 transition-all shadow-sm group cursor-pointer"
                >
                  Submit Interest
                  <ArrowRight className="ml-2 h-4 w-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Institutional Assurance Micro-Pills */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Zero PII Retained (0 Bytes)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-purple-600" />
                  <span>Dual-Blind Privacy Shield</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                  <span>1-Line Smart Contract Query</span>
                </div>
              </div>

            </motion.div>

            {/* Right Hero Visual: Interactive Cryptographic Enclave Card (Light Theme) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              {/* Soft Ambient Glow Halo */}
              <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-tr from-purple-100/90 via-indigo-100/60 to-purple-50/80 blur-2xl opacity-90 pointer-events-none -z-10"></div>

              {/* Light Enclave Shell Card */}
              <div className="w-full rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-7 text-slate-900 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.12),0_1px_3px_rgba(0,0,0,0.05)] relative overflow-hidden backdrop-blur-xl">

                {/* Enclave Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-900">
                      NITRO ENCLAVE // ONLINE
                    </span>
                  </div>
                  <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-mono font-bold text-slate-700">
                    PCR0: 8a4f...e291
                  </span>
                </div>

                {/* View Switcher Tabs (Light Theme) */}
                <div className="flex items-center gap-1 rounded-xl bg-slate-100/90 border border-slate-200/70 p-1 mb-5">
                  <button
                    onClick={() => setActiveTab("pipeline")}
                    className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all cursor-pointer ${activeTab === "pipeline"
                        ? "bg-white text-slate-950 shadow-sm border border-slate-200/80"
                        : "text-slate-500 hover:text-slate-900"
                      }`}
                  >
                    Architecture Pipeline
                  </button>
                  <button
                    onClick={() => setActiveTab("telemetry")}
                    className={`flex-1 rounded-lg py-2 text-xs font-semibold transition-all cursor-pointer ${activeTab === "telemetry"
                        ? "bg-white text-slate-950 shadow-sm border border-slate-200/80"
                        : "text-slate-500 hover:text-slate-900"
                      }`}
                  >
                    Hardware Telemetry
                  </button>
                </div>

                {/* Tab 1: Architecture Pipeline View (Light Theme) */}
                {activeTab === "pipeline" && (
                  <div className="space-y-3 font-mono text-xs">

                    {/* Step 1: Ingress */}
                    <div
                      className={`p-3.5 rounded-2xl border transition-all duration-300 ${pulseIndex === 0
                          ? "bg-purple-50/80 border-purple-300 shadow-sm shadow-purple-100"
                          : "bg-slate-50/60 border-slate-200/70"
                        }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-purple-100 text-purple-700">
                            <Lock className="h-3 w-3" />
                          </div>
                          <span className="font-bold text-slate-900">1. Encrypted Ingress</span>
                        </div>
                        <span className="text-[10px] text-purple-800 bg-purple-100/90 border border-purple-200 px-2 py-0.5 rounded-full font-semibold">
                          TLS 1.3 Sealed
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-sans pl-7">
                        Client credentials sealed in end-to-end encryption. Zero plaintext leaves the client.
                      </p>
                    </div>

                    {/* Step 2: Enclave Processing */}
                    <div
                      className={`p-3.5 rounded-2xl border transition-all duration-300 ${pulseIndex === 1
                          ? "bg-indigo-50/80 border-indigo-300 shadow-sm shadow-indigo-100"
                          : "bg-slate-50/60 border-slate-200/70"
                        }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-indigo-100 text-indigo-700">
                            <Cpu className="h-3 w-3" />
                          </div>
                          <span className="font-bold text-slate-900">2. Nitro TEE Core</span>
                        </div>
                        <span className="text-[10px] text-indigo-800 bg-indigo-100/90 border border-indigo-200 px-2 py-0.5 rounded-full font-semibold">
                          Silicon Isolated
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-sans pl-7">
                        Ephemeral memory execution. Decision evaluated inside hardware enclave with zero disk writes.
                      </p>
                    </div>

                    {/* Step 3: Attestation Settlement */}
                    <div
                      className={`p-3.5 rounded-2xl border transition-all duration-300 ${pulseIndex === 2
                          ? "bg-emerald-50/80 border-emerald-300 shadow-sm shadow-emerald-100"
                          : "bg-slate-50/60 border-slate-200/70"
                        }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                            <CheckCircle2 className="h-3 w-3" />
                          </div>
                          <span className="font-bold text-slate-900">3. On-Chain Settlement</span>
                        </div>
                        <span className="text-[10px] text-emerald-800 bg-emerald-100/90 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">
                          1-Line EVM Query
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-sans pl-7">
                        Cryptographic attestation settled on-chain. dApps verify validity in sub-seconds.
                      </p>
                    </div>

                  </div>
                )}

                {/* Tab 2: Hardware Telemetry View (Light Theme) */}
                {activeTab === "telemetry" && (
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-slate-600">Execution Hardware</span>
                      <span className="text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded border border-purple-100">AWS Nitro Enclave</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-slate-600">Memory Encryption</span>
                      <span className="text-indigo-700 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">AES-128 In-Silicon</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-slate-600">Data Stored</span>
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">0 Bytes (Zero PII)</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-slate-600">Execution Latency</span>
                      <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">&lt; 180ms Sub-Second</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-slate-600">Attestation Target</span>
                      <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">EVM L1 &amp; L2 Chains</span>
                    </div>
                  </div>
                )}

                {/* Interactive Status Callout Footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>Cryptographically Sealed</span>
                  </div>
                  <button
                    onClick={() => setMeetingModalOpen(true)}
                    className="text-xs font-bold text-purple-700 hover:text-purple-900 hover:underline cursor-pointer"
                  >
                    Submit Interest →
                  </button>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>

      <MeetingModal open={meetingModalOpen} onOpenChange={setMeetingModalOpen} />
    </>
  )
}
