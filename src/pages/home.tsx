import { Link } from "react-router-dom"
import { CalendarClock, Play, Sparkles, Star, TrendingUp } from "lucide-react"

import { AnimeCard } from "@/components/AnimeCard"
import { SectionHeading } from "@/components/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { featuredAnime, animeList, trendingGenres } from "@/data/anime"

const stats = [
  { label: "Series activas", value: "42" },
  { label: "Episodios", value: "1.2k" },
  { label: "En emision", value: "18" },
]

export default function Home() {
  const weeklyAnime = animeList.filter((anime) => anime.status === "En emision")
  const topAnime = animeList.slice(1, 5)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b">
        <img
          src={featuredAnime.banner}
          alt={`Banner de ${featuredAnime.title}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/75 to-background/35" />

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <Badge className="mb-5 rounded-md bg-primary text-primary-foreground">
              <Sparkles className="size-3.5" />
              Estreno destacado
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              Anime listo para ver, descubrir y seguir cada semana.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Un MVP enfocado en lo esencial: portada editorial, catalogo
              escaneable, horarios claros y acciones rapidas para que el usuario
              encuentre su siguiente episodio sin friccion.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/animes">
                  <Play className="size-4" />
                  Explorar catalogo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/programacion-semanal">
                  <CalendarClock className="size-4" />
                  Ver programacion
                </Link>
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border bg-card/80 p-4"
                >
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Card className="rounded-lg bg-card/85 py-0 backdrop-blur">
            <div className="grid gap-0 md:grid-cols-[220px_1fr] lg:grid-cols-1 xl:grid-cols-[220px_1fr]">
              <img
                src={featuredAnime.image}
                alt={`Poster de ${featuredAnime.title}`}
                className="h-full min-h-80 w-full object-cover"
              />
              <CardContent className="flex flex-col justify-between gap-6 p-6">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {featuredAnime.genres.map((genre) => (
                      <Badge key={genre} variant="secondary">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold">
                    {featuredAnime.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {featuredAnime.synopsis}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Popularidad</span>
                    <span className="font-medium">
                      {featuredAnime.rating.toFixed(1)}/10
                    </span>
                  </div>
                  <Progress value={featuredAnime.rating * 10} />
                  <Button asChild className="w-full">
                    <Link to="/animes">
                      <Star className="size-4" />
                      Ver detalles
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Tendencias" title="Lo que mas se esta viendo">
          <Button asChild variant="outline">
            <Link to="/animes">
              <TrendingUp className="size-4" />
              Ranking
            </Link>
          </Button>
        </SectionHeading>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} compact />
          ))}
        </div>
      </section>

      <section className="border-y bg-muted/35">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Descubrimiento"
            title="Categorias pensadas para navegar rapido"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trendingGenres.map((genre) => (
              <Link
                key={genre}
                to={`/animes?genero=${genre.toLowerCase()}`}
                className="rounded-lg border bg-background p-4 transition hover:border-primary/40 hover:bg-card"
              >
                <p className="font-medium">{genre}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {
                    animeList.filter((anime) => anime.genres.includes(genre))
                      .length
                  }{" "}
                  titulos disponibles
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading
          eyebrow="Esta semana"
          title="Episodios nuevos para seguir sin perder el hilo"
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {weeklyAnime.map((anime) => (
            <Card key={anime.id} className="rounded-lg">
              <CardContent className="flex items-center gap-4">
                <img
                  src={anime.image}
                  alt={`Miniatura de ${anime.title}`}
                  className="size-20 rounded-md object-cover"
                  loading="lazy"
                />
                <div>
                  <Badge variant="secondary">{anime.releaseDay}</Badge>
                  <h3 className="mt-2 font-medium">{anime.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {anime.releaseTime} · Episodio {anime.episodes + 1}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
