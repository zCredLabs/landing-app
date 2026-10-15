import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Institutional Directory & Resources | zCred Labs",
  description:
    "Institutional directory for zCred Labs: Verified Base Sepolia contract, technical architecture, and official repositories.",
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
