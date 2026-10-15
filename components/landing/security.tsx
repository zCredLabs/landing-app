import { Cpu, Fingerprint, Lock, PenLine, RefreshCcw, Trash2 } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/primitives"

const PILLARS = [
  {
    icon: Cpu,
    title: "Hardware isolation",
    body: "Policies run in AWS Nitro enclaves via Horizen Vela. Node operators and cloud hosts cannot inspect enclave memory.",
  },
  {
    icon: Lock,
    title: "Authenticated encryption",
    body: "Client payloads use NIST P-521 key agreement and AES-256-GCM, so tampered or replayed inputs are rejected.",
  },
  {
    icon: Fingerprint,
    title: "Unlinkable by design",
    body: "Each app sees a different nullifier for the same user, so activity can't be correlated across protocols.",
  },
  {
    icon: RefreshCcw,
    title: "Replay protection",
    body: "Every request is bound to a chain, registry, nonce and app domain. A result issued for one context can't be reused in another.",
  },
  {
    icon: PenLine,
    title: "Signed attestations",
    body: "Results are EIP-712 signed by the enclave key and checked by the registry before they are recorded.",
  },
  {
    icon: Trash2,
    title: "Memory zeroization",
    body: "Plaintext buffers are actively wiped as soon as a decision is signed. Nothing is written to disk.",
  },
] as const

export function Security() {
  return (
    <Section id="security">
      <SectionHeader
        eyebrow="Security model"
        title="Defense in depth, from device to settlement."
        description="zCred is designed so that no single party, including us, can see the data it evaluates."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.06} className="bg-white">
            <div className="h-full p-7">
              <p.icon className="h-5 w-5 text-violet-600" />
              <h3 className="mt-5 text-base font-semibold text-slate-950">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
