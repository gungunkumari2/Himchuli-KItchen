import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner'
import DistributorLogos from '../components/DistributorLogos'
import EquipmentGallery from '../components/EquipmentGallery'
import Hero from '../components/Hero'
import SectionIntro from '../components/SectionIntro'
import { company } from '../data/company'
import { projects } from '../data/projects'
import { homeHeroSlides } from '../data/siteContent'
import { clientGroups } from '../data/trust'

export default function HomePage() {
  return (
    <>
      <Hero
        headline={
          <>
            Commercial Kitchen
            <br />
            Equipment
          </>
        }
        subheadline="Professional kitchen equipment, stainless-steel fabrication and complete solutions for hotels, restaurants, bakeries and institutions."
        backgroundImage="/bannerimage.png"
        primaryCta={{ label: 'Explore Products', to: '/products' }}
        secondaryCta={{ label: 'Request a Quote', to: '/contact' }}
      />

      <EquipmentGallery
        images={homeHeroSlides.filter((src) => src.includes('equipment-grid'))}
        intervalMs={1450}
        title="Featured commercial equipment"
      />

      <section className="section">
        <div className="container">
          <div className="section-heading-row">
            <SectionIntro
              title="Installation experience"
              description="Source-grounded project galleries representing the commercial kitchen work shown in Himchuli company materials."
            />
            <Link className="button button--outline-primary" to="/projects">
              View Installations
            </Link>
          </div>
          <div className="card-grid card-grid--three">
            {projects.slice(0, 3).map((project) => (
              <article className="image-card" key={project.slug}>
                <img src={project.image} alt="" loading="lazy" />
                <div className="image-card__body">
                  <p className="product-card__category">{project.category}</p>
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

      <DistributorLogos />

      <section className="section section--muted">
        <div className="container">
          <SectionIntro
            centered
            title="Customers named in company materials"
            description="A selection of hospitality, healthcare, corporate, and education customers listed in the supplied profiles."
          />
          <div className="client-groups">
            {clientGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.clients.slice(0, 6).map((client) => (
                    <li key={client}>{client}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="source-note">
            Customer names are reproduced as text from company materials. No
            endorsement or logo-use permission is implied.
          </p>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow eyebrow--dark">Our Group Companies</p>
            <h2>Specialized companies. One standard of quality.</h2>
            <p>
              Our group extends Himchuli&apos;s engineering experience through
              focused businesses serving Nepal&apos;s professional kitchen
              industry.
            </p>
          </div>

          <article className="group-company-card">
            <div className="group-company-card__logo">
              <img
                src="/yo-himchuli-kitchen-logo.png"
                alt="Yo Himchuli Kitchen Nepal Pvt. Ltd."
              />
            </div>
            <div className="group-company-card__content">
              <p className="eyebrow eyebrow--dark">Subsidiary Company</p>
              <h3>Yo Himchuli Kitchen Nepal Pvt. Ltd.</h3>
              <p>
                A subsidiary of Himchuli Steel Tech Industries Pvt. Ltd.,
                specializing in commercial kitchen equipment, fabrication, and
                complete kitchen solutions.
              </p>
              <Link className="button button--primary" to="/himchuli-kitchen">
                Learn More
              </Link>
            </div>
          </article>
        </div>
      </section>

      <CtaBanner
        title="Planning a commercial kitchen?"
        description="Share your menu, expected output, available space, and location. Our team will help define the right equipment and execution scope."
        actionLabel="Request a Consultation"
      />

      <section className="section">
        <div className="container locations-grid">
          <div>
            <p className="eyebrow eyebrow--dark">Contact & Locations</p>
            <h2>Support from Kathmandu and Pokhara</h2>
            <p>{company.description}</p>
            <a className="button button--outline-primary" href={company.catalogue} download>
              Download Product Catalogue
            </a>
          </div>
          {company.locations.map((location) => (
            <article className="location-card" key={location.city}>
              <span className="material-symbols-outlined" aria-hidden="true">
                location_on
              </span>
              <h3>{location.city}</h3>
              <p>{location.address}</p>
              {location.phones.map((phone) => (
                <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} key={phone}>
                  {phone}
                </a>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
