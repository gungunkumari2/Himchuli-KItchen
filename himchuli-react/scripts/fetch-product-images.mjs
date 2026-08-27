#!/usr/bin/env node
/**
 * Downloads product-matched images into public/images/products/items/
 * Prefer Wikimedia Commons; fall back to curated Unsplash URLs.
 */
import { createWriteStream, existsSync, mkdirSync } from 'node:fs'
import { pipeline } from 'node:stream/promises'
import { Readable } from 'node:stream'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(__dirname, '../public/images/products/items')
mkdirSync(OUT, { recursive: true })

const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

/** slug -> { query, fallback } */
const catalog = {
  // Cooking
  'single-burner-range': {
    query: 'commercial gas burner range kitchen',
    fallback: u('photo-1556910103-1c02745aae4d'),
  },
  'double-burner-range': {
    query: 'commercial two burner stove stainless',
    fallback: u('photo-1556911220-e15b29be8c8f'),
  },
  'triple-burner-range': {
    query: 'commercial gas range burners kitchen',
    fallback: u('photo-1574269909862-7e1d70bb8078'),
  },
  'four-burner-range': {
    query: 'four burner commercial gas range',
    fallback: u('photo-1581291518857-4e27b48ff24e'),
  },
  'chinese-cooking-range': {
    query: 'chinese wok range commercial kitchen',
    fallback: u('photo-1559339352-11d035aa65de'),
  },
  'chapati-maker': {
    query: 'chapati roti maker machine',
    fallback: u('photo-1565299585323-38d6b0865b47'),
  },
  'hot-plate': {
    query: 'commercial electric hot plate griddle',
    fallback: u('photo-1598515214211-89d3c73ae83b'),
  },
  'gas-fryer': {
    query: 'commercial deep fryer stainless steel',
    fallback: u('photo-1626082927389-6cd097cdc6ec'),
  },
  'tandoor-machine': {
    query: 'tandoor oven clay commercial',
    fallback: u('photo-1606491956689-cdba0bae2a0a'),
  },
  'bain-marie': {
    query: 'bain marie food warmer commercial',
    fallback: u('photo-1414235077428-338989a2e8c0'),
  },
  // Bakery
  'pizza-oven': {
    query: 'commercial pizza oven stainless',
    fallback: u('photo-1513104890138-7c749659a591'),
  },
  'single-deck-oven': {
    query: 'commercial deck oven bakery',
    fallback: u('photo-1601924582970-9238bcb495d2'),
  },
  'double-deck-oven': {
    query: 'double deck bakery oven commercial',
    fallback: u('photo-1555507036-ab1f4038808a'),
  },
  'convection-oven-with-proofer': {
    query: 'convection oven bakery commercial',
    fallback: u('photo-1486427944299-d1955d23e34d'),
  },
  'combi-oven': {
    query: 'combi oven commercial kitchen',
    fallback: u('photo-1574269909862-7e1d70bb8078'),
  },
  proofer: {
    query: 'dough proofer bakery cabinet',
    fallback: u('photo-1509440159596-0249088772ff'),
  },
  'dough-sheeter': {
    query: 'dough sheeter bakery machine',
    fallback: u('photo-1555507036-ab1f4038808a'),
  },
  'bread-slicer': {
    query: 'commercial bread slicer machine',
    fallback: u('photo-1549931319-a545dcf3bc73'),
  },
  'planetary-mixer': {
    query: 'planetary mixer commercial bakery',
    fallback: u('photo-1571115177098-24ec42ed204d'),
  },
  'dough-mixer': {
    query: 'spiral dough mixer commercial',
    fallback: u('photo-1556910103-1c02745aae4d'),
  },
  // Refrigeration (some already local png)
  'three-glass-door-back-bar-chiller': {
    query: 'back bar cooler glass door commercial',
    fallback: u('photo-1584568694244-14fbdf83bd30'),
  },
  'three-glass-door-undercounter-chiller': {
    query: 'undercounter glass door refrigerator commercial',
    fallback: u('photo-1571175443880-49e1d25b2bc5'),
  },
  'ice-cube-machine': {
    query: 'commercial ice cube machine',
    fallback: u('photo-1527482797697-8795b05a13fe'),
  },
  'cold-room': {
    query: 'cold room walk in cooler commercial',
    fallback: u('photo-1584568694244-14fbdf83bd30'),
  },
  // Preparation
  'potato-and-onion-bin': {
    query: 'vegetable storage bin stainless kitchen',
    fallback: u('photo-1540420773420-3366772f4999'),
  },
  'flour-and-sugar-bin': {
    query: 'ingredient storage bin bakery stainless',
    fallback: u('photo-1509440159596-0249088772ff'),
  },
  'marble-top-preparation-table': {
    query: 'marble top prep table kitchen',
    fallback: u('photo-1556911220-bff31c812dba'),
  },
  // Dishwashing
  'dirty-dish-landing-table': {
    query: 'dish landing table commercial kitchen',
    fallback: u('photo-1556911220-e15b29be8c8f'),
  },
  'hand-wash-sink': {
    query: 'hand wash sink stainless commercial',
    fallback: u('photo-1584622650111-993a426fbf0a'),
  },
  'double-sink-unit': {
    query: 'double sink stainless steel commercial',
    fallback: u('photo-1552321554-5fefe8c9ef14'),
  },
  'triple-sink-unit': {
    query: 'triple compartment sink commercial kitchen',
    fallback: u('photo-1584622650111-993a426fbf0a'),
  },
  'undercounter-dishwasher': {
    query: 'undercounter commercial dishwasher',
    fallback: u('photo-1581578731548-c64695cc6952'),
  },
  'hood-type-dishwasher': {
    query: 'hood type commercial dishwasher',
    fallback: u('photo-1556912173-46c336c7fd55'),
  },
  'conveyor-dishwasher': {
    query: 'conveyor dishwasher commercial',
    fallback: u('photo-1581578731548-c64695cc6952'),
  },
  // Fabrication
  'four-shelf-rack': {
    query: 'stainless steel wire shelf rack kitchen',
    fallback: u('photo-1556912173-3bb406ef7e77'),
  },
  'five-shelf-rack': {
    query: 'five shelf stainless steel rack',
    fallback: u('photo-1556912173-3bb406ef7e77'),
  },
  'pot-rack': {
    query: 'pot rack hanging kitchen stainless',
    fallback: u('photo-1556911220-bff31c812dba'),
  },
  'tray-rack-trolley': {
    query: 'tray rack trolley commercial kitchen',
    fallback: u('photo-1556910103-1c02745aae4d'),
  },
  'multipurpose-service-trolley': {
    query: 'service trolley cart stainless steel',
    fallback: u('photo-1414235077428-338989a2e8c0'),
  },
  'platform-service-trolley': {
    query: 'platform trolley stainless kitchen',
    fallback: u('photo-1556911220-e15b29be8c8f'),
  },
  'three-door-preparation-counter': {
    query: 'prep counter refrigerator commercial',
    fallback: u('photo-1571175443880-49e1d25b2bc5'),
  },
  'hot-table-with-service-counter': {
    query: 'hot food service counter buffet',
    fallback: u('photo-1414235077428-338989a2e8c0'),
  },
  // Ventilation
  'exhaust-and-fresh-air-system': {
    query: 'kitchen exhaust hood commercial',
    fallback: u('photo-1556910103-1c02745aae4d'),
  },
  'lpg-gas-line-system': {
    query: 'gas pipe line kitchen industrial',
    fallback: u('photo-1504328345606-18bbc8c9d7d1'),
  },
  'stainless-steel-drainage-grating': {
    query: 'stainless steel floor drain grate',
    fallback: u('photo-1584622650111-993a426fbf0a'),
  },
  // Beverage
  'coffee-machine': {
    query: 'commercial espresso coffee machine',
    fallback: u('photo-1495474472287-4d71bcdd2085'),
  },
  'double-head-coffee-machine': {
    query: 'two group commercial espresso machine',
    fallback: u('photo-1511920170033-f8396924c348'),
  },
  'cold-plate': {
    query: 'cold plate buffet food cooler',
    fallback: u('photo-1559339352-11d035aa65de'),
  },
}

async function searchCommons(query) {
  const api = new URL('https://commons.wikimedia.org/w/api.php')
  api.searchParams.set('action', 'query')
  api.searchParams.set('format', 'json')
  api.searchParams.set('origin', '*')
  api.searchParams.set('generator', 'search')
  api.searchParams.set('gsrsearch', query)
  api.searchParams.set('gsrnamespace', '6')
  api.searchParams.set('gsrlimit', '5')
  api.searchParams.set('prop', 'imageinfo')
  api.searchParams.set('iiprop', 'url|mime|size')
  api.searchParams.set('iiurlwidth', '900')

  const res = await fetch(api, {
    headers: { 'User-Agent': 'HimchuliKitchenSite/1.0 (product image matcher)' },
  })
  if (!res.ok) return null
  const data = await res.json()
  const pages = data?.query?.pages
  if (!pages) return null

  for (const page of Object.values(pages)) {
    const info = page.imageinfo?.[0]
    if (!info) continue
    const mime = info.mime || ''
    if (!mime.startsWith('image/') || mime.includes('svg')) continue
    return info.thumburl || info.url
  }
  return null
}

async function download(url, dest) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'HimchuliKitchenSite/1.0 (product image matcher)' },
    redirect: 'follow',
  })
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`)
  await pipeline(Readable.fromWeb(res.body), createWriteStream(dest))
}

const skipExt = ['.png', '.jpg', '.jpeg', '.webp']

async function main() {
  let ok = 0
  let fail = 0

  for (const [slug, { query, fallback }] of Object.entries(catalog)) {
    const existing = skipExt.some((ext) => existsSync(path.join(OUT, `${slug}${ext}`)))
    if (existing) {
      console.log(`skip (exists) ${slug}`)
      ok++
      continue
    }

    const dest = path.join(OUT, `${slug}.jpg`)
    let source = null
    try {
      source = await searchCommons(query)
    } catch (err) {
      console.warn(`commons fail ${slug}:`, err.message)
    }

    const url = source || fallback
    try {
      await download(url, dest)
      console.log(`ok ${slug} ← ${source ? 'commons' : 'unsplash'}`)
      ok++
    } catch (err) {
      console.error(`fail ${slug}:`, err.message)
      fail++
    }

    await new Promise((r) => setTimeout(r, 350))
  }

  console.log(`\nDone. ok=${ok} fail=${fail}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
