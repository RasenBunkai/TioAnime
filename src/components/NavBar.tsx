import { Link, NavLink } from "react-router-dom"
import {
  Compass,
  Menu,
  MessageCircle,
  Moon,
  PlayCircle,
  Sun,
  Tv,
} from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const navItems = [
  { to: "/", label: "Inicio", icon: Compass },
  { to: "/animes", label: "Animes", icon: PlayCircle },
  { to: "/programacion-semanal", label: "Programacion", icon: Tv },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const nextTheme = theme === "dark" ? "light" : "dark"

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            TA
          </span>
          <span>Tio Anime</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground",
                  isActive && "bg-muted text-foreground"
                )
              }
            >
              <item.icon className="size-4" />
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(nextTheme)}
                aria-label="Cambiar tema"
              >
                <Sun className="size-4 dark:hidden" />
                <Moon className="hidden size-4 dark:block" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Cambiar tema</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild variant="outline" size="icon">
                <Link
                  to="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                >
                  <MessageCircle className="size-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Discord</TooltipContent>
          </Tooltip>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" variant="outline" size="icon">
              <Menu className="size-4" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Tio Anime</SheetTitle>
            </SheetHeader>
            <div className="grid gap-2 px-4">
              {navItems.map((item) => (
                <SheetClose key={item.to} asChild>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground",
                        isActive
                          ? "bg-muted text-foreground"
                          : "hover:bg-muted hover:text-foreground"
                      )
                    }
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </NavLink>
                </SheetClose>
              ))}
              <Button
                className="mt-2 justify-start"
                variant="outline"
                onClick={() => setTheme(nextTheme)}
              >
                <Sun className="size-4 dark:hidden" />
                <Moon className="hidden size-4 dark:block" />
                Cambiar tema
              </Button>
              <Button asChild className="mt-2 justify-start" variant="outline">
                <Link
                  to="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" />
                  Discord
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
