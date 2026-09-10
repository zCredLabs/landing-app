"use client"

import { TrendingUp, Lock, Bot, ShieldCheck } from 'lucide-react'

export default function UseCases() {
  const cases = [
    {
      title: "Confidential DeFi Underwriting",
      description: "Underwrite institutional and undercollateralized loans on Noct Finance and Base money markets without exposing borrower PII.",
      icon: TrendingUp,
      color: "from-blue-100 to-blue-200 text-blue-800",
    },
    {
      title: "Institutional Dark Pool Compliance",
      description: "OFAC sanctions checks and KYC accreditation for shielded trading orderbooks on Layrs Lab and Horizen Private DEX.",
      icon: Lock,
      color: "from-purple-100 to-purple-200 text-purple-800",
    },
    {
      title: "Autonomous AI Agent Passports",
      description: "Hardware-attested agent identities, developer provenance, and HTTP 402 payment headers for Velum and m402.",
      icon: Bot,
      color: "from-emerald-100 to-emerald-200 text-emerald-800",
    },
    {
      title: "RWA & Accredited Investor Gates",
      description: "Zero-knowledge jurisdiction screening and compliance verification for tokenized real-world assets.",
      icon: ShieldCheck,
      color: "from-amber-100 to-amber-200 text-amber-800",
    },
  ]

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-black">
          High-Value Use Cases
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Enabling institutional compliance, undercollateralized credit, and autonomous machine economies without toxic data custody.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map((c, i) => {
          const Icon = c.icon
          return (
            <div key={i} className={`bg-gradient-to-br ${c.color} rounded-3xl p-6 shadow-sm flex flex-col justify-between`}>
              <div>
                <div className="p-3 bg-white/80 rounded-2xl w-fit mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-black">{c.title}</h3>
                <p className="text-gray-700 text-xs leading-relaxed">{c.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
