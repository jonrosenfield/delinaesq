'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const PRACTICE_AREAS = [
  'Prenuptial Agreement',
  'Postnuptial Agreement',
  'LLC Formation & Structuring',
  'S-Corp Election & Tax Strategy',
  'Business Contract Drafting / Review',
  'Tax Strategy',
  'Business Structure',
  'Startup & Founder Advisory',
  'Creator & Influencer Counsel',
  'Trademark',
  'Nonprofit Formation',
  'E-Commerce Business',
  'Not sure — I need guidance',
]

const REFERRAL_SOURCES = [
  'Google search',
  'Instagram',
  'LinkedIn',
  'Referral from a friend or colleague',
  'Referral from another attorney',
  'The Brief (blog)',
  'Other',
]

interface FormState {
  name: string
  email: string
  phone: string
  practiceArea: string
  situation: string
  referral: string
}

const EMPTY: FormState = {
  name: '',
  email: '',
  phone: '',
  practiceArea: '',
  situation: '',
  referral: '',
}

const fieldClass =
  'w-full bg-transparent border-0 border-b border-ink/20 focus:border-ink outline-none font-sans text-[19px] text-ink placeholder:text-ink/25 py-3 transition-colors duration-200'

const labelClass =
  'font-mono text-[12px] uppercase tracking-[0.2em] text-ink/45 block mb-1'

export function IntakeForm() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const body = new URLSearchParams({
        'form-name': 'intake',
        ...Object.fromEntries(Object.entries(form)),
      })
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (res.ok) {
        router.push('/thank-you')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10"
      name="intake"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="intake" />
      <input type="hidden" name="bot-field" className="hidden" />

      {/* Row 1 — Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={set('name')}
            placeholder="Jane Smith"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={set('email')}
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      {/* Row 2 — Phone + Practice Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="(310) 000-0000"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="practiceArea" className={labelClass}>Practice Area *</label>
          <select
            id="practiceArea"
            required
            value={form.practiceArea}
            onChange={set('practiceArea')}
            className={`${fieldClass} cursor-pointer appearance-none`}
            style={{ backgroundImage: 'none' }}
          >
            <option value="" disabled>Select one</option>
            {PRACTICE_AREAS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Situation */}
      <div>
        <label htmlFor="situation" className={labelClass}>
          Describe your situation *
        </label>
        <textarea
          id="situation"
          required
          rows={5}
          value={form.situation}
          onChange={set('situation')}
          placeholder="Share as much context as you are comfortable with — business structure, income level, what you are trying to protect or build. The more specific you are, the more Delina can prepare before your session."
          className={`${fieldClass} resize-none leading-relaxed`}
        />
        <span className="font-mono text-[8px] text-ink/25 mt-1 block">
          This information is confidential and protected by attorney-client privilege.
        </span>
      </div>

      {/* Referral */}
      <div>
        <label htmlFor="referral" className={labelClass}>How did you find Delina?</label>
        <select
          id="referral"
          value={form.referral}
          onChange={set('referral')}
          className={`${fieldClass} cursor-pointer appearance-none`}
        >
          <option value="">Select one (optional)</option>
          {REFERRAL_SOURCES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <div className="pt-4 flex items-center gap-6 flex-wrap">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 border border-ink/30 text-ink font-mono text-[13px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-ink hover:text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending…' : 'Submit Your Intake →'}
        </button>
        {status === 'error' && (
          <span className="font-mono text-[12px] text-ink/50 uppercase tracking-[0.15em]">
            Something went wrong — please email hello@delina.esq
          </span>
        )}
      </div>

      <p className="font-mono text-[8px] text-ink/30 leading-relaxed max-w-[480px]">
        Submitting this form does not create an attorney-client relationship.
        That relationship is formed only upon a signed engagement agreement.
        California Bar No. pending verification.
      </p>

    </form>
  )
}
