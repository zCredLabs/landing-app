import { Clock, DatabaseZap, Eye } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/primitives"

const PROBLEMS = [
  {
    icon: DatabaseZap,
    title: "Compliance creates data liability",
    body: "To run KYC and accreditation checks, protocols collect passports, tax filings and bank records. Every duplicate copy stored is an active data breach and GDPR liability.",
  },
  {
    icon: Eye,
    title: "Public chains expose everything",
    body: "Anything recorded on a public blockchain is visible forever. Institutions and regulated funds cannot expose investor identities or counterparty financials on a public ledger.",
  },
  {
    icon: Clock,
    title: "Onboarding friction & duplicate costs",
    body: "Manual institutional onboarding costs $6K–$25K per entity and takes up to 34 weeks—causing 70% of institutions to lose prospective clients (Fenergo 2025). Every app repeats review from scratch.",
  },
] as const

export function Problem() {
  return (
    <Section>
      <SectionHeader
        eyebrow="The problem"
        title="Onchain finance needs institutional trust, without the data honeypot."
        description="Regulated capital and tokenized asset platforms require identity, sanctions, and compliance checks. Today that forces an unviable tradeoff between compliance and privacy."
      />

      <div className="mt-8 sm:mt-12 grid gap-3.5 sm:gap-5 md:grid-cols-3">
        {PROBLEMS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-5 sm:p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <p.icon className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-violet-700" />
              </div>
              <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-slate-950">{p.title}</h3>
              <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-slate-600">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 sm:mt-8 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-center text-xs text-slate-600 sm:text-sm">
        <span className="font-semibold text-slate-900">The core dilemma:</span> Protocols cannot custody customer evidence without massive liability, but contracts cannot admit unverified participants.
      </div>
    </Section>
  )
}
