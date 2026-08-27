import { asset } from '../utils/asset'

export const projects = [
  {
    slug: 'complete-commercial-kitchen-installation',
    title: 'Complete Commercial Kitchen Installation',
    category: 'Hospitality',
    location: 'Nepal',
    description:
      'A source-grounded installation showcase representing stainless cooking lines, preparation counters, and extraction systems pictured in the company brochure.',
    image: asset('/images/projects/complete-commercial-kitchen-installation.jpg'),
    scope: ['Cooking line', 'Preparation stations', 'Stainless-steel fabrication', 'Extraction hood'],
  },
  {
    slug: 'institutional-catering-kitchen',
    title: 'Institutional Catering Kitchen',
    category: 'Institutional',
    location: 'Nepal',
    description:
      'A representative high-volume kitchen layout for healthcare, education, or workplace catering environments.',
    image: asset('/images/projects/institutional-catering-kitchen.jpg'),
    scope: ['Bulk preparation', 'Wash area', 'Storage systems', 'Service workflow'],
  },
  {
    slug: 'bakery-production-setup',
    title: 'Bakery Production Setup',
    category: 'Bakery',
    location: 'Nepal',
    description:
      'A commercial bakery setup representing mixing, baking, rack, cooling, and stainless work areas.',
    image: asset('/images/projects/bakery-production-setup.jpg'),
    scope: ['Mixing', 'Proofing', 'Baking', 'Cooling and storage'],
  },
  {
    slug: 'resort-production-kitchen',
    title: 'Resort Production Kitchen',
    category: 'Hospitality',
    location: 'Nepal',
    description:
      'A large production-kitchen showcase highlighting coordinated cooking, refrigeration, preparation, and ventilation zones.',
    image: asset('/images/projects/resort-production-kitchen.jpg'),
    scope: ['Main kitchen', 'Cold storage', 'Service support', 'Ventilation'],
  },
]

export const projectCategories = ['All', 'Hospitality', 'Institutional', 'Bakery']
