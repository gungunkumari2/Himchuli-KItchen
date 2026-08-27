import { Link, Navigate, useParams } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import CtaBanner from '../components/CtaBanner'
import { projects } from '../data/projects'

export default function ProjectDetailPage() {
  const { projectSlug } = useParams()
  const project = projects.find((item) => item.slug === projectSlug)

  if (!project) return <Navigate to="/projects" replace />

  return (
    <>
      <section className="project-detail-hero">
        <div className="project-detail-hero__media">
          <img src={project.image} alt="" />
        </div>
        <div className="project-detail-hero__overlay" />
        <div className="container project-detail-hero__content">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Projects', to: '/projects' },
              { label: project.title },
            ]}
          />
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container project-evidence">
          <div>
            <p className="eyebrow eyebrow--dark">Documented Scope</p>
            <h2>Installation areas represented</h2>
            <p>
              The supplied company PDFs establish the installation imagery and
              capability areas below. They do not provide a client-approved
              project date, detailed contract scope, testimonial, or measured
              outcome for this gallery.
            </p>
          </div>
          <ul>
            {project.scope.map((item) => (
              <li key={item}>
                <span className="material-symbols-outlined" aria-hidden="true">
                  check_circle
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container source-disclosure">
          <span className="material-symbols-outlined" aria-hidden="true">
            verified_user
          </span>
          <div>
            <h2>Transparent project information</h2>
            <p>
              This page intentionally avoids invented project metrics and
              endorsements. Detailed references can be supplied directly by
              Himchuli after customer approval.
            </p>
            <Link className="text-link" to="/contact">
              Request project references
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Planning a similar kitchen?"
        description="Discuss your available space, menu, expected volume, and utility requirements with the Himchuli team."
      />
    </>
  )
}
