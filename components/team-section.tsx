"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Award, Users, Code2 } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Shikhar Singh",
      role: "Co-Founder & Core Architect",
      bio: "Focusing on zero-knowledge circuit development, zkTLS data ingestion primitives, and confidential computing architecture with Horizen Vela TEE.",
      github: "https://github.com/Zauth-HQ",
      twitter: "https://x.com/zcred_org",
      linkedin: "https://linkedin.com",
    },
    {
      name: "zCred Engineering Team",
      role: "Cryptography & Protocol Engineers",
      bio: "Engineers specializing in Rust WASM enclave runtimes, Noir ZK smart contracts, and Base EVM attestation settlement.",
      github: "https://github.com/NebulaID",
      twitter: "https://x.com/zcred_org",
      linkedin: "https://linkedin.com",
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50/50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold text-blue-800 mb-4">
            Team & Ecosystem Cohort
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Built by Experienced Cryptography Builders
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            zCred is developed by a focused engineering team with prior open-source R&D across zkTLS, Noir ZK circuits, and TEE coprocessing.
          </p>
        </div>

        {/* Program Affiliation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-900 via-purple-950 to-slate-950 p-8 text-white shadow-lg relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#e4ff54] px-3 py-1 text-xs font-bold text-black">
                <Award className="h-3.5 w-3.5" />
                Horizen Acceleration Season
              </div>
              <h3 className="text-2xl font-bold text-white">
                Selected for Horizen Acceleration Cohort
              </h3>
              <p className="text-xs text-purple-200 max-w-2xl leading-relaxed">
                zCred is participating in the Horizen Acceleration Program, building directly on Vela—Horizen&apos;s confidential coprocessor—in close collaboration with the core Horizen engineering team.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 border border-white/15 text-center">
                <span className="block text-2xl font-black text-[#e4ff54]">Vela</span>
                <span className="text-[10px] text-purple-200 font-semibold uppercase tracking-wider">Early Access Partner</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
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

                <h3 className="text-xl font-bold text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-4 text-gray-600 text-xs font-medium">
                {member.github && (
                  <a href={member.github} target="_blank" rel="noreferrer" className="hover:text-black transition-colors flex items-center gap-1">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noreferrer" className="hover:text-black transition-colors flex items-center gap-1">
                    <Twitter className="h-4 w-4" /> Twitter
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
