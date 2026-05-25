"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, ExternalLink, Sparkles, BookOpen } from "lucide-react"

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
    <section id="advantages" className="w-full bg-purple-600 py-16 md:py-24">
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
            <h3 className="mb-3 text-xl font-bold md:text-2xl text-black">Verify Once, Access Across Web3</h3>
            <p className="mb-6 text-sm text-gray-700 leading-relaxed">
              Users verify private Web2 and Web3 credential signals once. zCred generates purpose-bound nullifiers so you prove eligibility without dApps tracking your identity across applications.
            </p>
            <div className="mt-auto flex justify-center">
              <div className="relative h-32 w-32 rounded-full bg-purple-600">
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 p-3">
                    <div className="h-1.5 w-10 bg-black rounded-full"></div>
                    <div className="h-1.5 w-10 bg-purple-600 rounded-full"></div>
                    <div className="h-1.5 w-10 bg-purple-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Dual-Sided Confidentiality */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold md:text-2xl text-black">Dual-Sided Confidentiality</h3>
            <p className="mb-6 text-sm text-gray-700 leading-relaxed">
              Hardware-isolated TEE enclaves shield both user identity data and verifier decision logic. Neither private PII nor proprietary risk algorithms are revealed on public smart contracts.
            </p>
            <div className="mt-auto flex justify-center">
              <div className="relative h-32 w-32 rounded-full bg-[#e4ff54]">
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                  <div className="flex h-full w-full flex-col items-center justify-center p-2">
                    <span className="text-[10px] font-bold text-black uppercase tracking-wider">TEE Enclave</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - zkTLS Web2 Data Ingestion */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold md:text-2xl text-black">zkTLS Web2 Signal Ingestion</h3>
            <p className="mb-6 text-sm text-gray-700 leading-relaxed">
              Ingest authentic Web2 signals (bank data, GitHub activity, domain ownership) using zkTLS/TLSNotary primitives. Convert raw Web2 data into cryptographically unfakeable enclave inputs.
            </p>
            <div className="mt-auto flex justify-center">
              <div className="relative h-32 w-32 rounded-full bg-gray-100">
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                  <div className="flex h-full w-full items-center justify-center font-mono font-bold text-xs text-purple-700">
                    zkTLS
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Base EVM Settlement */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8 shadow-sm">
            <h3 className="mb-3 text-xl font-bold md:text-2xl text-black">Smart Contract Attestation Settlement</h3>
            <p className="mb-6 text-sm text-gray-700 leading-relaxed">
              Minimal attestations settle directly on EVM smart contracts. Consuming dApps verify eligibility with a single view call (<code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono text-purple-700">IZcredPassport.isValid</code>), eliminating expensive on-chain ZK SNARK verification gas.
            </p>
            <div className="mt-auto flex justify-center">
              <div className="relative h-32 w-32 rounded-full bg-purple-600">
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center font-bold text-xs text-black">
                      <span className="block text-purple-600">EVM</span>
                      Settlement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Consolidated Research & Open Source Foundation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 rounded-3xl bg-white p-6 md:p-8 shadow-sm border border-purple-100"
        >
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center justify-between">
            <div className="md:w-3/4 space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold text-purple-800 uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5 text-purple-700" />
                Research Foundation
              </div>

              <h3 className="text-xl font-bold md:text-2xl text-black">
                Built on Proven Privacy & Verification Research
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed">
                zCred builds on years of hands-on research across zero-knowledge proofs, zkTLS, and privacy-preserving credential infrastructure. Our open-source work on ZAuth and NebulaID established the verification primitives that now underpin zCred Passport.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://zauth.zcred.xyz/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-purple-700 px-5 py-2.5 text-xs font-bold text-white hover:bg-purple-800 transition-all shadow-sm"
                >
                  <BookOpen className="h-4 w-4 text-[#e4ff54]" />
                  Learn More                  <ExternalLink className="h-3 w-3" />
                </a>

                <Link
                  href="https://github.com/Zauth-HQ"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-xs font-bold text-white hover:bg-black/80 transition-all"
                >
                  <Github className="h-4 w-4" />
                  ZAuth Repositories
                  <ExternalLink className="h-3 w-3" />
                </Link>

                <Link
                  href="https://github.com/NebulaID"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-xs font-bold text-black hover:bg-gray-50 transition-all"
                >
                  <Github className="h-4 w-4 text-purple-600" />
                  NebulaID Repositories
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="flex w-full justify-center md:w-1/4">
              <div className="relative h-32 w-36 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 p-4 border border-purple-200 flex flex-col items-center justify-center text-center shadow-inner">
                <span className="text-3xl font-black text-purple-800">3+</span>
                <span className="text-[10px] font-bold text-purple-900 uppercase tracking-wider mt-0.5">Years of R&D</span>
                <span className="text-[9px] text-purple-700 font-semibold mt-1">ZK • zkTLS • Privacy</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
