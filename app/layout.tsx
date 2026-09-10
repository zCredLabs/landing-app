import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "zCred — The Confidential Decision Layer for Identity & Compliance",
  description: "zCred lets Web3 applications verify identity, creditworthiness, and regulatory eligibility — without ever seeing the underlying data or exposing how the decision was made.",
  keywords: [
    "zCred",
    "Confidential Computing",
    "Web3 Identity",
    "DeFi Creditworthiness",
    "Regulatory Compliance",
    "zkTLS",
    "Zero Knowledge",
    "Hardware TEE",
    "Base Sepolia",
    "Smart Contract Attestation",
    "Sybil Resistance",
  ],
  openGraph: {
    title: "zCred — The Confidential Decision Layer for Identity & Compliance",
    description: "zCred lets Web3 applications verify identity, creditworthiness, and regulatory eligibility — without ever seeing the underlying data or exposing how the decision was made.",
    url: "https://zcred.xyz",
    siteName: "zCred Protocol",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zCred — The Confidential Decision Layer for Identity & Compliance",
    description: "Verify identity, creditworthiness, and compliance without ever exposing underlying data or proprietary decision logic.",
    creator: "@zcred_org",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
