"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

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
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-[#e4ff54] px-4 py-1 text-xs font-bold text-black mb-3">
            Core Technological Advantages
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Why zCred Leads Web3 Privacy
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
            <h3 className="mb-4 text-xl font-bold md:text-2xl text-black">Verify Once, Access Everywhere</h3>
            <p className="mb-8 text-sm text-gray-700 md:text-base leading-relaxed">
              Users verify their private Web2 and Web3 credentials once. zCred generates purpose-bound nullifiers so you can prove eligibility across multiple Base dApps without cross-application linkability or tracking.
            </p>
            <div className="mt-auto flex justify-center">
              <div className="relative h-36 w-36 rounded-full bg-purple-600">
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 p-4">
                    <div className="h-2 w-12 bg-black rounded-full"></div>
                    <div className="h-2 w-12 bg-purple-600 rounded-full"></div>
                    <div className="h-2 w-12 bg-purple-300 rounded-full"></div>
                    <div className="h-2 w-12 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Dual-Sided Confidentiality */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold md:text-2xl text-black">Dual-Sided Confidentiality (Vela TEE)</h3>
            <p className="mb-8 text-sm text-gray-700 md:text-base leading-relaxed">
              Horizen Vela TEE enclaves protect BOTH the user&apos;s sensitive input data AND the verifying application&apos;s proprietary policy logic (risk weights, fraud rules). Neither is exposed on public smart contracts.
            </p>
            <div className="mt-auto flex justify-center">
              <div className="relative h-36 w-36 rounded-full bg-[#e4ff54]">
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                  <div className="flex h-full w-full flex-col items-center justify-center p-2">
                    <div className="h-10 w-10 mb-1">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="black" strokeWidth="1.5"/>
                        <path d="M3.6 9H20.4" stroke="black" strokeWidth="1.5"/>
                        <path d="M3.6 15H20.4" stroke="black" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-black uppercase tracking-wider">TEE Enclave</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - zkTLS & ZK Privacy */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold md:text-2xl text-black">zkTLS Web2 Data Ingestion</h3>
            <p className="mb-8 text-sm text-gray-700 md:text-base leading-relaxed">
              Pull authentic Web2 data (bank balances, GitHub activity, domain ownership) using TLSNotary/zkTLS patterns. Convert Web2 signals into cryptographically unfakeable private inputs for WASM policy evaluation.
            </p>
            <div className="mt-auto flex justify-center">
              <div className="relative h-36 w-36 rounded-full bg-gray-100">
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                  <div className="flex h-full w-full flex-col items-center justify-center p-2">
                    <div className="h-12 w-12 border-2 border-purple-600 rounded-lg p-1.5 flex flex-col justify-between">
                      <div className="h-2 w-full bg-purple-600 rounded"></div>
                      <div className="h-2 w-full bg-black rounded"></div>
                      <div className="h-2 w-8 bg-[#e4ff54] rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Base Settlement */}
          <motion.div variants={item} className="flex flex-col rounded-3xl bg-white p-6 md:p-8 shadow-sm">
            <h3 className="mb-4 text-xl font-bold md:text-2xl text-black">Base Smart Contract Settlement</h3>
            <p className="mb-8 text-sm text-gray-700 md:text-base leading-relaxed">
              Attestations settle directly on Base Sepolia and Base Mainnet. Consuming smart contracts check eligibility via a simple 1-read call (<code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono text-purple-700">IZcredPassport.isValid</code>) with zero raw PII onchain.
            </p>
            <div className="mt-auto flex justify-center">
              <div className="relative h-36 w-36 rounded-full bg-purple-600">
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center font-bold text-xs text-black">
                      <span className="block text-purple-600">BASE</span>
                      EVM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Card 5 - Open Source & Repos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 rounded-3xl bg-white p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="md:w-2/3">
              <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700 mb-2">
                Open Source & Multi-Repo Foundation
              </span>
              <h3 className="mb-4 text-xl font-bold md:text-2xl text-black">
                Built on Proven ZAuth & NebulaID Infrastructure
              </h3>
              <p className="text-sm text-gray-700 md:text-base leading-relaxed">
                zCred unifies our prior open-source initiatives—including ZAuth HQ&apos;s Noir ZK CAPTCHA and Chrome extension, alongside NebulaID&apos;s identity aggregation thesis. All repositories are open for community audit and collaboration.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="https://github.com/Zauth-HQ"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-xs font-bold text-white hover:bg-black/80 transition-all"
                >
                  <Github className="h-4 w-4" />
                  ZAuth HQ Repositories
                  <ExternalLink className="h-3 w-3" />
                </Link>

                <Link
                  href="https://github.com/NebulaID"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-xs font-bold text-black hover:bg-gray-50 transition-all"
                >
                  <Github className="h-4 w-4 text-purple-600" />
                  NebulaID Repositories
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="flex w-full justify-center md:w-1/3">
              <div className="relative h-36 w-36">
                <div className="absolute right-0 h-32 w-32 rounded-full bg-purple-600"></div>
                <div className="absolute left-0 h-32 w-32 rounded-full bg-[#e4ff54]"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-black text-sm">
                  Open Source
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
