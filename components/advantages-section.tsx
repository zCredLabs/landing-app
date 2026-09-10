"use client"

import { motion } from "framer-motion"
import { Sparkles, Shield, Lock, Globe, Cpu, CheckCircle2 } from "lucide-react"

export function AdvantagesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="why-zcred" className="w-full bg-purple-600 py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-[#e4ff54] px-4 py-1 text-xs font-bold text-black mb-3">
            Core Technical Differentiators
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Why zCred Leads Confidential Identity
          </h2>
          <p className="mt-4 text-base text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Unlike biometric palm scans or coarse public wallet heuristics, zCred evaluates authentic financial and compliance data in hardware-sealed silicon.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {/* Card 1 - Verify Once */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl text-black">Domain-Bound Nullifiers (Zero Tracking)</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Users verify private Web2 credentials and financial signals once. zCred generates cryptographically scoped domain nullifiers (<code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono text-purple-700">hash(userSecret, appDomain)</code>) so protocols verify eligibility without cross-dApp wallet tracking.
            </p>
          </motion.div>

          {/* Card 2 - Dual-Sided Confidentiality */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 mb-4">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl text-black">Dual-Sided Shield (IP & Privacy Sealed)</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              AWS Nitro TEE enclaves shield both the borrower&apos;s raw financial data and the enterprise verifier&apos;s proprietary risk scoring algorithms. Neither user bank statements nor institutional risk weights are ever exposed on public chains.
            </p>
          </motion.div>

          {/* Card 3 - zkTLS Web2 Data Ingestion */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 mb-4">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl text-black">Client-Side zkTLS Signal Ingestion</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Ingest authentic Web2 signals (bank cashflows, CEX custody balances, tax records) using client-side zkTLS proofs. Convert raw TLS sessions into cryptographic enclave inputs with zero server session interception or credential sharing.
            </p>
          </motion.div>

          {/* Card 4 - Base EVM Settlement */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 mb-4">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl text-black">1-Line Smart Contract Query (&lt;26k Gas)</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Minimal hardware-attested results settle directly into <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono text-purple-700">ZcredAttestationRegistry.sol</code> on Base and Horizen. Consuming contracts read eligibility via a single storage call, eliminating costly 300k+ gas ZK-SNARK on-chain verifier execution.
            </p>
          </motion.div>
        </motion.div>

        {/* Consolidated Single Research Foundation Mention */}
        <motion.div
          id="research-roots"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 rounded-3xl bg-white p-6 md:p-8 shadow-sm border border-purple-100"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="md:w-3/4 space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold text-purple-800 uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-purple-700" />
                Foundational Cryptographic Lineage
              </div>

              <h3 className="text-xl font-bold md:text-2xl text-black">
                Backed by Multi-Year Applied Cryptography R&D
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                zCred is the culmination of multi-year applied research across zero-knowledge proof systems, zkTLS data-attestation, and sovereign identity. Foundational research from our early open-source initiatives—including the ZAuth Noir ZK CAPTCHA engine and Nebula ID sovereign identity primitives—directly informed zCred&apos;s dual-confidentiality hardware decision coprocessor architecture.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-gray-600">
                <span className="flex items-center gap-1.5 text-black font-semibold">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  Zero Raw PII Persistence
                </span>
                <span>•</span>
                <span>Client-Side Noir ZK Circuits</span>
                <span>•</span>
                <span>AWS Nitro Enclave Attestation</span>
                <span>•</span>
                <span>EIP-2612 Gasless Rails</span>
              </div>
            </div>

            <div className="flex w-full justify-center md:w-1/4">
              <div className="relative h-32 w-40 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-4 border border-purple-200 flex flex-col items-center justify-center text-center shadow-inner">
                <span className="text-3xl font-black text-purple-800">3+</span>
                <span className="text-xs font-bold text-purple-900 uppercase tracking-wider mt-0.5">Years of R&D</span>
                <span className="text-[11px] text-purple-700 font-semibold mt-1">ZK • zkTLS • TEE</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
