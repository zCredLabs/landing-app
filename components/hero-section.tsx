import { ArrowRight, Check } from "lucide-react"
import { HeroVisual } from "@/components/landing/hero-visual"
import { HeroCta } from "@/components/landing/hero-cta"
import { Reveal } from "@/components/landing/reveal"
import { Container } from "@/components/landing/primitives"
import { HERO_ASSURANCES, SITE_CONFIG } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-violet-100/50 blur-3xl" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-6">
            <a
              href={SITE_CONFIG.links.horizen}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-3 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300"
            >
              <span className="rounded-full bg-violet-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                Selected
              </span>
              Horizen Acceleration Season
              <ArrowRight className="h-3 w-3 text-slate-400" />
            </a>

            <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-[4.1rem] text-balance">
              Prove compliance.
              <br />
              <span className="bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent">Reveal nothing.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              zCred delivers confidential compliance decisions for protocols and asset issuers. Sensitive credentials are evaluated inside
              hardware-isolated enclaves on Horizen Vela, and only a signed verdict settles on Base.
            </p>

            <HeroCta />

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-slate-600">
              {HERO_ASSURANCES.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 lg:pl-6">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
