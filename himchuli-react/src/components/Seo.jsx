import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { company } from '../data/company'
import { products } from '../data/products'
import { projects } from '../data/projects'

const pageMetadata = {
  '/': {
    title: 'Himchuli Steeltech Industries | Commercial Kitchen Solutions Nepal',
    description:
      'Commercial kitchen consultation, fabrication, equipment supply, installation, and maintenance from Kathmandu and Pokhara since 1998.',
  },
  '/products': {
    title: 'Commercial Kitchen Equipment Catalogue | Himchuli Steeltech',
    description:
      'Browse cooking, bakery, refrigeration, preparation, dishwashing, fabrication, ventilation, and service equipment.',
  },
  '/solutions': {
    title: 'Commercial Kitchen Design & Installation | Himchuli Steeltech',
    description:
      'Consultation, site measurement, kitchen design, fabrication, equipment supply, installation, and maintenance support.',
  },
  '/projects': {
    title: 'Commercial Kitchen Installations | Himchuli Steeltech',
    description:
      'Explore source-grounded commercial kitchen installation galleries and capability evidence from Himchuli company materials.',
  },
  '/about': {
    title: 'About Himchuli Steeltech Industries Pvt. Ltd.',
    description:
      'Learn about Himchuli Steeltech’s service history, expansion, capabilities, industries, and locations in Nepal.',
  },
  '/contact': {
    title: 'Request a Commercial Kitchen Quote | Himchuli Steeltech',
    description:
      'Prepare a commercial kitchen equipment or project enquiry for the Himchuli teams in Kathmandu and Pokhara.',
  },
  '/himchuli-kitchen': {
    title: 'Yo Himchuli Kitchen Nepal Pvt. Ltd. | Group Company',
    description:
      'A Himchuli group company focused on commercial kitchen equipment, fabrication, and complete kitchen solutions.',
  },
}

const upsertMeta = (property, content, attribute = 'name') => {
  let element = document.head.querySelector(`meta[${attribute}="${property}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, property)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export default function Seo() {
  const { pathname } = useLocation()

  const metadata = useMemo(() => {
    const product = products.find((item) => pathname.endsWith(`/${item.slug}`))
    if (product) {
      return {
        title: `${product.name} | Himchuli Steeltech`,
        description: product.description,
        type: 'Product',
        name: product.name,
        category: product.category,
      }
    }

    const project = projects.find((item) => pathname.endsWith(`/${item.slug}`))
    if (project) {
      return {
        title: `${project.title} | Himchuli Steeltech`,
        description: project.description,
      }
    }

    if (pathname.startsWith('/products/')) return pageMetadata['/products']
    if (pathname.startsWith('/projects/')) return pageMetadata['/projects']
    return pageMetadata[pathname] || {
      title: 'Himchuli Steeltech Industries Pvt. Ltd.',
      description: company.description,
    }
  }, [pathname])

  useEffect(() => {
    document.title = metadata.title
    upsertMeta('description', metadata.description)
    upsertMeta('og:title', metadata.title, 'property')
    upsertMeta('og:description', metadata.description, 'property')
    upsertMeta('og:type', metadata.type === 'Product' ? 'product' : 'website', 'property')
    upsertMeta('og:url', window.location.href, 'property')

    const schema = {
      '@context': 'https://schema.org',
      '@type': metadata.type || 'LocalBusiness',
      name: metadata.name || company.registeredName,
      description: metadata.description,
      ...(metadata.category ? { category: metadata.category } : {}),
      url: window.location.href,
      telephone: company.locations[0].phones[0],
      address: company.locations.map((location) => ({
        '@type': 'PostalAddress',
        addressLocality: location.city,
        addressCountry: 'NP',
        streetAddress: location.address,
      })),
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.routeSeo = 'true'
    script.textContent = JSON.stringify(schema)
    document.head.querySelector('script[data-route-seo]')?.remove()
    document.head.appendChild(script)

    return () => script.remove()
  }, [metadata])

  return null
}
