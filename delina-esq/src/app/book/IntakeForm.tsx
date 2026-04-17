'use client'

import { useState } from 'react'


const REFERRAL_SOURCES = [
  'Google search',
  'Instagram',
  'LinkedIn',
  'Referral from a friend or colleague',
  'Referral from another attorney',
  'The Brief (blog)',
  'Other',
]

const fieldClass =
  'w-full bg-transparent border-0 border-b border-ink/20 focus:border-ink outline-none font-sans text-[19px] text-ink placeholder:text-ink/25 py-3 transition-colors duration-200'

const labelClass =
  'font-mono text-[12px] uppercase tracking-[0.2em] text-ink/45 block mb-1'

export function IntakeForm() {
  const [sending, setSending] = useState(false)

  return (
    <form
      name="intake"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-10"
      onSubmit={() => setSending(true)}
    >
      {/* Netlify required hidden fields */}
      <input type="hidden" name="form-name" value="intake" />
      <p hidden><input name="bot-field" /></p>

      {/* Row 1, Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      {/* Row 2, Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(310) 000-0000"
          className={fieldClass}
        />
      </div>

      {/* Situation */}
      <div>
        <label htmlFor="situation" className={labelClass}>
          Describe your situation *
        </label>
        <textarea
          id="situation"
          name="situation"
          required
          rows={5}
          placeholder="Share as much context as you are comfortable with. Business structure, income level, what you are trying to protect or build. The more specific you are, the more Delina can prepare before your session."
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
          name="referral"
          defaultValue=""
          className={`${fieldClass} cursor-pointer appearance-none`}
        >
          <option value="">Select one (optional)</option>
          {REFERRAL_SOURCES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 border border-ink/30 text-ink font-mono text-[13px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-ink hover:text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {sending ? 'Sending…' : 'Tell Us Your Situation →'}
        </button>
      </div>

      <p className="font-mono text-[8px] text-ink/30 leading-relaxed max-w-[480px]">
        Submitting this form does not create an attorney-client relationship.
        That relationship is formed only upon a signed engagement agreement.
      </p>

    </form>
  )
}
