"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sword, Scroll, Book, Users, Home, Table } from "lucide-react"

const navItems = [
  {
    title: "Strona Główna",
    href: "/",
    icon: Home,
  },
  {
    title: "Bitwy",
    href: "/bitwy",
    icon: Sword,
  },
  {
    title: "Tabela",
    href: "/tabela",
    icon: Table,
  },
  {
    title: "Scenariusze",
    href: "/scenariusze",
    icon: Scroll,
  },
  {
    title: "Zasady specjalne",
    href: "/zasady",
    icon: Book,
  },
  {
    title: "Spotkania",
    href: "/spotkania",
    icon: Users,
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center space-x-4 sm:space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

