//Categorias pantalla

import { Link } from 'react-router-dom'
import { categories } from '../data/products'
import '../App.css'

export function Categorias() {
  return (
    <section className="section">
      <h2>Categorías</h2>
      <p className="lead">Explora las categorías principales del catálogo “Hecho en NL”.</p>
      <div className="category-tiles">
        {categories.map((cat) => (
          <Link key={cat.slug} className="category-tile" to={`/categoria/${cat.slug}`}>
            <div className="category-image">
              <img src={cat.hero} alt={cat.name} />
            </div>
            <div>
              <span className="pill">{cat.name}</span>
              <p className="featured-desc">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
