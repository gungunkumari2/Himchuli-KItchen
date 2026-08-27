import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { company } from '../data/company'
import { navItems } from '../data/siteContent'
import { asset } from '../utils/asset'

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
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1100) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen)
    return () => document.body.classList.remove('nav-open')
  }, [isOpen])

  return (
    <header className={`site-header${isOpen ? ' is-open' : ''}`}>
      <div className="site-header__brand-band">
        <div className="container site-header__brand-row">
          <Link className="brand" to="/" onClick={() => setIsOpen(false)}>
            <img
              src={asset('/himchuli-logo-borderless.jpg')}
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
            <span className="menu-toggle__label">{isOpen ? 'Close' : 'Menu'}</span>
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
            <a
              className="mobile-menu__catalogue"
              href={company.catalogue}
              download
              onClick={() => setIsOpen(false)}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                download
              </span>
              Download Catalogue
            </a>
            <Link
              className="button button--primary mobile-menu__cta"
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
