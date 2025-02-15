"use client"

import { useState, useEffect } from "react"
import { AddBattleResult } from "@/components/add-battle-result"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useCampaign } from "@/contexts/CampaignContext"
import { Pencil, Trash2 } from "lucide-react"
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

export default function BattlesPage() {
  const [battleResults, setBattleResults] = useState<BattleResult[]>([])
  const [editingBattleId, setEditingBattleId] = useState<number | null>(null)
  const { entries } = useCampaign()

  useEffect(() => {
    const savedBattles = localStorage.getItem("battleResults")
    if (savedBattles) {
      setBattleResults(JSON.parse(savedBattles))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("battleResults", JSON.stringify(battleResults))
  }, [battleResults])

  const handleAddResult = (result: BattleResult) => {
    const newBattle = {
      ...result,
      id: Date.now(),
    }
    setBattleResults((prevResults) => {
      const updatedResults = [...prevResults, newBattle]
      localStorage.setItem("battleResults", JSON.stringify(updatedResults))
      return updatedResults
    })
  }

  const handleSaveResults = () => {
    localStorage.setItem("battleResults", JSON.stringify(battleResults))
    alert("Wyniki bitew zostały zapisane!")
  }

  const handleEditBattle = (id: number) => {
    setEditingBattleId(id)
  }

  const handleUpdateBattle = (updatedBattle: BattleResult) => {
    setBattleResults((prevResults) => {
      const updatedResults = prevResults.map((battle) => (battle.id === updatedBattle.id ? updatedBattle : battle))
      localStorage.setItem("battleResults", JSON.stringify(updatedResults))
      return updatedResults
    })
    setEditingBattleId(null)
  }

  const handleDeleteBattle = (id: number) => {
    setBattleResults((prevResults) => {
      const updatedResults = prevResults.filter((battle) => battle.id !== id)
      localStorage.setItem("battleResults", JSON.stringify(updatedResults))
      return updatedResults
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bitwy</h1>
      {editingBattleId === null ? (
        <AddBattleResult onAddResult={handleAddResult} />
      ) : (
        <AddBattleResult
          onAddResult={handleUpdateBattle}
          initialBattle={battleResults.find((b) => b.id === editingBattleId)}
        />
      )}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Gracz 1</TableHead>
              <TableHead>Gracz 2</TableHead>
              <TableHead>Scenariusz</TableHead>
              <TableHead>Zwycięzca</TableHead>
              <TableHead>VP Gracza 1</TableHead>
              <TableHead>VP Gracza 2</TableHead>
              <TableHead>Raport</TableHead>
              <TableHead>Akcje</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {battleResults.map((result) => (
              <TableRow key={result.id}>
                <TableCell>{formatPlayerName(result.player1)}</TableCell>
                <TableCell>{formatPlayerName(result.player2)}</TableCell>
                <TableCell>{result.scenario}</TableCell>
                <TableCell>
                  {result.winner === "player1"
                    ? formatPlayerName(result.player1)
                    : result.winner === "player2"
                      ? formatPlayerName(result.player2)
                      : "Remis"}
                </TableCell>
                <TableCell>{result.player1VP}</TableCell>
                <TableCell>{result.player2VP}</TableCell>
                <TableCell>
                  {result.hasReport && result.reportLink ? (
                    <Link href={result.reportLink} target="_blank" className="text-blue-600 hover:underline">
                      Link do raportu
                    </Link>
                  ) : (
                    "Brak"
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditBattle(result.id)}>
                      <Pencil className="h-4 w-4 mr-2" />
                      Edytuj
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteBattle(result.id)}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Usuń
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Button onClick={handleSaveResults}>Zapisz</Button>
    </div>
  )
}

