"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Cpu, Database, CheckCircle2, ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Verify",
      subtitle: "Cryptographic Signal Ingestion",
      description: "Users prove real-world facts (identity, creditworthiness, compliance status) using cryptographic verification, without submitting raw documents to us or third parties.",
      icon: ShieldCheck,
      tag: "Zero Data Submission",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      num: "02",
      title: "Evaluate",
      subtitle: "Confidential Compute Layer",
      description: "Our confidential compute layer applies your business rules privately inside hardware-isolated enclaves, so neither user data nor your policy logic is ever exposed.",
      icon: Cpu,
      tag: "Dual Confidentiality",
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      num: "03",
      title: "Settle",
      subtitle: "Onchain Attestation",
      description: "A minimal, zero-knowledge verifiable attestation is published onchain, enabling any consuming smart contract or application to check eligibility instantly.",
      icon: Database,
      tag: "Instant Onchain Check",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ]

  return (
    <section id="platform" className="py-20 bg-gray-50/60 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold text-purple-700 mb-4">
            Platform Architecture
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            How zCred Works
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            A three-step verification engine built for privacy-preserving decision enforcement across Web3 and enterprise applications.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-gray-300 font-mono">
                      {step.num}
                    </span>
                    <div className={`p-3 rounded-xl ${step.color} border`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <span className={`inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-3 ${step.color}`}>
                    {step.tag}
                  </span>

                  <h3 className="text-2xl font-bold text-black mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-purple-600 mb-4">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Footer status indicator */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5 text-black">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    Verifiable Guarantee
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-gray-300 hidden md:block" />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
