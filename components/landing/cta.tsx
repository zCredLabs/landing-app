import { ArrowRight, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { MeetingButton } from "@/components/landing/meeting-context"
import { Reveal } from "@/components/landing/reveal"
import { CALENDLY_URL, Container } from "@/components/landing/primitives"

export function Cta() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-16 sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-600/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl text-balance">
                Bring compliant, private access to your protocol.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                We&apos;re working with a small group of RWA issuers, institutional venues and lending protocols as
                design partners. Let&apos;s talk about your use case.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule a meeting
                </a>
                <MeetingButton
                  className={cn(
                    "group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/10 cursor-pointer",
                  )}
                >
                  Request early access
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </MeetingButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
