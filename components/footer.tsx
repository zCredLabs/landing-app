"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 text-sm text-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg">
                <Image src="/zCred.png" alt="zCred" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-xl font-bold text-black tracking-tight">zCred</span>
            </div>
            <p className="max-w-sm text-xs text-gray-600 leading-relaxed">
              Universal confidential decision coprocessor and privacy ecosystem, bringing Horizen Vela WASM TEE execution and Base smart contract settlement to Web3.
            </p>
            <div className="flex items-center gap-4 text-gray-700 mt-1">
              <a href="https://github.com/Zauth-HQ" target="_blank" rel="noreferrer" className="hover:text-black transition-colors flex items-center gap-1 text-xs font-semibold">
                <Github className="h-4 w-4" /> ZAuth HQ
              </a>
              <a href="https://github.com/NebulaID" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors flex items-center gap-1 text-xs font-semibold">
                <Github className="h-4 w-4" /> NebulaID
              </a>
              <a href="https://x.com/zcred_org" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-black">Product Suite</span>
            <Link href="#products" className="text-xs hover:text-black transition-colors">zCred Passport (Vela TEE)</Link>
            <a href="https://github.com/Zauth-HQ/captcha-sdk" target="_blank" className="text-xs hover:text-black transition-colors">ZAuth CAPTCHA</a>
            <a href="https://github.com/Zauth-HQ" target="_blank" className="text-xs hover:text-black transition-colors">ZAuth Extension</a>
            <a href="https://github.com/NebulaID" target="_blank" className="text-xs hover:text-black transition-colors">NebulaID Engine</a>
          </div>

          {/* Ecosystem Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-black">Ecosystem</span>
            <a href="https://horizen.io" target="_blank" rel="noreferrer" className="text-xs hover:text-black transition-colors">Horizen Labs</a>
            <a href="https://base.org" target="_blank" rel="noreferrer" className="text-xs hover:text-black transition-colors">Base Network</a>
            <a href="https://zkverify.io" target="_blank" rel="noreferrer" className="text-xs hover:text-black transition-colors">zkVerify Layer</a>
            <Link href="#advantages" className="text-xs hover:text-black transition-colors">Advantages</Link>
          </div>

        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 pt-6 text-xs text-gray-500">
          <div>© {new Date().getFullYear()} zCred Protocol. All rights reserved.</div>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-black">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
