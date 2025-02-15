"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { PlusCircle, Pencil, Save, X } from "lucide-react"
import { useCampaign } from "@/contexts/CampaignContext"
import { PasswordPopup } from "@/components/password-popup"

type CampaignEntry = {
  id: number
  player: string
  facebookLink: string
  army: string
  kp: number
  championshubLink: string
}

export function CampaignData() {
  const { entries, setEntries } = useCampaign()
  const [editingId, setEditingId] = useState<number | null>(null)
  const [newEntry, setNewEntry] = useState<Partial<CampaignEntry>>({})
  const [isPasswordPopupOpen, setIsPasswordPopupOpen] = useState(false)
  const [currentLink, setCurrentLink] = useState("")

  const handleAddEntry = () => {
    if (newEntry.player && newEntry.army) {
      setEntries([
        ...entries,
        {
          id: Date.now(),
          player: newEntry.player.trim(),
          facebookLink: newEntry.facebookLink || "",
          army: newEntry.army,
          kp: Number(newEntry.kp) || 0,
          championshubLink: newEntry.championshubLink || "",
        },
      ])
      setNewEntry({})
    }
  }

  const handleEdit = (id: number) => {
    setEditingId(id)
    const entry = entries.find((e) => e.id === id)
    if (entry) {
      setNewEntry(entry)
    }
  }

  const handleSave = (id: number) => {
    setEntries(entries.map((entry) => (entry.id === id ? { ...entry, ...newEntry } : entry)))
    setEditingId(null)
    setNewEntry({})
  }

  const handleLinkClick = (link: string) => {
    setCurrentLink(link)
    setIsPasswordPopupOpen(true)
  }

  const handlePasswordSubmit = (password: string) => {
    if (password === "pierogi") {
      window.open(currentLink, "_blank", "noopener,noreferrer")
    }
    setIsPasswordPopupOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-white/50 p-4">
        <h2 className="mb-4 text-xl font-bold">Dodaj nowego gracza</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Input
            placeholder="Gracz"
            value={newEntry.player || ""}
            onChange={(e) => setNewEntry({ ...newEntry, player: e.target.value })}
          />
          <Input
            placeholder="Link do Facebooka"
            value={newEntry.facebookLink || ""}
            onChange={(e) => setNewEntry({ ...newEntry, facebookLink: e.target.value })}
          />
          <Input
            placeholder="Nazwa Armii"
            value={newEntry.army || ""}
            onChange={(e) => setNewEntry({ ...newEntry, army: e.target.value })}
          />
          <Input
            type="number"
            placeholder="KP"
            value={newEntry.kp || ""}
            onChange={(e) => setNewEntry({ ...newEntry, kp: Number(e.target.value) })}
          />
          <Input
            placeholder="Link do ChampionsHub"
            value={newEntry.championshubLink || ""}
            onChange={(e) => setNewEntry({ ...newEntry, championshubLink: e.target.value })}
          />
          <Button onClick={handleAddEntry} className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Dodaj
          </Button>
        </div>
      </div>

      <div className="rounded-lg border bg-white/50">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Lp.</TableHead>
              <TableHead>Imię i Nazwisko</TableHead>
              <TableHead>Link do Facebooka</TableHead>
              <TableHead>Nazwa Armii</TableHead>
              <TableHead className="w-[80px]">KP</TableHead>
              <TableHead>ChampionsHub</TableHead>
              <TableHead className="w-[100px]">Akcje</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRow key={entry.id}>
                {editingId === entry.id ? (
                  <>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <Input
                        value={newEntry.player || ""}
                        onChange={(e) => setNewEntry({ ...newEntry, player: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={newEntry.facebookLink || ""}
                        onChange={(e) => setNewEntry({ ...newEntry, facebookLink: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={newEntry.army || ""}
                        onChange={(e) => setNewEntry({ ...newEntry, army: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        value={newEntry.kp || ""}
                        onChange={(e) => setNewEntry({ ...newEntry, kp: Number(e.target.value) })}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={newEntry.championshubLink || ""}
                        onChange={(e) => setNewEntry({ ...newEntry, championshubLink: e.target.value })}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleSave(entry.id)}>
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setEditingId(null)
                            setNewEntry({})
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {entry.player
                        .split(" ")
                        .map((name, index, array) => (index === array.length - 1 ? name[0] + "." : name + " "))
                        .join("")}
                    </TableCell>
                    <TableCell>
                      {entry.facebookLink && (
                        <Button
                          variant="link"
                          className="p-0 text-blue-600 hover:underline"
                          onClick={() => handleLinkClick(`https://facebook.com/${entry.facebookLink}`)}
                        >
                          {entry.facebookLink}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>{entry.army}</TableCell>
                    <TableCell>{entry.kp}</TableCell>
                    <TableCell>
                      {entry.championshubLink && (
                        <Button
                          variant="link"
                          className="p-0 text-blue-600 hover:underline"
                          onClick={() => handleLinkClick(`https://championshub.app/${entry.championshubLink}`)}
                        >
                          {entry.championshubLink}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline" onClick={() => handleEdit(entry.id)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <PasswordPopup
        isOpen={isPasswordPopupOpen}
        onClose={() => setIsPasswordPopupOpen(false)}
        onSubmit={handlePasswordSubmit}
      />
    </div>
  )
}

