import '../App.css'

export function ProductCard({ name, price, description, image }) {
  return (
    <article className="producto">
      <div className="imagen">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p className="price">${price} MXN</p>
        <p>{description}</p>
      </div>
    </article>
  )
}
