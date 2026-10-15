import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/landing/primitives"

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Compliance Shield", href: "/#use-cases" },
      { label: "RiskX Credit", href: "/#use-cases" },
      { label: "Agent Passport", href: "/#use-cases" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Integration", href: "/#developers" },
      { label: "Whitepaper", href: "/apa-brief" },
      { label: "GitHub", href: "https://github.com/zcred-protocol" },
      { label: "llms.txt", href: "/llms.txt" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "GDPR", href: "/gdpr-compliance" },
    ],
  },
] as const

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
              The confidential decision layer for identity and compliance. Built on Horizen Vela and Base.
            </p>
            <a
              href="https://x.com/zcred_org"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm font-medium text-slate-700 hover:text-slate-950"
            >
              @zcred_org on X
            </a>
          </div>

          {COLUMNS.map((col) => (
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
