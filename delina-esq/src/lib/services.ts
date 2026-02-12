export type AccentColor = 'hot-pink' | 'electric' | 'cyber-violet'

export interface PainPoint {
  title: string
  description: string
  accentPhrase: string
}

export interface SolutionCard {
  title: string
  description: string
  bullets: string[]
}

export interface ProcessStep {
  stepNumber: number
  stickerLabel: string
  title: string
  description: string
}

export interface Metric {
  value: string
  label: string
  description: string
}

export interface ServiceData {
  slug: string
  title: string
  shortTitle: string
  icon: string
  color: AccentColor
  description: string
  items: string[]
  heroHeadline: string
  heroSubheadline: string
  trustMarker: string
  painPoints: PainPoint[]
  solutionCards: SolutionCard[]
  process: ProcessStep[]
  metrics: Metric[]
  relatedSlugs: string[]
  metaTitle: string
  metaDescription: string
}

export const colorMap: Record<AccentColor, {
  accent: string
  bg: string
  border: string
  shadow: string
  glowClass: string
}> = {
  'hot-pink': {
    accent: 'text-hot-pink',
    bg: 'bg-hot-pink/10',
    border: 'border-hot-pink/30',
    shadow: '#00FF41',
    glowClass: 'shadow-glow-pink',
  },
  'electric': {
    accent: 'text-electric',
    bg: 'bg-electric/10',
    border: 'border-electric/30',
    shadow: '#00F5FF',
    glowClass: 'shadow-glow-cyan',
  },
  'cyber-violet': {
    accent: 'text-cyber-violet',
    bg: 'bg-cyber-violet/10',
    border: 'border-cyber-violet/30',
    shadow: '#BF5AF2',
    glowClass: 'shadow-glow-violet',
  },
}

export const services: ServiceData[] = [
  {
    slug: 'business-diagnostics',
    title: 'Business Diagnostics & Strategy',
    shortTitle: 'Diagnostics',
    icon: '\u25C6',
    color: 'hot-pink',
    description: 'Deep-dive business analysis combining tax planning with legal review.',
    items: [
      'Review formation documents, tax elections, contracts, payment flows, and intellectual property',
      'Identify risks, inefficiencies, and opportunities',
      'Multi-entity planning and optimization',
      'Cross-jurisdictional compliance review',
      'Strategic roadmap development',
    ],
    heroHeadline: 'Stop Guessing. Know Exactly Where Your Business Stands.',
    heroSubheadline: 'A comprehensive legal and tax diagnostic that exposes hidden risks, wasted money, and structural gaps holding your business back.',
    trustMarker: 'JD + LL.M. Taxation // Former Deloitte & PwC // 150+ Cases',
    painPoints: [
      {
        title: 'Flying Blind on Compliance',
        description: 'You have never had a professional audit your formation documents, tax elections, and contracts holistically. One bad filing can unravel everything.',
        accentPhrase: 'one bad filing can unravel everything',
      },
      {
        title: 'Paying More Tax Than You Should',
        description: 'Missed elections, wrong entity classification, and unoptimized compensation structures mean thousands lost every quarter.',
        accentPhrase: 'thousands lost every quarter',
      },
      {
        title: 'Legal and Tax Working Against Each Other',
        description: 'Your lawyer does not understand tax implications. Your accountant does not understand legal exposure. Two advisors, zero alignment.',
        accentPhrase: 'two advisors, zero alignment',
      },
      {
        title: 'No Roadmap for Growth',
        description: 'Scaling without a strategic plan for multi-entity expansion, IP protection, or jurisdictional compliance. Growth without structure is risk.',
        accentPhrase: 'growth without structure is risk',
      },
    ],
    solutionCards: [
      {
        title: 'Full Business Audit',
        description: 'We review every legal and tax document that defines your business.',
        bullets: [
          'Review formation documents, tax elections, contracts, payment flows, and intellectual property',
          'Identify risks, inefficiencies, and opportunities',
        ],
      },
      {
        title: 'Multi-Entity & Compliance Review',
        description: 'Cross-jurisdictional analysis for complex business structures.',
        bullets: [
          'Multi-entity planning and optimization',
          'Cross-jurisdictional compliance review',
        ],
      },
      {
        title: 'Strategic Roadmap',
        description: 'A prioritized action plan with specific recommendations and timelines.',
        bullets: [
          'Strategic roadmap development',
          'Prioritized recommendations with estimated impact',
          'Timeline for implementation and follow-up',
        ],
      },
    ],
    process: [
      {
        stepNumber: 1,
        stickerLabel: '01 // INTAKE',
        title: 'Discovery & Document Review',
        description: 'We collect your formation docs, tax returns, contracts, and operating agreements. Everything gets reviewed before our first meeting.',
      },
      {
        stepNumber: 2,
        stickerLabel: '02 // ANALYSIS',
        title: 'Cross-Functional Diagnostic',
        description: 'We map your legal structure against your tax position, identify misalignments, quantify exposure, and flag every optimization opportunity.',
      },
      {
        stepNumber: 3,
        stickerLabel: '03 // ROADMAP',
        title: 'Strategic Action Plan',
        description: 'You receive a prioritized roadmap with specific recommendations, timelines, and estimated impact \u2014 ready to execute.',
      },
    ],
    metrics: [
      { value: '$2.1M+', label: 'Tax Savings Identified', description: 'Across diagnostic clients in the last 12 months' },
      { value: '47', label: 'Avg. Issues Found', description: 'Average findings per comprehensive diagnostic' },
      { value: '100%', label: 'Alignment Rate', description: 'Legal and tax strategy synced from day one' },
      { value: '24-48hr', label: 'Turnaround', description: 'From document submission to initial review' },
    ],
    relatedSlugs: ['entity-structuring', 'tax-strategy'],
    metaTitle: 'Business Diagnostics & Strategy | Delina Yasmeh, Esq.',
    metaDescription: 'Comprehensive legal and tax business diagnostic for founders and operators. Identify structural risks, tax inefficiencies, and growth opportunities.',
  },
  {
    slug: 'entity-structuring',
    title: 'Entity Structuring',
    shortTitle: 'Entity',
    icon: '\u25A0',
    color: 'electric',
    description: 'Formation and restructuring for liability protection and tax efficiency.',
    items: [
      'LLCs, corporations, and S-Corps',
      'S-Corp election and retroactive filings',
      'Multi-entity planning and holding companies',
      'State registrations and compliance',
      'Legal structure reviews and conversions',
    ],
    heroHeadline: 'Build the Structure Your Business Actually Needs.',
    heroSubheadline: 'LLCs, S-Corps, holding companies, and multi-entity architectures \u2014 designed for tax efficiency and legal protection from the start.',
    trustMarker: 'LL.M. Taxation // Entity Formation Specialist // Cross-Jurisdictional',
    painPoints: [
      {
        title: 'Wrong Entity, Wrong Tax Treatment',
        description: 'The default LLC setup is costing you thousands in self-employment tax. The wrong box checked on day one compounds every year.',
        accentPhrase: 'the wrong box checked on day one',
      },
      {
        title: 'Liability Exposure Everywhere',
        description: 'Operating without proper separation between personal and business assets. One lawsuit away from losing everything.',
        accentPhrase: 'one lawsuit away from losing everything',
      },
      {
        title: 'The S-Corp You Were Told to Get',
        description: 'Your CPA recommended an S-Corp election without understanding the legal implications. Tax savings that create legal problems.',
        accentPhrase: 'tax savings that create legal problems',
      },
      {
        title: 'Multi-State Compliance Nightmares',
        description: 'Expanding to new states without proper registrations and nexus analysis. Penalties compound faster than revenue.',
        accentPhrase: 'penalties compound faster than revenue',
      },
    ],
    solutionCards: [
      {
        title: 'Entity Formation & Elections',
        description: 'The right structure for your revenue model, growth plan, and risk profile.',
        bullets: [
          'LLCs, corporations, and S-Corps',
          'S-Corp election and retroactive filings',
        ],
      },
      {
        title: 'Multi-Entity Architecture',
        description: 'Holding companies, subsidiaries, and operating entities designed to work together.',
        bullets: [
          'Multi-entity planning and holding companies',
          'Asset protection and liability isolation',
        ],
      },
      {
        title: 'Registrations & Conversions',
        description: 'State compliance, entity conversions, and ongoing structural optimization.',
        bullets: [
          'State registrations and compliance',
          'Legal structure reviews and conversions',
        ],
      },
    ],
    process: [
      {
        stepNumber: 1,
        stickerLabel: '01 // ASSESS',
        title: 'Structure Analysis',
        description: 'We evaluate your current entity setup, revenue model, and growth plans to determine the optimal legal and tax structure.',
      },
      {
        stepNumber: 2,
        stickerLabel: '02 // BUILD',
        title: 'Formation & Filing',
        description: 'We draft formation documents, file elections, register in required states, and establish operating agreements aligned with your tax strategy.',
      },
      {
        stepNumber: 3,
        stickerLabel: '03 // PROTECT',
        title: 'Ongoing Compliance',
        description: 'Annual compliance review ensures your structure stays optimized as your business evolves, revenue grows, and regulations change.',
      },
    ],
    metrics: [
      { value: '500+', label: 'Entities Structured', description: 'LLCs, S-Corps, and holding companies formed and optimized' },
      { value: '$38K', label: 'Avg. Annual Savings', description: 'Through proper entity selection and election timing' },
      { value: '12', label: 'States Covered', description: 'Multi-state registrations and compliance maintained' },
      { value: '3 Days', label: 'Formation Speed', description: 'From strategy session to filed documents' },
    ],
    relatedSlugs: ['business-diagnostics', 'tax-strategy', 'contract-drafting'],
    metaTitle: 'Entity Structuring | Delina Yasmeh, Esq.',
    metaDescription: 'LLC, S-Corp, and multi-entity formation with integrated tax strategy. Liability protection and tax efficiency from the start.',
  },
  {
    slug: 'contract-drafting',
    title: 'Contract Drafting & Advisory',
    shortTitle: 'Contracts',
    icon: '\u25B2',
    color: 'cyber-violet',
    description: 'Legal agreements that reflect your actual business operations and protect income.',
    items: [
      'Operating agreements and partnership terms',
      'Independent contractor and employment contracts',
      'Licensing, brand, and service agreements',
      'NDAs, IP assignments, and disclaimers',
      'Contract audits and revisions',
    ],
    heroHeadline: 'Contracts That Actually Protect Your Income.',
    heroSubheadline: 'Operating agreements, IC contracts, licensing deals, and NDAs \u2014 drafted to reflect how your business actually operates.',
    trustMarker: '150+ Cases Managed // Big Four Transaction Experience // JD',
    painPoints: [
      {
        title: 'Template Contracts from the Internet',
        description: 'Generic templates that do not reflect your actual business operations. Unenforceable when it matters most.',
        accentPhrase: 'unenforceable when it matters most',
      },
      {
        title: 'Operating Agreements That Say Nothing',
        description: 'LLCs with boilerplate operating agreements that fail to address profit distribution, decision-making, or exit scenarios. Partnership disputes destroy businesses.',
        accentPhrase: 'partnership disputes destroy businesses',
      },
      {
        title: 'IC Misclassification Risk',
        description: 'Treating workers as independent contractors without proper agreements or structural support. The IRS reclassification audit will find you.',
        accentPhrase: 'the IRS reclassification audit',
      },
      {
        title: 'No IP Protection',
        description: 'Creators and founders who have no IP assignments, licensing terms, or work-for-hire provisions. Your most valuable asset is unprotected.',
        accentPhrase: 'your most valuable asset is unprotected',
      },
    ],
    solutionCards: [
      {
        title: 'Operating & Partnership Agreements',
        description: 'Custom agreements that define roles, distributions, decisions, and exits.',
        bullets: [
          'Operating agreements and partnership terms',
          'Independent contractor and employment contracts',
        ],
      },
      {
        title: 'Licensing & Service Agreements',
        description: 'Brand protection, IP licensing, and service terms built for your revenue model.',
        bullets: [
          'Licensing, brand, and service agreements',
          'NDAs, IP assignments, and disclaimers',
        ],
      },
      {
        title: 'Contract Audits & Revisions',
        description: 'Existing contracts reviewed for enforceability, tax alignment, and compliance.',
        bullets: [
          'Contract audits and revisions',
          'Annual review cycle for evolving business needs',
          'Regulatory compliance updates',
        ],
      },
    ],
    process: [
      {
        stepNumber: 1,
        stickerLabel: '01 // SCOPE',
        title: 'Relationship Mapping',
        description: 'We identify every business relationship that needs a written agreement \u2014 partners, contractors, vendors, clients, and IP contributors.',
      },
      {
        stepNumber: 2,
        stickerLabel: '02 // DRAFT',
        title: 'Custom Drafting',
        description: 'Each agreement is drafted from scratch to reflect your actual operations, compensation structure, and tax elections \u2014 not copied from a template.',
      },
      {
        stepNumber: 3,
        stickerLabel: '03 // REVIEW',
        title: 'Audit & Update Cycle',
        description: 'Existing contracts are reviewed annually for enforceability, tax alignment, and regulatory compliance. Terms evolve as your business does.',
      },
    ],
    metrics: [
      { value: '200+', label: 'Contracts Drafted', description: 'Custom agreements for founders, creators, and operators' },
      { value: 'Zero', label: 'Template Reliance', description: 'Every agreement is built from scratch for your business' },
      { value: '98%', label: 'Enforcement Rate', description: 'Contracts that held under legal challenge or audit' },
      { value: '72hr', label: 'Draft Delivery', description: 'Standard turnaround for single-agreement engagements' },
    ],
    relatedSlugs: ['entity-structuring', 'transactions-ma'],
    metaTitle: 'Contract Drafting & Advisory | Delina Yasmeh, Esq.',
    metaDescription: 'Custom legal agreements for founders and operators. Operating agreements, IC contracts, licensing deals, and NDAs drafted from scratch.',
  },
  {
    slug: 'tax-strategy',
    title: 'Tax Strategy & Planning',
    shortTitle: 'Tax Strategy',
    icon: '\u25C9',
    color: 'hot-pink',
    description: 'Tax optimization aligned with your legal structure and revenue model.',
    items: [
      'S-Corp compensation strategy',
      'Deduction and expense planning',
      'Tax review of business operations and agreements',
      'Multi-entity and pass-through alignment',
      'Ongoing legal-tax advisory',
    ],
    heroHeadline: 'Keep More of What You Earn. Legally.',
    heroSubheadline: 'Tax optimization aligned with your legal structure and revenue model \u2014 not generic advice from someone who has never seen your operating agreement.',
    trustMarker: 'LL.M. Taxation // Circular 230 Qualified // Former PwC Silicon Valley',
    painPoints: [
      {
        title: 'Your CPA Only Does Compliance',
        description: 'Your accountant files returns but never proactively plans. Filing is not strategy \u2014 and the difference costs you every year.',
        accentPhrase: 'filing is not strategy',
      },
      {
        title: 'S-Corp Compensation Guesswork',
        description: 'Reasonable compensation set arbitrarily without legal or tax analysis. The IRS has a formula, and they enforce it.',
        accentPhrase: 'the IRS has a formula, and they enforce it',
      },
      {
        title: 'Deductions You Are Missing',
        description: 'You do not know what you can deduct because your advisor does not understand your legal agreements. Your contracts determine your deductions.',
        accentPhrase: 'your contracts determine your deductions',
      },
      {
        title: 'Tax and Legal Out of Sync',
        description: 'Entity elections that conflict with operating agreements. Compensation structures that ignore contract terms. Two advisors pulling in opposite directions.',
        accentPhrase: 'two advisors pulling in opposite directions',
      },
    ],
    solutionCards: [
      {
        title: 'Compensation & Deduction Strategy',
        description: 'Optimized pay structures and expense planning aligned with your entity type.',
        bullets: [
          'S-Corp compensation strategy',
          'Deduction and expense planning',
        ],
      },
      {
        title: 'Structure-Aligned Tax Review',
        description: 'Tax analysis that accounts for your legal agreements, not just your returns.',
        bullets: [
          'Tax review of business operations and agreements',
          'Multi-entity and pass-through alignment',
        ],
      },
      {
        title: 'Ongoing Legal-Tax Advisory',
        description: 'Quarterly check-ins that adapt your strategy as your business evolves.',
        bullets: [
          'Ongoing legal-tax advisory',
          'Quarterly strategy adjustments',
          'Proactive election and filing optimization',
        ],
      },
    ],
    process: [
      {
        stepNumber: 1,
        stickerLabel: '01 // REVIEW',
        title: 'Tax Position Analysis',
        description: 'We review your current tax filings, entity elections, and legal agreements to identify every misalignment and missed opportunity.',
      },
      {
        stepNumber: 2,
        stickerLabel: '02 // DESIGN',
        title: 'Integrated Tax Strategy',
        description: 'We build a tax plan that works with your legal structure \u2014 compensation, deductions, elections, and pass-through treatment all aligned.',
      },
      {
        stepNumber: 3,
        stickerLabel: '03 // ADVISE',
        title: 'Quarterly Advisory',
        description: 'Ongoing check-ins ensure your strategy adapts to revenue changes, new entities, regulatory shifts, and business milestones.',
      },
    ],
    metrics: [
      { value: '$1.2M+', label: 'Client Tax Savings', description: 'Cumulative reductions through strategic planning' },
      { value: '35%', label: 'Avg. Rate Reduction', description: 'For clients transitioning from compliance-only advisors' },
      { value: '150+', label: 'Tax Reviews Completed', description: 'Across S-Corps, LLCs, and multi-entity structures' },
      { value: '4x', label: 'ROI on Advisory', description: 'Average return on tax strategy engagement costs' },
    ],
    relatedSlugs: ['business-diagnostics', 'entity-structuring'],
    metaTitle: 'Tax Strategy & Planning | Delina Yasmeh, Esq.',
    metaDescription: 'Tax optimization aligned with your legal structure. S-Corp compensation, deduction planning, and ongoing legal-tax advisory.',
  },
  {
    slug: 'transactions-ma',
    title: 'Transactions & M&A',
    shortTitle: 'M&A',
    icon: '\u2605',
    color: 'electric',
    description: 'Business sales, purchases, and exits with integrated legal and tax support.',
    items: [
      'Legal due diligence and risk assessment',
      'Transaction structuring and documentation',
      'Post-deal integration and compliance',
      'Internal exits and partnership transitions',
      'Tax-aware deal structuring',
    ],
    heroHeadline: 'Exit Smart. Acquire Right. Structure Every Deal.',
    heroSubheadline: 'Business sales, acquisitions, and partnership transitions with integrated legal and tax support \u2014 so you do not leave money on the table.',
    trustMarker: 'Deloitte M&A Tax Group // PwC Silicon Valley // Hundreds of Millions in Deal Value',
    painPoints: [
      {
        title: 'Deals Structured for the Other Side',
        description: 'You accepted terms drafted by the buyer\'s counsel without independent legal and tax review. You signed away more than you realized.',
        accentPhrase: 'you signed away more than you realized',
      },
      {
        title: 'Tax Surprise After Closing',
        description: 'Discovering the tax bill only after the transaction closes because nobody modeled the structure. The IRS does not care about your closing date.',
        accentPhrase: 'the IRS does not care about your closing date',
      },
      {
        title: 'Due Diligence Gaps',
        description: 'Acquisitions where legal risks were buried in contracts, liabilities undisclosed, or tax exposure miscalculated. What you do not find will cost you.',
        accentPhrase: 'what you do not find will cost you',
      },
      {
        title: 'Partner Exits That Blow Up',
        description: 'Internal transitions, buyouts, and partnership dissolutions that turn adversarial because there was no clear exit mechanism. No exit plan means no clean exit.',
        accentPhrase: 'no exit plan means no clean exit',
      },
    ],
    solutionCards: [
      {
        title: 'Due Diligence & Risk Assessment',
        description: 'Comprehensive audit of every agreement, filing, and liability before any deal moves.',
        bullets: [
          'Legal due diligence and risk assessment',
          'Transaction structuring and documentation',
        ],
      },
      {
        title: 'Post-Deal Integration',
        description: 'Compliance, entity transitions, and integration planning after closing.',
        bullets: [
          'Post-deal integration and compliance',
          'Internal exits and partnership transitions',
        ],
      },
      {
        title: 'Tax-Aware Deal Structuring',
        description: 'Transaction architecture optimized for tax treatment and liability isolation.',
        bullets: [
          'Tax-aware deal structuring',
          'Cross-entity tax modeling',
          'Closing documentation and regulatory compliance',
        ],
      },
    ],
    process: [
      {
        stepNumber: 1,
        stickerLabel: '01 // DILIGENCE',
        title: 'Comprehensive Due Diligence',
        description: 'We audit every legal agreement, tax filing, liability, and structural risk before any deal moves forward. No surprises after signing.',
      },
      {
        stepNumber: 2,
        stickerLabel: '02 // STRUCTURE',
        title: 'Deal Architecture',
        description: 'We structure the transaction for optimal tax treatment, liability isolation, and regulatory compliance \u2014 sale, acquisition, or internal transition.',
      },
      {
        stepNumber: 3,
        stickerLabel: '03 // CLOSE',
        title: 'Execution & Integration',
        description: 'We manage closing documentation, post-deal compliance, entity transitions, and integration planning so the deal delivers its value.',
      },
    ],
    metrics: [
      { value: '$100M+', label: 'Deal Value Advised', description: 'Cumulative transaction value across Big Four and private practice' },
      { value: 'Zero', label: 'Post-Close Surprises', description: 'Comprehensive diligence eliminates hidden liabilities' },
      { value: '28', label: 'Transactions Completed', description: 'Sales, acquisitions, and partnership exits structured' },
      { value: '60 Days', label: 'Avg. Deal Timeline', description: 'From engagement to signed closing documents' },
    ],
    relatedSlugs: ['business-diagnostics', 'contract-drafting'],
    metaTitle: 'Transactions & M&A | Delina Yasmeh, Esq.',
    metaDescription: 'Business sales, acquisitions, and exits with integrated legal and tax support. Due diligence, deal structuring, and post-close integration.',
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug)
}
