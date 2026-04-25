"use client"

import Link from "next/link"
import { ShieldCheck, Cpu, Lock, Globe, FileCheck, CreditCard, ExternalLink, Github } from "lucide-react"

export function ProductsSuite() {
  const products = [
    {
      title: "zCred Confidential Passport",
      category: "Flagship Coprocessor • Horizen Vela TEE",
      description: "Our core confidential decision coprocessor powered by Horizen Vela. Evaluates multi-source claims in Rust WASM inside sealed TEE enclaves and settles minimal, zero-PII attestations on Base.",
      badge: "Base Settlement",
      bgGradient: "from-purple-100 via-purple-200 to-purple-300",
      icon: Cpu,
    },
    {
      title: "ZAuth CAPTCHA",
      category: "Privacy Anti-Bot • Noir ZK Circuit",
      description: "A plug-and-play privacy-first replacement for reCAPTCHA. Uses Noir ZK circuits and zkVerify testnet attestations so users prove humanity without tracking or puzzles.",
      badge: "ZAuth HQ",
      repoLink: "https://github.com/Zauth-HQ/zauth-captcha",
      bgGradient: "from-amber-100 via-yellow-100 to-amber-200",
      icon: Lock,
    },
    {
      title: "ZAuth Chrome Extension",
      category: "Browser Privacy Shield",
      description: "A Chrome extension providing ZK-Pass anonymous tokens, dVPN proxy routing, and Credential Shield to intercept web forms and submit proofs instead of raw identity data.",
      badge: "ZAuth HQ",
      repoLink: "https://github.com/Zauth-HQ/zauth-extension",
      bgGradient: "from-blue-100 via-cyan-100 to-blue-200",
      icon: ShieldCheck,
    },
    {
      title: "NebulaID Aggregation Engine",
      category: "zkTLS Ingestion & Proof Engine",
      description: "Universal identity aggregation layer capturing authentic Web2 data (bank statements, GitHub activity, domain ownership) via TLSNotary/zkTLS into verifiable circuit claims.",
      badge: "NebulaID",
      repoLink: "https://github.com/NebulaID",
      bgGradient: "from-emerald-100 via-teal-100 to-emerald-200",
      icon: Globe,
    },
    {
      title: "RiskX Private Credit Policy",
      category: "DeFi Undercollateralized Lending",
      description: "Evaluates multi-source financial claims and repayment history inside Vela TEE to emit an attested credit tier (Tier AAA / AA) for Base lending protocols with zero bank statement leakage.",
      badge: "Policy Engine",
      bgGradient: "from-indigo-100 via-violet-100 to-indigo-200",
      icon: CreditCard,
    },
    {
      title: "Compliance Passport Policy",
      category: "Institutional RWA & Tokenized Funds",
      description: "Accepts issuer-signed credentials and evaluates fund-specific jurisdiction and sanctions (OFAC/AML) rules inside Vela TEE for GDPR-compliant RWA onboarding.",
      badge: "Policy Engine",
      bgGradient: "from-rose-100 via-pink-100 to-rose-200",
      icon: FileCheck,
    },
  ]

  return (
    <section id="products" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#e4ff54] px-4 py-1.5 text-xs font-bold text-black mb-4">
          Integrated Product Ecosystem
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
          One Confidential Umbrella Company
        </h2>
        <p className="text-lg text-gray-600 mt-4 leading-relaxed">
          zCred unifies multiple privacy-preserving products under one roof—from client-side zkTLS ingestion (NebulaID) and ZK CAPTCHA shields (ZAuth) to our flagship Horizen Vela WASM confidential decision coprocessor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((prod, idx) => {
          const Icon = prod.icon
          return (
            <div
              key={idx}
              className={`bg-gradient-to-br ${prod.bgGradient} rounded-3xl p-7 shadow-sm border border-black/5 flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black border border-black/10">
                    {prod.badge}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  {prod.category}
                </div>

                <h3 className="text-2xl font-bold text-black mb-3">
                  {prod.title}
                </h3>

                <p className="text-gray-800 text-sm leading-relaxed">
                  {prod.description}
                </p>
              </div>

              {prod.repoLink && (
                <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                  <Link
                    href={prod.repoLink}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    View Repository
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
