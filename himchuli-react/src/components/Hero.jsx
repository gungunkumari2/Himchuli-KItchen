import { Link } from 'react-router-dom'

const defaultStats = [
  { icon: 'calendar_month', value: '25+', label: 'Years' },
  { icon: 'kitchen', value: '500+', label: 'Installations' },
  { icon: 'verified', value: 'ISO', label: 'Quality Focus' },
  { icon: 'public', value: 'Pan-Nepal', label: 'Service' },
]

export default function Hero({
  badge = 'Serving the commercial kitchen industry since 1998',
  badgeIcon = 'local_fire_department',
  headline = (
    <>
      Commercial Kitchen
      <br />
      Equipment
    </>
  ),
  subheadline = 'Professional kitchen equipment, stainless-steel fabrication and complete solutions for hotels, restaurants, bakeries and institutions.',
  backgroundImage = '/bannerimage.png',
  backgroundAlt = 'Professional stainless-steel commercial kitchen',
  primaryCta = { label: 'Explore Products', to: '/products' },
  secondaryCta = { label: 'Request a Quote', to: '/contact' },
  stats = defaultStats,
  showScrollHint = true,
}) {
  return (
    <section className="premium-hero" aria-label="Hero">
      <div className="premium-hero__media" aria-hidden="true">
        <div
          className="premium-hero__media-zoom"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          role="img"
          aria-label={backgroundAlt}
        />
        <div className="premium-hero__overlay" />
        <div className="premium-hero__texture" />
      </div>

      <div className="container premium-hero__content">
        <p className="premium-hero__badge">
          <span className="material-symbols-outlined" aria-hidden="true">
            {badgeIcon}
          </span>
          {badge}
        </p>
        <span className="premium-hero__divider" aria-hidden="true" />
        <h1 className="premium-hero__headline">{headline}</h1>
        <p className="premium-hero__subheadline">{subheadline}</p>

        <div className="premium-hero__actions">
          <Link className="premium-hero__btn premium-hero__btn--primary" to={primaryCta.to}>
            {primaryCta.label}
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
          <Link
            className="premium-hero__btn premium-hero__btn--secondary"
            to={secondaryCta.to}
          >
            {secondaryCta.label}
            <span className="material-symbols-outlined" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>

      {showScrollHint ? (
        <a className="premium-hero__scroll" href="#equipment-gallery" aria-label="Scroll to equipment">
          <span className="premium-hero__scroll-mouse" aria-hidden="true" />
          <span className="material-symbols-outlined" aria-hidden="true">
            expand_more
          </span>
        </a>
      ) : null}

      {stats?.length ? (
        <div className="premium-hero__trust">
          <div className="container premium-hero__trust-grid">
            {stats.map((item) => (
              <article className="premium-hero__stat" key={item.label}>
                <span className="material-symbols-outlined" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
