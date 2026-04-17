import { Suspense } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { POSTS } from '@/data/posts'
import { getAllMdxPosts } from '@/lib/mdx'
import { LibraryClient, type PostMeta } from './LibraryClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Law Library | Delina Yasmeh, Esq.',
  description: 'Legal strategy articles for California entrepreneurs, creators, and founders.',
  alternates: { canonical: 'https://delina.esq/business-law-library/' },
}

export default function LawLibrary() {
  // Legacy posts from posts.ts
  const legacyPosts: PostMeta[] = Object.entries(POSTS).map(([slug, p]) => ({
    slug,
    title: p.title,
    category: p.category,
    description: p.description,
    date: p.date,
    readTime: p.readTime,
    tags: p.tags,
  }))

  // MDX posts from content/blog/, server-side fs read
  const mdxPosts: PostMeta[] = getAllMdxPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    description: p.description,
    date: p.date,
    readTime: p.readTime,
    tags: p.tags,
  }))

  // MDX takes priority; merge and deduplicate by slug
  const mdxSlugs = new Set(mdxPosts.map((p) => p.slug))
  const merged = [
    ...mdxPosts,
    ...legacyPosts.filter((p) => !mdxSlugs.has(p.slug)),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="bg-parchment pt-[52px]">
      <Navbar />

      {/* Suspense required for useSearchParams inside LibraryClient */}
      <Suspense fallback={null}>
        <LibraryClient posts={merged} />
      </Suspense>

      <Footer />
    </main>
  )
}
