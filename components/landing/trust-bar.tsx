import { Container } from "@/components/landing/primitives"

const STACK = ["Horizen Vela", "Base", "AWS Nitro Enclaves", "Wasmtime", "EIP-712"] as const

const METRICS = [
  { value: "0 bytes", label: "of personal data on-chain" },
  { value: "171 bytes", label: "per signed attestation" },
  { value: "< 26k gas", label: "to verify in a contract" },
  { value: "3 policies", label: "live on Base Sepolia" },
] as const

export function TrustBar() {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50/60">
      <Container className="py-10">
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Built on</span>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {STACK.map((name) => (
              <li key={name} className="text-[15px] font-semibold tracking-tight text-slate-400">
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 md:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-white px-6 py-6">
              <p className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{m.value}</p>
              <p className="mt-1 text-sm text-slate-500">{m.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
