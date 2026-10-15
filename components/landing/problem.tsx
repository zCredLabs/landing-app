import { DatabaseZap, Eye, Landmark } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/primitives"

const PROBLEMS = [
  {
    icon: DatabaseZap,
    title: "Compliance creates data liability",
    body: "To run KYC and accreditation checks, protocols collect passports, tax filings and bank statements. Every copy is a breach and GDPR risk.",
  },
  {
    icon: Eye,
    title: "Public chains expose everything",
    body: "Anything verified on-chain is visible to everyone, forever. Institutions can't put investor or counterparty data on a public ledger.",
  },
  {
    icon: Landmark,
    title: "Capital stays locked up",
    body: "Without private credit signals, lenders fall back on 140–160% collateral. Trustworthy borrowers pay the same penalty as everyone else.",
  },
] as const

export function Problem() {
  return (
    <Section>
      <SectionHeader
        eyebrow="The problem"
        title="Onchain finance needs real-world trust, without the data honeypot."
        description="Regulated and institutional capital needs identity, compliance and credit checks. Today that means choosing between privacy and access."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {PROBLEMS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
