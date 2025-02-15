"use client"

import { useState, useEffect } from "react"
import { useCampaign } from "@/contexts/CampaignContext"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { formatPlayerName } from "@/lib/utils"

type BattleResult = {
  id: number
  player1: string
  player2: string
  winner: "player1" | "player2" | "draw"
  player1VP: number
  player2VP: number
  hasReport: boolean
  reportLink?: string
  scenario: string
}

type PlayerStats = {
  name: string
  army: string
  kp: number
  battlesPlayed: number
  vpGained: number
  vpLost: number
  points: number
}

export default function TablePage() {
  const { entries } = useCampaign()
  const [playerStats, setPlayerStats] = useState<PlayerStats[]>([])
  const [sortConfig, setSortConfig] = useState<{ key: keyof PlayerStats; direction: "ascending" | "descending" }>({
    key: "points",
    direction: "descending",
  })

  useEffect(() => {
    const battleResults: BattleResult[] = JSON.parse(localStorage.getItem("battleResults") || "[]")

    const stats = entries.map((player) => {
      const playerBattles = battleResults.filter(
        (battle) => battle.player1 === player.player || battle.player2 === player.player,
      )

      let vpGained = 0
      let vpLost = 0
      let points = 0

      playerBattles.forEach((battle) => {
        if (battle.player1 === player.player) {
          vpGained += battle.player1VP
          vpLost += battle.player2VP
          if (battle.winner === "player1") points += 2
          else points += 1 // Draw or loss
        } else {
          vpGained += battle.player2VP
          vpLost += battle.player1VP
          if (battle.winner === "player2") points += 2
          else points += 1 // Draw or loss
        }
      })

      return {
        name: player.player,
        army: player.army,
        kp: player.kp,
        battlesPlayed: playerBattles.length,
        vpGained,
        vpLost,
        points: points,
      }
    })

    setPlayerStats(stats)
  }, [entries])

  const sortData = (key: keyof PlayerStats) => {
    let direction: "ascending" | "descending" = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })

    const sortedStats = [...playerStats].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1
      return 0
    })

    setPlayerStats(sortedStats)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tabela Wyników</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">
              <Button variant="ghost" onClick={() => sortData("name")}>
                Imię i Nazwisko <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => sortData("army")}>
                Nazwa Armii <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => sortData("kp")}>
                KP <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => sortData("battlesPlayed")}>
                Liczba Bitew <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => sortData("vpGained")}>
                Zdobyte VP <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => sortData("vpLost")}>
                Stracone VP <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => sortData("points")}>
                Liczba Punktów <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {playerStats.map((player) => (
            <TableRow key={player.name}>
              <TableCell className="font-medium">{formatPlayerName(player.name)}</TableCell>
              <TableCell>{player.army}</TableCell>
              <TableCell>{player.kp}</TableCell>
              <TableCell>{player.battlesPlayed}</TableCell>
              <TableCell>{player.vpGained}</TableCell>
              <TableCell>{player.vpLost}</TableCell>
              <TableCell>{player.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

