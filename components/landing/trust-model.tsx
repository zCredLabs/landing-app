import { CheckCircle2, Shield, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/primitives"

const TRUST_ROWS = [
  {
    layer: "Hardware Root of Trust",
    today: "AWS Nitro Enclaves on Horizen Vela nodes",
    target: "Multi-operator decentralized TEE consortium",
    guarantee: "Hardware-enforced memory isolation from host OS and cloud operators.",
  },
  {
    layer: "Attestation Verification",
    today: "Registry verifies enclave signing key (EIP-712)",
    target: "Direct onchain PCR0 cryptographic measurement verification",
    guarantee: "Smart contract validates that only unmodified policy bytecode issued the verdict.",
  },
  {
    layer: "Policy Execution Memory",
    today: "Ephemeral memory; zeroized post-decision",
    target: "Formal memory-wipe audit + cryptographic proof of zeroization",
    guarantee: "Zero persistent credentials or PII on disk or cloud storage.",
  },
  {
    layer: "Revocation & Validity",
    today: "Time-bound expiry (policy-defined TTLs)",
    target: "Onchain revocation hook + real-time sanctions refresh",
    guarantee: "Stale decisions auto-expire; issuers can invalidate credentials instantly.",
  },
] as const

const COMPAT_STANDARDS = [
  {
    name: "ERC-3643",
    role: "Permissioned Token Standard",
    description: "Emits compatible identity claims for compliant RWA security tokens and institutional liquidity vaults.",
  },
  {
    name: "Chainlink ACE",
    role: "Automated Compliance Engine",
    description: "Acts as a confidential policy evaluator feeding automated compliance checks into cross-chain pipelines.",
  },
  {
    name: "zkTLS & ZK Circuits",
    role: "Private Ingress Layer",
    description: "Evaluates TLS session proofs and selective disclosure proofs alongside enclave policy logic.",
  },
] as const

export function TrustModel() {
  return (
    <Section id="trust-model">
      <SectionHeader
        eyebrow="Trust model"
        title="Transparent security assumptions. No hand-waving."
        description="Institutional diligence requires clear lines on what is live today and what is on the roadmap. We design for cryptographic verifiability, not blind trust."
        align="center"
      />

      {/* Trust Assumptions Matrix */}
      <Reveal className="mt-8 sm:mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-slate-200 bg-slate-50/80 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-3.5 sm:px-6 sm:py-4">Architecture Layer</th>
                <th className="px-4 py-3.5 sm:px-6 sm:py-4">Testnet Today</th>
                <th className="px-4 py-3.5 sm:px-6 sm:py-4">Mainnet Target</th>
                <th className="px-4 py-3.5 sm:px-6 sm:py-4">Assurance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal">
              {TRUST_ROWS.map((row) => (
                <tr key={row.layer} className="transition-colors hover:bg-slate-50/50">
                  <td className="px-4 py-3 sm:px-6 sm:py-4 font-semibold text-slate-900">{row.layer}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-slate-600">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-0.5 font-mono text-[11px] text-emerald-700 ring-1 ring-emerald-200">
                      Live
                    </span>
                    <span className="ml-2">{row.today}</span>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-slate-600">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-violet-50 px-2 py-0.5 font-mono text-[11px] text-violet-700 ring-1 ring-violet-200">
                      Roadmap
                    </span>
                    <span className="ml-2">{row.target}</span>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-xs text-slate-500">{row.guarantee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-slate-100 bg-slate-50/60 px-4 py-3 text-xs text-slate-500 sm:px-6">
          <span className="font-semibold text-slate-700">Responsibility Line:</span> The institution owns and specifies the policy rules and approved evidence sources. zCred operates as confidential decision infrastructure, not legal or regulatory counsel.
        </div>
      </Reveal>

      {/* Ecosystem Compatibility Block ("Works With") */}
      <div className="mt-12 sm:mt-16">
        <div className="text-center mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Ecosystem Compatibility
          </span>
          <h3 className="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-slate-950">
            Engineered to integrate with institutional Web3 standards
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {COMPAT_STANDARDS.map((s) => (
            <article key={s.name} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 transition-all hover:border-slate-300">
              <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-800">
                {s.name}
              </span>
              <h4 className="mt-3 text-sm font-semibold text-slate-900">{s.role}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
