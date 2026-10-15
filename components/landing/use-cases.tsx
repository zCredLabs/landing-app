import { ArrowRight, Bot, Check, LineChart, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { MeetingButton } from "@/components/landing/meeting-context"
import { Section, SectionHeader } from "@/components/landing/primitives"

const COMPLIANCE_CHECKS = [
  "OFAC sanctions screening",
  "Restricted-jurisdiction blocking",
  "Accredited investor check ($1M net worth or $200k income)",
  "Reusable for 365 days, unlinkable across apps",
] as const

const COMPLIANCE_STATUSES = [
  { label: "Accredited", detail: "Institutional & RWA pools", tone: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  { label: "Retail", detail: "Spot markets only", tone: "bg-sky-50 text-sky-700 ring-sky-200" },
  { label: "Blocked", detail: "Sanctioned or restricted", tone: "bg-rose-50 text-rose-700 ring-rose-200" },
] as const

const SECONDARY = [
  {
    icon: LineChart,
    name: "RiskX Credit",
    audience: "For DeFi lending protocols",
    body: "Score cash flow, assets and repayment history privately. Only a tier (AAA to BBB) goes on-chain, so lenders can offer collateral as low as 105% instead of 140%.",
    stats: [
      { value: "105%", label: "collateral for AAA" },
      { value: "+33%", label: "borrowing power" },
    ],
  },
  {
    icon: Bot,
    name: "Agent Passport",
    audience: "For AI agent platforms & payment gates",
    body: "Verify an agent runs approved code from an authenticated developer, and enforce spending limits on-chain. A hijacked agent can't drain funds.",
    stats: [
      { value: "$1,000", label: "max daily cap" },
      { value: "15%", label: "max drawdown" },
    ],
  },
] as const

export function UseCases() {
  return (
    <Section id="use-cases">
      <SectionHeader
        eyebrow="Policies"
        title="One confidential engine. Purpose-built policies."
        description="Each policy runs on the same enclave core and settles to the same registry. Start with compliance, then add credit and agent checks without new infrastructure."
      />

      <Reveal className="mt-14">
        <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-5">
          <div className="p-8 sm:p-10 lg:col-span-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-200">
                Flagship
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Compliance Shield</h3>
            <p className="mt-2 text-sm font-medium text-slate-500">
              For RWA issuers, institutional pools and compliant trading venues
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600">
              Run KYC, sanctions and accreditation checks without ever holding an investor&apos;s identity documents.
              Your contracts receive one status. Your servers store nothing.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {COMPLIANCE_CHECKS.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-600" />
                  {c}
                </li>
              ))}
            </ul>
            <MeetingButton className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-700 hover:text-violet-900 cursor-pointer">
              Become a design partner
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </MeetingButton>
          </div>

          <div className="border-t border-slate-200 bg-slate-50/70 p-8 sm:p-10 lg:col-span-2 lg:border-l lg:border-t-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">What your contract sees</p>
            <ul className="mt-5 space-y-3">
              {COMPLIANCE_STATUSES.map((s) => (
                <li key={s.label} className="flex items-center justify-between rounded-lg bg-white px-4 py-3.5 ring-1 ring-slate-200">
                  <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ${s.tone}`}>{s.label}</span>
                  <span className="text-sm text-slate-600">{s.detail}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              No names, documents or balances. Just a status, an expiry and an enclave signature.
            </p>
          </div>
        </article>
      </Reveal>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {SECONDARY.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">{p.audience}</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">{p.body}</p>
              <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <dd className="text-2xl font-semibold tracking-tight text-slate-950">{s.value}</dd>
                    <dt className="mt-0.5 text-sm text-slate-500">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
