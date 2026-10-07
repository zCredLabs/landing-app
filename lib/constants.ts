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
  { href: "/#security", label: "Security" },
  { href: "/#developers", label: "Developers" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#beta", label: "Join Beta" },
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
      { label: "Whitepaper", href: "/apa-brief" },
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
    id: "technical-spec",
    title: "Technical Architecture & APA Specification",
    href: SITE_CONFIG.links.whitepaper,
    badge: "Whitepaper",
    iconName: "FileCode",
    isExternal: false,
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
