import { useEffect, useState } from 'react'

function normalizeSlides(images, image) {
  const list = images?.length ? images : image ? [image] : []
  return list.map((item) =>
    typeof item === 'string' ? { src: item } : { ...item },
  )
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  images,
  dark = false,
  centered = false,
  layout = 'overlay',
  actions,
  intervalMs = 2500,
}) {
  const slides = normalizeSlides(images, image)
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const hasCarousel = slides.length > 1
  const isStack = layout === 'stack' || layout === 'split'

  useEffect(() => {
    if (!hasCarousel || paused) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [hasCarousel, intervalMs, slides.length, paused])

  const className = [
    'page-hero',
    dark && !isStack ? 'page-hero--dark' : '',
    centered ? 'page-hero--centered' : '',
    isStack ? 'page-hero--stack' : '',
    hasCarousel ? 'page-hero--carousel' : '',
    paused ? 'is-paused' : '',
  ]
    .filter(Boolean)
    .join(' ')

  if (isStack) {
    return (
      <section
        className={className}
        onMouseLeave={() => {
          if (hasCarousel) setPaused(false)
        }}
      >
        <div className="page-hero__intro">
          {eyebrow ? <p className="eyebrow eyebrow--hero">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {description ? (
            <p className="page-hero__description">{description}</p>
          ) : null}
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </div>

        <div
          className="page-hero__showcase page-hero__showcase--full"
          onClick={() => {
            if (hasCarousel) setPaused(true)
          }}
          role="presentation"
        >
          <div className="page-hero__slider" aria-hidden="true">
            {slides.map((slide, index) => (
              <div
                key={`${slide.src}-${index}`}
                className={`page-hero__slide${index === activeIndex ? ' is-active' : ''}`}
              >
                <div
                  className="page-hero__slide-media"
                  style={{ backgroundImage: `url(${slide.src})` }}
                  role="img"
                  aria-label="Commercial kitchen equipment"
                />
              </div>
            ))}
            <p className="page-hero__pause-hint">Paused · move away to resume</p>
          </div>

          {hasCarousel ? (
            <div
              className="page-hero__dots page-hero__dots--stack"
              role="tablist"
              aria-label="Hero slides"
            >
              {slides.map((slide, index) => (
                <button
                  key={`${slide.src}-dot-${index}`}
                  type="button"
                  className={`page-hero__dot${index === activeIndex ? ' is-active' : ''}`}
                  aria-label={`Show slide ${index + 1}`}
                  aria-selected={index === activeIndex}
                  onClick={(event) => {
                    event.stopPropagation()
                    setPaused(true)
                    setActiveIndex(index)
                  }}
                />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    )
  }

  return (
    <section
      className={className}
      onClick={() => {
        if (hasCarousel) setPaused(true)
      }}
      onMouseLeave={() => {
        if (hasCarousel) setPaused(false)
      }}
    >
      <div className="page-hero__media-stack" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={`${slide.src}-${index}`}
            className={`page-hero__media${index === activeIndex ? ' is-active' : ''}`}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        ))}
      </div>
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? (
          <p className="page-hero__description">{description}</p>
        ) : null}
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>

      {hasCarousel ? (
        <div className="page-hero__dots" role="tablist" aria-label="Hero slides">
          {slides.map((slide, index) => (
            <button
              key={`${slide.src}-dot-${index}`}
              type="button"
              className={`page-hero__dot${index === activeIndex ? ' is-active' : ''}`}
              aria-label={`Show slide ${index + 1}`}
              aria-selected={index === activeIndex}
              onClick={() => {
                setPaused(true)
                setActiveIndex(index)
              }}
            />
          ))}
        </div>
      ) : null}
    </section>
  )
}
