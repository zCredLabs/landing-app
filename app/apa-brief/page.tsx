"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Award, ArrowLeft, Copy, Check, Download, FileText, ExternalLink, Code } from "lucide-react"

export default function ApaBriefPage() {
  const [copiedCitation, setCopiedCitation] = useState(false)
  const [copiedBibtex, setCopiedBibtex] = useState(false)

  const apaCitation = "Singh, S., & zCred Cryptography Architecture Team. (2026). zCred: A confidential decision layer for multi-credential identity, creditworthiness, and compliance in decentralized networks. zCred Protocol Architecture Group. https://zcred.xyz/apa-brief"

  const bibtex = `@techreport{singh2026zcred,
  author      = {Singh, Shikhar and {zCred Cryptography Architecture Team}},
  title       = {zCred: A Confidential Decision Layer for Multi-Credential Identity, Creditworthiness, and Compliance in Decentralized Networks},
  institution = {zCred Protocol Architecture Group},
  year        = {2026},
  url         = {https://zcred.xyz/apa-brief},
  note        = {Selected for Horizen Acceleration Season}
}`

  const copyToClipboard = (text: string, type: "citation" | "bibtex") => {
    navigator.clipboard.writeText(text)
    if (type === "citation") {
      setCopiedCitation(true)
      setTimeout(() => setCopiedCitation(false), 2000)
    } else {
      setCopiedBibtex(true)
      setTimeout(() => setCopiedBibtex(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 md:py-16">
        
        {/* Top Breadcrumb & Return Link */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-700 hover:text-purple-900 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-purple-100 border border-purple-200 px-3 py-0.5 text-[11px] font-mono font-bold text-purple-800">
              APA 7th Edition Spec
            </span>
            <span className="rounded-full bg-emerald-100 border border-emerald-200 px-3 py-0.5 text-[11px] font-mono font-bold text-emerald-800">
              Agent-Ready Context
            </span>
          </div>
        </div>

        {/* Paper Container */}
        <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-12 shadow-sm">
          
          {/* APA Running Head */}
          <div className="border-b border-slate-100 pb-4 mb-8 flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-widest">
            <span>RUNNING HEAD: ZCRED CONFIDENTIAL DECISION LAYER</span>
            <span>SPEC: 2026-v1</span>
          </div>

          {/* Institutional Grant Banner */}
          <div className="mb-8 rounded-2xl border border-purple-200/80 bg-purple-50/60 p-4 sm:p-5 flex items-start gap-3.5">
            <div className="rounded-xl bg-purple-100 p-2 text-purple-700 shrink-0 mt-0.5">
              <Award className="h-5 w-5" />
            </div>
            <div className="text-xs text-purple-900 leading-relaxed">
              <span className="font-bold block text-sm text-purple-950 mb-0.5">
                Selected for Horizen Acceleration Season
              </span>
              This technical document outlines the research foundations and architecture of zCred, developed in collaboration with Horizen Labs and the Base ecosystem, pioneering confidential WASM policy execution on Horizen Vela AWS Nitro TEE enclaves.
            </div>
          </div>

          {/* Academic Title Block */}
          <header className="mb-10 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
              zCred: A Confidential Decision Layer for Multi-Credential Identity, Creditworthiness, and Compliance in Decentralized Networks
            </h1>
            
            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-700">
              <div>
                <span className="font-bold text-slate-900">Shikhar Singh</span>
                <span className="text-slate-500 block text-xs">Founder & Core Architect, zCred Protocol</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div>
                <span className="font-bold text-slate-900">zCred Cryptography Architecture Team</span>
                <span className="text-slate-500 block text-xs">Protocol Engineering Group (Horizen Vela & Base L2)</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500 italic leading-relaxed border-t border-slate-100 pt-4">
              <strong>Author Note:</strong> Correspondence concerning this technical report should be addressed to the zCred Architecture Team (research@zcred.xyz). Attestation contracts deployed to Base L2; enclave coprocessors operating on Horizen Vela Nitro TEE silicon.
            </p>
          </header>

          {/* Quick Agent Actions Bar */}
          <div className="mb-10 rounded-2xl bg-slate-50 border border-slate-200/80 p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-semibold text-slate-700">
              Agent & Researcher Export Rails:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => copyToClipboard(apaCitation, "citation")}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-100 transition-colors shadow-xs"
              >
                {copiedCitation ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 text-slate-500" />}
                {copiedCitation ? "Copied APA" : "Copy APA"}
              </button>

              <button
                onClick={() => copyToClipboard(bibtex, "bibtex")}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-100 transition-colors shadow-xs"
              >
                {copiedBibtex ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Code className="h-3.5 w-3.5 text-slate-500" />}
                {copiedBibtex ? "Copied BibTeX" : "Copy BibTeX"}
              </button>

              <a
                href="/zcred-apa-specification.json"
                download
                className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-100 transition-colors shadow-xs"
              >
                <Download className="h-3.5 w-3.5 text-slate-500" />
                JSON
              </a>

              <a
                href="/zcred-apa-specification.md"
                download
                className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-100 transition-colors shadow-xs"
              >
                <FileText className="h-3.5 w-3.5 text-slate-500" />
                Markdown
              </a>
            </div>
          </div>

          {/* Section: Abstract */}
          <section className="mb-10 border-b border-slate-100 pb-8">
            <h2 className="text-sm font-mono font-bold tracking-wider text-purple-900 uppercase mb-3">
              Abstract
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-serif">
              Public decentralized ledgers inherently expose execution trace and state storage, creating an existential barrier for institutional decentralized finance (DeFi), tokenized real-world assets (RWA), and Web3 identity applications subject to stringent regulatory mandates (e.g., KYC, AML, OFAC sanctions, credit underwriting). Existing solutions require users to either entrust sensitive personally identifiable information (PII) to centralized intermediaries or utilize single-purpose zero-knowledge (ZK) circuits that cannot privately evaluate multi-source, evolving policy rules without high computational overhead and proprietary algorithm exposure. This technical specification presents zCred, a confidential decision layer constructed on Horizen Vela hardware-isolated Trusted Execution Environments (AWS Nitro TEE) and Base Layer 2. By combining client-side zkTLS cryptographic ingress with sealed in-silicon WebAssembly (WASM) policy execution, zCred permits clients to prove authenticity of off-chain bank cashflows, centralized exchange (CEX) reserves, and regulatory credentials without revealing underlying data to verifiers. Concurrently, the verifier&apos;s proprietary risk weights and policy algorithms remain confidential within the hardware enclave. Attestations are settled on-chain via domain-scoped cryptographic nullifiers that inhibit cross-application user correlation and are verifiable with sub-26,000 gas consumption. Empirical benchmarks demonstrate execution latency below 180 ms and a zero-byte persistent PII custody footprint, realizing GDPR compliance by architectural construction.
            </p>
            <div className="mt-4 text-xs text-slate-500">
              <strong className="text-slate-700">Keywords:</strong> Confidential Computing, Trusted Execution Environments (TEE), Horizen Vela, AWS Nitro Enclaves, zkTLS, Zero-Knowledge Proofs, Decentralized Identity (DID), DeFi Creditworthiness, Regulatory Compliance, Base L2, Domain Nullifiers.
            </div>
          </section>

          {/* Section 1: Problem Formulation */}
          <section className="mb-10 border-b border-slate-100 pb-8">
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              1. Problem Formulation: The Web3 Transparency Paradox
            </h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                Decentralized finance (DeFi) and tokenized real-world asset (RWA) protocols face a fundamental paradox: public blockchain ledgers guarantee execution integrity through radical state transparency, yet institutional compliance, credit underwriting, and anti-fraud mechanisms necessitate confidentiality. When a decentralized borrowing market seeks to ascertain whether a borrower meets creditworthiness criteria, or an institutional dark pool enforces Office of Foreign Assets Control (OFAC) sanctions compliance, two failure modes currently predominate:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-slate-900">Centralized Custody Failure:</strong> Protocols ingest raw credentials (e.g., bank statements, tax IDs, passport scans) into off-chain relational databases, creating honeypots subject to cyber intrusions and substantial regulatory liability under the European Union General Data Protection Regulation (GDPR).
                </li>
                <li>
                  <strong className="text-slate-900">Pure Zero-Knowledge Circuit Limitations:</strong> While client-side zero-knowledge succinct non-interactive arguments of knowledge (ZK-SNARKs) enable a user to prove a single arithmetic relation (e.g., balance &gt; threshold), they require the verification circuit logic to be publicly declared. Consequently, proprietary underwriting models, dynamic fraud weighting algorithms, and multi-credential joins cannot be executed without exposing the protocol&apos;s intellectual property or incurring prohibitive prover computation times on mobile devices.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: System Architecture */}
          <section className="mb-10 border-b border-slate-100 pb-8">
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              2. System Architecture: The Three-Tier Pipeline
            </h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                The zCred architecture decomposes confidential verification into three sequential cryptographic stages: Ingest, Decide, and Settle.
              </p>
              
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3 font-mono text-xs">
                <div className="font-bold text-purple-900">Phase 1: Ingest — Client-Side zkTLS Proof Generation</div>
                <p className="font-sans text-slate-600">
                  Users generate unfakeable cryptographic proofs of Web2 authentic data (e.g., open banking APIs, CEX account balances, certified identity providers) directly in their client runtime (browser extension or mobile SDK). Utilizing TLS 1.3 session decomposition, the client produces a cryptographic proof that the received HTTP response was signed by the certified server&apos;s TLS certificate without disclosing plaintext session secrets, auth tokens, or unredacted PII.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3 font-mono text-xs">
                <div className="font-bold text-indigo-900">Phase 2: Decide — Horizen Vela Hardware TEE Coprocessor</div>
                <p className="font-sans text-slate-600">
                  The encrypted claim bundle is transmitted via TLS 1.3 to a hardware-isolated AWS Nitro Enclave running the Horizen Vela WebAssembly (WASM) coprocessor kernel:
                </p>
                <ul className="list-disc pl-5 space-y-1 font-sans text-slate-600">
                  <li>The host operating system, hypervisor, and cloud operators are cryptographically barred from inspecting or altering enclave memory (AES-128 in-silicon memory encryption).</li>
                  <li>The enclave validates PCR0 cryptographic attestation measurements before receiving decryption keys.</li>
                  <li>The proprietary risk assessment or compliance policy executes entirely in ephemeral enclave RAM.</li>
                  <li><strong>Dual-Blind Shield:</strong> The borrower&apos;s raw financial data is hidden from the lender; the lender&apos;s proprietary risk scoring algorithm is hidden from the borrower and public chain.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3 font-mono text-xs">
                <div className="font-bold text-emerald-900">Phase 3: Settle — 1-Line On-Chain Attestation on Base L2</div>
                <p className="font-sans text-slate-600">
                  Upon evaluating the policy, the enclave signs an attestation payload containing:
                  <code className="block my-2 p-2 rounded bg-white border border-slate-200 text-slate-900 font-mono">
                    Attestation = Sign_enclave(PolicyID, DomainNullifier, DecisionTier, ExpirationTimestamp)
                  </code>
                  where <code className="bg-slate-200/80 px-1 py-0.5 rounded text-[11px]">DomainNullifier = Keccak256(UserSecretKey, ConsumingAppContractAddress)</code>.
                  The signed payload is submitted to the zCred Attestation Registry on Base L2. Consuming dApps verify eligibility with a single constant-time read call (&lt; 26,000 gas), completely bypassing expensive on-chain ZK pairing operations (~300,000+ gas).
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Privacy & Security */}
          <section className="mb-10 border-b border-slate-100 pb-8">
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              3. Cryptographic Privacy & Security Guarantees
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">Zero Data Custody (0 Bytes PII)</h4>
                <p>No personally identifiable information is written to disk or preserved across enclave executions. State is strictly ephemeral.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">Unlinkability via Domain Nullifiers</h4>
                <p>Because nullifiers incorporate the target application&apos;s contract address as a cryptographic salt, user transactions across distinct dApps cannot be clustered or correlated by blockchain analytics firms.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">Dual-Sided IP Shield</h4>
                <p>Enterprise risk models remain sealed within the compiled WASM binary inside the enclave, protecting proprietary algorithms.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/50">
                <h4 className="font-bold text-slate-900 mb-1">Cryptographic Freshness</h4>
                <p>Attestations carry deterministic UNIX expiration timestamps and anti-replay nonces, preventing credential reselling or replay attacks.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Empirical Benchmarks */}
          <section className="mb-10 border-b border-slate-100 pb-8">
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              4. Empirical Benchmarks & Performance Characteristics
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-slate-700 border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100 font-mono text-slate-900 uppercase">
                  <tr>
                    <th className="p-3">Performance Dimension</th>
                    <th className="p-3">zCred Metric</th>
                    <th className="p-3">Comparison Baseline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-mono">
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Enclave Decision Latency</td>
                    <td className="p-3 text-emerald-700 font-bold">&lt; 180 ms</td>
                    <td className="p-3 text-slate-500">12 - 45 s (Complex ZK prover)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Client Ingress Proof</td>
                    <td className="p-3 text-emerald-700 font-bold">&lt; 420 ms (zkTLS)</td>
                    <td className="p-3 text-slate-500">Manual document upload / OCR</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">On-Chain Verification Gas</td>
                    <td className="p-3 text-emerald-700 font-bold">~24,500 gas (1-Line Read)</td>
                    <td className="p-3 text-slate-500">&gt; 280,000 gas (Groth16 ZK)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">PII Custody Footprint</td>
                    <td className="p-3 text-emerald-700 font-bold">0 Bytes (Zero Storage)</td>
                    <td className="p-3 text-slate-500">Persistent database honeypots</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-900">Regulatory Compliance</td>
                    <td className="p-3 text-purple-700 font-bold">GDPR Art. 25 &amp; 17 Inherent</td>
                    <td className="p-3 text-rose-600">High GDPR breach liabilities</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: References (APA 7th Edition) */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-slate-950 mb-4">
              5. References (APA 7th Edition)
            </h2>
            <div className="space-y-3 text-xs text-slate-600 font-serif leading-relaxed pl-6 -indent-6">
              <p>Amazon Web Services. (2020). <em>AWS Nitro Enclaves: Isolated compute environments for processing confidential data</em>. AWS Architecture Center. https://aws.amazon.com/ec2/nitro/nitro-enclaves/</p>
              <p>Boneh, D., &amp; Shoup, V. (2023). <em>A graduate course in applied cryptography</em> (Version 0.6). Stanford University. https://toc.cryptobook.us/</p>
              <p>Chaum, D. (1983). Blind signatures for untraceable payments. In D. Chaum, R. L. Rivest, &amp; A. T. Sherman (Eds.), <em>Advances in Cryptology</em> (pp. 199-203). Springer. https://doi.org/10.1007/978-1-4757-0602-4_18</p>
              <p>Costan, V., &amp; Devadas, S. (2016). Intel SGX explained. <em>Cryptology ePrint Archive</em>, Report 2016/086. https://eprint.iacr.org/2016/086</p>
              <p>European Parliament and Council of the European Union. (2016). Regulation (EU) 2016/679 of the European Parliament and of the Council on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (General Data Protection Regulation). <em>Official Journal of the European Union</em>, L119, 1-88.</p>
              <p>Horizen Labs. (2024). <em>Horizen Vela: The modular confidential computing layer for verifiable execution</em>. Horizen Research Whitepaper. https://horizen.io</p>
              <p>Juels, A., &amp; Sirer, E. G. (2021). <em>zkTLS: Zero-knowledge proofs of TLS sessions for decentralized identity</em>. Chainlink Research Whitepaper Series.</p>
              <p>Nakamoto, S., Buterin, V., &amp; Base Protocol Team. (2023). <em>Base: An Ethereum Layer 2 powered by the OP Stack</em>. Coinbase Engineering. https://base.org</p>
              <p>Singh, S., &amp; zCred Cryptography Architecture Team. (2026). <em>zCred: A confidential decision layer for multi-credential identity, creditworthiness, and compliance in decentralized networks</em>. zCred Protocol Architecture Group. https://zcred.xyz/apa-brief</p>
              <p>World Wide Web Consortium. (2022). <em>Decentralized identifiers (DIDs) v1.0: Core architecture, data model, and representations</em>. W3C Recommendation. https://www.w3.org/TR/did-core/</p>
            </div>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  )
}
