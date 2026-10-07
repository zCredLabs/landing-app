import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/landing/primitives"
import { FOOTER_COLUMNS, SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={28} height={28} className="rounded-lg" />
              <span className="text-base font-semibold tracking-tight text-slate-950">zCred</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Confidential compliance decisions for onchain finance. Built on Horizen Vela and Base.
            </p>
            <a
              href={SITE_CONFIG.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm font-medium text-slate-700 hover:text-slate-950"
            >
              {SITE_CONFIG.links.twitterHandle} on X
            </a>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-950">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-500 transition-colors hover:text-slate-950">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-slate-100 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} zCred Protocol. All rights reserved.</span>
          <span>Selected for Horizen Acceleration Season</span>
        </div>
      </Container>
    </footer>
  )
}
