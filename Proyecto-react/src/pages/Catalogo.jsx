import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import '../App.css'

export function Catalogo() {
  const destacados = products.slice(0, 3)
  const [indiceActual, setIndiceActual] = useState(0)

  const siguiente = () => {
    setIndiceActual((prev) => (prev === destacados.length - 1 ? 0 : prev + 1))
  }

  const anterior = () => {
    setIndiceActual((prev) => (prev === 0 ? destacados.length - 1 : prev - 1))
  }


  const productoActual = destacados[indiceActual]

  return (
    <div className="section">
      <div className="hero">
        <h1>Artículos destacados</h1>
        <p className="lead">
          Productos más populares de la temporada!!
        </p>

        <div className="carousel-container">

          <div className="featured-slide fade-in" key={productoActual.id}>
            <div className="featured-media">
              <img src={productoActual.image} alt={productoActual.name} />
            </div>
            <div className="featured-copy">
              <span className="pill">{productoActual.category || 'Hecho en NL'}</span>
              <h3>{productoActual.name}</h3>
              <span className="price-tag">${productoActual.price} MXN</span>
              <p className="featured-desc">{productoActual.description}</p>
              <br />
              <Link to={`/categoria/${productoActual.category}`} className="ver-mas-btn">
                Ver categoría <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <button className="carousel-btn prev" onClick={anterior} aria-label="Anterior">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="carousel-btn next" onClick={siguiente} aria-label="Siguiente">
            <i className="fa-solid fa-chevron-right"></i>
          </button>


          <div className="carousel-indicators">
            {destacados.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === indiceActual ? 'active' : ''}`}
                onClick={() => setIndiceActual(index)}
              ></span>
            ))}
          </div>
        </div>

      </div>

      <section className="section">
        <h2>Explora lo último</h2>
        <div className="productos">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  )
}