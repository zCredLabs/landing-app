import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProductsSuite } from "@/components/products-suite"
import { AdvantagesSection } from "@/components/advantages-section"
import { GithubEcosystem } from "@/components/github-ecosystem"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black antialiased selection:bg-[#e4ff54] selection:text-black">
      <Navbar />
      <HeroSection />
      <ProductsSuite />
      <AdvantagesSection />
      <GithubEcosystem />
      <CTASection />
      <Footer />
    </main>
  )
}
