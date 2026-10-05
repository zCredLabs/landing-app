import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Institutional Directory & Resources | zCred Protocol",
  description:
    "Institutional directory for zCred Protocol: Investor presentation, verified Base Sepolia contract, technical specifications, and official repositories.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://zcred.xyz/links",
  },
}

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
