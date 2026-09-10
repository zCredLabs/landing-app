import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { ProductsSuite } from "@/components/products-suite"
import { SecuritySection } from "@/components/security-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black antialiased selection:bg-[#e4ff54] selection:text-black">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ProductsSuite />
      <SecuritySection />
      <AdvantagesSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}
