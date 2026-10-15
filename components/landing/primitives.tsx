import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/landing/reveal"

import { SITE_CONFIG } from "@/lib/constants"

export const CALENDLY_URL = SITE_CONFIG.links.calendly

export const buttonStyles = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-slate-950 transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 cursor-pointer",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 cursor-pointer",
} as const

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 sm:gap-2 font-mono text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-700",
        className,
      )}
    >
      <span className="h-px w-4 sm:w-5 bg-violet-400" />
      {children}
    </span>
  )
}

interface SectionHeaderProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
}

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-2.5 sm:mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl text-balance">{title}</h2>
      {description && <p className="mt-2.5 sm:mt-4 text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">{description}</p>}
    </Reveal>
  )
}

export function Section({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cn("scroll-mt-16 py-12 sm:py-20 lg:py-28", className)}>
      <Container>{children}</Container>
    </section>
  )
}
