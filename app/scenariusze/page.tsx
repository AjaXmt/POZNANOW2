"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ScenariosPage() {
  const scenario1Ref = useRef<HTMLDivElement>(null)
  const scenario2Ref = useRef<HTMLDivElement>(null)
  const scenario3Ref = useRef<HTMLDivElement>(null)

  const scrollToScenario = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Scenariusze</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => scrollToScenario(scenario1Ref)}>
            1
          </Button>
          <Button variant="outline" size="sm" onClick={() => scrollToScenario(scenario2Ref)}>
            2
          </Button>
          <Button variant="outline" size="sm" onClick={() => scrollToScenario(scenario3Ref)}>
            3
          </Button>
        </div>
      </div>

      <Card className="bg-[#f5e6d3] border-2 border-[#2a1810]/20" ref={scenario1Ref}>
        <CardHeader>
          <CardTitle className="text-2xl text-center font-serif">Scenariusz 1: Jatka pod Argalis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed">
            Leżące na skraju mrocznego lasu Kharnos miasteczko Argalis to jedna z najstarszych osad na pograniczu.
            Teoretycznie władzę sprawuje tu krwawy baron Desa Donalba, jednak w praktyce, mieszkańcy obciążonego
            podatkami miasteczka są zmuszeni sami zapewniać sobie bezpieczeństwo. Jest to doskonałe miejsce, aby
            uzupełnić zapasy po długiej morskiej podróży, lecz zasoby Argalis są ograniczone. Z tego powodu, gdy dwie
            bandy poszukiwaczy przygód spotkają się na rozciągającej się między miasteczkiem a płaską równiną, bitwa
            jest nieunikniona.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zpqVPllkV1bAElRpUy8YMpab93MLUH.png"
                alt="Mapa scenariusza Jatka pod Argalis"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NR4FmxYq5uznMEUU3OfN4DP7nA5YMh.png"
                alt="Plan rozstawienia wojsk"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Warunek zwycięstwa</h3>
                <p className="mt-2">
                  Ten scenariusz korzysta z klasycznych punktów zwycięstwa opisanych na stronie 268 podręcznika
                  głównego.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Teren</h3>
                <p className="mt-2">
                  Bitwa toczy się na niemalże idealnej równinie. Nie należy rozstawiać terenu poza kilkoma prostymi
                  ozdobami takimi jak kamienie, krzaczki czy pojedyncze drzewka.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Rozstawienie</h3>
                <p className="mt-2">
                  Bandy wypadają na siebie niespodziewanie. Każdy w sekrecie wybiera równocześnie swoich jednostek (np.
                  za zasłoną taką jak ekran mistrza gry).
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Pierwsza tura</h3>
                <p className="mt-2">
                  Grę rozpoczyna gracz, którego postać ma wyższą wartość inicjatywy. W przypadku remisu należy losowo
                  wybrać rozpoczynającego grę gracza.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Czas gry</h3>
                <p className="mt-2">Bitwa trwa sześć rund.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Nagroda</h3>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Przyłapujące zwycięstwo – 2 Chwały + 1 Łup</li>
                  <li>Zwycięstwo – 2 Chwały</li>
                  <li>Remis – 1 Chwały dla każdego z graczy</li>
                  <li>Porażka – brak</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#f5e6d3] border-2 border-[#2a1810]/20" ref={scenario2Ref}>
        <CardHeader>
          <CardTitle className="text-2xl text-center font-serif">Scenariusz 2: Pamiątka po tacie</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed">
            Karolina Aquilena, córka barona Carrand, znanego z udziału w krucjatach w Arabii, którymi zadłużył sobie
            nienawiść samego Setry, przywiodła nas na swym dworze z nieznanym przystojnym przeklętym królową. Wieść
            przybycie uradowało ją, gdyż wierzy, że znalezione Niekłarsz przez rycerzy jej ojca skarby, zatruwaną jej
            ziemie. Szuka kogoś, kto obawia się je wydobyć z Kurthanie i zabrać dla siebie. Obietnica łatwego zysku
            szybko skłoniła ją jednak w pył, gdyż po dotarciu na miejsce okazało się, że sprytna władczyni poinformowała
            o skarbie także drugą bandę awanturników. Wszystko wskazuje na to, że splanowała podstęp, w swoich problemów
            ze złotym zamachem.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vZ3Xm0no1udUbrIUU0QxscCS1u8mxx.png"
                alt="Mapa scenariusza Pamiątka po tacie"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EN7TGDiDKx2xPkZZkdrCLM29AUb2ig.png"
                alt="Plan rozstawienia wojsk"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Warunek zwycięstwa</h3>
                <p className="mt-2">Bitwę wygrywa gracz, który zdobędzie więcej skarbów.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Teren</h3>
                <p className="mt-2">
                  Bitwa toczy się w głębi lasu Kharnos. Aby to zaprezentować, należy rozstawić 6 lasów każdy w innym
                  sektorze pola bitwy. W każdym z nich należy umieścić żeton lub dekorację, reprezentującą znajdującą
                  się w nim możliwy skarb. Ponadto można rozmieścić teren typu dekoracje.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Rozstawienie</h3>
                <p className="mt-2">Normalne zasady rozstawienia.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Pierwsza tura</h3>
                <p className="mt-2">Roll off, +1 do rzutu dla gracza, który pierwszy skończył rozstawienie.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Czas gry</h3>
                <p className="mt-2">
                  Gra kończy się kiedy wszystkie skarby zostaną odnalezione albo kiedy wszystkie jednostki jednego z
                  graczy zostaną usunięte ze stołu.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Nagroda</h3>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Zwycięstwo – 1 Chwała + łupy zebrane w trakcie bitwy</li>
                  <li>Remis/Porażka – łupy zebrane w trakcie bitwy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Specjalne zasady</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-bold mb-2">Poszukiwanie skarbów</h4>
                <p className="text-sm">
                  Na początku fazy strategii, jednostka będąca w obszarze lasu, z żetonem skarbu może w swoich
                  następnych akcjach wykonać test na znalezienie skarbu. Co turę szukania, gracz rzuca kością k6 i
                  zapisuje wynik na kartce. Kiedy suma zapisanych rzutów wyniesie 6 lub więcej skarb zostaje
                  odnaleziony, co należy zaznaczyć, usuwając z lasu żeton skarbu i umieszczając żeton skarbu przy
                  jednostce, która go znalazła. Pojedyncze postacie (lone characters) przy szukaniu skarbów rzucają
                  dwoma kośćmi i wybierają niższy wynik. Oddziały piechoty o ale co najmniej 5 rzucają natomiast dwoma
                  kośćmi i wybierają wyższy wynik.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Transport i odbijanie skarbu</h4>
                <p className="text-sm">
                  Żeton skarbu przemiesza się razem z jednostką, do której jest przypisany. Jeżeli jednostka musi
                  wykonać ruch typu flee, pozostawia żeton skarbu w miejscu, gdzie rozpoczyna ruch. Pozostawiony żeton
                  może zostać podniesiony przez oddział, który wejdzie z nim w kontakt. Oddział, który podnosi skarb,
                  musi natychmiastowo zakończyć swój ruch w momencie kontaktu z żetonem. Jeżeli w ramach walki oddział
                  niosący żeton zostanie zniszczony, oddział z którym walczył automatycznie przejmuje żeton skarbu.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-2">Wycofanie ze skarbem</h4>
              <p className="text-sm">
                Po dotarciu do krawędzi swojego obszaru rozstawienia, jednostki niosące skarb mogą wycofać się z bitwy z
                łupem.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#f5e6d3] border-2 border-[#2a1810]/20" ref={scenario3Ref}>
        <CardHeader>
          <CardTitle className="text-2xl text-center font-serif">Scenariusz 3: Przeprawa przez Limnallę</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed">
            Warowne miasto Zvorak, to jedna z największych osad księstw pogranicza. Plotki głoszą, że żyje tam mistrz,
            który może wiedzieć, gdzie leży skarb, którego poszukujecie. Aby tam dotrzeć, trzeba jednak wpierw
            przekroczyć płynącą z gór Appucini rzekę zwaną Limnallą. Jedyna przeprawa w promieniu wielu mil to
            starożytny krasnoludzki most. Ten, kto zdobędzie nad nim kontrolę, z pewnością zyska cenną przewagę w
            wyścigu o skarb.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aavAoScS8KegMBqnvhS7RiRSqnqqLI.png"
                alt="Mapa scenariusza Przeprawa przez Limnallę"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cSDY8bd32gyjXeKzhZiyDdBMu9Ggbm.png"
                alt="Plan rozstawienia wojsk"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Warunek zwycięstwa</h3>
                <p className="mt-2">
                  Gracz, który w momencie zakończenia scenariusza kontroluje most, wygrywa. Jeżeli siła jego jednostek w
                  obrębie mostu jest przynajmniej dwa razy niż przeciwnika, odnosi zdecydowane zwycięstwo.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Teren</h3>
                <p className="mt-2">
                  Po jednej stronie rzeki należy umieścić wzgórze a po drugiej las. Środek pola bitwy musi przecinać
                  rzeka z mostem szerokim na co najmniej 4 cale i długim na co najmniej 6 cali.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Rozstawienie</h3>
                <p className="mt-2">Należy wybrać losowo, po której stronie rzeki rozpoczyna każdy z graczy.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Pierwsza tura</h3>
                <p className="mt-2">Roll off, +1 do rzutu dla gracza, który pierwszy skończył rozstawienie.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Czas gry</h3>
                <p className="mt-2">
                  Z końcem tury każdego z graczy, rozpoczynając od 5 rundy należy wykonać rzut k6. Gdy suma rzutów
                  kośćmi wyniesie 10 lub więcej gra się natychmiast kończy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Nagroda</h3>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Zdecydowane zwycięstwo – 2 Chwały</li>
                  <li>Zwycięstwo – 1 Chwały</li>
                  <li>Remis/porażka – brak</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-[#2a1810]/20 pb-2">Specjalne zasady</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-bold mb-2">Kontrola mostu</h4>
                <p className="text-sm">
                  Aby zdecydować, który gracz kontroluje most, należy zliczyć siłę (unit strength) wszystkich modeli na
                  moście oraz w odległości do 3" od mostu. Gracz, który w ten sposób uzyskał wynik wyższy od
                  przeciwnika, kontroluje most. Siła modeli znajdujących się w rzece nie wlicza się do kontroli mostu.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Most</h4>
                <p className="text-sm">
                  Dłuższe boki mostu są traktowane jako nieprzekraczalny teren dający cover. Sam most nie ma specjalnych
                  właściwości.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-2">Rzeka</h4>
              <p className="text-sm">
                Ze względu na wartki nurt, rzeka jest traktowana jako niebezpieczny teren na potrzeby kawalerii,
                piechoty i bestii, oraz jako nieprzekraczalny teren na potrzeby wydawanych machin wojennych.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Ukryte skarby</h4>
              <p className="text-sm">
                Plotka głosi, że na terenie wzgórza oraz lasu ukryte są łupy bandytów, którzy niegdyś grasowali na
                trakcie. Każdy z tych terenów może zostać przeszukany zgodnie z zasadami scenariusza nr 2. Jest to
                jednak jedynie plotka, więc wyrzucenie na kości wyniku 1 oznacza, że skarbu nie ma.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

