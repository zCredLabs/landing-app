"use client"

import Image from "next/image"
import Link from "next/link"
import { Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 text-sm text-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl">
                <Image src="/logo.png" alt="zCred" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-xl font-bold text-black tracking-tight">zCred</span>
            </div>
            <p className="max-w-sm text-xs text-gray-600 leading-relaxed">
              The Confidential Decision Layer for Identity & Compliance. Verifying private credentials, creditworthiness, and regulatory eligibility without exposing user PII or proprietary policy logic.
            </p>
            <div className="flex items-center gap-4 text-gray-700 mt-1">
              <a href="https://x.com/zcred_org" target="_blank" rel="noreferrer" className="hover:text-black transition-colors flex items-center gap-1.5 text-xs font-semibold">
                <Twitter className="h-4 w-4" /> @zcred_org
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-black">Platform & Solutions</span>
            <Link href="#platform" className="text-xs hover:text-black transition-colors">How It Works</Link>
            <Link href="#capabilities" className="text-xs hover:text-black transition-colors">Capabilities</Link>
            <Link href="#security" className="text-xs hover:text-black transition-colors">Security Model</Link>
            <Link href="#why-zcred" className="text-xs hover:text-black transition-colors">Why zCred</Link>
            <Link href="#team" className="text-xs hover:text-black transition-colors">Team & Backing</Link>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-black">Compliance & Governance</span>
            <Link href="/privacy-policy" className="text-xs hover:text-black transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs hover:text-black transition-colors">Terms of Service</Link>
            <Link href="/gdpr-compliance" className="text-xs hover:text-black transition-colors">GDPR Compliance</Link>
            <Link href="/cookie-policy" className="text-xs hover:text-black transition-colors">Cookie Policy</Link>
          </div>

        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 pt-6 text-xs text-gray-500">
          <div>© {new Date().getFullYear()} zCred Protocol. All rights reserved.</div>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-black">Terms of Service</Link>
            <Link href="/gdpr-compliance" className="hover:text-black">GDPR</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
