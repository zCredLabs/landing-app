"use client"

import Link from "next/link"
import { Github, ExternalLink, Code2, ArrowRight } from "lucide-react"

export function GithubEcosystem() {
  return (
    <section id="ecosystem" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-gray-100">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block rounded-full bg-purple-100 px-4 py-1 text-xs font-bold text-purple-700 mb-3">
          Open Source Foundation
        </span>
        <h2 className="text-3xl font-bold text-black sm:text-4xl">
          Built on Production-Tested Cryptographic R&D
        </h2>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          Our R&D foundation includes zero-knowledge human-verification circuits and Web2 credential-verification infrastructure, developed in-house prior to this platform.
        </p>
      </div>

      {/* Grid of Repos / Technology Foundations */}
      <div className="max-w-4xl mx-auto rounded-3xl border border-gray-200 bg-gray-50/50 p-8 md:p-10 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Github className="h-6 w-6 text-black" />
              <h3 className="text-2xl font-bold text-black">Open Source Repositories</h3>
            </div>
            <p className="text-xs text-gray-600 max-w-xl">
              All core circuits, browser extensions, and credential verification primitives are open source and accessible for community audit.
            </p>
          </div>

          <Link
            href="https://github.com/Zauth-HQ"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-xs font-bold text-white hover:bg-black/80 transition-all flex-shrink-0"
          >
            <Github className="h-4 w-4" />
            Explore Repositories on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 rounded-xl bg-white border border-gray-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                ZK Circuits
              </span>
              <h4 className="text-sm font-bold text-black mt-2">Zero-Knowledge Verification Circuit SDK</h4>
              <p className="text-xs text-gray-600 mt-1">Noir ZK circuits for client-side proof generation and anti-bot verification.</p>
            </div>
            <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-gray-500">captcha-sdk</span>
              <Link href="https://github.com/Zauth-HQ/captcha-sdk" target="_blank" className="text-xs font-bold text-purple-700 hover:underline flex items-center gap-1">
                Code <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-gray-200 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                Credential Ingestion
              </span>
              <h4 className="text-sm font-bold text-black mt-2">Web2 Data Verification Ingestion</h4>
              <p className="text-xs text-gray-600 mt-1">zkTLS identity aggregation primitives for authentic Web2 signal verification.</p>
            </div>
            <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-gray-500">identity-core</span>
              <Link href="https://github.com/NebulaID" target="_blank" className="text-xs font-bold text-purple-700 hover:underline flex items-center gap-1">
                Code <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
