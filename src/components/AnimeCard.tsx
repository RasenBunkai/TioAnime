import { Link } from "react-router-dom"
import { CalendarDays, Play, Star } from "lucide-react"

import type { Anime } from "@/data/anime"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type AnimeCardProps = {
  anime: Anime
  compact?: boolean
}

export function AnimeCard({ anime, compact = false }: AnimeCardProps) {
  return (
    <Card className="h-full gap-4 rounded-lg py-0">
      <div className="relative aspect-3/4 overflow-hidden bg-muted">
        <img
          src={anime.image}
          alt={`Poster de ${anime.title}`}
          className="h-full w-full object-cover transition duration-300 group-hover/card:scale-105"
          loading="lazy"
        />
        <Badge className="absolute top-3 left-3 bg-background/90 text-foreground shadow-sm backdrop-blur">
          {anime.status}
        </Badge>
        <div className="absolute right-3 bottom-3 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white">
          <Star className="size-3 fill-yellow-400 text-yellow-400" />
          {anime.rating.toFixed(1)}
        </div>
      </div>

      <CardHeader className="px-4">
        <CardTitle className="line-clamp-1 text-base">{anime.title}</CardTitle>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarDays className="size-3.5" />
          {anime.releaseDay} · {anime.releaseTime}
        </div>
      </CardHeader>

      {!compact && (
        <CardContent className="px-4">
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {anime.synopsis}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {anime.genres.slice(0, 3).map((genre) => (
              <Badge key={genre} variant="secondary" className="rounded-md">
                {genre}
              </Badge>
            ))}
          </div>
        </CardContent>
      )}

      <CardFooter className="mt-auto px-4 pb-4">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/animes?anime=${anime.slug}`}>
            <Play className="size-4" />
            Ver anime
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
