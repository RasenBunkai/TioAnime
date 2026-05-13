import { Bell, CalendarDays, Clock, Play } from "lucide-react"

import { SectionHeading } from "@/components/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { animeList, scheduleDays } from "@/data/anime"

export default function Programacionsemanal() {
  const defaultDay = "Sabado"

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b bg-muted/35">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <SectionHeading
            eyebrow="Programacion semanal"
            title="Calendario de estrenos para organizar tu semana"
          >
            <Button variant="outline">
              <Bell className="size-4" />
              Notificaciones
            </Button>
          </SectionHeading>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <Tabs defaultValue={defaultDay} className="gap-6">
          <div className="overflow-x-auto pb-1">
            <TabsList className="w-max">
              {scheduleDays.map((day) => (
                <TabsTrigger key={day} value={day}>
                  {day}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {scheduleDays.map((day) => {
            const releases = animeList.filter(
              (anime) => anime.releaseDay === day
            )

            return (
              <TabsContent key={day} value={day}>
                {releases.length > 0 ? (
                  <div className="grid gap-4 lg:grid-cols-2">
                    {releases.map((anime) => (
                      <Card key={anime.id} className="rounded-lg py-0">
                        <div className="grid gap-0 sm:grid-cols-[160px_1fr]">
                          <img
                            src={anime.image}
                            alt={`Poster de ${anime.title}`}
                            className="h-full min-h-64 w-full object-cover"
                            loading="lazy"
                          />
                          <div className="flex flex-col">
                            <CardHeader>
                              <div className="flex flex-wrap items-center gap-2">
                                <Badge>{anime.status}</Badge>
                                <Badge variant="secondary">
                                  Ep. {anime.episodes + 1}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl">
                                {anime.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-1 flex-col justify-between gap-6">
                              <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                                {anime.synopsis}
                              </p>
                              <div className="grid gap-3">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Clock className="size-4" />
                                  {anime.releaseTime} hora local
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <CalendarDays className="size-4" />
                                  {anime.studio} · {anime.genres.join(", ")}
                                </div>
                              </div>
                              <Button className="w-full sm:w-fit">
                                <Play className="size-4" />
                                Ver cuando salga
                              </Button>
                            </CardContent>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="rounded-lg">
                    <CardContent className="flex min-h-64 flex-col items-center justify-center text-center">
                      <CalendarDays className="size-10 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-semibold">
                        Sin estrenos registrados
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-muted-foreground">
                        Este espacio queda listo para conectar datos reales del
                        backend o una API externa.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            )
          })}
        </Tabs>
      </section>
    </main>
  )
}
