"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Cpu, Database, CheckCircle2, ArrowRight, Code2, Copy, Check } from "lucide-react"

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"solidity" | "typescript" | "rust">("solidity")
  const [copied, setCopied] = useState(false)

  const steps = [
    {
      num: "01",
      title: "Ingest",
      subtitle: "Client-Side zkTLS Proofs",
      description: "Users generate unfakeable cryptographic proofs of Web2 bank cashflows, CEX custody, or credentials directly in their browser. Zero raw PII, passwords, or session tokens leave their device.",
      icon: ShieldCheck,
      tag: "Zero Data Custody",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      num: "02",
      title: "Decide",
      subtitle: "Horizen Vela TEE Coprocessor",
      description: "Encrypted claims are evaluated inside hardware-isolated AWS Nitro Enclaves. Proprietary credit risk weights, fraud rules, and compliance criteria execute in sealed silicon without leaking IP.",
      icon: Cpu,
      tag: "Dual-Sided Shield",
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      num: "03",
      title: "Settle",
      subtitle: "1-Line On-Chain Attestation",
      description: "The enclave signs an attestation payload verified on-chain by ProcessorEndpoint. Consuming smart contracts check eligibility in a single gas-efficient call with domain-bound nullifiers.",
      icon: Database,
      tag: "Zero-Knowledge Nullifiers",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ]

  const codeSnippets = {
    solidity: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IZcredRegistry } from "@zcred/contracts/IZcredRegistry.sol";

contract LendingOrCompliancePool {
    IZcredRegistry public immutable zcredRegistry;
    bytes32 public constant CREDIT_POLICY_ID = keccak256("RISKX_CREDIT_TIER_V1");

    // 1-line confidential eligibility check
    function executeAction(bytes32 borrowerNullifier, uint256 amount) external {
        require(
            zcredRegistry.isEligible(borrowerNullifier, CREDIT_POLICY_ID, 2), // Tier AA+
            "zCred: Ineligible risk tier"
        );
        
        // Execute undercollateralized borrow or shielded trade safely
        _processAction(msg.sender, amount);
    }
}`,
    typescript: `import { ZcredClient } from "@zcred/sdk";

// Initialize zCred client for Base Sepolia / Horizen testnet
const zcred = new ZcredClient({ 
  chain: "base-sepolia",
  registryAddress: "0x7cA80353c56CeBc0BaA14e1aEbFE976edAD8185e"
});

// Deterministically derive P-521 key from Ethereum wallet signer
const attestation = await zcred.requestAttestation({
  policyId: "RISKX_CREDIT_TIER_V1",
  domain: "noct.finance",
  zkClaim: encryptedBankSignal,
});

console.log("Attested Tier:", attestation.tier); // e.g. "AAA"
console.log("Domain Nullifier:", attestation.nullifier);`,
    rust: `// zCred Enclave Policy Kernel (Rust -> wasm32-unknown-unknown)
#[no_mangle]
pub extern "C" fn evaluate_riskx_policy(
    encrypted_payload_ptr: *const u8,
    len: usize
) -> *const u8 {
    let payload = decrypt_p521_payload(encrypted_payload_ptr, len)?;
    let cashflow_score = compute_riskx_score(&payload.cashflows);
    
    let tier = match cashflow_score {
        s if s >= 800 => RiskTier::AAA,
        s if s >= 720 => RiskTier::AA,
        s if s >= 650 => RiskTier::A,
        _ => RiskTier::Ineligible,
    };
    
    // Hardware-attested event emission (zero balance custody)
    emit_attestation_event(payload.nullifier, tier)
}`,
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="platform" className="py-20 bg-gray-50/60 border-y border-gray-100 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3.5 py-1 text-xs font-bold text-purple-700 mb-4">
            Confidential Coprocessor Architecture
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            How zCred Works
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            A three-phase confidential decision pipeline built on client-side zkTLS proofs, Horizen Vela AWS Nitro TEE coprocessors, and gas-efficient EVM attestations.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-6xl mx-auto mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-gray-300 font-mono">
                      {step.num}
                    </span>
                    <div className={`p-3 rounded-xl ${step.color} border`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${step.color}`}>
                    {step.tag}
                  </span>

                  <h3 className="text-2xl font-bold text-black mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-purple-600 mb-4">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Footer status indicator */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1.5 text-black">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    Verifiable Guarantee
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-gray-300 hidden md:block" />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Developer Integration Code Preview */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 p-6 md:p-8 text-white shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800 gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-900 text-purple-300">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Developer Integration</h4>
                <p className="text-xs text-slate-400">1-line on-chain verification or TypeScript SDK ingestion</p>
              </div>
            </div>

            {/* Language Tabs */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setActiveTab("solidity")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === "solidity" ? "bg-purple-600 text-white font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                Solidity (1-Line Check)
              </button>
              <button
                onClick={() => setActiveTab("typescript")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === "typescript" ? "bg-purple-600 text-white font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                TypeScript (@zcred/sdk)
              </button>
              <button
                onClick={() => setActiveTab("rust")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === "rust" ? "bg-purple-600 text-white font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                Rust Enclave Kernel
              </button>
            </div>
          </div>

          {/* Code Block with Copy Button */}
          <div className="relative">
            <button
              onClick={handleCopy}
              className="absolute right-3 top-3 p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all text-xs flex items-center gap-1.5 z-10"
              title="Copy code"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copied!" : "Copy"}</span>
            </button>

            <pre className="p-4 rounded-2xl bg-slate-900/80 overflow-x-auto text-xs font-mono text-slate-200 leading-relaxed border border-slate-800/80">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>Poseidon domain nullifiers prevent cross-dApp wallet tracking</span>
            </div>
            <div className="font-mono text-[11px] text-purple-300">
              Contract gas cost: &lt; 26,000 gas (1 storage read)
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
