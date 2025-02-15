"use client"

import type React from "react"
import { createContext, useState, useContext, type ReactNode } from "react"
import type { CampaignEntry } from "@/types/campaign"

type CampaignContextType = {
  entries: CampaignEntry[]
  setEntries: React.Dispatch<React.SetStateAction<CampaignEntry[]>>
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined)

export function CampaignProvider({
  children,
  initialEntries,
}: { children: ReactNode; initialEntries: CampaignEntry[] }) {
  const [entries, setEntries] = useState<CampaignEntry[]>(initialEntries)

  return <CampaignContext.Provider value={{ entries, setEntries }}>{children}</CampaignContext.Provider>
}

export function useCampaign() {
  const context = useContext(CampaignContext)
  if (context === undefined) {
    throw new Error("useCampaign must be used within a CampaignProvider")
  }
  return context
}

