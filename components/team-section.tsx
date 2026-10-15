import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { Section, SectionHeader } from "@/components/landing/primitives"

const FOUNDERS = [
  {
    name: "Shikhar Singh",
    role: "Cofounder · Policy Engine & SDK",
    photo: "/images/shikhar.jpeg",
    initials: "SS",
    handle: "@0xShikhar",
    twitter: "https://x.com/0xShikhar",
    experience: "3+ Yrs in ZK Identity & Privacy (Built NebulaID)",
    bio: "Architected zCred's isolated enclave policy evaluator, TypeScript client SDK, and cryptographic nullifier generation circuits.",
  },
  {
    name: "0xKryptonion",
    role: "Cofounder · Smart Contracts & Security",
    photo: "/images/0xkryptonian.png",
    initials: "0xK",
    handle: "@krpto_code",
    twitter: "https://x.com/krpto_code",
    experience: "3+ Yrs in Web3 Auth & Security (Cofounded Zauth)",
    bio: "Leads onchain attestation registries, Solidity verifier gas optimization, and multi-chain EVM deployment security.",
  },
] as const

export function TeamSection() {
  return (
    <Section id="team">
      <SectionHeader
        eyebrow="Team"
        title="The founding team built the system end to end."
        description="Multi-year open source roots across zero-knowledge proof systems, decentralized identity, and hardware enclave coprocessors."
      />

      <div className="mt-8 sm:mt-12 grid gap-6 md:grid-cols-2">
        {FOUNDERS.map((founder, i) => (
          <Reveal key={founder.name} delay={i * 0.1}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-950">{founder.name}</h3>
                    <a
                      href={founder.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center font-mono text-xs font-semibold text-violet-700 hover:text-violet-900"
                    >
                      {founder.handle}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                  <p className="mt-1 font-mono text-xs font-medium text-slate-500">{founder.role}</p>
                  <span className="mt-2 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                    {founder.experience}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                {founder.bio}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
