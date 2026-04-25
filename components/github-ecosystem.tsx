"use client"

import Link from "next/link"
import { Github, ExternalLink, ShieldCheck, Code, ArrowRight } from "lucide-react"

export function GithubEcosystem() {
  return (
    <section id="ecosystem" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block rounded-full bg-purple-100 px-4 py-1 text-xs font-bold text-purple-700 mb-3">
          Open Source Infrastructure
        </span>
        <h2 className="text-3xl font-bold text-black sm:text-4xl">
          Ecosystem & Developer Repositories
        </h2>
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          zCred is grounded in production-tested code. Explore our open-source repositories across ZAuth HQ and NebulaID.
        </p>
      </div>

      {/* Grid of Repos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* ZAuth HQ Repos Card */}
        <div className="rounded-3xl border border-gray-200 bg-gray-50/50 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Github className="h-6 w-6 text-black" />
                <h3 className="text-2xl font-bold text-black">ZAuth HQ</h3>
              </div>
              <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-white">
                Active Suite
              </span>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Privacy-preserving verification layer including Noir ZK CAPTCHA circuits, Chrome extension for credential shielding & anonymous tokens, and zkVerify integration.
            </p>

            <ul className="space-y-3 text-xs font-mono text-gray-800">
              <li className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-gray-200">
                <span>ZAuth-HQ/captcha-sdk</span>
                <Link href="https://github.com/Zauth-HQ/captcha-sdk" target="_blank" className="text-purple-600 font-bold hover:underline flex items-center gap-1">
                  View <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-gray-200">
                <span>ZAuth-HQ/zauth-extension</span>
                <Link href="https://github.com/Zauth-HQ" target="_blank" className="text-purple-600 font-bold hover:underline flex items-center gap-1">
                  View <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-gray-200">
                <span>ZAuth-HQ/zauth-verify</span>
                <Link href="https://github.com/Zauth-HQ" target="_blank" className="text-purple-600 font-bold hover:underline flex items-center gap-1">
                  View <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <Link
              href="https://github.com/Zauth-HQ"
              target="_blank"
              className="inline-flex items-center gap-2 text-xs font-bold text-black hover:underline"
            >
              Explore All ZAuth Repositories on GitHub
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* NebulaID Repos Card */}
        <div className="rounded-3xl border border-gray-200 bg-gray-50/50 p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Github className="h-6 w-6 text-purple-600" />
                <h3 className="text-2xl font-bold text-black">NebulaID</h3>
              </div>
              <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-bold text-white">
                Identity Core
              </span>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Universal identity aggregation research and zkTLS-style Web2 data verification primitives (TLSNotary / Reclaim pattern) for credential portability.
            </p>

            <ul className="space-y-3 text-xs font-mono text-gray-800">
              <li className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-gray-200">
                <span>NebulaID/identity-core</span>
                <Link href="https://github.com/NebulaID" target="_blank" className="text-purple-600 font-bold hover:underline flex items-center gap-1">
                  View <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-gray-200">
                <span>NebulaID/zktls-adapters</span>
                <Link href="https://github.com/NebulaID" target="_blank" className="text-purple-600 font-bold hover:underline flex items-center gap-1">
                  View <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-gray-200">
                <span>NebulaID/attestation-registry</span>
                <Link href="https://github.com/NebulaID" target="_blank" className="text-purple-600 font-bold hover:underline flex items-center gap-1">
                  View <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <Link
              href="https://github.com/NebulaID"
              target="_blank"
              className="inline-flex items-center gap-2 text-xs font-bold text-black hover:underline"
            >
              Explore All NebulaID Repositories on GitHub
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

      </div>

    </section>
  )
}
