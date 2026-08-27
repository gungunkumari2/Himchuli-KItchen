import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="container not-found">
        <p className="eyebrow eyebrow--dark">404</p>
        <h1>Page not found</h1>
        <p>The route you requested is not part of the current React rebuild.</p>
        <Link className="button button--primary" to="/">
          Return Home
        </Link>
      </div>
    </section>
  )
}
