import { HeroSection } from "@/components/hero-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import UseCases from "@/components/use-cases"
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AdvantagesSection />
      {/* <FeaturesSection /> */}
      {/* <StatsSection /> */}
      <UseCases />
      <CTASection />
      <Footer />
    </main>
  )
}
