"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowDown, CheckCircle2, Cpu, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

interface PolicyPreview {
  id: string
  label: string
  policyId: number
  inputs: { field: string; width: string }[]
  verdict: string
  facts: { label: string; value: string }[]
  nullifier: string
}

const POLICIES: PolicyPreview[] = [
  {
    id: "compliance",
    label: "Compliance Shield",
    policyId: 2,
    inputs: [
      { field: "Legal name", width: "w-28" },
      { field: "Nationality / residence", width: "w-16" },
      { field: "Liquid net worth", width: "w-20" },
      { field: "Annual income", width: "w-24" },
    ],
    verdict: "Accredited investor",
    facts: [
      { label: "Sanctions screen", value: "Clear" },
      { label: "Jurisdiction", value: "Permitted" },
      { label: "Valid for", value: "365 days" },
    ],
    nullifier: "0x7f3a…c91e",
  },
  {
    id: "credit",
    label: "RiskX Credit",
    policyId: 1,
    inputs: [
      { field: "12-month cash flow", width: "w-24" },
      { field: "Assets", width: "w-20" },
      { field: "Liabilities", width: "w-16" },
      { field: "Repayment history", width: "w-28" },
    ],
    verdict: "Credit tier AAA",
    facts: [
      { label: "Collateral required", value: "105% (vs 140%)" },
      { label: "Max LTV", value: "95.2%" },
      { label: "Score band", value: "800–850" },
    ],
    nullifier: "0x2b8e…04d7",
  },
  {
    id: "agent",
    label: "Agent Passport",
    policyId: 3,
    inputs: [
      { field: "Agent code hash", width: "w-28" },
      { field: "Developer signature", width: "w-24" },
      { field: "Daily spend limit", width: "w-16" },
      { field: "Max drawdown", width: "w-12" },
    ],
    verdict: "Attested agent",
    facts: [
      { label: "Daily cap", value: "$1,000" },
      { label: "Max drawdown", value: "15%" },
      { label: "Valid for", value: "90 days" },
    ],
    nullifier: "0xa41c…9f62",
  },
]

const ROTATE_MS = 5200

export function HeroVisual() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const policy = POLICIES[index]

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(() => setIndex((i) => (i + 1) % POLICIES.length), ROTATE_MS)
    return () => clearTimeout(timer)
  }, [index, paused])

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-violet-200/50 via-indigo-100/40 to-transparent blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_64px_-24px_rgba(15,23,42,0.18),0_2px_6px_rgba(15,23,42,0.04)]">
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          </div>
          <span className="font-mono text-[11px] text-slate-500">attestation · policy #{policy.policyId}</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            enclave online
          </span>
        </div>

        <div role="tablist" aria-label="Policy preview" className="flex gap-1 border-b border-slate-100 px-3 pt-3">
          {POLICIES.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "relative rounded-t-md px-3 pb-2.5 pt-1 text-xs font-medium transition-colors cursor-pointer",
                i === index ? "text-slate-950" : "text-slate-500 hover:text-slate-800",
              )}
            >
              {p.label}
              {i === index && (
                <motion.span layoutId="hero-tab" className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-violet-600" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={policy.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="space-y-3 p-4 sm:p-5"
          >
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Private input</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600">
                  <Lock className="h-3 w-3" /> P-521 · AES-256-GCM
                </span>
              </div>
              <ul className="space-y-2.5">
                {policy.inputs.map((input) => (
                  <li key={input.field} className="flex items-center justify-between text-[13px]">
                    <span className="text-slate-600">{input.field}</span>
                    <span className={cn("h-2.5 rounded-sm bg-slate-200", input.width)} aria-label="encrypted" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center gap-3 py-1">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-medium text-violet-800">
                <Cpu className="h-3.5 w-3.5" />
                Evaluated inside Horizen Vela enclave
                <ArrowDown className="h-3 w-3" />
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
            </div>

            <div className="rounded-xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/70 to-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">On-chain result</span>
                <span className="font-mono text-[10px] text-slate-500">{policy.nullifier}</span>
              </div>
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span className="text-base font-semibold text-slate-950">{policy.verdict}</span>
              </div>
              <dl className="grid grid-cols-3 gap-2">
                {policy.facts.map((fact) => (
                  <div key={fact.label} className="rounded-lg bg-white px-2.5 py-2 ring-1 ring-slate-100">
                    <dt className="text-[10px] text-slate-500">{fact.label}</dt>
                    <dd className="mt-0.5 text-[12px] font-semibold text-slate-900">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3 text-[11px] text-slate-500">
          <span>171-byte signed attestation</span>
          <span className="font-mono">&lt; 26k gas to verify</span>
        </div>

        <div className="h-0.5 bg-slate-100">
          <motion.div
            key={`${policy.id}-${paused}`}
            className="h-full bg-violet-500/70"
            initial={{ width: "0%" }}
            animate={{ width: paused ? "0%" : "100%" }}
            transition={{ duration: paused ? 0 : ROTATE_MS / 1000, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  )
}
