export type AnimeStatus = "En emision" | "Completo" | "Proximamente"

export type Anime = {
  id: number
  title: string
  slug: string
  image: string
  banner: string
  synopsis: string
  genres: string[]
  status: AnimeStatus
  rating: number
  episodes: number
  releaseDay: string
  releaseTime: string
  studio: string
}

export const featuredAnime: Anime = {
  id: 1,
  title: "Sousou no Frieren",
  slug: "sousou-no-frieren",
  image:
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-gHs6z8H25c3g.jpg",
  banner:
    "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-lYtej3ToD5sJ.jpg",
  synopsis:
    "Una maga elfa vuelve a mirar el mundo despues de la aventura, esta vez desde las huellas que dejaron sus companeros.",
  genres: ["Aventura", "Drama", "Fantasia"],
  status: "Completo",
  rating: 9.2,
  episodes: 28,
  releaseDay: "Viernes",
  releaseTime: "10:00",
  studio: "Madhouse",
}

export const animeList: Anime[] = [
  featuredAnime,
  {
    id: 2,
    title: "Jujutsu Kaisen",
    slug: "jujutsu-kaisen",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-LHBAeoZDIsnF.jpg",
    banner:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
    synopsis:
      "Yuji Itadori entra a un mundo de maldiciones donde cada combate exige pagar un precio.",
    genres: ["Accion", "Sobrenatural", "Shounen"],
    status: "Completo",
    rating: 8.7,
    episodes: 47,
    releaseDay: "Jueves",
    releaseTime: "11:30",
    studio: "MAPPA",
  },
  {
    id: 3,
    title: "Kimetsu no Yaiba",
    slug: "kimetsu-no-yaiba",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBl0ClmgYL.jpg",
    banner:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
    synopsis:
      "Tanjiro busca una cura para Nezuko mientras perfecciona su respiracion contra demonios cada vez mas letales.",
    genres: ["Accion", "Historico", "Drama"],
    status: "En emision",
    rating: 8.6,
    episodes: 63,
    releaseDay: "Domingo",
    releaseTime: "09:45",
    studio: "ufotable",
  },
  {
    id: 4,
    title: "One Piece",
    slug: "one-piece",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-YCDoj1EkAxFn.jpg",
    banner:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-OgZ8yBU2k49h.jpg",
    synopsis:
      "Luffy y su tripulacion siguen una ruta imposible por el Grand Line en busca del tesoro definitivo.",
    genres: ["Aventura", "Comedia", "Shounen"],
    status: "En emision",
    rating: 9.0,
    episodes: 1100,
    releaseDay: "Sabado",
    releaseTime: "22:00",
    studio: "Toei Animation",
  },
  {
    id: 5,
    title: "Solo Leveling",
    slug: "solo-leveling",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-Yw2T9w7YrQ7V.jpg",
    banner:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151807-GXrYjWmc3Lrw.jpg",
    synopsis:
      "Sung Jinwoo descubre un sistema secreto que lo empuja a subir de nivel mas alla de cualquier cazador.",
    genres: ["Accion", "Fantasia", "Aventura"],
    status: "Completo",
    rating: 8.4,
    episodes: 12,
    releaseDay: "Sabado",
    releaseTime: "12:00",
    studio: "A-1 Pictures",
  },
  {
    id: 6,
    title: "Kaiju No. 8",
    slug: "kaiju-no-8",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153288-25FBfFJzEQ5O.jpg",
    banner:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/153288-E9gJT82IX2vK.jpg",
    synopsis:
      "Kafka Hibino recibe una segunda oportunidad para entrar a las fuerzas de defensa, aunque ahora oculta un secreto enorme.",
    genres: ["Accion", "Sci-Fi", "Comedia"],
    status: "En emision",
    rating: 8.1,
    episodes: 12,
    releaseDay: "Sabado",
    releaseTime: "08:30",
    studio: "Production I.G",
  },
  {
    id: 7,
    title: "Chainsaw Man",
    slug: "chainsaw-man",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-DdP4vAdssLoz.jpg",
    banner:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/127230-iTfWb6nbQXXM.jpg",
    synopsis:
      "Denji acepta una vida de caceria brutal para perseguir deseos simples en una ciudad llena de demonios.",
    genres: ["Accion", "Horror", "Sobrenatural"],
    status: "Proximamente",
    rating: 8.5,
    episodes: 12,
    releaseDay: "Martes",
    releaseTime: "13:00",
    studio: "MAPPA",
  },
]

export const scheduleDays = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
] as const

export const trendingGenres = [
  "Accion",
  "Aventura",
  "Drama",
  "Fantasia",
  "Shounen",
  "Sobrenatural",
]
