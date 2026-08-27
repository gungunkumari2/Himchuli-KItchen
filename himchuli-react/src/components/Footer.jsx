import { Link } from 'react-router-dom'
import { company } from '../data/company'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Himchuli Steeltech</h3>
          <p>
            {company.experienceStatement}. Consultation, fabrication, equipment
            supply, installation, and maintenance from Nepal.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/himchuli-kitchen">Yo Himchuli Kitchen Nepal</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Locations</h4>
          <ul>
            {company.locations.map((location) => (
              <li key={location.city}>
                <strong>{location.city}</strong>
                <br />
                {location.address}
                <br />
                {location.phones[0]}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Himchuli Steeltech Industries. All rights reserved.</p>
      </div>
    </footer>
  )
}
