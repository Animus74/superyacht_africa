import { Link } from 'react-router-dom'
import { JsonLd } from '../components/JsonLd'
import { PageMeta } from '../components/PageMeta'
import { breadcrumbJsonLd } from '../components/Breadcrumbs'
import { organizationJsonLd, SITE_NAME } from '../content/site'

export function Home() {
  return (
    <div>
      <PageMeta
        title={SITE_NAME}
        description="Industry association for entry, clearance and operating conditions across South Africa, Namibia, Mauritius, Seychelles, Madagascar and St Helena."
        path="/"
      />
      <JsonLd data={breadcrumbJsonLd([])} />
      <JsonLd data={organizationJsonLd()} />

      <section className="hero">
        <img
          className="hero-photo"
          src="/images/harbour-working.jpg"
          alt="Working harbour quay with a motor yacht moored alongside"
        />
        <div className="hero-copy">
          <p className="hero-kicker">Working port · industry association</p>
          <h1>
            Superyacht Africa NPC — the industry association for entry, clearance and operating
            conditions across South Africa, Namibia, Mauritius, Seychelles, Madagascar and St Helena.
          </h1>
        </div>
      </section>

      <section className="prose">
        <h2>What we do</h2>
        <p>
          Superyacht Africa NPC represents the superyacht and marine tourism industry across six
          member markets, working with governments, ports and industry to make entry, refit and
          operation simpler, safer and more transparent — and to ensure the economic benefit of
          that activity reaches local communities, not only visiting owners. We are a member-based,
          elected, non-profit body: not a booking platform, not a ratings authority, and not a
          broker of introductions.
        </p>
      </section>

      <div className="photo-strip" aria-label="Operational photography">
        <figure>
          <img src="/images/marina-pontoons.jpg" alt="Marina pontoons with yachts moored in a working basin" />
        </figure>
        <figure>
          <img src="/images/yacht-alongside.jpg" alt="Yacht lying alongside a working quay" />
        </figure>
        <figure>
          <img src="/images/dry-dock-refit.jpg" alt="Yacht in a dry dock for refit work" />
        </figure>
      </div>

      <div className="card-grid">
        <Link className="card" to="/countries">
          <h2>Entry, clearance &amp; refit information</h2>
          <p>Current, verified conditions for six African and Indian Ocean markets.</p>
        </Link>
        <Link className="card" to="/membership">
          <h2>Membership</h2>
          <p>Join the association shaping how this sector is regulated and grown.</p>
        </Link>
        <Link className="card" to="/about/mandate">
          <h2>Policy, partnership &amp; investment</h2>
          <p>Governance, funding and the Economic Impact Study.</p>
        </Link>
      </div>

      <Link className="card route-card" to="/route">
        <h2>The Southern Explorer Route</h2>
        <p>
          A working route from Cape Town through Namibia, the Indian Ocean islands and St Helena,
          described the way a passage plan is described: distances, seasons, hazards, ports of
          entry.
        </p>
      </Link>

      <dl className="governance-strip">
        <div>
          <dt>NPC registration no.</dt>
          <dd>Pending confirmation</dd>
        </div>
        <div>
          <dt>Incorporated</dt>
          <dd>Pending confirmation</dd>
        </div>
        <div>
          <dt>Board elected</dt>
          <dd>Pending confirmation</dd>
        </div>
        <div>
          <dt>Members</dt>
          <dd>Count by tier pending confirmation</dd>
        </div>
      </dl>
    </div>
  )
}
