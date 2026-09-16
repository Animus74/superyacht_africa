import { Link } from 'react-router-dom'

type Crumb = { to?: string; label: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {items.map((item) => (
          <li key={item.label}>
            {item.to ? <Link to={item.to}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const origin = typeof window === 'undefined' ? '' : window.location.origin
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const home = `${origin}${base}/`
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: home,
      },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${origin}${base}${item.path}`,
      })),
    ],
  }
}
