import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="border-b bg-background">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="font-bold">
          Tio Anime
        </Link>
        <div className="flex gap-6 text-sm">
          <Link to="/animes">Animes</Link>
          <Link to="/programacion-semanal">Programación semanal</Link>
          <Link to="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</Link>
        </div>
      </nav>
    </header>
  )
}
