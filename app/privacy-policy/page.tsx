import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, ShieldCheck, Lock, Cpu, Database } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 sm:py-16">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
        </Link>

        {/* Header */}
        <div className="border-b border-slate-100 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 border border-purple-200/80 px-3 py-1 text-[11px] font-mono font-bold text-purple-900 uppercase tracking-wider mb-4">
            <ShieldCheck className="h-3.5 w-3.5 text-purple-600" />
            Zero-PII Cryptographic Policy
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Effective Date: September 2026 • zCred Protocol Architecture
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-slate-700 leading-relaxed">

          {/* Section 1 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              1. Architectural Principle: Zero PII Custody (0 Bytes Stored)
            </h2>
            <p className="mb-3">
              zCred is designed from the silicon up as a <strong>confidential computing decision layer</strong>. Unlike traditional identity verification or centralized credit bureaus, our fundamental architectural invariant is that <strong>we do not custody, persist, or store Personally Identifiable Information (PII)</strong>.
            </p>
            <p>
              We do not operate databases of government identification documents, financial credentials, tax returns, or private applicant records. Neither zCred protocol operators nor the decentralized applications requesting decisions ever gain visibility into your raw personal data.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              2. Ephemeral Hardware Enclave Execution
            </h2>
            <p className="mb-3">
              All policy evaluations and decision logic are executed inside <strong>cryptographically sealed Hardware Enclaves (AWS Nitro TEE)</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <strong>Sealed Memory Sandbox:</strong> Sensitive inputs exist exclusively in encrypted, ephemeral volatile RAM during the millisecond execution window.
              </li>
              <li>
                <strong>Zero Disk Writes:</strong> Enclaves operate without persistent storage, local caches, or external network access during computation.
              </li>
              <li>
                <strong>Instant Memory Purge:</strong> Once the evaluation is complete and the cryptographic attestation is generated, the enclave memory is completely purged.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              3. Information Collected via Website Inquiries
            </h2>
            <p className="mb-3">
              When you voluntarily reach out to us via our website forms (such as submitting an Interest Request or scheduling a technical briefing), we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Name and work email address</li>
              <li>Organization or protocol affiliation</li>
              <li>Primary area of interest and voluntary project notes</li>
            </ul>
            <p className="mt-3">
              This information is used strictly to communicate directly with your team regarding partnership inquiries and technical briefings. We never sell, rent, or trade your contact information to third parties.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              4. On-Chain Settlement & Cryptographic Attestations
            </h2>
            <p>
              The output of a zCred computation settled on public blockchains (e.g., Ethereum, Base, Arbitrum, Horizen Vela) consists solely of <strong>deterministic cryptographic proofs and boolean attestations</strong> (such as <code>isEligible: true</code> or a discrete risk tier). These attestations contain zero plaintext, zero reversible identity markers, and zero underlying financial metrics.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              5. Cookies and Analytics
            </h2>
            <p>
              Our website uses minimal, strictly essential technical cookies required for basic security and session integrity. We do not deploy invasive third-party cross-site behavioral ad tracking or data brokers.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3 flex items-center gap-2">
              6. Cryptographic Verification & Inquiries
            </h2>
            <p>
              For technical architecture briefings, security questions, or enclave PCR measurement verifications, please schedule a direct session or submit an interest request through our portal.
            </p>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  )
}