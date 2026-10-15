import { Plus } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/primitives"

const FAQS = [
  {
    q: "Does zCred ever store personal identity data?",
    a: "No. Data is decrypted strictly inside an isolated hardware enclave, evaluated against the policy bytecode, and immediately zeroized from memory upon execution. The only artifact that persists is an EIP-712 signed attestation containing a 1-byte status, nullifier, and expiry timestamp.",
  },
  {
    q: "Who owns the compliance policy and evidence sources?",
    a: "The institution operates as the Rule Owner: you define the qualification criteria, sanction lists, and approved evidence sources. zCred functions as confidential decision infrastructure that executes your policy in an isolated environment without custodying your users' records.",
  },
  {
    q: "How does verification gas cost compare to zero-knowledge proofs?",
    a: "A standard smart contract view call costs ~2,520 gas (1 SLOAD). Full contract gating in an invest or mint transaction typically consumes under 26k gas. In contrast, verifying complex ZK circuits on-chain can cost 250k–500k+ gas and requires expensive off-chain proof generation for multi-source data.",
  },
  {
    q: "Which chains and settlement environments are supported?",
    a: "zCred settles to Base today, with contracts live on Base Sepolia. The registry is a standard EVM contract deployable to any EVM L1 or L2 network, backed by Horizen Vela confidential coprocessing.",
  },
  {
    q: "Is zCred production-ready?",
    a: "zCred is active on Base Sepolia testnet with 99 passing test suites. Independent third-party security audits and direct onchain hardware PCR0 measurement verification are scheduled ahead of mainnet. We are currently onboarding initial design partners for our scoped pilot program.",
  },
] as const

export function Faq() {
  return (
    <Section id="faq" className="border-t border-slate-200/80">
      <div className="grid gap-6 sm:gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader eyebrow="FAQ" title="Common questions" />
        </div>
        <Reveal className="lg:col-span-8">
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((item) => (
              <details key={item.q} className="group py-3.5 sm:py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 sm:gap-6 text-left text-sm sm:text-base font-medium text-slate-950">
                  {item.q}
                  <Plus className="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="mt-2.5 sm:mt-3 max-w-2xl pr-4 sm:pr-10 text-xs sm:text-[15px] leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
