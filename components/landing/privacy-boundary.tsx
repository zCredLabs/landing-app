import { EyeOff, Globe, Minus, Plus } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/primitives"

const PRIVATE = [
  "Names, passports and identity documents",
  "Bank balances, income and net worth",
  "Cash flow and repayment history",
  "Intermediate scoring logic and sub-metrics",
  "Any link between a user's activity across apps",
] as const

const PUBLIC = [
  "Policy ID and resulting status or tier",
  "App-specific, unlinkable nullifier",
  "Expiry timestamp",
  "Enclave signature over the result",
] as const

export function PrivacyBoundary() {
  return (
    <Section id="boundary">
      <SectionHeader
        eyebrow="Data boundary"
        title="A clear line between what stays private and what settles."
        description="Data minimization is built into the architecture, not left to policy. Compliance teams can see exactly what leaves the enclave."
        align="center"
      />

      <Reveal className="mx-auto mt-8 sm:mt-12 grid max-w-5xl overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-2">
        <div className="bg-white p-5 sm:p-8 lg:p-10">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <EyeOff className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-slate-700" />
            <h3 className="text-base sm:text-lg font-semibold text-slate-950">Stays inside the enclave</h3>
          </div>
          <ul className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3.5">
            {PRIVATE.map((item) => (
              <li key={item} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-[15px] text-slate-600">
                <Minus className="mt-0.5 sm:mt-1 h-3.5 w-3.5 flex-shrink-0 text-slate-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-slate-200 bg-slate-50/70 p-5 sm:p-8 lg:p-10 md:border-l md:border-t-0">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Globe className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-violet-600" />
            <h3 className="text-base sm:text-lg font-semibold text-slate-950">Settles on-chain</h3>
          </div>
          <ul className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3.5">
            {PUBLIC.map((item) => (
              <li key={item} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-[15px] text-slate-700">
                <Plus className="mt-0.5 sm:mt-1 h-3.5 w-3.5 flex-shrink-0 text-violet-600" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 sm:mt-8 rounded-lg bg-white px-3.5 py-2 sm:px-4 sm:py-3 font-mono text-[11px] sm:text-xs text-slate-500 ring-1 ring-slate-200">
            Total footprint: 171 bytes per attestation
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
