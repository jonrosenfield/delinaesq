import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Delina Yasmeh, Esq.',
  description: 'Terms and conditions governing all services, disclosures, and engagements with Delina Yasmeh, Esq.',
  alternates: { canonical: 'https://delina.esq/terms/' },
  robots: 'noindex',
}

export default function TermsPage() {
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
            Terms &amp;<br />
            <span className="italic">Conditions.</span>
          </h1>
          <p className="font-sans font-light text-[17px] text-silver max-w-[520px] mt-6 leading-relaxed">
            This agreement governs all services, disclosures, and engagements across U.S. and international jurisdictions for Delina Yasmeh, Esq.
          </p>
        </div>
      </header>

      <article className="py-20 px-6">
        <div className="max-w-[720px] mx-auto">

          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist space-y-1 mb-14 border-b border-steel/20 pb-10">
            <p><span className="text-ink/40">Website</span> &nbsp; delina.esq</p>
            <p><span className="text-ink/40">Owner</span> &nbsp; Delina Yasmeh, Esq.</p>
            <p><span className="text-ink/40">Effective</span> &nbsp; July 15, 2025</p>
          </div>

          <Section title="Definitions">
            <p><strong>Firm, we, our, and us</strong> refer to the law practice and strategic advisory services of Delina Yasmeh, Esq.</p>
            <p><strong>You, User, and your</strong> refer to any individual or entity accessing this website.</p>
            <p><strong>Content</strong> means all materials, publications, insights, and communications presented on this website.</p>
            <p><strong>Services</strong> include all legal services authorized under California law, federal tax advisory services under Circular 230, and non-legal strategic consulting.</p>
            <p><strong>Client</strong> means a person or entity formally engaged with the Firm under a signed engagement agreement, with the relationship scope clearly documented.</p>
          </Section>

          <Section title="1. Acceptance of Terms and Professional Scope">
            <p>By accessing this website or any affiliated digital platforms, you acknowledge that you are engaging with a sophisticated legal practice specializing in complex business formation, tax strategy, and corporate advisory services. These Terms govern your use of this website and establish the framework for potential professional engagement.</p>
            <p><strong>Professional Standards.</strong> This practice operates under the highest standards of the California State Bar, American Bar Association Model Rules of Professional Conduct, and applicable federal tax practice regulations. All services are performed in accordance with Circular 230 requirements for federal tax practitioners.</p>
            <p><strong>Sophisticated Client Acknowledgment.</strong> Our services are designed for high-growth entrepreneurs, established businesses, and complex transactions. Clients are expected to have the business sophistication to understand complex legal and tax structures.</p>
          </Section>

          <Section title="2. Scope of Services and Jurisdictional Framework">
            <p><strong>California Legal Services.</strong> Legal representation, including litigation, contracts, advisory opinions, and entity work, is available solely for matters governed by California law. Engagements include formal attorney-client relationships, privilege protections, and compliance with the California State Bar.</p>
            <p><strong>Federal Tax Advisory.</strong> The Firm provides federal tax advice, planning, compliance, and strategic representation authorized under Circular 230 to clients across the United States and internationally. Federal tax services do not constitute state law tax advice outside California or the practice of law in any state outside California.</p>
            <p><strong>Strategic Business Consulting.</strong> The Firm offers cross-jurisdictional strategic guidance in areas such as entity formation, deal structuring, capital strategy, and tax optimization. These engagements are non-legal, business advisory relationships and do not establish attorney-client relationships or privilege outside California.</p>
            <h3>For California Clients</h3>
            <ul>
              <li>Full legal representation available including litigation, document preparation, and formal legal advice</li>
              <li>Attorney-client privilege applies to all legal services</li>
              <li>Complete scope of legal practice authorized under California State Bar</li>
            </ul>
            <h3>For Non-California or International Clients</h3>
            <ul>
              <li>Services delivered as strategic consulting or Circular 230 tax advisory</li>
              <li>No legal representation offered or implied outside California</li>
              <li>Business consulting and strategic advisory services, not legal representation</li>
              <li>Federal tax planning and consultation under Circular 230 authority</li>
            </ul>
            <p><strong>Express Jurisdictional Limitation.</strong> No engagement shall be construed to imply multi-state or foreign licensure. Legal guidance is limited to California law. All cross-border, out-of-state, and international advisory services are rendered on a business consulting or federal tax advisory basis only.</p>
          </Section>

          <Section title="3. No Attorney-Client or Tax Advisor Relationship">
            <p><strong>Attorney-Client Relationship Formation.</strong> Attorney-client relationships are established exclusively for California legal matters through executed engagement letters, conflict-of-interest clearance, scope-of-work documentation, fee arrangement agreements, and professional responsibility compliance verification.</p>
            <p><strong>Business Consulting Relationships.</strong> Non-attorney consulting relationships for business advisory services are established through separate business consulting agreements and do not create attorney-client privilege.</p>
            <p><strong>Federal Tax Advisory Relationships.</strong> Tax advisory relationships under Circular 230 are established through separate tax engagement agreements.</p>
            <p><strong>Critical Communication Warning.</strong> This website and its content do not constitute legal advice outside California. Unsolicited communications do not create a privileged relationship. Only executed engagement documents with proper jurisdictional scope form binding legal or tax advisory engagements. Email communications are not privileged until formal attorney-client relationship is confirmed through signed engagement.</p>
          </Section>

          <Section title="4. Sophisticated Legal and Tax Disclaimers">
            <p><strong>Advisory Depth Disclosure.</strong> Content on this site reflects specialized planning tools and analysis frameworks intended for business professionals and entrepreneurs. These strategies require individualized evaluation and are not intended for general use or implementation without full consultation.</p>
            <p><strong>No Generic Advice.</strong> Nothing on this website constitutes generalized legal advice, tax preparation services, or standardized business consultation. All strategies require customized analysis based on individual circumstances, risk tolerance, and business objectives.</p>
            <p><strong>Result Variability Warning.</strong> Past client outcomes, case studies, or implementations do not guarantee future results. Business strategy, legal structuring, and tax results depend on timely compliance, law changes, and client implementation.</p>
            <p><strong>Implementation Risk Assumption.</strong> All content assumes sophisticated business understanding and professional judgment in application. Clients are solely responsible for executing strategies after consultation and should engage qualified legal and tax counsel before implementing any strategies discussed.</p>
          </Section>

          <Section title="5. Data Collection and Privacy">
            <p>We collect and process information consistent with serving high-net-worth individuals and complex business entities. See our full <Link href="/privacy" className="text-ink underline underline-offset-2 hover:text-ink/60 transition-colors">Privacy Policy</Link> for complete detail on how data is handled, retained, and protected.</p>
            <p>Business information collected may include business formation and structure details, revenue models and growth projections, existing legal and tax advisor relationships, cross-jurisdictional business activities, intellectual property and asset portfolios, and funding and investment structures.</p>
            <p><strong>Professional Confidentiality.</strong> Information handling exceeds standard privacy requirements through application of California Rules of Professional Conduct confidentiality standards, federal tax practitioner privilege protections where applicable, trade secret and proprietary information safeguards, and international data transfer compliance (GDPR, CCPA).</p>
          </Section>

          <Section title="6. Technology Platforms and Third-Party Integrations">
            <p>This practice utilizes enterprise-level platforms designed for sophisticated legal and tax practices, including scheduling and communication systems, encrypted email, secure client portal access, Stripe for payment processing, and advanced matter management tools.</p>
            <p><strong>Client Responsibility.</strong> Clients acknowledge responsibility for reviewing and accepting the terms of service and privacy policies of all integrated third-party platforms used in service delivery. The Firm does not control third-party service terms.</p>
          </Section>

          <Section title="7. Fee Structures and Engagement Terms">
            <p>This Firm structures fees around value delivered and transaction complexity. Fee structures include initial strategic analysis, scope-based retainers for ongoing advisory partnerships, and transactional engagements for complex matters.</p>
            <p><strong>Payment Standards.</strong> All fees reflect investment in sophisticated legal and tax strategy. Payment terms are customized based on engagement complexity. Retainer agreements may include minimum monthly commitments. International clients may be subject to additional compliance requirements.</p>
            <p>The Firm reserves the right to adjust fee structures based on matter complexity, require additional retainers for multi-jurisdictional coordination, and terminate engagements for non-payment, scope changes, or jurisdictional compliance issues.</p>
          </Section>

          <Section title="8. Intellectual Property and Proprietary Methodologies">
            <p>All content, methodologies, and frameworks on this website represent proprietary intellectual property. This includes legal analysis frameworks, tax planning methodologies, business formation guides, educational content, and thought leadership.</p>
            <p><strong>Usage Restrictions.</strong> Commercial use, reproduction, or distribution of any proprietary content requires express written authorization. Educational or reference use must include proper attribution and may not be used for competitive purposes.</p>
            <p><strong>Client Work Product.</strong> All work product created during client representation remains subject to attorney-client privilege and work product doctrine protection, with ownership and usage rights defined in engagement agreements.</p>
          </Section>

          <Section title="9. Professional Liability and Risk Allocation">
            <p>This practice maintains comprehensive professional liability insurance appropriate for sophisticated legal and tax advisory services, including errors and omissions coverage, cyber liability protection, and international practice coverage.</p>
            <p><strong>No Warranties.</strong> All content is provided as-is and without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
            <p><strong>Limitation of Liability.</strong> Liability limitations are established based on the nature, scope, and jurisdictional complexity of each engagement. Clients acknowledge the sophisticated nature of advisory services and assume implementation risks. Force majeure provisions apply to circumstances beyond professional control, including regulatory changes.</p>
            <p><strong>Indemnity.</strong> You agree to indemnify, defend, and hold harmless the Firm from any claims, liabilities, damages, or expenses arising out of your access to or use of this website, implementation of strategies without proper professional guidance, or unauthorized use and jurisdictional non-compliance outside California.</p>
          </Section>

          <Section title="10. Multi-Jurisdictional Practice and Global Compliance">
            <p>This practice provides services across multiple jurisdictions consistent with professional licensing and regulatory requirements. California legal matters benefit from full practice authorization. Federal tax matters are handled under comprehensive Circular 230 compliance. International coordination and business advisory services are provided without legal practice limitations in non-California jurisdictions.</p>
            <p><strong>Regulatory Compliance.</strong> All services comply with California State Bar admission requirements, federal tax practitioner regulations, AML and KYC protocols for international clients, FCPA compliance verification, and OFAC sanctions screening.</p>
          </Section>

          <Section title="11. Professional Conduct and Ethics">
            <p>This practice operates under the California Rules of Professional Conduct and ABA Model Rules, including Rule 1.1 (Competence), Rule 1.6 (Confidentiality), Rule 1.7 (Conflict of Interest), and Rule 1.9 (Duties to Former Clients).</p>
            <p><strong>Tax Practice Standards.</strong> Federal tax practice compliance includes Circular 230 requirements, best practices for tax shelter and reportable transaction analysis, and due diligence standards for sophisticated tax planning.</p>
          </Section>

          <Section title="12. Accessibility">
            <p>This Firm is committed to ensuring equal access to services regardless of disability or jurisdiction. We strive to comply with WCAG 2.1 AA accessibility standards. To report accessibility barriers or request accommodations, contact <a href="mailto:accessibility@delina.esq" className="text-ink underline underline-offset-2 hover:text-ink/60 transition-colors">accessibility@delina.esq</a>.</p>
          </Section>

          <Section title="13. Governing Law and Dispute Resolution">
            <p>These Terms are governed by California law, with federal law applying to tax practice matters, interstate commerce, intellectual property, and international business transaction coordination.</p>
            <p><strong>Domestic Clients.</strong> All disputes shall be resolved through confidential binding arbitration administered by JAMS in Los Angeles County, California, governed by California law. A single arbitrator shall preside over matters under $500,000; three arbitrators for larger matters.</p>
            <p><strong>International Clients.</strong> Disputes may be resolved through JAMS International arbitration (seat: Los Angeles) or ICC arbitration for matters exceeding $1M in controversy (seat: Los Angeles or mutually agreed international location, three arbitrators).</p>
          </Section>

          <Section title="14. Updates and Modifications">
            <p>These Terms are updated regularly to reflect changes in applicable law, professional conduct rules, technology requirements, and practice development. Material changes will be communicated with 30 days advance notice via email or client portal. Continued use of website services or continuation of professional relationships constitutes acceptance of modified terms.</p>
          </Section>

          <div className="border-t border-steel/20 mt-16 pt-10 space-y-3">
            <p className="font-sans text-[15px] text-ink/50 leading-relaxed">
              This Terms document reflects the sophisticated legal and tax advisory practice of Delina Yasmeh, Esq. All professional services are provided with the highest standards of legal and ethical compliance.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
              &copy; 2025 Delina Yasmeh, Esq. All rights reserved.
            </p>
            <p className="font-mono text-[11px] text-mist">
              <a href="mailto:info@delina.esq" className="hover:text-silver transition-colors">info@delina.esq</a>
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
