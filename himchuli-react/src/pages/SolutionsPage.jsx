import CtaBanner from '../components/CtaBanner'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import { heroImages } from '../data/siteContent'
import { serviceProcess, solutionTypes } from '../data/services'

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Home / Solutions"
        title="Complete Commercial Kitchen Solutions"
        description="From planning and fabrication to equipment supply, installation, and support."
        image={heroImages.solutions}
      />

      <section className="section section--muted">
        <div className="container">
          <SectionIntro
            centered
            title="Our complete delivery process"
            description="From the first discussion through maintenance support, each stage is coordinated around your menu, output, site, utilities, and budget."
          />
          <div className="process-grid">
            {serviceProcess.map((step) => (
              <article className="process-card" key={step.title}>
                <span>{step.number}</span>
                <span className="material-symbols-outlined" aria-hidden="true">
                  {step.icon}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            title="Solutions by operation"
            description="Sector-specific kitchen systems adapted for site size, throughput, workflow, and operational standards."
          />
          <div className="card-grid card-grid--two">
            {solutionTypes.map((item) => (
              <article className="text-card" key={item.title}>
                <span className="material-symbols-outlined card-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a kitchen project?"
        description="Talk to our expert team about designing and equipping your next professional kitchen."
        actionLabel="Discuss Your Project"
      />
    </>
  )
}
