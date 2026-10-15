import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { TrustBar } from "@/components/landing/trust-bar"
import { Problem } from "@/components/landing/problem"
import { HowItWorks } from "@/components/landing/how-it-works"
import { UseCases } from "@/components/landing/use-cases"
import { PrivacyBoundary } from "@/components/landing/privacy-boundary"
import { Security } from "@/components/landing/security"
import { Developers } from "@/components/landing/developers"
import { Faq } from "@/components/landing/faq"
import { Cta } from "@/components/landing/cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-violet-100 selection:text-violet-950">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <Problem />
        <HowItWorks />
        <UseCases />
        <PrivacyBoundary />
        <Security />
        <Developers />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
