import { Cpu, FileCheck2, KeyRound } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/primitives"

const STEPS = [
  {
    icon: KeyRound,
    step: "01",
    title: "Encrypt on the user's device",
    body: "The zCred SDK encrypts credentials to the enclave's public key. Data leaves the device sealed, and no server, RPC node or operator can read it.",
    spec: "P-521 ECDH · AES-256-GCM",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Evaluate inside an enclave",
    body: "A Horizen Vela node decrypts and runs the policy inside a hardware-isolated AWS Nitro enclave. Memory is wiped as soon as the decision is made.",
    spec: "Rust → WASM · Wasmtime",
  },
  {
    icon: FileCheck2,
    step: "03",
    title: "Settle a signed verdict onchain",
    body: "The enclave signs a 171-byte attestation anchored to the Base Sepolia registry. Contracts verify it with a single view call. Onchain enclave-attestation verification is on the roadmap.",
    spec: "EIP-712 · Base Sepolia",
  },
] as const

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-slate-50/60 border-y border-slate-200/80">
      <SectionHeader
        eyebrow="How it works"
        title="Private evidence in, verifiable decision out."
        description="zCred separates where sensitive evidence is evaluated from where decisions are verified. Raw data never touches the chain, and contracts verify a signed cryptographic decision."
      />

      <div className="relative mt-8 sm:mt-12 grid gap-3.5 sm:gap-5 lg:grid-cols-3">
        <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent lg:block" />
        {STEPS.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.1}>
            <article className="relative h-full rounded-xl border border-slate-200 bg-white p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg bg-violet-600 text-white shadow-sm shadow-violet-600/20">
                  <s.icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
                <span className="font-mono text-xs sm:text-sm text-slate-400">{s.step}</span>
              </div>
              <h3 className="mt-4 sm:mt-6 text-base sm:text-lg font-semibold text-slate-950">{s.title}</h3>
              <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-slate-600">{s.body}</p>
              <p className="mt-4 sm:mt-6 border-t border-slate-100 pt-3.5 sm:pt-4 font-mono text-[11px] sm:text-xs text-slate-500">{s.spec}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
