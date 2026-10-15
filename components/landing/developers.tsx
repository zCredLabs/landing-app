import type { ReactNode } from "react"
import { ArrowUpRight, Check } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/primitives"

const REGISTRY_ADDRESS = "0xD27e6A8e297177C4Cb284b5C7E2Ccf8d9C69C11a"

const CODE = `import { IZcredRegistry } from "./IZcredRegistry.sol";

contract RwaPool {
    IZcredRegistry constant ZCRED = IZcredRegistry(REGISTRY);
    uint8 constant COMPLIANCE_SHIELD = 2;
    uint8 constant ACCREDITED = 1;

    function invest(bytes32 nullifier) external payable {
        (bool valid, uint8 status, , ) =
            ZCRED.getAttestation(COMPLIANCE_SHIELD, nullifier);

        require(valid && status == ACCREDITED, "accreditation required");
        // ... mint pool shares
    }
}`

const TOKEN_PATTERN =
  /(\/\/.*$)|("[^"]*")|\b(import|from|contract|constant|function|external|payable|require|bool|uint8|bytes32)\b|\b(\d+)\b/gm

const TOKEN_CLASSES = ["text-slate-500", "text-emerald-300", "text-violet-300", "text-amber-300"] as const

function highlight(source: string) {
  const parts: ReactNode[] = []
  let last = 0
  for (const match of source.matchAll(TOKEN_PATTERN)) {
    const start = match.index ?? 0
    if (start > last) parts.push(source.slice(last, start))
    const group = match.slice(1).findIndex(Boolean)
    parts.push(
      <span key={start} className={TOKEN_CLASSES[group]}>
        {match[0]}
      </span>,
    )
    last = start + match[0].length
  }
  parts.push(source.slice(last))
  return parts
}

const POINTS = [
  "Single view call, no oracle or off-chain API",
  "Works with any EVM contract on Base",
  "Expiry and revocation handled by the registry",
  "TypeScript SDK for client-side encryption",
] as const

export function Developers() {
  return (
    <Section id="developers" className="border-y border-slate-200/80 bg-slate-50/60">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="For developers"
            title="Gate any contract with one line."
            description="Your protocol never handles personal data. Check a user's zCred status directly from Solidity and keep your compliance surface at zero."
          />
          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[15px] text-slate-700">
                  <Check className="h-4 w-4 flex-shrink-0 text-violet-600" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={`https://sepolia.basescan.org/address/${REGISTRY_ADDRESS}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 font-mono text-xs text-slate-700 ring-1 ring-slate-200 transition-colors hover:ring-slate-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              ZcredRegistry on Base Sepolia · {REGISTRY_ADDRESS.slice(0, 6)}…{REGISTRY_ADDRESS.slice(-4)}
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-xl bg-slate-950 shadow-[0_24px_64px_-24px_rgba(15,23,42,0.45)] ring-1 ring-slate-900">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="font-mono text-xs text-slate-400">RwaPool.sol</span>
              <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-400">Solidity ^0.8.24</span>
            </div>
            <pre className="overflow-x-auto p-5 text-[12.5px] leading-6 text-slate-200">
              <code>{highlight(CODE)}</code>
            </pre>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
