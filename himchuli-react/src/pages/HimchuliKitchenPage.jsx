import { Link } from 'react-router-dom'
import { company } from '../data/company'
import { asset } from '../utils/asset'

const services = [
  {
    icon: 'countertops',
    title: 'Commercial Kitchen Equipment',
    description:
      'Professional cooking, preparation, refrigeration, and storage equipment for demanding food-service operations.',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Fabrication & Steel Solutions',
    description:
      'Purpose-built stainless-steel counters, sinks, racks, workstations, and site-specific fabricated systems.',
  },
  {
    icon: 'design_services',
    title: 'Complete Kitchen Solutions',
    description:
      'Planning, equipment selection, fabrication, installation, and support coordinated through one experienced team.',
  },
]

export default function HimchuliKitchenPage() {
  return (
    <>
      <section className="subsidiary-hero">
        <div className="container subsidiary-hero__grid">
          <div className="subsidiary-hero__content">
            <Link className="parent-company-link" to="/">
              <span className="material-symbols-outlined">arrow_back</span>
              Part of Himchuli Steel Tech Industries Pvt. Ltd.
            </Link>
            <p className="eyebrow eyebrow--dark">Our Subsidiary</p>
            <h1>Yo Himchuli Kitchen Nepal Pvt. Ltd.</h1>
            <p className="subsidiary-hero__description">
              Stronger equipment and complete commercial kitchen solutions for
              hospitality, food-service, and institutional businesses across
              Nepal.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#services">
                Explore Services
              </a>
              <a className="button button--outline-primary" href="#contact">
                Contact the Team
              </a>
            </div>
          </div>

          <div className="subsidiary-hero__logo">
            <img
              src={asset('/yo-himchuli-kitchen-logo.png')}
              alt="Yo Himchuli Kitchen Nepal Pvt. Ltd."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container subsidiary-intro">
          <div>
            <p className="eyebrow eyebrow--dark">Company Introduction</p>
            <h2>Focused expertise for professional kitchens</h2>
          </div>
          <div>
            <p className="lead-text">
              Yo Himchuli Kitchen Nepal Pvt. Ltd. is a subsidiary of Himchuli
              Steel Tech Industries Pvt. Ltd., created to provide specialized
              commercial kitchen equipment and steel fabrication solutions.
            </p>
            <p className="lead-text">
              Backed by the parent company&apos;s engineering and project
              experience, the company supports customers from initial kitchen
              planning through supply, installation, and ongoing service.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--muted" id="services">
        <div className="container">
          <div className="section-intro section-intro--centered">
            <p className="eyebrow eyebrow--dark">Products & Services</p>
            <h2>Solutions designed around your operation</h2>
            <p>
              Core capabilities aligned with the commercial kitchen equipment
              and fabrication ranges documented in the group company materials.
            </p>
          </div>

          <div className="subsidiary-services">
            {services.map((service) => (
              <article className="subsidiary-service-card" key={service.title}>
                <span className="material-symbols-outlined">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container subsidiary-contact">
          <div>
            <p className="eyebrow eyebrow--dark">Contact Information</p>
            <h2>Discuss your kitchen requirements</h2>
            <p>
              Subsidiary-specific contact information was not available in the
              supplied PDFs. Use the parent company offices below for current
              enquiries.
            </p>
          </div>

          <div className="subsidiary-contact__details">
            <div>
              <span className="material-symbols-outlined">call</span>
              <div>
                <strong>Kathmandu Office</strong>
                <p>{company.locations[0].phones.join(' · ')}</p>
              </div>
            </div>
            <div>
              <span className="material-symbols-outlined">call</span>
              <div>
                <strong>Pokhara Office</strong>
                <p>{company.locations[1].phones.join(' · ')}</p>
              </div>
            </div>
            <div>
              <span className="material-symbols-outlined">location_on</span>
              <div>
                <strong>Parent Company Locations</strong>
                <p>Kalanki, Kathmandu · Lakeside, Pokhara</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
