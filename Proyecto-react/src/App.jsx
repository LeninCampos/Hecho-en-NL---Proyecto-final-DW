import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Catalogo } from './pages/Catalogo'
import { Categorias } from './pages/Categorias'
import { CategoriaDetalle } from './pages/CategoriaDetalle'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-width">
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categoria/:slug" element={<CategoriaDetalle />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
