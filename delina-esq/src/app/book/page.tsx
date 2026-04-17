import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { IntakeForm } from './IntakeForm'

export const metadata: Metadata = {
  title: 'Start Here | Delina Yasmeh, Esq.',
  description: 'Every situation is different. Share the details of yours and we\'ll respond with how we can help, whether that\'s a consultation, a project scope, or guidance on next steps.',
  alternates: { canonical: 'https://delina.esq/book/' },
}

const EXPECT = [
  {
    number: '01',
    title: 'We review your situation',
    body: 'Delina reads what you submit before any conversation happens and comes prepared with a point of view, not a list of questions.',
  },
  {
    number: '02',
    title: 'We get back to you with specifics',
    body: 'You\'ll hear back with how we can help and what that looks like. Whether that\'s a consultation, a defined project, or a referral.',
  },
  {
    number: '03',
    title: 'Everything is built around you',
    body: 'No templates, no packages. Every engagement is structured around what your situation actually requires.',
  },
  {
    number: '04',
    title: 'No surprises',
    body: 'Scope and fees are discussed before anything begins. If we\'re not the right fit, we\'ll tell you that too.',
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
              By Appointment
            </span>
            <h1
              className="font-display font-light text-white leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Start<br />
              <span className="italic">Here.</span>
            </h1>
          </div>
          <div>
            <p className="font-sans font-light text-[21px] text-silver leading-relaxed max-w-[440px]">
              Every situation is different. Share the details of yours and we&apos;ll
              respond with how we can help. Whether that&apos;s a consultation,
              a project scope, or guidance on next steps, every engagement is
              tailored individually.
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
              Tell Us Your Situation
            </span>
            <IntakeForm />
          </div>

          {/* What to expect */}
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-8">
              How It Works
            </span>
            <div className="space-y-0 divide-y divide-steel/20">
              {EXPECT.map((item) => (
                <div key={item.number} className="py-6">
                  <div className="flex items-baseline gap-4 mb-1">
                    <span className="font-mono text-[12px] text-mist/50">{item.number}</span>
                    <span className="font-sans font-medium text-ink text-[1.1rem]">{item.title}</span>
                  </div>
                  <p className="font-sans text-[16px] text-ink/55 leading-relaxed pl-8">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Not for */}
            <div className="mt-10 border border-steel/20 bg-white p-6">
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-mist block mb-4">
                This is not for
              </span>
              {[
                'General questions you can Google',
                'Anyone looking for a free second opinion',
                'Situations requiring emergency same-day counsel',
                'Clients who need volume, not judgment',
              ].map((item) => (
                <p key={item} className="font-sans text-[12px] text-ink/50 leading-relaxed mb-2">
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
