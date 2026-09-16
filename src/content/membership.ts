export type MembershipTier = {
  slug: string
  h1: string
  fee: string
  voting: string
  path: 'self-serve' | 'relationship'
  who: string
  body: string
  benefits: string[]
  offerPrice?: string
  offerCurrency?: string
}

export const membershipIntro = `Superyacht Africa NPC membership is structured across seven categories, each with a published fee. Three tiers carry voting rights — Founding Member, Regional Partner and Strategic Corporate Member — reflecting the tiers most directly invested in the association’s strategic direction. The remaining tiers participate fully in the working-group community without a governance vote. The gap between a Regional Partner’s fee and an SME/Local Business Member’s fee is not an oversight: contribution is scaled to capacity, not to influence, and every tier has an equal voice in the Directory and in working-group participation regardless of what it pays.`

export const membershipTiersTable = [
  {
    tier: 'Founding Member',
    to: '/membership/founding-member',
    who: 'Organisations that helped establish the association from October 2025',
    fee: 'R15,000 p.a. (South African members) / €1,000 p.a. (international members)',
    voting: 'Voting',
    path: 'Relationship-led — closed 31 August 2026',
  },
  {
    tier: 'Regional Partner',
    to: '/membership/regional-partner',
    who: 'Destinations, tourism authorities, port cities, regional economic and infrastructure bodies',
    fee: 'R40,000 p.a.',
    voting: 'Voting (non-government partners; ex officio/non-voting for certain public-sector bodies)',
    path: 'Relationship-led',
  },
  {
    tier: 'Strategic Corporate Member',
    to: '/membership/strategic-corporate-member',
    who: 'Larger private-sector businesses with a strong commercial interest in superyacht growth',
    fee: 'R30,000 p.a.',
    voting: 'Voting',
    path: 'Relationship-led',
  },
  {
    tier: 'Corporate Member',
    to: '/membership/corporate-member',
    who: 'Established companies wanting access, visibility and representation',
    fee: 'R15,000 p.a.',
    voting: 'Non-voting',
    path: 'Self-serve',
  },
  {
    tier: 'SME/Local Business Member',
    to: '/membership/sme-local-business-member',
    who: 'Smaller businesses, local suppliers, emerging marine or tourism service providers',
    fee: 'R5,000 p.a.',
    voting: 'Non-voting',
    path: 'Self-serve',
  },
  {
    tier: 'Crew Member',
    to: '/membership/crew-member',
    who: 'Current and former yacht crew, and crew who want to support Africa as a destination',
    fee: 'USD 100 p.a. or USD 8.50/month',
    voting: 'Non-voting',
    path: 'Self-serve',
  },
]

export const affiliateNote =
  'Affiliate / Observer membership (media, international friends of the initiative, and aligned non-African organisations) exists in the membership model by invitation or nominal fee, non-voting, relationship-led. It does not currently have a dedicated sitemap page.'

export const tiers: MembershipTier[] = [
  {
    slug: 'regional-partner',
    h1: 'Regional Partner',
    fee: 'R40,000 p.a.',
    voting: 'Voting (non-government partners; certain public-sector bodies may participate ex officio or as non-voting observers)',
    path: 'relationship',
    who: 'Destinations, tourism authorities, port cities and regional economic or infrastructure bodies.',
    body: 'Regional Partner membership is built for destinations, tourism authorities, port cities and regional economic or infrastructure bodies — the institutions that make a place on this route work, not only the businesses that operate within it. Fee: R40,000 p.a. Regional Partners hold voting rights (non-government partners; certain public-sector bodies may instead participate ex officio or as non-voting observers, by their own institutional preference).',
    benefits: [
      'Destination profile on association platforms',
      'Inclusion in route development and destination briefs',
      'Participation in policy dialogue',
      'Access to research findings and regional insights',
      'Opportunity to co-host familiarisation visits, investor or media briefings',
    ],
    offerPrice: '40000',
    offerCurrency: 'ZAR',
  },
  {
    slug: 'strategic-corporate-member',
    h1: 'Strategic Corporate Member',
    fee: 'R30,000 p.a.',
    voting: 'Voting',
    path: 'relationship',
    who: 'Superyacht agents, major refit or technical firms, marina operators, aviation and logistics partners, insurers, and larger marine service companies.',
    body: 'Strategic Corporate membership suits superyacht agents, major refit or technical firms, marina operators, aviation and logistics partners, insurers, and larger marine service companies with a strong commercial interest in the sector’s growth. Fee: R30,000 p.a. Strategic Corporate Members hold voting rights.',
    benefits: [
      'Premium business profile',
      'The association’s member badge',
      'Access to all working groups',
      'Policy and market briefings',
      'Participation in regional showcases and trade promotion',
      'Priority inclusion in supplier and service mapping',
    ],
    offerPrice: '30000',
    offerCurrency: 'ZAR',
  },
  {
    slug: 'corporate-member',
    h1: 'Corporate Member',
    fee: 'R15,000 p.a.',
    voting: 'Non-voting',
    path: 'self-serve',
    who: 'Established companies that want access, visibility and representation without a governance role.',
    body: 'Corporate Membership is the association’s main business tier, for established companies that want access, visibility and representation without a governance role. Fee: R15,000 p.a. Non-voting.',
    benefits: [
      'Directory listing',
      'Access to general meetings and briefings',
      'Member communications',
      'Member rates for events and partner activations',
      'Inclusion in route and industry promotion where relevant',
    ],
    offerPrice: '15000',
    offerCurrency: 'ZAR',
  },
  {
    slug: 'sme-local-business-member',
    h1: 'SME/Local Business Member',
    fee: 'R5,000 p.a.',
    voting: 'Non-voting',
    path: 'self-serve',
    who: 'Smaller businesses, local suppliers, and emerging marine or tourism service providers.',
    body: 'SME/Local Business membership is for smaller businesses, local suppliers, and emerging marine or tourism service providers. Fee: R5,000 p.a. Non-voting.',
    benefits: [
      'Lower-cost access to the network',
      'A Directory listing on equal terms with every other member regardless of size',
      'Selected briefings',
      'Visibility as part of the local supply chain',
      'A stake in the skills and SME development the Action Plan is built around',
    ],
    offerPrice: '5000',
    offerCurrency: 'ZAR',
  },
  {
    slug: 'crew-member',
    h1: 'Crew Member',
    fee: 'USD 100 p.a., or USD 8.50/month',
    voting: 'Non-voting',
    path: 'self-serve',
    who: 'Current and former yacht crew, and crew who want to support Africa as a destination.',
    body: 'Crew Membership is for current and former yacht crew, and crew who want to support Africa as a destination. Priced in USD to remove exchange-rate friction for crew working internationally: USD 100 p.a., or USD 8.50/month. Non-voting. This is a new, early-stage tier — content and events will build out as the crew network grows.',
    benefits: [
      'Destination updates relevant to crew',
      'Practical regional information',
      'Access to crew-focused events and sessions as they are scheduled',
    ],
    offerPrice: '100',
    offerCurrency: 'USD',
  },
  {
    slug: 'founding-member',
    h1: 'Founding Member',
    fee: 'R15,000 p.a. (South African organisations) or €1,000 p.a. (international organisations)',
    voting: 'Voting',
    path: 'relationship',
    who: 'Organisations that committed before the association had a formal structure or a published fee schedule — from October 2025 onward.',
    body: 'Founding Member status recognises the organisations that committed to Superyacht Africa NPC before it had a formal structure or a published fee schedule — from October 2025 onward. It is a permanent, dated status: closed 31 August 2026, after which no organisation may become a Founding Member. Fee: R15,000 p.a. (South African organisations) or €1,000 p.a. (international organisations). Founding Members hold voting rights.',
    benefits: [
      'Recognition on the website and all launch materials, in perpetuity',
      'Priority profile visibility',
      'Eligibility for founding advisory discussions',
      'Early input into the first two years’ priorities and workplan',
      'Access to all member briefings and working groups',
      'Preferred visibility in initial PR and route promotion',
      'Right to use the “Founding Member of Superyacht Africa NPC” mark',
    ],
  },
]
