import { useMemo, useState } from "react"
import { Filter, Search, SlidersHorizontal } from "lucide-react"

import { AnimeCard } from "@/components/AnimeCard"
import { SectionHeading } from "@/components/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { animeList, trendingGenres, type AnimeStatus } from "@/data/anime"

const statusFilters: Array<AnimeStatus | "Todos"> = [
  "Todos",
  "En emision",
  "Completo",
  "Proximamente",
]

export default function Animes() {
  const [query, setQuery] = useState("")
  const [genre, setGenre] = useState("Todos")
  const [status, setStatus] = useState<AnimeStatus | "Todos">("Todos")

  const filteredAnime = useMemo(() => {
    return animeList.filter((anime) => {
      const matchesQuery =
        anime.title.toLowerCase().includes(query.toLowerCase()) ||
        anime.studio.toLowerCase().includes(query.toLowerCase())
      const matchesGenre = genre === "Todos" || anime.genres.includes(genre)
      const matchesStatus = status === "Todos" || anime.status === status

      return matchesQuery && matchesGenre && matchesStatus
    })
  }, [genre, query, status])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-muted/35">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <SectionHeading
            eyebrow="Catalogo"
            title="Encuentra anime por genero, estado o estudio"
          >
            <Badge variant="secondary" className="rounded-md">
              {filteredAnime.length} resultados
            </Badge>
          </SectionHeading>

          <Card className="mt-6 rounded-lg">
            <CardContent className="grid gap-4 p-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="relative">
                <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar por titulo o estudio"
                  className="pl-9"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="size-4" />
                  Ordenar
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="size-4" />
                  Filtros
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-6">
          <Card className="rounded-lg">
            <CardContent className="space-y-5">
              <div>
                <p className="text-sm font-medium">Estado</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {statusFilters.map((filter) => (
                    <Button
                      key={filter}
                      type="button"
                      variant={status === filter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setStatus(filter)}
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <p className="text-sm font-medium">Generos</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Todos", ...trendingGenres].map((item) => (
                    <Button
                      key={item}
                      type="button"
                      variant={genre === item ? "default" : "outline"}
                      size="sm"
                      onClick={() => setGenre(item)}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        <div>
          <Tabs defaultValue="grid" className="gap-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                Mostrando contenido curado para el MVP
              </p>
              <TabsList>
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="list">Lista</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="grid">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredAnime.map((anime) => (
                  <AnimeCard key={anime.id} anime={anime} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list">
              <div className="grid gap-3">
                {filteredAnime.map((anime) => (
                  <Card key={anime.id} className="rounded-lg">
                    <CardContent className="grid gap-4 p-4 sm:grid-cols-[96px_1fr_auto] sm:items-center">
                      <img
                        src={anime.image}
                        alt={`Poster de ${anime.title}`}
                        className="aspect-[3/4] w-24 rounded-md object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold">{anime.title}</h3>
                          <Badge variant="secondary">{anime.status}</Badge>
                        </div>
                        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                          {anime.synopsis}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {anime.studio} · {anime.episodes} episodios
                        </p>
                      </div>
                      <Button variant="outline">Ver</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
