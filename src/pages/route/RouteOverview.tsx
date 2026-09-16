import { Link } from 'react-router-dom'
import { PageShell } from '../../components/PageShell'
import { PhotoFigure } from '../../components/PhotoFigure'
import { RouteMap } from '../../components/RouteMap'
import { routeFaqs, routeLegs } from '../../content/route'

export function RouteOverview() {
  return (
    <PageShell
      title="The Southern Explorer Route"
      description="Working route map and passage-planning reference across six African and Indian Ocean markets."
      path="/route"
      crumbs={[{ name: 'The Southern Explorer Route', path: '/route' }]}
      section="route"
      extraJsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: routeFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
      ]}
    >
      <h1>The Southern Explorer Route</h1>
      <p className="lede">
        “Southern” names where this route starts and is based — not the latitude of every stop on
        it. Two legs of this route run on entirely different seasonal systems, covered separately
        below.
      </p>
      <p>
        The Southern Explorer Route connects six countries across two oceans: South Africa and
        Namibia on the Atlantic and Southern Ocean side, Mauritius, Seychelles and Madagascar in
        the tropical Indian Ocean, and St Helena as a remote Atlantic waypoint. It is not a single
        climate or a single season — it is a working corridor with real distances, two unrelated
        weather systems, and one jurisdiction (Madagascar) whose entry process is currently
        unsettled. This page sets out what a planning captain actually needs, in the order they
        need it.
      </p>
      <PhotoFigure
        src="/images/marina-pontoons.jpg"
        alt="Marina pontoons with yachts moored in a working basin"
      />

      <RouteMap />

      <h2>Leg distances and typical passage times</h2>
      <p className="muted">
        Nautical-mile distances and passage durations are not invented here. Figures will be
        published once verified by the Infrastructure / Route Task Team.
      </p>
      <div className="table-wrap">
        <table>
          <caption className="caption">
            Plain-text equivalent of the schematic map. Every planning fact on the diagram is also
            in this table.
          </caption>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Distance</th>
              <th>Typical duration</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {routeLegs.map((leg) => (
              <tr key={`${leg.from}-${leg.to}`}>
                <td>{leg.from}</td>
                <td>{leg.to}</td>
                <td>{leg.distance}</td>
                <td>{leg.duration}</td>
                <td>
                  {leg.warning ? <strong>Warning. </strong> : null}
                  {leg.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Two seasonal systems</h2>
      <p>
        <strong>Cape gale season / Agulhas Current risk</strong> — affects the South Africa and
        Namibia legs. Covered in full on{' '}
        <Link to="/route/weather-seasons">Weather, Seasons &amp; Passage Planning</Link>.
      </p>
      <p>
        <strong>Indian Ocean cyclone season</strong> — affects the Mauritius, Seychelles and
        Madagascar legs, on an entirely different calendar. Covered in full on the same page. These
        systems are never averaged into one visiting window.
      </p>

      <div className="warning">
        <p>
          <strong>Madagascar.</strong> Entry status is currently unsettled. See{' '}
          <Link to="/countries/madagascar">Madagascar</Link>.
        </p>
        <p>
          <strong>Richards Bay–Cape Town.</strong> Named passage hazard: Agulhas Current against
          south-westerly gales. Routing mitigation is on the weather page.
        </p>
        <p>
          <strong>Infrastructure today.</strong> Quay 7 at the V&amp;A Waterfront is a significant
          identified project and is under construction — not yet operational as of this draft.
        </p>
      </div>

      <p>
        <Link className="button" to="/directory">
          Speak to a member agent about planning this route
        </Link>
      </p>
    </PageShell>
  )
}
