import { Link } from 'react-router-dom'

export default function CtaBanner({ title, description, actionLabel = 'Get a Quote' }) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="button button--light" to="/contact">
          {actionLabel}
        </Link>
      </div>
    </section>
  )
}
