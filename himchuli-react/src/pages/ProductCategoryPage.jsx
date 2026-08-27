import { Link, Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductCard from '../components/ProductCard'
import { getCategory, products } from '../data/products'

export default function ProductCategoryPage() {
  const { categorySlug } = useParams()
  const category = getCategory(categorySlug)

  if (!category) return <Navigate to="/products" replace />

  const categoryProducts = products.filter(
    (product) => product.categorySlug === category.slug,
  )

  return (
    <>
      <section className="compact-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Products', to: '/products' },
              { label: category.title },
            ]}
          />
          <div className="compact-hero__heading">
            <span className="material-symbols-outlined" aria-hidden="true">
              {category.icon}
            </span>
            <div>
              <p className="eyebrow eyebrow--dark">{category.count} products</p>
              <h1>{category.title}</h1>
              <p>{category.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <h2>Explore {category.title}</h2>
              <p>
                Technical details and final configurations are supplied after
                reviewing your project requirements.
              </p>
            </div>
            <Link className="button button--outline-primary" to="/products">
              View all categories
            </Link>
          </div>
          <div className="product-grid">
            {categoryProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
