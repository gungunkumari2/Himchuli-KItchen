import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link
        className="product-card__media"
        to={`/products/${product.categorySlug}/${product.slug}`}
        aria-label={`View ${product.name}`}
      >
        <img src={product.image} alt="" loading="lazy" />
        <span className="material-symbols-outlined" aria-hidden="true">
          {product.icon}
        </span>
      </Link>
      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3>
          <Link to={`/products/${product.categorySlug}/${product.slug}`}>
            {product.name}
          </Link>
        </h3>
        <p>{product.description}</p>
        <Link
          className="text-link"
          to={`/products/${product.categorySlug}/${product.slug}`}
        >
          View product
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_forward
          </span>
        </Link>
      </div>
    </article>
  )
}
