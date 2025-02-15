import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface PasswordPopupProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (password: string) => void
}

export function PasswordPopup({ isOpen, onClose, onSubmit }: PasswordPopupProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "pierogi") {
      onSubmit(password)
      setPassword("")
      setError("")
    } else {
      setError("Złe hasło")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ulala Rodo Srodo podaj hasło</DialogTitle>
          <DialogDescription>Wprowadź hasło, aby uzyskać dostęp do linku.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="Wprowadź hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit">Potwierdź</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

