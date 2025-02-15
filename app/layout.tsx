import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { CampaignProvider } from "@/contexts/CampaignContext"
import type { CampaignEntry } from "@/types/campaign"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Poznańska Kampania Old World",
  description: "System zarządzania kampanią Warhammer: The Old World",
    generator: 'v0.dev'
}

const initialEntries: CampaignEntry[] = [
  {
    id: 1,
    player: "Dawid Remlein",
    facebookLink: "Link",
    army: "Korsarze Czarnego Wybrzeża",
    kp: 2,
    championshubLink: "Gobos",
  },
  {
    id: 2,
    player: "Krzysztof Szczepecki",
    facebookLink: "Link",
    army: "Klan Krwi - Rakh Rzeźnik z Kharanos",
    kp: 2,
    championshubLink: "dzida",
  },
  {
    id: 3,
    player: "Mateusz Kubiak",
    facebookLink: "Link",
    army: "Pogromcy Zimy",
    kp: 1,
    championshubLink: "ZimowyWilk",
  },
  {
    id: 4,
    player: "Sebastian Remlein",
    facebookLink: "Link",
    army: "Warriors of Chaos - Wolves of the SEA",
    kp: 2,
    championshubLink: "Savil",
  },
  {
    id: 5,
    player: "Łukasz Mikołajewski",
    facebookLink: "Link",
    army: "Ekspedycja Nicolasa Schlägera (Imperium)",
    kp: 1,
    championshubLink: "ukemiko",
  },
  {
    id: 6,
    player: "Kacper Walda",
    facebookLink: "Link",
    army: "Korsarze z Cair Aew (mroczne elfy)",
    kp: 2,
    championshubLink: "Warudo",
  },
  {
    id: 7,
    player: "Kuba Lenar",
    facebookLink: "Link",
    army: "Vampire Counts, The Red Duke 驪",
    kp: 2,
    championshubLink: "Lenar",
  },
  {
    id: 8,
    player: "Jan de Mezer",
    facebookLink: "Link",
    army: "Pierwsza Wyprawa Thorbucha Colensen",
    kp: 1,
    championshubLink: "",
  },
  { id: 9, player: "Mikołaj Adamiak", facebookLink: "Link", army: "Eddie the Head", kp: 2, championshubLink: "" },
  {
    id: 10,
    player: "Laurenty Tański",
    facebookLink: "Link",
    army: "Krasnoludy, Banda Larsa Villkatta",
    kp: 1,
    championshubLink: "",
  },
  {
    id: 11,
    player: "Michał Jamrozik",
    facebookLink: "Link",
    army: "Sramzes... Generał Sramzes. Prawa ręka Faraona Onanhutepa.",
    kp: 2,
    championshubLink: "Rommel",
  },
  {
    id: 12,
    player: "Mateusz Tochowicz",
    facebookLink: "Link",
    army: "Księżna Kleopatra Kabira",
    kp: 2,
    championshubLink: "AzbestowyWegorz",
  },
  {
    id: 13,
    player: "Dominik Kornaś",
    facebookLink: "Link",
    army: '"Bulb Zabójca Gigantów i jego zgniła szajka"',
    kp: 3,
    championshubLink: "Myzu",
  },
  {
    id: 14,
    player: "Piotr Filipiak",
    facebookLink: "Link",
    army: "Vaeri Hadreath z Vael Thundril",
    kp: 3,
    championshubLink: "Piotr Piotras Filipiak",
  },
  {
    id: 15,
    player: "Karol Krajewski",
    facebookLink: "Link",
    army: "Kapitan Karul",
    kp: 3,
    championshubLink: "krajewskikarol",
  },
  {
    id: 16,
    player: "Bartek Jansson",
    facebookLink: "Link",
    army: "Kompania Koneserów Złota Gurniego Długi Wąs",
    kp: 2,
    championshubLink: "Bartas",
  },
  {
    id: 17,
    player: "Bartosz Leszczyński",
    facebookLink: "Link",
    army: "Wredzug Waaagh-Oko",
    kp: 3,
    championshubLink: "Leszczorr",
  },
  {
    id: 18,
    player: "Ilia Krasiukov",
    facebookLink: "Link",
    army: "House Kronhart of Beeckerhoven, from Grand County of Osterlund",
    kp: 2,
    championshubLink: "Clawandfang",
  },
  {
    id: 19,
    player: "Dariusz Myszkiewicz",
    facebookLink: "Link",
    army: "Rikictus Wielogłowy i Skarb Spaczenia",
    kp: 3,
    championshubLink: "",
  },
  {
    id: 20,
    player: "Wojciech Gładysiak",
    facebookLink: "Link",
    army: "Pancerne zagony Be-lacora - Chaos",
    kp: 0,
    championshubLink: "",
  },
  { id: 21, player: "Rafał Capiński", facebookLink: "Link", army: "Luther von Fleischer", kp: 2, championshubLink: "" },
  {
    id: 22,
    player: "Tomasz Kwieciński",
    facebookLink: "Link",
    army: "Zielonoskóra banda Krugga Złotopyska",
    kp: 3,
    championshubLink: "",
  },
  {
    id: 23,
    player: "Mateusz Woźniak",
    facebookLink: "Link",
    army: "Skotnik Półtwarzy- Szalony Król Nocy-",
    kp: 2,
    championshubLink: "",
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <CampaignProvider initialEntries={initialEntries}>
          <div className="min-h-screen bg-[#f5f0e6]">
            <header className="border-b bg-white/50 backdrop-blur-sm">
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-MWTJKPlneQhI51u5XmxnaiSyI7VZAt.jpeg"
                      alt="Poznańska Kampania Logo"
                      width={100}
                      height={100}
                      className="h-16 w-auto"
                    />
                    <h1 className="text-2xl font-bold text-[#8B0000]">Poznańska Kampania Old World</h1>
                  </div>
                </div>
              </div>
            </header>
            <MainNav />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </div>
        </CampaignProvider>
      </body>
    </html>
  )
}



import './globals.css'