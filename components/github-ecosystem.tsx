"use client"

import { ShieldCheck, Cpu, Database, Code2 } from "lucide-react"

export function GithubEcosystem() {
  return (
    <section id="ecosystem" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block rounded-full bg-purple-100 px-4 py-1 text-xs font-bold text-purple-700 mb-3">
          Architecture Foundation
        </span>
        <h2 className="text-3xl font-bold text-black sm:text-4xl">
          Built on Production-Tested Cryptographic R&D
        </h2>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          Our core architecture bridges client-side zkTLS proofs with Horizen Vela AWS Nitro TEE coprocessors for high-assurance confidential computing.
        </p>
      </div>

      <div className="max-w-4xl mx-auto rounded-3xl border border-gray-200 bg-gray-50/50 p-8 md:p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-white border border-gray-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                ZK Primitives
              </span>
              <h4 className="text-sm font-bold text-black mt-2">Zero-Knowledge Verification Proofs</h4>
              <p className="text-xs text-gray-600 mt-1">Noir ZK circuits and zkTLS primitives for client-side proof generation.</p>
            </div>
            <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-purple-700 font-semibold">
              <span>Cryptographic Lineage</span>
              <ShieldCheck className="h-4 w-4" />
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-gray-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                Enclave Runtime
              </span>
              <h4 className="text-sm font-bold text-black mt-2">Horizen Vela Rust WASM Kernel</h4>
              <p className="text-xs text-gray-600 mt-1">Confidential coprocessor evaluating risk scoring and compliance rules in sealed memory.</p>
            </div>
            <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-blue-700 font-semibold">
              <span>Nitro TEE Silicon</span>
              <Cpu className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
