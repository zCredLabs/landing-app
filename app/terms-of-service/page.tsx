import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Scale, ShieldAlert, Cpu } from "lucide-react"

export default function TermsOfServicePage() {
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
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-200/80 px-3 py-1 text-[11px] font-mono font-bold text-indigo-900 uppercase tracking-wider mb-4">
            <Scale className="h-3.5 w-3.5 text-indigo-600" />
            Protocol Usage Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last Modified: September 2026 • zCred Protocol
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-slate-700 leading-relaxed">

          {/* Section 1 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website at zcred.xyz, submitting inquiries, or interacting with smart contracts deployed by the zCred Protocol ("zCred", "we", or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the site or our protocol interfaces.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              2. Nature of the Protocol
            </h2>
            <p className="mb-3">
              zCred is an infrastructure protocol that facilitates confidential decision evaluations and cryptographic attestation generation utilizing Hardware Enclaves (AWS Nitro TEE) and zero-knowledge proofs.
            </p>
            <p>
              zCred operates as a computational decision engine and does not provide legal advice, financial underwriting guarantees, or banking services.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              3. Non-Custodial & Zero-Data Architecture
            </h2>
            <p className="mb-3">
              You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>zCred is non-custodial and never holds, manages, or controls user digital assets or private keys.</li>
              <li>zCred does not custody personal documents or maintain permanent identity databases. Computations are ephemeral in-enclave executions.</li>
              <li>All cryptographic smart contract queries on public blockchains are subject to public blockchain finality and network execution fees.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              4. Integration & Partner Representations
            </h2>
            <p>
              Decentralized applications, protocols, and enterprise partners integrating zCred attestation verification do so at their own discretion. Partners are solely responsible for ensuring that their reliance on verifiable cryptographic proofs complies with their own local regulations and terms of use.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              5. Intellectual Property
            </h2>
            <p>
              All proprietary algorithms, enclave runtime configurations, software code, logos, trademarks, and documentation associated with zCred remain the exclusive intellectual property of the zCred Protocol and its founders.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              6. Disclaimer of Warranties
            </h2>
            <p>
              The website and protocol interfaces are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express, implied, or statutory. We do not warrant that cryptographic computations will be error-free or uninterrupted across all third-party public blockchains.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, zCred, its contributors, and developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the website, enclave interfaces, or on-chain smart contracts.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-lg font-bold text-slate-950 mb-3">
              8. Contact
            </h2>
            <p>
              For legal, compliance, or architecture inquiries, please submit an inquiry via our website intake portal.
            </p>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  )
}