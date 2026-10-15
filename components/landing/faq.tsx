import { Plus } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/primitives"

const FAQS = [
  {
    q: "Does zCred ever store personal data?",
    a: "No. Data is decrypted only inside the enclave, evaluated, and wiped from memory. The only thing that persists is a 171-byte attestation containing a status, an expiry and a signature.",
  },
  {
    q: "Who can see a user's information?",
    a: "Nobody outside the enclave: not the protocol, not the node operator, not the cloud provider and not the zCred team. Integrating contracts only see the resulting status.",
  },
  {
    q: "How is this different from zero-knowledge proofs?",
    a: "ZK proofs work well for narrow statements but become expensive for complex policies like credit scoring or sanctions screening. zCred runs arbitrary policy logic in an enclave and settles a result that costs under 26k gas to verify. The two approaches can complement each other.",
  },
  {
    q: "Which chains are supported?",
    a: "zCred settles to Base today, with contracts live on Base Sepolia. The registry is a standard EVM contract and can be deployed to other EVM chains.",
  },
  {
    q: "Is zCred production-ready?",
    a: "All three policies are running end-to-end on testnet. On-chain hardware attestation verification and an external security audit are planned ahead of mainnet. We are onboarding design partners now.",
  },
] as const

export function Faq() {
  return (
    <Section id="faq" className="border-t border-slate-200/80">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader eyebrow="FAQ" title="Common questions" />
        </div>
        <Reveal className="lg:col-span-8">
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((item) => (
              <details key={item.q} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-medium text-slate-950">
                  {item.q}
                  <Plus className="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="mt-3 max-w-2xl pr-10 text-[15px] leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
