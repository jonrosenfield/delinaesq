import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { IntakeForm } from './IntakeForm'

export const metadata: Metadata = {
  title: 'Contact Us | Delina Yasmeh, Esq.',
  description: 'Three ways to reach us: call 818-888-6060, email info@delina.esq, or share your situation through the form below. Every situation is different.',
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
              Three Ways to Reach Us
            </span>
            <h1
              className="font-display font-light text-white leading-[0.92] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Contact<br />
              <span className="italic">Us.</span>
            </h1>
          </div>
          <div>
            <p className="font-sans font-light text-[21px] text-silver leading-relaxed max-w-[440px]">
              Every situation is different. Call us, send an email, or share
              the details of your situation through the form below. Whether
              it&apos;s a consultation, a project scope, or guidance on next
              steps, every engagement is tailored individually.
            </p>
          </div>
        </div>
      </header>

      {/* Three ways to reach us — equal-weight contact options */}
      <section className="bg-ink border-t border-steel/40 px-6 py-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-steel/40">
          {/* Call */}
          <a
            href="tel:818-888-6060"
            className="group bg-ink hover:bg-white/5 transition-colors p-8 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">Call</span>
            </div>
            <p className="font-mono text-[20px] tracking-[0.05em] text-white group-hover:text-white">
              818-888-6060
            </p>
            <p className="font-sans text-[13px] text-silver leading-relaxed">
              Best for time-sensitive matters or quick questions about whether we can help.
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:info@delina.esq"
            className="group bg-ink hover:bg-white/5 transition-colors p-8 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">Email</span>
            </div>
            <p className="font-mono text-[20px] tracking-[0.05em] text-white group-hover:text-white break-all">
              info@delina.esq
            </p>
            <p className="font-sans text-[13px] text-silver leading-relaxed">
              Best for non-urgent questions, document review requests, or general inquiries.
            </p>
          </a>

          {/* Form */}
          <a
            href="#intake-form"
            className="group bg-ink hover:bg-white/5 transition-colors p-8 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mist">Intake Form</span>
            </div>
            <p className="font-mono text-[20px] tracking-[0.05em] text-white group-hover:text-white">
              Send Details
            </p>
            <p className="font-sans text-[13px] text-silver leading-relaxed">
              Best for sharing your full situation. Delina reads every submission before responding.
            </p>
          </a>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-6 bg-parchment">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[60fr_40fr] gap-16 items-start">

          {/* Form */}
          <div id="intake-form" className="scroll-mt-[80px]">
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
