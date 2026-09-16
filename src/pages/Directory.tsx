import { useMemo, useState } from 'react'
import { PageShell } from '../components/PageShell'
import { COUNTRIES, SERVICE_CATEGORIES } from '../content/site'

type Listing = {
  name: string
  category: string
  country: string
  services: string
  contact: string
  code: boolean
  kind: 'operator' | 'authority'
}

const listings: Listing[] = []

export function Directory() {
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState('')
  const [service, setService] = useState('')

  const operators = useMemo(() => {
    return listings.filter((item) => {
      if (item.kind !== 'operator') return false
      if (country && item.country !== country) return false
      if (service && item.category !== service) return false
      if (query && !`${item.name} ${item.services}`.toLowerCase().includes(query.toLowerCase())) {
        return false
      }
      return true
    })
  }, [country, service, query])

  return (
    <PageShell
      title="Directory"
      description="Search and filter membership by country and service type. No ranking, no fee, no recommendation."
      path="/directory"
      crumbs={[{ name: 'Directory', path: '/directory' }]}
      section={null}
    >
      <h1>Directory</h1>
      <p className="lede">
        Search and filter Superyacht Africa NPC’s membership by country and service type. Every
        listing is self-maintained by the member and tied to Code of Conduct membership. The
        directory makes an introduction; it takes no fee, and makes no recommendation on your
        behalf.
      </p>

      <div className="filters">
        <label>
          Search
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <label>
          Country
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">All</option>
            {COUNTRIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          Service type
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">All</option>
            {SERVICE_CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>

      {operators.length === 0 ? (
        <p>
          No operational service listings are live yet. Listings go live as members countersign the
          Code of Conduct. Confirmed Founding Members will appear here once payment and
          countersignature are verified — names are not published on an invitation list alone.
        </p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Member</th>
                <th>Category</th>
                <th>Country</th>
                <th>Services</th>
                <th>Contact</th>
                <th>Code of Conduct</th>
              </tr>
            </thead>
            <tbody>
              {operators.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.country}</td>
                  <td>{item.services}</td>
                  <td>
                    <a href={`mailto:${item.contact}`}>{item.contact}</a>
                  </td>
                  <td>{item.code ? 'Member' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2>Tourism authorities and government members</h2>
      <p>
        Government and tourism-authority members are not mixed into the operational services
        filter. They are Regional Partners in a membership and governance context, not a substitute
        for a government contact list. None are listed here until confirmed.
      </p>
    </PageShell>
  )
}
