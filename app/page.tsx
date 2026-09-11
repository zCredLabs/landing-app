import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black antialiased selection:bg-[#e4ff54] selection:text-black flex flex-col justify-between">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center">
        <HeroSection />
      </div>
      <Footer />
    </main>
  )
}
