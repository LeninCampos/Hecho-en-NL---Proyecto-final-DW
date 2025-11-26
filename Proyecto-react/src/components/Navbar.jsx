import { NavLink } from 'react-router-dom'
import '../App.css'

const navLinkClass = ({ isActive }) => (isActive ? 'active' : '')

export function Navbar() {
  return (
    <header className="header">
      <div className="page-width header-inner">
        <div className="brand-row">
          <div className="logo">
            <img src="/img/logo-fondo-n.png" alt="Hecho en NL logo" />
          </div>
          <nav className="categories" aria-label="Navegación principal">
            <NavLink className={navLinkClass} to="/">
              Inicio
            </NavLink>
            <NavLink className={navLinkClass} to="/categorias">
              Categorías
            </NavLink>
            <NavLink className={navLinkClass} to="/categoria/servicios">
              Emprendedor
            </NavLink>
          </nav>
        </div>
        <div className="search-container" role="search">
          <i className="fa-solid fa-magnifying-glass search-icon" aria-hidden="true"></i>
          <span className="search-label">Buscar</span>
          <input type="search" placeholder="Buscar productos" aria-label="Buscar productos" />
        </div>
      </div>
    </header>
  )
}
