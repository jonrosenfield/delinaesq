import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export interface MdxPost {
  slug: string
  title: string
  category: string
  description: string
  date: string
  readTime: string
  tags: string[]
  relatedPracticeArea: { title: string; href: string }
  content: string // raw MDX body
}

// Maps the "land" frontmatter field to a clean display category
const LAND_TO_CATEGORY: Record<string, string> = {
  'Contract Land':             'Business Contracts',
  'Creator Land':              'Creator Economy',
  'Tax Strategy Land':         'Tax Strategy',
  'LLC Land':                  'LLC & Entity',
  'New Business Land':         'LLC & Entity',
  'Nonprofit Land':            'Nonprofit',
  'Prenup Land':               'Prenuptial Agreements',
  'Postnup Land':              'Postnuptial Agreements',
  'S-Corp Land':               'S-Corp Strategy',
  'Startup Land':              'Startup & Founder Advisory',
  'E-Commerce Land':           'E-Commerce Law',
  'Trademark Land':            'Trademark',
}

// Maps category → related practice area link
const CATEGORY_TO_PRACTICE: Record<string, { title: string; href: string }> = {
  'Business Contracts':        { title: 'Business Contract Attorney', href: '/business-contract-attorney' },
  'Creator Economy':           { title: 'Creator & Influencer Attorney', href: '/creator-attorney' },
  'Tax Strategy':              { title: 'Tax Attorney for Small Business', href: '/tax-attorney-small-business' },
  'LLC & Entity':              { title: 'Business Structure Attorney', href: '/business-structure-attorney' },
  'Nonprofit':                 { title: 'Nonprofit Attorney', href: '/nonprofit-attorney' },
  'Prenuptial Agreements':     { title: 'Prenuptial Agreement Attorney', href: '/prenuptial-agreement-attorney' },
  'Postnuptial Agreements':    { title: 'Postnuptial Agreement Lawyer', href: '/postnuptial-agreement-lawyer' },
  'S-Corp Strategy':           { title: 'S-Corp Attorney', href: '/s-corp-attorney' },
  'Startup & Founder Advisory':{ title: 'Startup Attorney California', href: '/startup-attorney-california' },
  'E-Commerce Law':            { title: 'E-Commerce Business Attorney', href: '/ecommerce-business-attorney' },
  'Trademark':                 { title: 'Trademark Attorney', href: '/trademark-attorney' },
}

// Derive read time from word count (200 wpm average)
function readTimeFromWordCount(wordCount: number | undefined): string {
  if (!wordCount) return '5 min'
  const mins = Math.max(1, Math.round(wordCount / 200))
  return `${mins} min`
}

// Infer category from filename prefix when frontmatter lacks it
function categoryFromSlug(slug: string): string {
  if (slug.startsWith('contract-')) return 'Business Contracts'
  if (slug.startsWith('creator-'))  return 'Creator Economy'
  if (slug.startsWith('tax-'))      return 'Tax Strategy'
  if (slug.startsWith('llc-') || slug.startsWith('newbiz-')) return 'LLC & Entity'
  if (slug.startsWith('nonprofit-'))return 'Nonprofit'
  if (slug.startsWith('prenup-'))   return 'Prenuptial Agreements'
  if (slug.startsWith('postnup-'))  return 'Postnuptial Agreements'
  if (slug.startsWith('scorp-'))    return 'S-Corp Strategy'
  if (slug.startsWith('startup-'))  return 'Startup & Founder Advisory'
  if (slug.startsWith('ecom-'))     return 'E-Commerce Law'
  if (slug.startsWith('trademark-'))return 'Trademark'
  return 'General'
}

function getSlugFromFilename(filename: string) {
  return filename.replace(/\.mdx?$/, '')
}

export function getAllMdxSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(getSlugFromFilename)
}

export function getMdxPost(slug: string): MdxPost | null {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`)
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`)
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null
  if (!filePath) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  // Resolve category: frontmatter category > land mapping > slug prefix
  const landCategory = data.land ? LAND_TO_CATEGORY[data.land] : undefined
  const category =
    data.category ?? landCategory ?? categoryFromSlug(slug)

  // Resolve related practice area
  const relatedPracticeArea =
    data.relatedPracticeArea ??
    CATEGORY_TO_PRACTICE[category] ??
    { title: 'Back to Services', href: '/' }

  // Resolve date: supports both 'date' and 'publishDate'; coerce Date objects to string
  const rawDate = data.date ?? data.publishDate ?? '2026-01-01'
  const date =
    rawDate instanceof Date
      ? rawDate.toISOString().slice(0, 10)
      : String(rawDate)

  // Resolve read time: explicit field wins, then derive from wordCount
  const readTime =
    data.readTime ?? data.read_time ?? readTimeFromWordCount(data.wordCount)

  return {
    slug,
    title: data.title ?? slug,
    category,
    description: data.description ?? '',
    date,
    readTime,
    tags: data.tags ?? [category.toLowerCase()],
    relatedPracticeArea,
    content,
  }
}

export function getAllMdxPosts(): MdxPost[] {
  return getAllMdxSlugs()
    .map(getMdxPost)
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as MdxPost[]
}
