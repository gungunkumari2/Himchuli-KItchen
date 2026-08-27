import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { company } from '../data/company'
import { navItems } from '../data/siteContent'

function NavItems({ onNavigate = () => {} }) {
  return navItems.map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      className={({ isActive }) =>
        `site-nav__link${isActive ? ' is-active' : ''}`
      }
      onClick={onNavigate}
    >
      {item.label}
    </NavLink>
  ))
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <div className="site-header__brand-band">
        <div className="container site-header__brand-row">
          <Link className="brand" to="/">
            <img
              src="/himchuli-logo-borderless.jpg"
              alt="Himchuli Steeltech Industries Pvt. Ltd."
              className="brand-logo"
            />
          </Link>

          <div className="header-brand-message">
            <span>{company.experienceStatement}</span>
            <strong>Design · Fabrication · Equipment · Installation</strong>
          </div>

          <a
            className="header-contact"
            href={`tel:${company.locations[0].phones[0].replace(/[^0-9+]/g, '')}`}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              call
            </span>
            <span>
              <strong>{company.locations[0].phones[0]}</strong>
            </span>
          </a>

        <button
            type="button"
            className="menu-toggle"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {isOpen ? 'close' : 'menu'}
            </span>
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <div className="site-header__nav-band">
        <div className="container site-header__nav-row">
          <nav className="site-nav site-nav--desktop" aria-label="Primary">
            <NavItems />
          </nav>

          <div className="header-nav-actions">
            <a className="header-catalogue-link" href={company.catalogue} download>
              <span className="material-symbols-outlined" aria-hidden="true">
                download
              </span>
              Catalogue
            </a>
            <Link className="button button--primary header-cta" to="/contact">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="mobile-menu" id="mobile-menu">
          <nav className="container mobile-menu__inner" aria-label="Mobile">
            <NavItems onNavigate={() => setIsOpen(false)} />
            <Link className="button button--primary mobile-menu__cta" to="/contact" onClick={() => setIsOpen(false)}>
              Get a Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
