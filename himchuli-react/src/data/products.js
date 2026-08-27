import { asset } from '../utils/asset'

const categoryDefinitions = [
  {
    slug: 'cooking-equipment',
    title: 'Cooking Equipment',
    icon: 'skillet',
    description: 'Ranges, fryers, hot plates, tandoors, and hot-food holding equipment for professional kitchens.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDYgWdz_CydEr9aVnGQ11vlDdQw8dGC3U5K-omtoVq98ul-o_JYkcpbNYPbbstD_GsgwIBpPXQ_p43M5o8UFpAfXMbjAJt_nlxlM5I8i4miMTasVKD_cCvxIlPsbpK6gC8j8Ko_Bw90zCqwrYriSJHrkHtt1T1dxkVOb1NT1raeDvguygPs5ybxaHEassQHzJ78RHcPNpVQdre3dB76dS7dOxwg4NwIHPQc7F7gVy-81-hpuZPC4jI',
    names: [
      'Single Burner Range',
      'Double Burner Range',
      'Triple Burner Range',
      'Four Burner Range',
      'Chinese Cooking Range',
      'Chapati Maker',
      'Hot Plate',
      'Gas Fryer',
      'Tandoor Machine',
      'Bain Marie',
    ],
  },
  {
    slug: 'bakery-equipment',
    title: 'Bakery Equipment',
    icon: 'bakery_dining',
    description: 'Mixing, proofing, shaping, slicing, and baking equipment for commercial bakery production.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAe3C8QUQ56vNeOQET35QqWh6_QIT5b6x_1mJFOUEfLZUKp970Rmr654IMW6pIQEKqgqwW7OeAM9G6q4w2blgLLT9lgF7QIcICnhnKWAAfzQ72fvxHL-Jjn03CHnyjOjH0RhNW4QnYr5DUVggniqNHztibgva5BYGChVwOrQwAZtRoohKJICT2QbDEhKi1uZk6NG6ssZ4eUFEIZiQBw-CMDTgldZMarADj8oLJ3FxkTYFexLyI9Zo8',
    names: [
      'Pizza Oven',
      'Single Deck Oven',
      'Double Deck Oven',
      'Convection Oven with Proofer',
      'Combi Oven',
      'Proofer',
      'Dough Sheeter',
      'Bread Slicer',
      'Planetary Mixer',
      'Dough Mixer',
    ],
  },
  {
    slug: 'refrigeration',
    title: 'Refrigeration & Ice',
    icon: 'ac_unit',
    description: 'Upright, undercounter, display, back-bar, ice, water-cooling, and cold-room solutions.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDT9UdnKyN_cdFY6ajph9Dakbt4RHMFeiKqodv2TNZUG08HHfCiYxSGufJctNVtG6GZTGQu4ynd79bVdFeY2ofhK9rWxuGHR4Q8AxFMzCfu7QrbrrBHF8JVZj9kfj1eFCvcjs29zcWhTDh-xrMuqHJgn7q3r3PYBAn7bdfayKsBulta0bjgZA0msSUIzOk6-mkkVGTk7eHunCHbxtvZMjmSdEAGKRU3SopC8HBe5hg0-iNetPR2eWU',
    names: [
      'Two Door Upright Chiller',
      'Four Door Upright Chiller',
      'Two Door Undercounter Chiller',
      'Two Glass Door Undercounter Chiller',
      'Three Glass Door Back Bar Chiller',
      'Three Glass Door Undercounter Chiller',
      'Visi Cooler',
      'Curved Glass Bakery Showcase',
      'Water Cooler',
      'Ice Cube Machine',
    ],
  },
  {
    slug: 'preparation-equipment',
    title: 'Preparation Equipment',
    icon: 'blender',
    description: 'Food preparation machinery and practical storage components for efficient mise en place.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARCM7Z_lbA_9axlCkkEC6d0yuWJ4uCS_IqQxC8qWXJwYt7vE-ZFtMvstmqMAWcbxJTrHi5JJkRtzX54bqtGQzWJu8r8YFTww9KKkZHirBiVBXgh7FDLwPhmbBKGNS7sZ4gl14m9lZH5cGr3vXGpsR7kkZkpe4dnlBUhHY501V6a1nU0bTo_uw5CecXd2DryMq-Y9Kht1cRd0C-FOHnjqmgcRZ4pRn79HsIrSlCGbanSRw23x-Q6pU',
    names: [
      'Meat Slicer',
      'Meat Mincer',
      'Potato Peeler',
      'Potato and Onion Bin',
      'Flour and Sugar Bin',
      'Marble Top Preparation Table',
      'Preparation Table with Double Under Shelf',
    ],
  },
  {
    slug: 'dishwashing-wash-area',
    title: 'Dishwashing & Wash Area',
    icon: 'dishwasher',
    description: 'Landing tables, sinks, racks, and commercial dishwashing systems for hygienic wash workflows.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOGIyCbVpzb4Xt0H0pI7y-5HVSmAhA2Uxegbm7H0mfjzciEg0u_Mj97ssBTZNvnj1TUPMiGS5ug92CkiXO11mbZEg8iu_BCOxtHbydW8HxNSmfwq9NBwciUnZ8ZL-PeAgblaOHGPk8fFQ6OYCmfYcNlli1xnO_14MYagQVJ-BuD8ZMkpJvI7JCwz38Ht2_ebj7pD_p1Jry0jKYiRzXnm1931gIfT4JES5FmiH11pE7zhXByfnAsiQ',
    names: [
      'Dirty Dish Landing Table',
      'Hand Wash Sink',
      'Table with Sink',
      'Double Sink Unit',
      'Triple Sink Unit',
      'Undercounter Dishwasher',
      'Hood Type Dishwasher',
      'Conveyor Dishwasher',
    ],
  },
  {
    slug: 'stainless-steel-fabrication',
    title: 'Stainless-Steel Fabrication',
    icon: 'precision_manufacturing',
    description: 'Custom workstations, racks, counters, trolleys, and storage fabricated around site requirements.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBB5MxnCa945qAtXkXExZpBezDUU1ezGKo3JVKbEd0sFXEOTQCL95-_Wn8WkGDwL34mViqGVeXfQIgX0lF4Mmo3L85ZN2bwaJrl0kWuWAebAWdzXQszydXnVGaYralbQ4baU374WclMBo9MFUHeX39QPKSiI-F85LBC8XV_MQGYRfBztGOoByi1RtZfGduKS9ZNozZ9AdH9KVt6WfCNjR05h5NO-IhwoiyOrkN1ojVRu429Mk1nqWk',
    names: [
      'Four Shelf Rack',
      'Five Shelf Rack',
      'Pot Rack',
      'Tray Rack Trolley',
      'Multipurpose Service Trolley',
      'Platform Service Trolley',
      'Three Door Preparation Counter',
      'Hot Table with Service Counter',
    ],
  },
  {
    slug: 'ventilation-utilities',
    title: 'Ventilation & Utilities',
    icon: 'air',
    description: 'Kitchen extraction, fresh-air, gas-line, and drainage infrastructure referenced in company materials.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAYaxVliX7jpGbG79_SA2knGjsUmyP9GMNMPKxG0DXT3qT2ejjn3NU9uc2WJ-28zPvorh1RSQTf_mCrPUCtWXpSyBGyibJTdl7aoUEhJf_dmaM6AXQB_z7ZHSowrmKci2TgrjmWtAiC9E7kkN1kqBhDrR4d2FC4isxhUaopEAbZVYj3Y4FKugG-rPt9xL_tpZ1BJ7ekaG8Mv4MvBNG5us0ZxE5Yi-QhZdrRwOpef7Dn6U1QKFbAL8M',
    names: ['Exhaust and Fresh Air System', 'LPG Gas Line System', 'Stainless-Steel Drainage Grating'],
  },
  {
    slug: 'beverage-service',
    title: 'Beverage & Service',
    icon: 'coffee_maker',
    description: 'Coffee, cold-plate, and buffet service equipment for bars, cafés, hotels, and event service.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmaNops3f_VvUUJdEOCkoIage9Fwozpsy5dWFRNpxrxYU2wz-xY7t9NYadVpe-5F3U8vxPdD0W96gkgwq9-Q2VI3DNnoePwwnn0nzQQNaSFXklWEKlscKCSXgzano7XvVnIGeTRVn3c8hXIe4NhAUnl2lE3afZ5mmYFur8rxwROyVDhUWx_HmByDJj8CY4Ggk56D9ZB1RNJO5fErFtmPhSPie9nnQMQ4vMuAN047GssODOzqu41XA',
    names: ['Coffee Machine', 'Double Head Coffee Machine', 'Cold Plate'],
  },
]

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const inferConfiguration = (name) => {
  const configurations = [
    /single burner/i,
    /double burner/i,
    /triple burner/i,
    /four burner/i,
    /single deck/i,
    /double deck/i,
    /two glass door/i,
    /three glass door/i,
    /two door/i,
    /four door/i,
    /double sink/i,
    /triple sink/i,
    /four shelf/i,
    /five shelf/i,
    /three door/i,
  ]
  const match = configurations.find((pattern) => pattern.test(name))
  return match ? name.match(match)[0] : 'Configuration tailored to project requirements'
}

export const productCategories = categoryDefinitions.map(({ names, ...category }) => ({
  ...category,
  image: asset(`/images/products/${category.slug}.jpg`),
  count: names.length,
}))

const productImageExt = (slug) => {
  // Prefer local PNG equipment assets when present; otherwise JPG downloads.
  const pngSlugs = new Set([
    'meat-slicer',
    'meat-mincer',
    'potato-peeler',
    'preparation-table-with-double-under-shelf',
    'table-with-sink',
    'two-door-upright-chiller',
    'four-door-upright-chiller',
    'two-door-undercounter-chiller',
    'two-glass-door-undercounter-chiller',
    'water-cooler',
    'curved-glass-bakery-showcase',
  ])
  return pngSlugs.has(slug) ? 'png' : 'jpg'
}

export const products = categoryDefinitions.flatMap((category) =>
  category.names.map((name, index) => {
    const slug = slugify(name)
    return {
      id: `${category.slug}-${index + 1}`,
      slug,
      name,
      categorySlug: category.slug,
      category: category.title,
      icon: category.icon,
      image: asset(`/images/products/items/${slug}.${productImageExt(slug)}`),
      description: `${name} for professional commercial-kitchen applications. Final configuration is selected according to workflow, site conditions, output, and budget.`,
      attributes: [
        { label: 'Product type', value: category.title },
        { label: 'Configuration', value: inferConfiguration(name) },
        { label: 'Installation', value: 'Site requirements reviewed before quotation' },
        { label: 'Technical specifications', value: 'Available on request' },
      ],
      tags: [category.title, name, 'Commercial Kitchen'],
    }
  }),
)

export const getCategory = (slug) =>
  productCategories.find((category) => category.slug === slug)

export const getProduct = (categorySlug, productSlug) =>
  products.find(
    (product) =>
      product.categorySlug === categorySlug && product.slug === productSlug,
  )
