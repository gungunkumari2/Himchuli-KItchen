import { Link } from 'react-router-dom'
import { company } from '../data/company'
import Header from './Header'
import Footer from './Footer'
import Seo from './Seo'

export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Seo />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <nav className="mobile-action-bar" aria-label="Quick contact actions">
        <a href={`tel:${company.locations[0].phones[0].replace(/[^0-9+]/g, '')}`}>
          <span className="material-symbols-outlined" aria-hidden="true">call</span>
          Call
        </a>
        <Link to="/contact">
          <span className="material-symbols-outlined" aria-hidden="true">request_quote</span>
          Quote
        </Link>
        <a href={company.catalogue} download>
          <span className="material-symbols-outlined" aria-hidden="true">download</span>
          Catalogue
        </a>
      </nav>
    </>
  )
}
