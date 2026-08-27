import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import { company, industries } from '../data/company'
import { heroImages, timeline } from '../data/siteContent'
import { asset } from '../utils/asset'

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Built on Experience. Focused on Quality."
        description="Commercial kitchen equipment and solutions for professional businesses."
        image={heroImages.about}
      />

      <section className="section">
        <div className="container split-panel">
          <div>
            <SectionIntro
              title="About Himchuli Steeltech Industries"
              description={company.description}
            />
            <p className="lead-text">
              Company materials describe capabilities spanning consultation,
              kitchen design and layout, stainless-steel fabrication, equipment
              manufacture and import, installation, refrigeration, and
              preventive and corrective maintenance.
            </p>
          </div>

          <img
            className="rounded-media"
            src={asset('/images/products/stainless-steel-fabrication.jpg')}
            alt="Fabrication work"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionIntro centered title="Our Journey" />
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline__item" key={item.year}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            title="Industries we support"
            description="Commercial kitchen and equipment requirements vary by operation, output, hygiene controls, service model, and available space."
          />
          <div className="industry-grid">
            {industries.map((industry) => (
              <div key={industry}>
                <span className="material-symbols-outlined" aria-hidden="true">
                  check_circle
                </span>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Looking for a long-term kitchen partner?"
        description="We combine fabrication capability, equipment knowledge, and project execution in one team."
      />
    </>
  )
}
