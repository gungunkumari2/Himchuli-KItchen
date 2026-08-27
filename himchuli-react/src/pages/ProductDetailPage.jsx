import { Link, Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCard from '../components/ProductCard'
import { getCategory, getProduct, products } from '../data/products'

export default function ProductDetailPage() {
  const { categorySlug, productSlug } = useParams()
  const product = getProduct(categorySlug, productSlug)
  const category = getCategory(categorySlug)

  if (!product || !category) return <Navigate to="/products" replace />

  const related = products
    .filter(
      (item) =>
        item.categorySlug === product.categorySlug && item.id !== product.id,
    )
    .slice(0, 3)

  return (
    <>
      <section className="product-detail">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Products', to: '/products' },
              {
                label: category.title,
                to: `/products/${category.slug}`,
              },
              { label: product.name },
            ]}
          />

          <div className="product-detail__grid">
            <div className="product-detail__media">
              <img src={product.image} alt={product.name} />
              <div className="product-detail__media-label">
                <span className="material-symbols-outlined" aria-hidden="true">
                  {product.icon}
                </span>
                Representative category image
              </div>
            </div>

            <div className="product-detail__content">
              <p className="eyebrow eyebrow--dark">{product.category}</p>
              <h1>{product.name}</h1>
              <p className="lead-text">{product.description}</p>

              <dl className="spec-list">
                {product.attributes.map((attribute) => (
                  <div key={attribute.label}>
                    <dt>{attribute.label}</dt>
                    <dd>{attribute.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="product-note">
                <span className="material-symbols-outlined" aria-hidden="true">
                  info
                </span>
                <p>
                  The supplied PDFs do not include model numbers, dimensions,
                  power ratings, capacity, or pricing. These details will be
                  confirmed for your selected configuration.
                </p>
              </div>

              <div className="hero-actions">
                <Link
                  className="button button--primary"
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                >
                  Request Specification & Quote
                </Link>
                <Link
                  className="button button--outline-primary"
                  to={`/products/${category.slug}`}
                >
                  Back to Category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="section section--muted">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <h2>Related equipment</h2>
                <p>More products from {category.title}.</p>
              </div>
            </div>
            <div className="product-grid">
              {related.map((item) => (
                <ProductCard product={item} key={item.id} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
