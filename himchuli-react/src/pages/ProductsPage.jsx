import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import ProductFilters from '../components/ProductFilters'
import SectionIntro from '../components/SectionIntro'
import { heroImages } from '../data/siteContent'
import { productCategories, products } from '../data/products'
import { company } from '../data/company'

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const activeCategory = searchParams.get('category') || 'all'

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return products.filter((product) => {
      const categoryMatches =
        activeCategory === 'all' || product.categorySlug === activeCategory
      const queryMatches =
        !normalizedQuery ||
        `${product.name} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(normalizedQuery)
      return categoryMatches && queryMatches
    })
  }, [activeCategory, query])

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (!value || value === 'all') next.delete(key)
    else next.set(key, value)
    setSearchParams(next, { replace: true })
  }

  return (
    <>
      <PageHero
        eyebrow="Home / Products"
        title="Commercial Kitchen Equipment"
        description="Browse 60 equipment and fabrication types identified in Himchuli company materials, organized for professional kitchen planning."
        image={heroImages.products}
        centered
        actions={
          <>
            <a className="button button--primary" href="#catalogue">
              Browse Catalogue
            </a>
            <a className="button button--outline-primary" href={company.catalogue} download>
              Download PDF
            </a>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            title="Equipment categories"
            description="A corrected product taxonomy based on the supplied catalogues. Select a category to explore its equipment."
          />
          <div className="category-grid">
            {productCategories.map((category) => (
              <article className="category-card" key={category.slug}>
                <div className="category-card__icon">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    {category.icon}
                  </span>
                </div>
                <p>{category.count} products</p>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link className="text-link" to={`/products/${category.slug}`}>
                  Explore category
                  <span className="material-symbols-outlined" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted" id="catalogue">
        <div className="container">
          <SectionIntro
            title="Full product catalogue"
            description="Search by product name or filter by category. Detailed capacities, dimensions, utilities, and pricing are confirmed during quotation."
          />
          <ProductFilters
            categories={productCategories}
            activeCategory={activeCategory}
            query={query}
            onCategoryChange={(value) => updateFilter('category', value)}
            onQueryChange={(value) => updateFilter('q', value)}
            resultCount={filteredProducts.length}
          />
          {filteredProducts.length ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          ) : (
            <div className="catalogue-empty">
              <span className="material-symbols-outlined" aria-hidden="true">
                search_off
              </span>
              <h3>No matching products</h3>
              <p>Try a broader search or select another category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
