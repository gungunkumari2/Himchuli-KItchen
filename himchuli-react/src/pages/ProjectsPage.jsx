import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import { heroImages } from '../data/siteContent'
import { projectCategories, projects } from '../data/projects'

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      <PageHero
        dark
        title="Projects & Installations"
        description="Commercial kitchen solutions delivered for hospitality, food-service, and institutional clients."
        image={heroImages.projects}
      />

      <section className="section">
        <div className="container">
          <div className="chip-row">
            {projectCategories.map((category) => (
              <button
                type="button"
                className={`chip${activeCategory === category ? ' chip--active' : ''}`}
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="card-grid card-grid--three">
            {visibleProjects.map((project) => (
              <article className="image-card" key={project.slug}>
                <img src={project.image} alt="" loading="lazy" />
                <div className="image-card__body">
                  <div className="meta-row">
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link className="text-link" to={`/projects/${project.slug}`}>
                    View installation
                    <span className="material-symbols-outlined" aria-hidden="true">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionIntro
            title="What the source materials establish"
            description="The supplied brochures show completed kitchens, utility installations, and customer lists, but do not include signed case studies or project outcomes."
          />
          <article className="feature-panel">
            <img
              src={projects[3].image}
              alt=""
              loading="lazy"
            />
            <div>
              <h3>Commercial kitchen installation capability</h3>
              <p>
                Himchuli company materials document capabilities spanning
                kitchen design, stainless fabrication, equipment supply,
                ventilation, LPG gas lines, drainage, installation, and
                maintenance.
              </p>
              <ul className="bullet-list">
                <li>Installed kitchen and fabrication photography</li>
                <li>Customer lists across hospitality and institutions</li>
                <li>Service coverage from Kathmandu and Pokhara</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <CtaBanner
        title="Planning a similar installation?"
        description="Share your project brief and we will recommend an execution path, equipment set, and fabrication scope."
      />
    </>
  )
}
