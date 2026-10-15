import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { HowItWorks } from "@/components/landing/how-it-works"
import { PrivacyBoundary } from "@/components/landing/privacy-boundary"
import { Developers } from "@/components/landing/developers"
import { Faq } from "@/components/landing/faq"
import { Cta } from "@/components/landing/cta"
import { UseCases } from "@/components/landing/use-cases";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-violet-100 selection:text-violet-950">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <UseCases />
        <PrivacyBoundary />
        <Developers />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
