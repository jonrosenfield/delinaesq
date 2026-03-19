import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { IntakeForm } from './IntakeForm'

export const metadata: Metadata = {
  title: 'Book Your Intake | Delina Yasmeh, Esq.',
  description: 'Book a paid strategy session with Delina Yasmeh. Sixty minutes. Your situation, your structure, her specific advice. California only.',
  alternates: { canonical: 'https://delina.esq/book/' },
}

const EXPECT = [
  {
    number: '01',
    title: 'Sixty minutes',
    body: 'A focused session — not a sales call. Delina reads your intake before the meeting and comes with a point of view.',
  },
  {
    number: '02',
    title: 'Specific opinions',
    body: 'You will leave with clear guidance on your structure, your contracts, or whatever you came in with. No vague next steps.',
  },
  {
    number: '03',
    title: 'A written roadmap',
    body: 'After the session, Delina provides a written summary of recommendations tailored to your situation.',
  },
  {
    number: '04',
    title: 'No surprises',
    body: 'The intake fee is disclosed upfront. If you need ongoing work, that is quoted separately after the session.',
  },
]

export default function BookPage() {
  return (
    <main className="bg-parchment pt-[52px]">
      <Navbar />

      {/* Header */}
      <header className="bg-ink py-20 px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-8">
              By Appointment · California Only
            </span>
            <h1
              className="font-display font-light text-white leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Book Your<br />
              <span className="italic">Intake.</span>
            </h1>
          </div>
          <div>
            <p className="font-sans font-light text-[17px] text-silver leading-relaxed max-w-[440px]">
              This is not a free consultation. It is a paid, focused session with
              an attorney who has specific opinions about your situation —
              built around the details you provide below.
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <section className="py-20 px-6 bg-parchment">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[60fr_40fr] gap-16 items-start">

          {/* Form */}
          <div>
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-10">
              Your Information
            </span>
            <IntakeForm />
          </div>

          {/* What to expect */}
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-8">
              What to Expect
            </span>
            <div className="space-y-0 divide-y divide-steel/20">
              {EXPECT.map((item) => (
                <div key={item.number} className="py-6">
                  <div className="flex items-baseline gap-4 mb-1">
                    <span className="font-mono text-[9px] text-mist/50">{item.number}</span>
                    <span className="font-display font-light text-ink text-[1.1rem]">{item.title}</span>
                  </div>
                  <p className="font-sans text-[13px] text-ink/55 leading-relaxed pl-8">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Not for */}
            <div className="mt-10 border border-steel/20 bg-white p-6">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist block mb-4">
                This session is not for
              </span>
              {[
                'General questions you can Google',
                'Clients outside California',
                'Anyone looking for a free second opinion',
                'Situations requiring emergency same-day counsel',
              ].map((item) => (
                <p key={item} className="font-sans text-[12px] text-ink/50 leading-relaxed flex items-start gap-2 mb-2">
                  <span className="text-ink/25 mt-0.5 flex-shrink-0">—</span>
                  {item}
                </p>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
