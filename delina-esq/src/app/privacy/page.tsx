import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Delina Yasmeh, Esq.',
  description: 'Privacy policy governing how Delina Yasmeh, Esq. collects, uses, and protects your information.',
  alternates: { canonical: 'https://delina.esq/privacy' },
  robots: 'noindex',
}

export default function PrivacyPage() {
  return (
    <main className="bg-parchment pt-[52px]">
      <Navbar />

      <header className="bg-ink py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-8">
            Legal · Effective July 15, 2025
          </span>
          <h1
            className="font-display font-light text-white leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Privacy<br />
            <span className="italic">Policy.</span>
          </h1>
          <p className="font-sans font-light text-[17px] text-silver max-w-[520px] mt-6 leading-relaxed">
            How Delina Yasmeh, Esq. collects, uses, and protects your information across U.S. and international engagements.
          </p>
        </div>
      </header>

      <article className="py-20 px-6">
        <div className="max-w-[720px] mx-auto">

          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist space-y-1 mb-14 border-b border-steel/20 pb-10">
            <p><span className="text-ink/40">Website</span> &nbsp; delina.esq</p>
            <p><span className="text-ink/40">Owner</span> &nbsp; Delina Yasmeh, Esq.</p>
            <p><span className="text-ink/40">Effective</span> &nbsp; July 15, 2025</p>
            <p><span className="text-ink/40">Contact</span> &nbsp; <a href="mailto:privacy@delina.esq" className="hover:text-silver transition-colors">privacy@delina.esq</a></p>
          </div>

          <Section title="Overview">
            <p>This Privacy Policy describes how Delina Yasmeh, Esq. (the Firm) collects, uses, and protects information provided by visitors and clients. Information handling at this Firm exceeds standard privacy requirements through the application of attorney-client privilege, federal tax practitioner protections, and rigorous data security frameworks.</p>
            <p>This policy should be read alongside our <Link href="/terms" className="text-ink underline underline-offset-2 hover:text-ink/60 transition-colors">Terms and Conditions</Link>, which govern the full scope of your engagement with this website and the Firm.</p>
          </Section>

          <Section title="Cookies and Website Analytics">
            <p>This website uses cookies and similar technologies to understand how visitors interact with the site. Cookies are small data files stored on your device that help us analyze traffic, understand which pages are visited, and improve the site experience.</p>
            <p><strong>What we collect.</strong> Analytics data may include pages visited, time on site, device and browser type, and general geographic region. No personally identifiable information is collected through analytics cookies.</p>
            <p><strong>Your choices.</strong> You may decline cookies when prompted by the cookie notice on this site. Declining does not affect your ability to access content or contact the Firm. You can also clear cookies at any time through your browser settings.</p>
            <p><strong>No data is sold.</strong> We do not sell, rent, or trade your information to third parties for marketing purposes.</p>
          </Section>

          <Section title="Information We Collect">
            <p>We collect and process information consistent with serving high-net-worth individuals and complex business entities. The categories of information collected depend on the nature of your engagement with the Firm.</p>
            <h3>Privilege-Protected Information</h3>
            <ul>
              <li>Attorney-client communications and strategy discussions</li>
              <li>Legal analysis and advice memoranda</li>
              <li>Work product and mental impressions</li>
              <li>Confidential business information and trade secrets</li>
            </ul>
            <h3>Business Intelligence Data</h3>
            <ul>
              <li>Financial information and projections</li>
              <li>Competitive analysis and market positioning</li>
              <li>Intellectual property portfolios and valuations</li>
              <li>Investment structures and ownership arrangements</li>
            </ul>
            <h3>Personal Data</h3>
            <ul>
              <li>Identity verification for compliance purposes</li>
              <li>Background checks for conflict-of-interest analysis</li>
              <li>Communication preference and scheduling data</li>
              <li>Contact information submitted through this website</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <p>Information collected through this website or through engagement with the Firm is used exclusively to evaluate potential engagements, provide legal and advisory services, comply with professional responsibility obligations, and maintain secure and confidential communications.</p>
            <p>We do not use client information for marketing to third parties, share information with unaffiliated organizations for commercial purposes, or use information in any manner inconsistent with applicable professional conduct rules.</p>
          </Section>

          <Section title="Data Security">
            <p>All client data is protected through multiple layers of security consistent with the standards required for a sophisticated legal and tax practice.</p>
            <h3>Technical Safeguards</h3>
            <ul>
              <li>End-to-end encryption for all client communications</li>
              <li>Multi-factor authentication for system access</li>
              <li>Regular penetration testing and vulnerability assessments</li>
              <li>Incident response and breach notification protocols</li>
            </ul>
            <h3>Administrative Controls</h3>
            <ul>
              <li>Role-based access control systems</li>
              <li>Regular security training and awareness programs</li>
              <li>Vendor due diligence and management protocols</li>
              <li>Document retention and destruction policies</li>
            </ul>
            <h3>Physical Security</h3>
            <ul>
              <li>Secured office facilities with access controls</li>
              <li>Protected storage for physical documents</li>
              <li>Secure disposal protocols for confidential materials</li>
            </ul>
          </Section>

          <Section title="CCPA Compliance (California Residents)">
            <p>California residents have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to request deletion of personal information, and the right to opt out of the sale of personal information (we do not sell personal information).</p>
            <ul>
              <li>Detailed personal information category disclosures</li>
              <li>Comprehensive opt-out mechanisms for data sales</li>
              <li>Enhanced notice requirements for sensitive personal information</li>
              <li>Consumer rights response protocols within statutory timeframes</li>
            </ul>
            <p>To exercise your CCPA rights, email <a href="mailto:privacy@delina.esq" className="text-ink underline underline-offset-2 hover:text-ink/60 transition-colors">privacy@delina.esq</a> with &ldquo;Data Request&rdquo; in the subject line.</p>
          </Section>

          <Section title="GDPR Compliance (EU and International Visitors)">
            <p>For visitors and clients located in the European Union or other jurisdictions with applicable data protection frameworks, we process personal data on a lawful basis and implement the following protections:</p>
            <ul>
              <li>Lawful basis determination for all processing activities</li>
              <li>Data subject rights implementation, including access, rectification, erasure, and portability</li>
              <li>Privacy by design and default methodologies</li>
              <li>Data protection impact assessments for high-risk processing</li>
            </ul>
            <h3>Cross-Border Data Transfers</h3>
            <ul>
              <li>Standard contractual clauses for international transfers</li>
              <li>Adequacy decision verification for EU transfers</li>
              <li>Local data residency requirements assessment</li>
            </ul>
            <p>To exercise your rights under GDPR, email <a href="mailto:privacy@delina.esq" className="text-ink underline underline-offset-2 hover:text-ink/60 transition-colors">privacy@delina.esq</a> with &ldquo;Data Request&rdquo; in the subject line.</p>
          </Section>

          <Section title="Privilege Framework">
            <p>Attorney-client privilege and work product protections apply only where permitted by California law and where an attorney-client relationship is formally established for California law matters. Federal tax matters are subject to federal practitioner privilege as provided under applicable federal law.</p>
            <p>Privilege-protected information is handled under the California Rules of Professional Conduct and applicable federal standards, and is never disclosed except as required by law or with client consent.</p>
          </Section>

          <Section title="Third-Party Services">
            <p>This website and Firm operations utilize third-party platforms including scheduling tools, payment processors, and analytics services. Each third party operates under its own privacy policy. We conduct due diligence on third-party vendors but do not control their data practices.</p>
            <p>We do not permit third-party advertising networks to collect data through this website.</p>
          </Section>

          <Section title="Contact and Data Requests">
            <p>For all privacy-related inquiries, data requests, or to report a concern, contact:</p>
            <p>
              <a href="mailto:privacy@delina.esq" className="text-ink underline underline-offset-2 hover:text-ink/60 transition-colors">privacy@delina.esq</a>
              <br />Subject line: &ldquo;Data Request&rdquo; or &ldquo;Privacy Inquiry&rdquo;
            </p>
            <p>We respond to verified requests within the timeframes required by applicable law.</p>
          </Section>

          <Section title="Updates to This Policy">
            <p>This Privacy Policy is reviewed and updated regularly to reflect changes in law, technology, and practice. Material changes will be communicated with advance notice. Continued use of this website following an update constitutes acceptance of the revised policy.</p>
          </Section>

          <div className="border-t border-steel/20 mt-16 pt-10 space-y-3">
            <p className="font-sans text-[15px] text-ink/50 leading-relaxed">
              For questions about these practices, contact <a href="mailto:privacy@delina.esq" className="hover:text-ink/80 transition-colors underline underline-offset-2">privacy@delina.esq</a>.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
              &copy; 2025 Delina Yasmeh, Esq. All rights reserved.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12 border-b border-steel/15 pb-10">
      <h2
        className="font-display font-light text-ink leading-tight mb-5"
        style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)' }}
      >
        {title}
      </h2>
      <div className="space-y-4 font-sans text-[17px] text-ink/65 leading-[1.85] [&_strong]:text-ink [&_strong]:font-medium [&_h3]:font-sans [&_h3]:font-medium [&_h3]:text-ink [&_h3]:text-[13px] [&_h3]:uppercase [&_h3]:tracking-[0.12em] [&_h3]:mt-5 [&_h3]:mb-2 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_a]:underline [&_a]:underline-offset-2 [&_a]:text-ink/70 [&_a:hover]:text-ink">
        {children}
      </div>
    </div>
  )
}
