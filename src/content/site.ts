export const SITE_NAME = 'Superyacht Africa NPC'

export const PRIMARY_NAV = [
  { to: '/route', label: 'The Southern Explorer Route' },
  { to: '/countries', label: 'Countries & Entry Info' },
  { to: '/directory', label: 'Directory' },
  { to: '/membership', label: 'Membership' },
  { to: '/about/mandate', label: 'About & Governance' },
  { to: '/news', label: 'News & Resources' },
] as const

export const ROUTE_NAV = [
  { to: '/route', label: 'Route Overview & Map' },
  { to: '/route/weather-seasons', label: 'Weather, Seasons & Passage Planning' },
  { to: '/route/case-studies', label: 'Case Studies' },
] as const

export const COUNTRY_NAV = [
  { to: '/countries/south-africa', label: 'South Africa' },
  { to: '/countries/namibia', label: 'Namibia' },
  { to: '/countries/mauritius', label: 'Mauritius' },
  { to: '/countries/seychelles', label: 'Seychelles' },
  { to: '/countries/madagascar', label: 'Madagascar' },
  { to: '/countries/st-helena', label: 'St Helena' },
  { to: '/countries/refit-haul-out', label: 'Refit & Haul-Out Capacity' },
  { to: '/countries/safety-security-medical', label: 'Safety, Security & Medical' },
  {
    to: '/countries/safety-security-medical/insurance-underwriting-brief',
    label: 'Insurance & Underwriting Brief',
  },
  { to: '/countries/crew-practical-information', label: 'Crew Practical Information' },
] as const

export const MEMBERSHIP_NAV = [
  { to: '/membership', label: 'Why Join / Tiers Overview' },
  { to: '/membership/regional-partner', label: 'Regional Partner' },
  { to: '/membership/strategic-corporate-member', label: 'Strategic Corporate Member' },
  { to: '/membership/corporate-member', label: 'Corporate Member' },
  { to: '/membership/sme-local-business-member', label: 'SME/Local Business Member' },
  { to: '/membership/crew-member', label: 'Crew Member' },
  { to: '/membership/founding-member', label: 'Founding Member' },
  { to: '/membership/code-of-conduct', label: 'Code of Conduct' },
] as const

export const ABOUT_NAV = [
  { to: '/about/mandate', label: 'Our Mandate' },
  { to: '/about/founding-history-independence', label: 'Founding History & Independence' },
  { to: '/about/economic-impact-study', label: 'Economic Impact Study' },
  { to: '/about/annual-reporting', label: 'Annual Reporting' },
] as const

export const NEWS_NAV = [
  { to: '/news/press-media', label: 'Press & Media' },
  { to: '/news/government-partnership-enquiries', label: 'Government & Partnership Enquiries' },
] as const

export const SERVICE_CATEGORIES = [
  'Agents & concierge services',
  'Marinas & port facilities',
  'Refit, repair & haul-out',
  'Marine engineering & technical services',
  'Provisioning & supply chain',
  'Crew services',
  'Tourism & destination partners',
] as const

export const COUNTRIES = [
  'South Africa',
  'Namibia',
  'Mauritius',
  'Seychelles',
  'Madagascar',
  'St Helena',
] as const

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    legalName: SITE_NAME,
    description:
      'Independent member-based industry association for entry, clearance and operating conditions for superyachts across South Africa, Namibia, Mauritius, Seychelles, Madagascar and St Helena.',
    areaServed: [...COUNTRIES],
  }
}
