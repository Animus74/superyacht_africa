import type { ReactNode } from 'react'
import { ABOUT_NAV, COUNTRY_NAV, MEMBERSHIP_NAV, NEWS_NAV, ROUTE_NAV } from '../content/site'
import { Breadcrumbs, breadcrumbJsonLd } from './Breadcrumbs'
import { JsonLd } from './JsonLd'
import { PageMeta } from './PageMeta'
import { SectionNav } from './SectionNav'

type Section = 'route' | 'countries' | 'membership' | 'about' | 'news' | null

const sectionNav: Record<Exclude<Section, null>, { items: readonly { to: string; label: string }[]; label: string }> = {
  route: { items: ROUTE_NAV, label: 'Route pages' },
  countries: { items: COUNTRY_NAV, label: 'Country and operational pages' },
  membership: { items: MEMBERSHIP_NAV, label: 'Membership pages' },
  about: { items: ABOUT_NAV, label: 'About and governance pages' },
  news: { items: NEWS_NAV, label: 'News and resources pages' },
}

type Crumb = { name: string; path: string }

export function PageShell({
  title,
  description,
  path,
  crumbs,
  section,
  children,
  extraJsonLd,
}: {
  title: string
  description: string
  path: string
  crumbs: Crumb[]
  section: Section
  children: ReactNode
  extraJsonLd?: unknown[]
}) {
  return (
    <article className="page">
      <PageMeta title={title} description={description} path={path} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      {extraJsonLd?.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
      <Breadcrumbs
        items={crumbs.map((c, i) =>
          i === crumbs.length - 1 ? { label: c.name } : { to: c.path, label: c.name },
        )}
      />
      {section ? (
        <SectionNav items={sectionNav[section].items} label={sectionNav[section].label} />
      ) : null}
      {children}
    </article>
  )
}
