export const SITE_CONFIG = {
  name: "zCred",
  fullName: "zCred Protocol",
  tagline: "Private Evidence. Onchain Decisions.",
  subtitle: "Confidential compliance decisions for onchain finance.",
  description:
    "Automate institutional-grade KYC, sanctions screening, and investor accreditation without exposing PII or storing customer data on public ledgers. Built on Horizen Vela and Base.",
  url: "https://zcred.xyz",
  email: "hi@zcred.xyz",
  links: {
    calendly: "https://calendly.com/0xshikhar/30min",
    github: "https://github.com/zcredlabs",
    twitter: "https://x.com/zCredLabs",
    twitterHandle: "@zCredLabs",
    deck: "/deck.html",
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
  { href: "/#use-cases", label: "Use cases" },
  { href: "/#developers", label: "Developers" },
] as const

export const INTEGRATION_CHOICES = [
  {
    value: "general-diligence",
    label: "General Technical Diligence / Pilot Exploration",
    desc: "Architecture review, Horizen Vela enclaves, or Base settlement",
  },
  {
    value: "rwa-compliance",
    label: "Institutional KYC & Sanctions (RWA / DeFi)",
    desc: "Gate liquidity pools and asset issuance without PII liability",
  },
  {
    value: "web2-ingress",
    label: "Custom Policy & Web2 Data Ingress (Fintech / CEX)",
    desc: "Private multi-source evaluation via zkTLS and hardware enclaves",
  },
  {
    value: "agent-passport",
    label: "AI Agent Spending & Safety Passport",
    desc: "Verify agent integrity and enforce onchain transaction guardrails",
  },
  {
    value: "riskx-credit",
    label: "Undercollateralized Lending & Credit (RiskX)",
    desc: "Score cashflows & balance sheets for lower collateral ratios",
  },
] as const

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Compliance Shield", href: "/#use-cases" },
      { label: "RiskX Credit", href: "/#use-cases" },
      { label: "Agent Passport", href: "/#use-cases" },
      { label: "Beta Onboarding", href: "/#beta" },
      { label: "Directory", href: "/links" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Integration", href: "/#developers" },
      { label: "GitHub", href: SITE_CONFIG.links.github },
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
  "Hardware-isolated enclave evaluation",
  "One-line smart contract check",
] as const

export const DIRECTORY_LINKS = [
  {
    id: "pitch-deck",
    title: "Investor Pitch Deck",
    href: SITE_CONFIG.links.deck,
    badge: "View Slides",
    iconName: "FileText",
    isExternal: true,
    highlight: true,
  },
  {
    id: "calendly",
    title: "Schedule 30-Min Technical Diligence",
    href: SITE_CONFIG.links.calendly,
    badge: "Book Call",
    iconName: "Calendar",
    isExternal: true,
  },
  {
    id: "platform-demo",
    title: "Platform & Verification Engine",
    href: "/",
    badge: "Live App",
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
