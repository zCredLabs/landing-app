"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"
import { MeetingModal } from "@/components/meeting-modal"

const MeetingContext = createContext<() => void>(() => {})

export function MeetingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openModal = useCallback(() => setOpen(true), [])

  return (
    <MeetingContext.Provider value={openModal}>
      {children}
      <MeetingModal open={open} onOpenChange={setOpen} />
    </MeetingContext.Provider>
  )
}

export const useMeetingModal = () => useContext(MeetingContext)

export function MeetingButton({ className, children }: { className?: string; children: ReactNode }) {
  const openModal = useMeetingModal()
  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  )
}
