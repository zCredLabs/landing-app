import { ArrowRight, Bot, Check, LineChart, ShieldCheck, Sparkles } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { MeetingButton } from "@/components/landing/meeting-context"
import { Section, SectionHeader } from "@/components/landing/primitives"

const COMPLIANCE_CHECKS = [
  "OFAC sanctions screening",
  "Restricted-jurisdiction blocking",
  "Accredited investor verification",
  "Reusable for 365 days, unlinkable across apps",
] as const

const COMPLIANCE_STATUSES = [
  { label: "Accredited", detail: "Institutional & RWA pools", tone: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  { label: "Retail", detail: "Spot markets only", tone: "bg-sky-50 text-sky-700 ring-sky-200" },
  { label: "Blocked", detail: "Sanctioned or restricted", tone: "bg-rose-50 text-rose-700 ring-rose-200" },
] as const

const EXPLORATORY_POLICIES = [
  {
    icon: LineChart,
    name: "RiskX Credit",
    badge: "Exploratory Policy",
    integrationId: "riskx-credit",
    audience: "For DeFi lending & credit protocols",
    body: "Evaluating offchain bank cashflows and reserves in-enclave to emit private credit tiers (AAA to BBB) for dynamic collateralization.",
  },
  {
    icon: Bot,
    name: "Agent Passport",
    badge: "Exploratory Policy",
    integrationId: "agent-passport",
    audience: "For AI agent platforms & payment gates",
    body: "Cryptographically verifying autonomous agent code provenance and enforcing spending thresholds directly from hardware enclaves.",
  },
] as const

export function UseCases() {
  return (
    <Section id="use-cases">
      <SectionHeader
        eyebrow="Policies"
        title="Purpose-built for compliance. Extensible by design."
        description="Our core focus is Compliance Shield. All policies evaluate sensitive credentials inside the same hardware enclaves and settle signed verdicts to Base."
      />

      {/* Flagship: Compliance Shield */}
      <Reveal className="mt-8 sm:mt-12">
        <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs lg:grid-cols-5">
          <div className="p-5 sm:p-8 lg:p-10 lg:col-span-3">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-violet-600 text-white">
                <ShieldCheck className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
              </div>
              <span className="rounded-full bg-violet-50 px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold text-violet-700 ring-1 ring-violet-200">
                Core Flagship
              </span>
            </div>
            <h3 className="mt-4 sm:mt-6 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl lg:text-3xl">Compliance Shield</h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-slate-500">
              For RWA issuers, institutional pools, and compliant Web3 venues
            </p>
            <p className="mt-3.5 sm:mt-5 max-w-xl text-sm sm:text-[15px] leading-relaxed text-slate-600">
              Run KYC, sanctions screening, and investor accreditation without ever custodying personal identity documents.
              Your smart contracts receive one compact verdict. Your servers store zero PII.
            </p>
            <ul className="mt-5 sm:mt-7 grid gap-2.5 sm:gap-3 sm:grid-cols-2">
              {COMPLIANCE_CHECKS.map((c) => (
                <li key={c} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <Check className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-violet-600" />
                  {c}
                </li>
              ))}
            </ul>
            <MeetingButton
              integration="rwa-compliance"
              className="group mt-6 sm:mt-8 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-violet-700 hover:text-violet-900 cursor-pointer"
            >
              Apply for compliance beta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </MeetingButton>
          </div>

          <div className="border-t border-slate-200 bg-slate-50/70 p-5 sm:p-8 lg:col-span-2 lg:border-l lg:border-t-0 flex flex-col justify-center">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">What your contract sees</p>
            <ul className="mt-3.5 sm:mt-5 space-y-2.5 sm:space-y-3">
              {COMPLIANCE_STATUSES.map((s) => (
                <li key={s.label} className="flex items-center justify-between rounded-lg bg-white px-3.5 py-2.5 sm:px-4 sm:py-3.5 ring-1 ring-slate-200">
                  <span className={`rounded-md px-2 py-0.5 text-[11px] sm:text-xs font-semibold ring-1 ${s.tone}`}>{s.label}</span>
                  <span className="text-xs sm:text-sm text-slate-600">{s.detail}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 sm:mt-6 text-[11px] sm:text-xs leading-relaxed text-slate-500 font-mono">
              Result: 1 byte status · 32 byte nullifier · EIP-712 signature. No personal data.
            </p>
          </div>
        </article>
      </Reveal>

      {/* Exploratory Policies Header & Compact Cards */}
      <div className="mt-8 sm:mt-10">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-4 w-4 text-violet-600" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Exploratory Enclave Policy Modules
          </h4>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {EXPLORATORY_POLICIES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 transition-all hover:border-slate-300">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                      <p.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold tracking-tight text-slate-950">{p.name}</h4>
                      <p className="text-xs text-slate-500">{p.audience}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                    {p.badge}
                  </span>
                </div>

                <p className="mt-3.5 text-sm leading-relaxed text-slate-600">{p.body}</p>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <MeetingButton
                    integration={p.integrationId}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-violet-700 hover:text-violet-900 cursor-pointer"
                  >
                    Discuss exploration
                    <ArrowRight className="h-3 w-3" />
                  </MeetingButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
