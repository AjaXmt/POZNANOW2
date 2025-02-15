"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useCampaign } from "@/contexts/CampaignContext"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn, formatPlayerName } from "@/lib/utils"

type BattleResult = {
  id?: number
  player1: string
  player2: string
  winner: "player1" | "player2" | "draw"
  player1VP: number
  player2VP: number
  hasReport: boolean
  reportLink?: string
  scenario: string
}

type AddBattleResultProps = {
  onAddResult: (result: BattleResult) => void
  initialBattle?: BattleResult
}

const scenarios = [
  "Scenariusz 1: Jatka pod Argalis",
  "Scenariusz 2: Pamiątka po tacie",
  "Scenariusz 3: Przeprawa przez Limnallę",
  "Scenariusz 4: Polowanie na smoka",
  "Scenariusz 5: Tajemnica Gór Czarnych",
  "Scenariusz 6: Złoto dla Zuchwałych",
]

export function AddBattleResult({ onAddResult, initialBattle }: AddBattleResultProps) {
  const { entries } = useCampaign()
  const [result, setResult] = useState<BattleResult>({
    player1: "",
    player2: "",
    winner: "draw",
    player1VP: 0,
    player2VP: 0,
    hasReport: false,
    scenario: scenarios[0],
  })
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  useEffect(() => {
    if (initialBattle) {
      setResult(initialBattle)
    }
  }, [initialBattle])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddResult(result)
    if (!initialBattle) {
      setResult({
        player1: "",
        player2: "",
        winner: "draw",
        player1VP: 0,
        player2VP: 0,
        hasReport: false,
        scenario: scenarios[0],
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="player1">Gracz 1</Label>
          <Popover open={open1} onOpenChange={setOpen1}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" aria-expanded={open1} className="w-full justify-between">
                {result.player1
                  ? formatPlayerName(entries.find((player) => player.player === result.player1)?.player || "")
                  : "Wybierz gracza 1..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command>
                <CommandInput placeholder="Szukaj gracza..." />
                <CommandList>
                  <CommandEmpty>Nie znaleziono gracza.</CommandEmpty>
                  <CommandGroup>
                    {entries.map((player) => (
                      <CommandItem
                        key={player.id}
                        onSelect={() => {
                          setResult({ ...result, player1: player.player === result.player1 ? "" : player.player })
                          setOpen1(false)
                        }}
                      >
                        <Check
                          className={cn("mr-2 h-4 w-4", result.player1 === player.player ? "opacity-100" : "opacity-0")}
                        />
                        {formatPlayerName(player.player)} - {player.army}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="player2">Gracz 2</Label>
          <Popover open={open2} onOpenChange={setOpen2}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" aria-expanded={open2} className="w-full justify-between">
                {result.player2
                  ? formatPlayerName(entries.find((player) => player.player === result.player2)?.player || "")
                  : "Wybierz gracza 2..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
              <Command>
                <CommandInput placeholder="Szukaj gracza..." />
                <CommandList>
                  <CommandEmpty>Nie znaleziono gracza.</CommandEmpty>
                  <CommandGroup>
                    {entries.map((player) => (
                      <CommandItem
                        key={player.id}
                        onSelect={() => {
                          setResult({ ...result, player2: player.player === result.player2 ? "" : player.player })
                          setOpen2(false)
                        }}
                      >
                        <Check
                          className={cn("mr-2 h-4 w-4", result.player2 === player.player ? "opacity-100" : "opacity-0")}
                        />
                        {formatPlayerName(player.player)} - {player.army}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="scenario">Scenariusz</Label>
        <select
          id="scenario"
          value={result.scenario}
          onChange={(e) => setResult({ ...result, scenario: e.target.value })}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {scenarios.map((scenario) => (
            <option key={scenario} value={scenario}>
              {scenario}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <Label>Wynik</Label>
        <div className="flex space-x-4">
          <Label className="flex items-center space-x-2">
            <input
              type="radio"
              name="winner"
              value="player1"
              checked={result.winner === "player1"}
              onChange={() => setResult({ ...result, winner: "player1" })}
            />
            <span>Wygrana Gracza 1</span>
          </Label>
          <Label className="flex items-center space-x-2">
            <input
              type="radio"
              name="winner"
              value="player2"
              checked={result.winner === "player2"}
              onChange={() => setResult({ ...result, winner: "player2" })}
            />
            <span>Wygrana Gracza 2</span>
          </Label>
          <Label className="flex items-center space-x-2">
            <input
              type="radio"
              name="winner"
              value="draw"
              checked={result.winner === "draw"}
              onChange={() => setResult({ ...result, winner: "draw" })}
            />
            <span>Remis</span>
          </Label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="player1VP">VP Gracza 1</Label>
          <Input
            id="player1VP"
            type="number"
            value={result.player1VP}
            onChange={(e) => setResult({ ...result, player1VP: Number(e.target.value) })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="player2VP">VP Gracza 2</Label>
          <Input
            id="player2VP"
            type="number"
            value={result.player2VP}
            onChange={(e) => setResult({ ...result, player2VP: Number(e.target.value) })}
          />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="hasReport"
          checked={result.hasReport}
          onCheckedChange={(checked) => setResult({ ...result, hasReport: checked as boolean })}
        />
        <Label htmlFor="hasReport">Raport z bitwy</Label>
      </div>
      {result.hasReport && (
        <div className="space-y-2">
          <Label htmlFor="reportLink">Link do raportu</Label>
          <Input
            id="reportLink"
            type="url"
            value={result.reportLink || ""}
            onChange={(e) => setResult({ ...result, reportLink: e.target.value })}
            placeholder="https://facebook.com/..."
          />
        </div>
      )}
      <Button type="submit">{initialBattle ? "Aktualizuj" : "Dodaj wynik bitwy"}</Button>
    </form>
  )
}

