import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MeetingProvider } from "@/components/landing/meeting-context"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "zCred — Private Evidence. Onchain Decisions.",
    template: `%s | ${SITE_CONFIG.fullName}`,
  },
  description:
    "Evaluate institutional offchain records privately and settle signed compliance decisions to smart contracts without exposing PII. Built on Horizen Vela and Base.",
  applicationName: "zCred Labs",
  authors: [{ name: "zCred Architecture Team", url: SITE_CONFIG.url }],
  generator: "Next.js",
  keywords: [
    "zCred",
    "zCred Labs",
    "Confidential Computing",
    "Horizen Vela",
    "Horizen Accelerator",
    "Base",
    "Base L2",
    "Institutional Compliance",
    "RWA Compliance",
    "AWS Nitro Enclaves",
    "Hardware TEE",
    "OFAC Sanctions Screening",
    "Accredited Investor Verification",
    "Smart Contract Attestation",
  ],
  referrer: "origin-when-cross-origin",
  creator: "zCred Labs",
  publisher: "zCred Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    types: {
      "application/json": `${SITE_CONFIG.url}/api/agent`,
      "text/markdown": `${SITE_CONFIG.url}/llms.txt`,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/logo.png", sizes: "1024x1024", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/logo.png", sizes: "1024x1024", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "zCred — Confidential Compliance Decisions for Web3",
    description:
      "Automate institutional-grade KYC, sanctions screening, and investor accreditation without exposing PII or storing customer data on public ledgers.",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.fullName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "zCred Protocol — Confidential Compliance Decisions for Web3",
      },
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "zCred Protocol Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zCred — Confidential Compliance Decisions for Web3",
    description:
      "Verify identity, creditworthiness, and compliance without ever exposing underlying data or proprietary decision logic. Built on Horizen Vela & Base.",
    creator: SITE_CONFIG.links.twitterHandle,
    site: SITE_CONFIG.links.twitterHandle,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
}

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zcred.xyz/#organization",
      name: "zCred Protocol",
      url: "https://zcred.xyz",
      logo: {
        "@type": "ImageObject",
        "@id": "https://zcred.xyz/#logo",
        url: "https://zcred.xyz/logo.png",
        caption: "zCred Protocol Official Logo",
        width: 1024,
        height: 1024,
      },
      image: "https://zcred.xyz/logo.png",
      description:
        "Confidential compliance decisions for onchain finance, built on Horizen Vela hardware TEE enclaves and Base.",
      sameAs: [
        SITE_CONFIG.links.twitter,
        SITE_CONFIG.links.github,
      ],
      founder: {
        "@type": "Person",
        name: "Shikhar Singh",
        jobTitle: "Founder & Core Architect",
      },
      funder: {
        "@type": "Organization",
        name: "Horizen Labs",
        url: "https://horizen.io",
        award: "Selected for Horizen Accelerator",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://zcred.xyz/#website",
      url: "https://zcred.xyz",
      name: "zCred Protocol",
      publisher: {
        "@id": "https://zcred.xyz/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://zcred.xyz/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://zcred.xyz/#software",
      name: "zCred Protocol",
      operatingSystem: "EVM, Base L2, Horizen Vela AWS Nitro TEE",
      applicationCategory: "SecurityApplication, DecentralizedFinanceApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Dual-Sided Shield for Proprietary Risk Policies and Borrower Data",
        "Hardware-Isolated AWS Nitro Enclave Execution with Horizen Vela",
        "Client-Side zkTLS Proof Ingestion for Authentic Web2 Signals",
        "Domain-Bound Cryptographic Nullifiers with Zero Cross-App Tracking",
        "1-Line Smart Contract Query (<26k Gas) on Base L2",
        "GDPR Compliance by Architecture with 0 Bytes Persistent PII",
      ],
    },
    {
      "@type": "ScholarlyArticle",
      "@id": "https://zcred.xyz/#whitepaper",
      headline:
        "zCred: Confidential Compliance Decisions for Identity, Creditworthiness, and Multi-Credential Verification in Web3",
      url: "https://zcred.xyz/apa-brief",
      author: {
        "@type": "Organization",
        name: "zCred Protocol Architecture Team",
      },
      publisher: {
        "@id": "https://zcred.xyz/#organization",
      },
      description:
        "Formal APA 7th Edition research specification detailing zCred's confidential TEE coprocessor, zkTLS ingress, and EVM settlement.",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Explicit Icon link tags for universal browser tab, search engine and bookmark support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7c3aed" />

        {/* AI Agents Discovery Entrypoint */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Agent Context" />
        <link rel="alternate" type="application/json" href="/zcred-apa-specification.json" title="APA Specification JSON" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MeetingProvider>{children}</MeetingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
