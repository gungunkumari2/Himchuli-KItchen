import { asset } from '../utils/asset'

export const company = {
  registeredName: 'Himchuli Steeltech Industries Pvt. Ltd.',
  shortName: 'Himchuli Steeltech',
  established: '1998',
  tagline: 'Complete commercial kitchen equipment and steel solutions',
  description:
    'A Nepal-based commercial kitchen equipment fabricator, importer, supplier, installation partner, and maintenance provider serving hospitality, food-service, healthcare, education, and institutional projects.',
  experienceStatement: 'Serving commercial kitchens since 1998',
  peopleStatement: 'More than 60 skilled personnel and staff',
  facilitiesStatement: 'Company materials reference three factories across Kathmandu and Pokhara',
  locations: [
    {
      city: 'Kathmandu',
      address: 'Kalanki, Kathmandu, Nepal',
      phones: ['9802033333'],
    },
    {
      city: 'Pokhara',
      address: 'Lakeside, Pokhara, Nepal',
      phones: ['9856020425'],
    },
  ],
  website: 'www.himchulikitchen.com',
  catalogue: asset('/downloads/himchuli-product-catalogue.pdf'),
  profile: asset('/downloads/himchuli-company-profile.pdf'),
}

export const industries = [
  'Hotels & Resorts',
  'Restaurants & Cafés',
  'Bakeries',
  'Banquets & Caterers',
  'Hospitals',
  'Schools & Colleges',
  'Pharmaceutical Companies',
  'Commercial Buildings',
]
