"use client"

import { motion } from "framer-motion"
import { Award, Shield, CheckCircle2, Twitter, Cpu, Code2 } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Shikhar Singh",
      role: "Founder & Core Architect",
      bio: "Focusing on zero-knowledge proof systems, zkTLS data-ingestion primitives, and confidential computing architecture with hardware TEE enclaves.",
      twitter: "https://x.com/zCredLabs",
    },
    {
      name: "zCred Cryptography & Systems Team",
      role: "Enclave & Protocol Engineers",
      bio: "Engineering team specializing in Rust WASM enclave runtimes, AWS Nitro TEE verification ceremonies, and gas-efficient EVM attestation settlement.",
      twitter: "https://x.com/zCredLabs",
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50/50 border-t border-gray-100 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold text-purple-800 mb-4">
            Leadership & Ecosystem
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Built by Experienced Cryptography Builders
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            zCred is engineered by protocol researchers and cryptography developers with multi-year open-source roots across zero-knowledge proof systems, zkTLS, and hardware enclave coprocessors.
          </p>
        </div>

        {/* Program Affiliation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-950 via-slate-950 to-purple-900 p-8 md:p-10 text-white shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#e4ff54] px-3.5 py-1 text-xs font-black text-black">
                <Award className="h-3.5 w-3.5" />
                Acceleration Program Selection
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Selected for Horizen Acceleration Season
              </h3>
              <p className="text-sm text-purple-200 leading-relaxed">
                zCred is developing next-generation confidential identity and verification infrastructure in collaboration with Horizen Labs, pioneering confidential coprocessing on Vela AWS Nitro TEE enclaves for high-assurance EVM applications.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 px-6 border border-white/15 text-center">
                <span className="block text-2xl font-black text-[#e4ff54]">Vela TEE</span>
                <span className="text-[11px] text-purple-200 font-semibold uppercase tracking-wider">Confidential Coprocessor</span>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 px-6 border border-white/15 text-center">
                <span className="block text-2xl font-black text-white">AWS Nitro</span>
                <span className="text-[11px] text-purple-200 font-semibold uppercase tracking-wider">Sealed Hardware</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Team Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 font-bold text-lg">
                    {member.name.charAt(0)}
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    {member.role}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-black mb-2">
                  {member.name}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-4 text-gray-600 text-xs font-medium">
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noreferrer" className="hover:text-black transition-colors flex items-center gap-1.5">
                    <Twitter className="h-4 w-4" /> @zCredLabs
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
