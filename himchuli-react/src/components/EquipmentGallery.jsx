import { useEffect, useState } from 'react'

export default function EquipmentGallery({
  images = [],
  intervalMs = 1450,
  title = 'Featured commercial equipment',
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const hasCarousel = images.length > 1

  useEffect(() => {
    if (!hasCarousel || paused) return undefined
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, intervalMs)
    return () => window.clearInterval(timer)
  }, [hasCarousel, intervalMs, images.length, paused])

  if (!images.length) return null

  return (
    <section
      className={`equipment-gallery${paused ? ' is-paused' : ''}`}
      id="equipment-gallery"
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container equipment-gallery__intro">
        <h2>{title}</h2>
      </div>

      <div
        className="equipment-gallery__showcase"
        onClick={() => setPaused(true)}
        role="presentation"
      >
        <div className="equipment-gallery__slider" aria-hidden="true">
          {images.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className={`equipment-gallery__slide${index === activeIndex ? ' is-active' : ''}`}
            >
              <div
                className="equipment-gallery__media"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
          <p className="equipment-gallery__pause-hint">Paused · move away to resume</p>
        </div>

        {hasCarousel ? (
          <div className="equipment-gallery__dots" role="tablist" aria-label="Equipment slides">
            {images.map((src, index) => (
              <button
                key={`${src}-dot-${index}`}
                type="button"
                className={`equipment-gallery__dot${index === activeIndex ? ' is-active' : ''}`}
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
