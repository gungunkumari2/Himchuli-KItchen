import { asset } from '../utils/asset'

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Projects', path: '/projects' },
  { label: 'About Us', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Group Companies', path: '/himchuli-kitchen' },
  { label: 'Contact', path: '/contact' },
]

export const heroImages = {
  home: asset('/images/heroes/home.jpg'),
  products: asset('/images/heroes/products.jpg'),
  solutions: asset('/images/heroes/solutions.jpg'),
  projects: asset('/images/heroes/projects.jpg'),
  about: asset('/images/heroes/about.jpg'),
  blog: asset('/images/heroes/blog.jpg'),
  contact: asset('/images/heroes/contact.jpg'),
}

export const homeHeroSlides = [
  asset('/images/heroes/home.jpg'),
  asset('/images/heroes/slides/equipment-grid-1.jpg'),
  asset('/images/heroes/slides/equipment-grid-2.jpg'),
  asset('/images/heroes/slides/equipment-grid-4.jpg'),
  asset('/images/heroes/slides/equipment-grid-5.jpg'),
  asset('/images/heroes/slides/equipment-grid-6.jpg'),
  asset('/images/heroes/slides/equipment-grid-7.jpg'),
  asset('/images/heroes/slides/equipment-grid-8.jpg'),
]

export const stats = [
  { icon: 'calendar_month', value: '25+', label: 'Years of Experience' },
  { icon: 'countertops', value: 'Complete', label: 'Kitchen Solutions' },
  { icon: 'location_city', value: 'KTM & PKR', label: 'Operations Hubs' },
  { icon: 'engineering', value: 'Commercial', label: 'Kitchen Specialists' },
]

export const timeline = [
  { year: '1998', title: 'Service History Begins', description: 'Company materials trace the service history to refrigeration, air-conditioning, and commercial kitchen maintenance in Pokhara.' },
  { year: '2003', title: 'Himchuli Refrigeration Service Company', description: 'The earlier service company is described as being established in 2060 B.S. / 2003 A.D.' },
  { year: '2005', title: 'Kathmandu Expansion', description: 'Company materials state that operations expanded into Kathmandu in 2062 B.S. / 2005 A.D.' },
  { year: 'Today', title: 'Complete Kitchen Capability', description: 'The company presents consultation, design, fabrication, import, supply, installation, and maintenance capabilities.' },
]

export const blogPosts = [
  {
    category: 'Kitchen Planning',
    title: 'The Future of Commercial Kitchen Design in Nepal',
    description: 'How efficiency, hygiene, and equipment planning are reshaping professional kitchen projects.',
    image: heroImages.blog,
  },
  {
    category: 'Equipment Guides',
    title: 'Essential Equipment for a Restaurant Kitchen',
    description: 'A practical view of the core stations and machine categories required for reliable service.',
    image: asset('/images/products/cooking-equipment.jpg'),
  },
  {
    category: 'Refrigeration',
    title: 'How to Choose Commercial Refrigeration Equipment',
    description: 'Storage capacity, temperature control, and workflow are the key variables to balance.',
    image: asset('/images/products/refrigeration.jpg'),
  },
  {
    category: 'Maintenance',
    title: 'A Preventive Maintenance Checklist for Kitchen Operations',
    description: 'Routine checks that help reduce downtime and extend the life of commercial equipment.',
    image: asset('/images/products/dishwashing-wash-area.jpg'),
  },
]
