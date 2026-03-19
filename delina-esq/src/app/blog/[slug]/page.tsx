import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { RelatedArticles } from '@/components/landing/RelatedArticles'
import { POSTS } from '@/data/posts'
import Link from 'next/link'

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = POSTS[params.slug]
  if (!post) return {}
  return {
    title: `${post.title} | Delina Yasmeh, Esq.`,
    description: post.description,
    alternates: { canonical: `https://delina.esq/blog/${params.slug}/` },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug]
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: {
      '@type': 'Person',
      name: 'Delina Yasmeh',
      jobTitle: 'Attorney',
      url: 'https://delina.esq',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Delina Yasmeh, Esq.',
      url: 'https://delina.esq',
    },
    datePublished: post.date,
    description: post.description,
  }

  const formatted = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <main className="bg-parchment pt-[52px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      {/* Article Header */}
      <header className="bg-ink py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist">{post.category}</span>
            <span className="text-steel">·</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist">{post.readTime} read</span>
            <span className="text-steel">·</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist">{formatted}</span>
          </div>
          <h1
            className="font-display font-light text-white leading-[1.0] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
          >
            {post.title}
          </h1>
          <p className="font-sans font-light text-[16px] text-silver max-w-[560px] mt-6 leading-relaxed">
            {post.description}
          </p>
        </div>
      </header>

      {/* Article Body */}
      <article className="py-16 px-6">
        <div className="max-w-[680px] mx-auto">
          {post.body.map((block, i) =>
            block.type === 'h2' ? (
              <h2
                key={i}
                className="font-display font-light text-ink mt-12 mb-4 leading-tight tracking-[-0.02em]"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
              >
                {block.text}
              </h2>
            ) : (
              <p
                key={i}
                className="font-sans text-[15px] text-ink/70 leading-[1.8] mb-5"
              >
                {block.text}
              </p>
            )
          )}

          {/* Internal link to parent practice area */}
          <div className="border-t border-steel/20 mt-14 pt-8">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist block mb-3">
              Related Practice Area
            </span>
            <Link
              href={post.relatedPracticeArea.href}
              className="font-display font-light text-ink text-[1.25rem] hover:text-ink/60 transition-colors leading-snug"
            >
              {post.relatedPracticeArea.title} →
            </Link>
          </div>
        </div>
      </article>

      {/* Related articles */}
      <RelatedArticles tags={post.tags} currentSlug={params.slug} />

      {/* Article CTA */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist block mb-5">
            Paid Intake · California Only
          </span>
          <h2
            className="font-display font-light text-white leading-[0.92] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Ready to act on what you just read?
          </h2>
          <p className="font-sans font-light text-[15px] text-silver max-w-[440px] mx-auto mt-5 leading-relaxed">
            This is not a free consultation. It is a focused, strategic session with an attorney who has
            specific opinions about your situation.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-10 py-4 mt-8 border border-white/40 text-white font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-all duration-200"
          >
            Book Your Intake →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
