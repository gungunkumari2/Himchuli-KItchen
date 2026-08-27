import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import { blogPosts, heroImages } from '../data/siteContent'

export default function BlogPage() {
  const [featured, ...articles] = blogPosts

  return (
    <>
      <PageHero
        title="Commercial Kitchen Insights"
        description="Guides, ideas, and practical information for planning and operating professional kitchens."
        image={heroImages.blog}
      />

      <section className="section">
        <div className="container">
          <div className="chip-row">
            {['Kitchen Planning', 'Equipment Guides', 'Refrigeration', 'Bakery', 'Restaurant', 'Hotel', 'Maintenance'].map((chip, index) => (
              <span className={`chip${index === 0 ? ' chip--active' : ''}`} key={chip}>
                {chip}
              </span>
            ))}
          </div>

          <article className="feature-panel">
            <img src={featured.image} alt={featured.title} />
            <div>
              <span className="eyebrow eyebrow--dark">{featured.category}</span>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionIntro
            title="Latest articles"
            description="Practical planning, equipment, refrigeration, and maintenance guidance for professional kitchens."
          />
          <div className="card-grid card-grid--three">
            {articles.map((article) => (
              <article className="image-card" key={article.title}>
                <img src={article.image} alt={article.title} />
                <div className="image-card__body">
                  <span className="eyebrow eyebrow--dark">{article.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
