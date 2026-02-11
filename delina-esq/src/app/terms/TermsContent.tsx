'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'

interface TermsSectionProps {
  title: string
  children: React.ReactNode
  delay?: number
}

function TermsSection({ title, children, delay = 0 }: TermsSectionProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="mb-12">
        <h2 className="font-display text-xl md:text-2xl font-bold text-sage-100 mb-6">{title}</h2>
        <div className="text-slate-400 text-sm leading-relaxed space-y-4">{children}</div>
      </div>
    </ScrollReveal>
  )
}

export function TermsContent() {
  return (
    <section className="section-spacing pt-32 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="section-container relative z-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionTag text="TERMS & CONDITIONS" />
          <h1 className="font-display text-display-lg font-bold mt-8 mb-4">
            Terms &amp; <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-slate-400 text-lg mb-4">
            This Terms &amp; Conditions Agreement governs all services, disclosures, and engagements across U.S. and international jurisdictions for Delina Yasmeh, Esq.
          </p>
          <p className="text-slate-500 text-sm mb-12">
            <strong className="text-slate-400">Effective Date:</strong> July 15, 2025 &bull;{' '}
            <strong className="text-slate-400">Website:</strong>{' '}
            <a href="https://delina.esq" className="text-neon-pink hover:underline">delina.esq</a>
          </p>
        </ScrollReveal>

        <div className="h-[1px] bg-gradient-to-r from-neon-pink/40 to-transparent mb-12" />

        {/* Definitions */}
        <TermsSection title="Definitions">
          <p><strong className="text-sage-100">&ldquo;Firm,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; and &ldquo;us&rdquo;</strong> refer to the law practice and strategic advisory services of Delina Yasmeh, Esq.</p>
          <p><strong className="text-sage-100">&ldquo;You,&rdquo; &ldquo;User,&rdquo; and &ldquo;your&rdquo;</strong> refer to any individual or entity accessing this website.</p>
          <p><strong className="text-sage-100">&ldquo;Content&rdquo;</strong> means all materials, publications, insights, and communications presented on this website.</p>
          <p><strong className="text-sage-100">&ldquo;Services&rdquo;</strong> include all legal services authorized under California law, federal tax advisory services under Circular 230, and non-legal strategic consulting.</p>
          <p><strong className="text-sage-100">&ldquo;Client&rdquo;</strong> means a person or entity formally engaged with the Firm under a signed engagement agreement.</p>
        </TermsSection>

        {/* Section 1 */}
        <TermsSection title="1. Acceptance of Terms & Professional Scope" delay={0.05}>
          <p>By accessing this website or any affiliated digital platforms, you acknowledge that you are engaging with a sophisticated legal practice specializing in complex business formation, tax strategy, and corporate advisory services.</p>
          <p><strong className="text-sage-100">Professional Standards:</strong> This practice operates under the highest standards of the California State Bar, ABA Model Rules of Professional Conduct, and applicable federal tax practice regulations. All services are performed in accordance with Circular 230 requirements.</p>
          <p><strong className="text-sage-100">Sophisticated Client Acknowledgment:</strong> Our services are designed for high-growth entrepreneurs, established businesses, and complex transactions.</p>
        </TermsSection>

        {/* Section 2 */}
        <TermsSection title="2. Scope of Services & Jurisdictional Framework" delay={0.05}>
          <p><strong className="text-sage-100">California Legal Services:</strong> Legal representation is available solely for matters governed by California law. Engagements include formal attorney-client relationships, privilege protections, and compliance with the California State Bar.</p>
          <p><strong className="text-sage-100">Federal Tax Advisory:</strong> The Firm provides federal tax advice, planning, compliance, and strategic representation authorized under Circular 230 to clients across the United States and internationally.</p>
          <p><strong className="text-sage-100">Strategic Business Consulting:</strong> The Firm offers cross-jurisdictional strategic guidance in areas such as entity formation, deal structuring, capital strategy, and tax optimization.</p>
          <div className="glass-card p-6 mt-4">
            <p className="text-sage-100 text-xs font-medium mb-2">Express Jurisdictional Limitation:</p>
            <p className="text-xs">No engagement shall be construed to imply multi-state or foreign licensure. Legal guidance is limited to California law. All cross-border, out-of-state, and international advisory services are rendered on a business consulting or federal tax advisory basis only.</p>
          </div>
        </TermsSection>

        {/* Section 3 */}
        <TermsSection title="3. No Attorney-Client or Tax Advisor Relationship" delay={0.05}>
          <p><strong className="text-sage-100">Attorney-Client Relationship Formation:</strong> Attorney-client relationships are established exclusively for California legal matters through executed engagement letters, conflict clearance, scope documentation, and fee arrangement agreements.</p>
          <p><strong className="text-sage-100">Critical Communication Warning:</strong> This website and its content do not constitute legal advice outside California. Unsolicited communications do not create a privileged relationship.</p>
          <p><strong className="text-sage-100">Referral-Only Practice:</strong> This practice operates on a referral-only basis. Unsolicited inquiries may not receive responses, and consultation availability is limited based on practice capacity and alignment.</p>
        </TermsSection>

        {/* Section 4 */}
        <TermsSection title="4. Sophisticated Legal & Tax Disclaimers" delay={0.05}>
          <p><strong className="text-sage-100">No Generic Advice:</strong> Nothing on this website constitutes generalized legal advice, tax preparation services, or standardized business consultation. All strategies require customized analysis.</p>
          <p><strong className="text-sage-100">Result Variability Warning:</strong> Past client outcomes or implementations do not guarantee future results. Business strategy, legal structuring, and tax results depend on timely compliance, law changes, and client implementation.</p>
          <p><strong className="text-sage-100">Implementation Risk Assumption:</strong> All content assumes sophisticated business understanding. Clients are solely responsible for executing strategies after consultation.</p>
        </TermsSection>

        {/* Section 5 */}
        <TermsSection title="5. Data Collection & Sophisticated Client Privacy" delay={0.05}>
          <p><strong className="text-sage-100">Enhanced Security Protocols:</strong> All client data is protected through attorney-client privilege frameworks, work product doctrine protections, encrypted communication systems, secure document management platforms, and multi-factor authentication requirements.</p>
          <p><strong className="text-sage-100">Professional Confidentiality:</strong> Information handling exceeds standard privacy requirements through California Rules of Professional Conduct confidentiality standards, federal tax practitioner privilege protections, trade secret safeguards, and international data transfer compliance (GDPR, CCPA).</p>
        </TermsSection>

        {/* Sections 6-15 condensed */}
        <TermsSection title="6. Technology Platforms & Third-Party Integrations" delay={0.05}>
          <p>This practice utilizes enterprise-level platforms for scheduling, encrypted communications, payment processing (Stripe Atlas), practice management, and document management with privilege coding.</p>
          <p>Clients acknowledge responsibility for reviewing third-party platform terms of service and privacy policies.</p>
        </TermsSection>

        <TermsSection title="7. Fee Structures & Investment Terms" delay={0.05}>
          <p>This Firm does not bill hourly in traditional terms. Fees are structured around value delivered and transaction complexity: strategic analysis, advisory retainers, transactional engagements, and custom arrangements based on strategic value delivery.</p>
        </TermsSection>

        <TermsSection title="8. Intellectual Property & Proprietary Methodologies" delay={0.05}>
          <p>All content, methodologies, and frameworks represent proprietary intellectual property. Commercial use, reproduction, or distribution requires express written authorization.</p>
        </TermsSection>

        <TermsSection title="9. Professional Liability & Risk Allocation" delay={0.05}>
          <p>This practice maintains comprehensive professional liability insurance including errors and omissions coverage, cyber liability protection, international practice coverage, and regulatory compliance insurance.</p>
          <p>All content is provided &ldquo;as is&rdquo; and without warranty of any kind, express or implied.</p>
        </TermsSection>

        <TermsSection title="10. Multi-Jurisdictional Practice & Global Compliance" delay={0.05}>
          <p>Services comply with California State Bar admission requirements, federal tax practitioner regulations, international professional conduct standards, AML/KYC protocols, FCPA compliance, and OFAC sanctions screening.</p>
        </TermsSection>

        <TermsSection title="11. Privacy Policy & International Data Protection" delay={0.05}>
          <p>Enhanced data classification, GDPR compliance (EU clients), CCPA enhanced compliance (California), and cross-border data transfer protocols are maintained.</p>
          <p>To exercise your rights under the CCPA or GDPR, please email{' '}
            <a href="mailto:privacy@delina.esq" className="text-neon-pink hover:underline">privacy@delina.esq</a>.
          </p>
        </TermsSection>

        <TermsSection title="12. Professional Conduct & Ethics Framework" delay={0.05}>
          <p>This practice operates under the California Rules of Professional Conduct and ABA Model Rules, including competence (Rule 1.1), confidentiality (Rule 1.6), conflict of interest identification (Rule 1.7), and duties to former clients (Rule 1.9). Circular 230 requirements are maintained for all tax advisory work.</p>
        </TermsSection>

        <TermsSection title="13. Accessibility & Digital Inclusion" delay={0.05}>
          <p>This Firm is committed to ensuring equal access to services regardless of disability or jurisdiction. Digital services comply with WCAG 2.1 AA standards. Contact{' '}
            <a href="mailto:accessibility@delina.esq" className="text-neon-pink hover:underline">accessibility@delina.esq</a>{' '}
            to report accessibility barriers or request accommodations.
          </p>
        </TermsSection>

        <TermsSection title="14. Governing Law & Dispute Resolution" delay={0.05}>
          <p><strong className="text-sage-100">Governing Law:</strong> These Terms are governed by California law.</p>
          <p><strong className="text-sage-100">Domestic Clients:</strong> Disputes resolved through confidential binding arbitration administered by JAMS in Los Angeles County, California.</p>
          <p><strong className="text-sage-100">International Clients:</strong> Disputes may be resolved through JAMS International arbitration or ICC arbitration for matters exceeding $1M.</p>
        </TermsSection>

        <TermsSection title="15. Updates, Modifications & Notice Procedures" delay={0.05}>
          <p>Terms are updated regularly to reflect changes in applicable law, technology requirements, practice development, and regulatory compliance. Material changes receive 30-day advance notice. Continued use constitutes acceptance of updated Terms.</p>
        </TermsSection>

        {/* Footer */}
        <ScrollReveal delay={0.1}>
          <div className="mt-16 pt-8 border-t border-white/[0.04]">
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              This Terms &amp; Conditions document reflects the sophisticated legal and tax advisory practice of Delina Yasmeh, Esq., designed for high-growth entrepreneurs, established businesses, and complex strategic transactions.
            </p>
            <p className="text-slate-600 text-xs">
              Email: <a href="mailto:info@delina.esq" className="text-neon-pink hover:underline">info@delina.esq</a> &bull;
              Website: <a href="https://delina.esq" className="text-neon-pink hover:underline">delina.esq</a> &bull;
              Practice: Referral-only, consultation by appointment
            </p>
            <p className="text-slate-600 text-xs mt-2">&copy; 2025 Delina Yasmeh, Esq. All rights reserved.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
