//Emprendedor pantalla

import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { categories, products } from '../data/products'
import '../App.css'

export function CategoriaDetalle() {
  const { slug } = useParams()

  const categoria = categories.find((cat) => cat.slug === slug)
  const filtrados = useMemo(
    () => products.filter((product) => product.category === slug),
    [slug],
  )

  const titulo = categoria ? categoria.name : 'Categoría'
  const descripcion =
    categoria?.description ??
    'Explora artículos del catálogo inspirados en “Hecho en NL” con el mismo estilo visual.'

  return (
    <section className="section">
      <div className="hero">
        <h1>{titulo}</h1>
        <p className="lead">{descripcion}</p>
      </div>

      <div className="productos">
        {(filtrados.length > 0 ? filtrados : products).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <p className="lead">
        <Link to="/categorias">Volver a categorías</Link>
      </p>
    </section>
  )
}
