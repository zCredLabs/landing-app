"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"
import { MeetingModal } from "@/components/meeting-modal"

interface OpenModalOptions {
  email?: string
  integration?: string
}

interface MeetingContextType {
  open: (opts?: OpenModalOptions) => void
}

const MeetingContext = createContext<(opts?: OpenModalOptions) => void>(() => {})

export function MeetingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [initialEmail, setInitialEmail] = useState("")
  const [initialIntegration, setInitialIntegration] = useState("general-diligence")

  const openModal = useCallback((opts?: OpenModalOptions) => {
    if (opts?.email) setInitialEmail(opts.email)
    if (opts?.integration) setInitialIntegration(opts.integration)
    setOpen(true)
  }, [])

  return (
    <MeetingContext.Provider value={openModal}>
      {children}
      <MeetingModal
        open={open}
        onOpenChange={setOpen}
        initialEmail={initialEmail}
        initialIntegration={initialIntegration}
      />
    </MeetingContext.Provider>
  )
}

export const useMeetingModal = () => useContext(MeetingContext)
export const useBetaModal = () => useContext(MeetingContext)

export function MeetingButton({
  className,
  children,
  email,
  integration,
}: {
  className?: string
  children: ReactNode
  email?: string
  integration?: string
}) {
  const openModal = useMeetingModal()
  return (
    <button
      type="button"
      onClick={() => openModal({ email, integration })}
      className={className}
    >
      {children}
    </button>
  )
}
