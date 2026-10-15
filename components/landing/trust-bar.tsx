import { Container } from "@/components/landing/primitives"

const STACK = ["Horizen Vela", "Base", "AWS Nitro Enclaves", "Wasmtime", "EIP-712"] as const

const METRICS = [
  { value: "0 bytes", label: "raw PII stored or custodied" },
  { value: "~2,520 gas", label: "single view call query (1 SLOAD)" },
  { value: "171 bytes", label: "EIP-712 signed attestation" },
  { value: "10 pilots", label: "Cohort 1 target (5 Inst / 5 DeFi)" },
] as const

export function TrustBar() {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50/60">
      <Container className="py-6 sm:py-8 lg:py-10">
        <div className="flex flex-col items-center gap-3.5 sm:gap-5 md:flex-row md:justify-between">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Built on</span>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-2">
            {STACK.map((name) => (
              <li key={name} className="text-xs sm:text-[15px] font-semibold tracking-tight text-slate-400">
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 md:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-white px-3.5 py-3.5 sm:px-6 sm:py-6">
              <p className="text-lg sm:text-2xl lg:text-3xl font-semibold tracking-tight text-slate-950">{m.value}</p>
              <p className="mt-1 text-[11px] sm:text-sm text-slate-500 leading-snug">{m.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
