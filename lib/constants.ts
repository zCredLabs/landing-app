export const SITE_CONFIG = {
  name: "zCred",
  fullName: "zCred Labs",
  tagline: "Private Evidence. Onchain Decisions.",
  subtitle: "Confidential compliance decisions for onchain finance.",
  description:
    "Evaluate institutional offchain records privately and settle signed compliance decisions to smart contracts without exposing PII. Built on Horizen Vela and Base.",
  url: "https://zcred.xyz",
  email: "hi@zcred.xyz",
  links: {
    calendly: "https://calendly.com/0xshikhar/30min",
    github: "https://github.com/zcredlabs",
    twitter: "https://x.com/zCredLabs",
    twitterHandle: "@zCredLabs",
    whitepaper: "/apa-brief",
    links: "/links",
    baseScan: "https://sepolia.basescan.org/address/0xD27e6A8e297177C4Cb284b5C7E2Ccf8d9C69C11a",
    horizen: "https://horizen.io",
    base: "https://base.org",
  },
  contracts: {
    baseSepoliaRegistry: "0xD27e6A8e297177C4Cb284b5C7E2Ccf8d9C69C11a",
  },
} as const

export const NAV_LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#boundary", label: "Data boundary" },
  { href: "/#developers", label: "Developers" },
  { href: "/#faq", label: "FAQ" },
] as const

export const INTEGRATION_CHOICES = [
  {
    value: "institutional-pilot",
    label: "Institutional Onboarding & Scoped Pilot",
    desc: "Evaluate 1 evidence source, 1 policy, and 1 application gate",
  },
  {
    value: "rwa-compliance",
    label: "RWA & Fund Accreditation (Compliance Shield)",
    desc: "Gate liquidity pools and asset issuance without PII custody",
  },
  {
    value: "defi-sanctions",
    label: "DeFi Sanctions & Geofencing (OFAC Screening)",
    desc: "Real-time non-custodial screening with policy-defined TTLs",
  },
  {
    value: "investor-diligence",
    label: "Investor & Venture Diligence",
    desc: "Architecture review, financial model, and partnership discussion",
  },
  {
    value: "custom-exploratory",
    label: "Custom Enclave Policy Exploration (Fintech / Agents)",
    desc: "Explore custom WASM policies evaluated inside AWS Nitro enclaves",
  },
] as const

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Data Boundary", href: "/#boundary" },
      { label: "Developers", href: "/#developers" },
      { label: "FAQ", href: "/#faq" },
      { label: "Scoped Pilot", href: "/#pilot" },
      { label: "Investors & Diligence", href: "/links" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Integration", href: "/#developers" },
      { label: "GitHub", href: SITE_CONFIG.links.github },
      { label: "BaseScan Registry", href: SITE_CONFIG.links.baseScan },
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

export const HERO_ASSURANCES = [
  "Zero raw PII stored or custodied",
  "Hardware-isolated AWS Nitro enclaves",
  "~2,520 gas view call on Base",
] as const

export const DIRECTORY_LINKS = [
  {
    id: "calendly",
    title: "Schedule 30-Min Technical Diligence",
    href: SITE_CONFIG.links.calendly,
    badge: "Book Call",
    iconName: "Calendar",
    isExternal: true,
    highlight: true,
  },
  {
    id: "platform-demo",
    title: "Platform Overview & Technical Architecture",
    href: "/",
    badge: "zcred.xyz",
    iconName: "Globe",
    isExternal: false,
  },
  {
    id: "smart-contract",
    title: "Verified Base Sepolia Attestation Registry",
    href: SITE_CONFIG.links.baseScan,
    badge: "BaseScan",
    iconName: "ShieldCheck",
    isExternal: true,
    contractAddress: SITE_CONFIG.contracts.baseSepoliaRegistry,
  },
  {
    id: "github",
    title: "GitHub Protocol Repositories",
    href: SITE_CONFIG.links.github,
    badge: "zcredlabs",
    iconName: "Code",
    isExternal: true,
  },
  {
    id: "twitter",
    title: "Official X Profile",
    href: SITE_CONFIG.links.twitter,
    badge: SITE_CONFIG.links.twitterHandle,
    iconName: "Globe",
    isExternal: true,
  },
  {
    id: "inquiries",
    title: "Direct Founder & Diligence Email",
    href: `mailto:${SITE_CONFIG.email}`,
    badge: SITE_CONFIG.email,
    iconName: "Mail",
    isExternal: true,
  },
] as const
