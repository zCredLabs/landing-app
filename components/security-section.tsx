"use client"

import { motion } from "framer-motion"
import { Shield, Key, EyeOff, FileCode2, Scale } from "lucide-react"

export function SecuritySection() {
  const securityPillars = [
    {
      icon: Shield,
      title: "Hardware-Isolated Execution",
      description: "Computation runs in isolated hardware environments that no node operator, cloud provider, or third party can inspect or tamper with.",
    },
    {
      icon: EyeOff,
      title: "Mutual Confidentiality",
      description: "Neither the user's sensitive identity data nor the verifier's proprietary decision rules are ever exposed to the other party or published onchain.",
    },
    {
      icon: Key,
      title: "Unlinkable by Design",
      description: "Verifications are cryptographically scoped per application domain, preventing cross-platform tracking or identity correlation across protocols.",
    },
    {
      icon: FileCode2,
      title: "Verified Inputs Only",
      description: "All incoming credential claims and Web2 data signals are cryptographically verified before evaluation to guarantee data integrity.",
    },
    {
      icon: Scale,
      title: "Compliance-Ready",
      description: "Built to support strict institutional and regulatory data-handling standards (including GDPR) by maintaining zero raw PII persistence.",
    },
  ]

  return (
    <section id="security" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-4">
            Security Guarantee
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Security & Trust Architecture
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Engineered from the ground up for high-assurance financial and enterprise verification requirements.
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
              Zero-Trust Confidentiality Infrastructure
            </h4>
            <p className="text-xs text-gray-600 max-w-2xl">
              zCred ensures privacy and cryptographic verifiability at every layer of execution for Web3 applications and institutional finance.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-4 py-2 text-xs font-semibold text-white">
              <Shield className="h-4 w-4" />
              Hardware-Backed Security
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
