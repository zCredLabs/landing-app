"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8 text-xs text-gray-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand & Category */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg">
              <Image src="/logo.png" alt="zCred" width={28} height={28} className="object-contain" />
            </div>
            <span className="text-sm font-bold text-black tracking-tight">zCred</span>
          </div>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span className="text-gray-600">The Confidential Decision Layer for Identity & Compliance</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/privacy-policy" className="hover:text-black transition-colors font-medium">Privacy Policy</Link>
          <span className="text-gray-200">•</span>
          <Link href="/terms-of-service" className="hover:text-black transition-colors font-medium">Terms of Service</Link>
          <span className="text-gray-200">•</span>
          <span>© {new Date().getFullYear()} zCred Protocol</span>
        </div>


      </div>
    </footer>
  )
}
