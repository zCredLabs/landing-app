import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/landing/primitives"
import { FOOTER_COLUMNS, SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-8 sm:py-12 lg:py-14">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={26} height={26} className="rounded-lg sm:h-7 sm:w-7" />
              <span className="text-[15px] sm:text-base font-semibold tracking-tight text-slate-950">zCred</span>
            </Link>
            <p className="mt-3 sm:mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-slate-500">
              Confidential compliance decisions for onchain finance. Built on Horizen Vela and Base.
            </p>
            <a
              href={SITE_CONFIG.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="mt-4 sm:mt-5 inline-block text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-950"
            >
              {SITE_CONFIG.links.twitterHandle} on X
            </a>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-950">{col.title}</h3>
              <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs sm:text-sm text-slate-500 transition-colors hover:text-slate-950">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-14 flex flex-col gap-2.5 border-t border-slate-100 pt-6 sm:pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} zCred Protocol. All rights reserved.</span>
          <span>Selected for Horizen Accelerator</span>
        </div>
      </Container>
    </footer>
  )
}
