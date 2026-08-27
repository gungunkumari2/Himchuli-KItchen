import PageHero from '../components/PageHero'
import QuoteForm from '../components/QuoteForm'
import SectionIntro from '../components/SectionIntro'
import { company } from '../data/company'
import { heroImages } from '../data/siteContent'

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Build Your Commercial Kitchen"
        description="Tell us about your project and our team will help identify the right equipment and delivery approach."
        image={heroImages.contact}
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-panel">
            <SectionIntro
              title="Request a Quote"
              description="Share your project type, location, equipment interest, and available kitchen plan. The team can then confirm the appropriate next steps."
            />
            <QuoteForm />
          </div>

          <aside className="contact-sidebar">
            <h3>Talk with our team</h3>
            <p>
              For immediate enquiries, contact the Kathmandu or Pokhara office
              using the numbers documented in the supplied company profile.
            </p>

            <div className="contact-list">
              {company.locations.map((location) => (
                <div key={location.city}>
                  <strong>{location.city}</strong>
                  <span>{location.address}</span>
                  {location.phones.map((phone) => (
                    <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} key={phone}>
                      {phone}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <p className="source-note">
              The PDFs contain conflicting email addresses, so no email is
              published until the canonical address is confirmed.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
