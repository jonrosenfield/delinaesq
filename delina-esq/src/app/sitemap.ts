import type { MetadataRoute } from 'next'
import { POSTS } from '@/data/posts'
import { getAllMdxPosts } from '@/lib/mdx'

const SITE = 'https://delina.esq'

type StaticEntry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const STATIC_PAGES: StaticEntry[] = [
  { path: '/',                                 changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/about',                            changeFrequency: 'monthly', priority: 0.8 },
  { path: '/book',                             changeFrequency: 'monthly', priority: 0.9 },
  { path: '/business-contract-attorney',       changeFrequency: 'monthly', priority: 0.8 },
  { path: '/business-diagnostics',             changeFrequency: 'monthly', priority: 0.7 },
  { path: '/business-law-library',             changeFrequency: 'weekly',  priority: 0.7 },
  { path: '/business-structure-attorney',      changeFrequency: 'monthly', priority: 0.8 },
  { path: '/creator-attorney',                 changeFrequency: 'monthly', priority: 0.8 },
  { path: '/ecommerce-business-attorney',      changeFrequency: 'monthly', priority: 0.8 },
  { path: '/llc-attorney',                     changeFrequency: 'monthly', priority: 0.8 },
  { path: '/nonprofit-attorney',               changeFrequency: 'monthly', priority: 0.8 },
  { path: '/postnuptial-agreement-lawyer',     changeFrequency: 'monthly', priority: 0.8 },
  { path: '/prenuptial-agreement-attorney',    changeFrequency: 'monthly', priority: 0.8 },
  { path: '/s-corp-attorney',                  changeFrequency: 'monthly', priority: 0.8 },
  { path: '/startup-attorney-california',      changeFrequency: 'monthly', priority: 0.8 },
  { path: '/tax-attorney-small-business',      changeFrequency: 'monthly', priority: 0.8 },
  { path: '/trademark-attorney',               changeFrequency: 'monthly', priority: 0.8 },
  { path: '/transactions-ma',                  changeFrequency: 'monthly', priority: 0.8 },
  { path: '/privacy',                          changeFrequency: 'yearly',  priority: 0.3 },
  { path: '/terms',                            changeFrequency: 'yearly',  priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((p) => ({
    url: `${SITE}${p.path}`,
    lastModified: today,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))

  const mdxPosts = getAllMdxPosts()
  const mdxSlugs = new Set(mdxPosts.map((p) => p.slug))

  const mdxEntries: MetadataRoute.Sitemap = mdxPosts.map((post) => ({
    url: `${SITE}/business-law-library/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  // Legacy posts — skip slugs already represented by an MDX file (MDX takes priority)
  const legacyEntries: MetadataRoute.Sitemap = Object.entries(POSTS)
    .filter(([slug]) => !mdxSlugs.has(slug))
    .map(([slug, post]) => ({
      url: `${SITE}/business-law-library/${slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))

  return [...staticEntries, ...mdxEntries, ...legacyEntries]
}
