import { Link } from 'react-router-dom'
import { PageShell } from '../../components/PageShell'
import { countryPages } from '../../content/countries'
import { COUNTRY_NAV } from '../../content/site'

export function CountriesIndex() {
  return (
    <PageShell
      title="Countries & Entry Info"
      description="Entry, clearance and operating conditions for six member markets, with identical page structure."
      path="/countries"
      crumbs={[{ name: 'Countries & Entry Info', path: '/countries' }]}
      section="countries"
    >
      <h1>Countries &amp; Entry Info</h1>
      <p className="lede">
        Current, verified entry and passage information for six African and Indian Ocean markets.
        Dated, sourced, and honest about what is unsettled. Tax and VAT are stated at principle
        level only.
      </p>
      <div className="card-grid">
        {COUNTRY_NAV.map((item) => {
          const country = countryPages.find((c) => `/countries/${c.slug}` === item.to)
          return (
            <Link className="card" key={item.to} to={item.to}>
              {country ? (
                <img className="card-photo" src={country.image.src} alt="" />
              ) : null}
              <h2>{item.label}</h2>
            </Link>
          )
        })}
      </div>
    </PageShell>
  )
}
