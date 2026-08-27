import { authorizedDistributors } from '../data/distributors'

export default function DistributorLogos() {
  const featured = authorizedDistributors.find((d) => d.featured)
  const partners = authorizedDistributors.filter((d) => !d.featured)

  return (
    <section className="section distributor-section" id="distributors">
      <div className="container">
        <div className="distributor-section__intro">
          <p className="eyebrow eyebrow--dark">Authorised Distributor</p>
          <h2>Trusted global brands for professional kitchens</h2>
          <p>
            Himchuli is an authorised distributor for leading commercial kitchen
            equipment brands, as shown in company profile materials.
          </p>
        </div>

        <div
          className="distributor-orbit"
          role="list"
          aria-label="Authorised distributor brands"
        >
          {featured ? (
            <article
              className="distributor-orbit__sun"
              role="listitem"
              aria-label={`${featured.name} — flagship brand`}
            >
              <p className="distributor-logos__badge">Flagship Brand</p>
              <img
                src={featured.image}
                alt={`${featured.name} logo`}
                loading="lazy"
              />
              <span className="distributor-logos__name">{featured.name}</span>
            </article>
          ) : null}

          {partners.map((distributor, index) => (
            <article
              className={`distributor-orbit__planet${
                distributor.slug === 'hobart' ? ' distributor-orbit__planet--lg' : ''
              }`}
              key={distributor.slug}
              role="listitem"
              style={{
                '--i': index,
                '--total': partners.length,
              }}
            >
              <img
                src={distributor.image}
                alt={`${distributor.name} logo`}
                loading="lazy"
              />
              <span className="distributor-logos__name">{distributor.name}</span>
            </article>
          ))}
        </div>

        <p className="source-note">
          Official brand logos of authorised distributor partners. All
          trademarks belong to their respective owners.
        </p>
      </div>
    </section>
  )
}
