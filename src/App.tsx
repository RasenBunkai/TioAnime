import { Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar"

import Home from "./pages/home"
import Animes from "./pages/animes"
import Programacionsemanal from "./pages/programacion-semanal"

export function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/programacion-semanal" element={<Programacionsemanal />} />
      </Routes>
    </>
  )
}

export default App
