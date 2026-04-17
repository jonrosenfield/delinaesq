interface Question {
  q: string
  a: string
}

interface PAASectionProps {
  questions: Question[]
}

export function PAASection({ questions }: PAASectionProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <section className="bg-ivory py-20 px-6 border-t border-steel/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-[1000px] mx-auto">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-4">
          Common Questions
        </span>
        <h2
          className="font-display font-light text-ink leading-[1.05] tracking-[-0.02em] mb-12"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
        >
          What most people want to know.
        </h2>
        <div className="space-y-0">
          {questions.map(({ q, a }, i) => (
            <div key={i} className="border-t border-steel/20 py-8">
              <h3 className="font-sans font-medium text-ink text-[1.25rem] leading-snug mb-3">
                {q}
              </h3>
              <p className="font-sans text-[18px] text-ink/65 leading-relaxed max-w-[700px]">{a}</p>
            </div>
          ))}
          <div className="border-t border-steel/20" />
        </div>
      </div>
    </section>
  )
}
