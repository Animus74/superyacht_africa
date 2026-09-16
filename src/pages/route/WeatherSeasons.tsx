import { Link } from 'react-router-dom'
import { PageShell } from '../../components/PageShell'
import { PhotoFigure } from '../../components/PhotoFigure'

export function WeatherSeasons() {
  return (
    <PageShell
      title="Weather, Seasons & Passage Planning"
      description="Cape gale season, Agulhas Current risk, and Indian Ocean cyclone season — two unrelated planning calendars."
      path="/route/weather-seasons"
      crumbs={[
        { name: 'The Southern Explorer Route', path: '/route' },
        { name: 'Weather, Seasons & Passage Planning', path: '/route/weather-seasons' },
      ]}
      section="route"
    >
      <h1>Weather, Seasons &amp; Passage Planning</h1>
      <p className="lede">
        Seasonal windows and passage hazards are the category the association can own confidently:
        low volatility, high value. Exact seasonal windows and current-core data will be dated once
        confirmed with the Infrastructure and Policy Task Teams.
      </p>
      <PhotoFigure
        src="/images/chart-table.jpg"
        alt="Nautical chart table with dividers and a paper chart"
      />

      <h2>Cape gale season &amp; the Agulhas Current</h2>
      <p>
        The Cape south coast is affected by two distinct hazards that are sometimes conflated: the
        Agulhas Current, which runs strongly southwest along the shelf edge, and the succession of
        south-westerly cold fronts that cross the Cape especially outside the summer months. When a
        strong south-westerly gale opposes the current, short, steep seas can build quickly off the
        shelf edge — a known hazard for any vessel on this coast, not unique to superyachts.
        Recommended mitigation is routing further offshore to avoid the strongest current core when
        a south-westerly blow is forecast, and building schedule flexibility into any Cape passage
        rather than a fixed transit date.
      </p>

      <h2>Richards Bay – Cape Town passage</h2>
      <p>
        This leg carries the same Agulhas Current / south-westerly gale interaction described
        above, over a longer offshore passage. It is named here specifically rather than folded
        into general seasonal guidance: this is a passage that rewards careful weather routing and
        is genuinely more demanding than the shorter coastal hops on either side of it.
      </p>

      <h2>Indian Ocean cyclone season</h2>
      <p>
        Mauritius, Seychelles and Madagascar sit inside the southwest Indian Ocean cyclone belt,
        active broadly from November to April, with the Seychelles sitting close to the northern
        edge of typical cyclone tracks and Mauritius and Madagascar more exposed. This is a
        materially different planning calendar from the Cape gale season above, and the two should
        never be presented as one window.
      </p>

      <h2>Season-by-country reference</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>System</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>South Africa</td>
              <td>Cape gale / Agulhas</td>
              <td>Includes the named Richards Bay–Cape Town passage hazard</td>
            </tr>
            <tr>
              <td>Namibia</td>
              <td>Cape gale / Agulhas</td>
              <td>Country-specific seasonal detail pending steward confirmation</td>
            </tr>
            <tr>
              <td>Mauritius</td>
              <td>Indian Ocean cyclone</td>
              <td>Broadly November to April; more exposed than Seychelles</td>
            </tr>
            <tr>
              <td>Seychelles</td>
              <td>Indian Ocean cyclone</td>
              <td>Northern edge of typical cyclone tracks</td>
            </tr>
            <tr>
              <td>Madagascar</td>
              <td>Indian Ocean cyclone</td>
              <td>Among the more exposed of the six member countries</td>
            </tr>
            <tr>
              <td>St Helena</td>
              <td>Outside cyclone belt</td>
              <td>Generally treated as a year-round passage landfall; local advisory pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Member weather-routing services will appear from the{' '}
        <Link to="/directory">Directory</Link> once listings are live.
      </p>
      <p>
        <Link className="button" to="/directory">
          Contact a member agent for current routing guidance
        </Link>
      </p>
    </PageShell>
  )
}
