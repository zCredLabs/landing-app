"use client"

import { motion } from "framer-motion"
import { Shield, Key, EyeOff, FileCode2, Scale, FileText, CheckCircle2 } from "lucide-react"

export function SecuritySection() {
  const securityPillars = [
    {
      icon: Shield,
      title: "Hardware-Isolated TEE Silicon",
      description: "Code executes inside isolated AWS Nitro Enclaves. CPU memory is cryptographically encrypted; cloud operators, host nodes, and third parties cannot inspect memory or tamper with execution.",
    },
    {
      icon: EyeOff,
      title: "Mutual Confidentiality (Dual Shield)",
      description: "Neither the user's raw financial data nor the enterprise's proprietary risk scoring algorithms are exposed to the other party or published to public smart contracts.",
    },
    {
      icon: Key,
      title: "Domain-Bound Unlinkability",
      description: "Attestations are bound to unique per-application nullifiers. User activity on a lending pool cannot be tracked, correlated, or linked to their activity on an institutional dark pool.",
    },
    {
      icon: FileCode2,
      title: "Verified zkTLS Inputs Only",
      description: "All incoming credential claims and bank cashflows are cryptographically authenticated via client-side zkTLS proofs before entering the enclave, preventing fake or tampered signals.",
    },
    {
      icon: Scale,
      title: "GDPR Compliant by Architecture",
      description: "Zero raw PII is ever written to blockchain storage or centralized databases. Users maintain cryptographic ownership of their identity with zero ongoing data custody liability.",
    },
    {
      icon: FileText,
      title: "Encrypted Regulatory Audit Trail",
      description: "On-demand off-chain encrypted compliance reports can be generated via the Vela Authority Service for accredited regulatory audits without publishing sensitive data on-chain.",
    },
  ]

  return (
    <section id="security" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-4">
            Institutional Trust Architecture
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Confidentiality & Security Architecture
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Engineered from first principles for institutional-grade DeFi underwriting, institutional dark pool compliance, and sovereign data privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="rounded-2xl border border-gray-200 bg-gray-50/50 p-7 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white mb-5 shadow-sm">
                    <Icon className="h-6 w-6 text-[#e4ff54]" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Security Statement Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-purple-200 bg-purple-50/60 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-black">
              Zero Knowledge • Hardware Isolated • Verifiable Settlement
            </h4>
            <p className="text-xs text-gray-600 max-w-2xl">
              zCred solves the dilemma between privacy and compliance, allowing institutions and Web3 protocols to enforce high-assurance risk rules without creating toxic data honeypots.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-4 py-2 text-xs font-semibold text-white shadow-sm">
              <Shield className="h-4 w-4 text-[#e4ff54]" />
              AWS Nitro TEE Protected
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
