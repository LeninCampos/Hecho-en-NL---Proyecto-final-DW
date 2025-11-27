//Inicio pantalla

import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'
import '../App.css'

export function Catalogo() {
  const destacados = products.slice(0, 3)

  return (
    <div className="section">
      <div className="hero">
        <h1>Artículos destacados</h1>
        <p className="lead">
          Inspirado en la versión HTML, este catálogo muestra productos locales con el mismo estilo y
          colores de “Hecho en NL”.
        </p>
        <div className="productos">
          {destacados.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
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
