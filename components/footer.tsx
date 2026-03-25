import Link from "next/link"
import Image from "next/image"
import { Twitter, Github } from "lucide-react"
export function Footer() {
  return (
    <footer className="w-full bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center">
                <Image src="/zCred.png" alt="zCred" width={300} height={300} />
              </div>
              <span className="text-3xl font-medium">zCred</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Solutions</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-black">
                  KYC Verification
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-black">
                  National ID
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-black">
                  Age Verification
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-black">
                  Refugee Identity
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-black">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-black">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-black">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-black">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-gray-600 hover:text-black">
                  Cookie Policy
                </Link>
              </li>
              {/* <li>
                <Link href="/gdpr-compliance" className="text-sm text-gray-600 hover:text-black">
                  GDPR Compliance
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} zCred. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="https://x.com/zCredxyz" className="text-gray-600 hover:text-black">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5 " />
              </Link>
              <Link href="https://t.me/zCred" className="text-gray-600 hover:text-black">
                <span className="sr-only">Telegram</span>
                <Image src="/telegram-icon.svg" alt="Telegram" width={24} height={24} />
              </Link>
              <Link href="https://github.com/zCred" className="text-gray-600 hover:text-black">
                <span className="sr-only">GitHub</span>
                <Github />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
