import { Link } from 'react-router-dom'
import { PageShell } from '../../components/PageShell'
import { PhotoFigure } from '../../components/PhotoFigure'

export function RefitHaulOut() {
  return (
    <PageShell
      title="Refit & Haul-Out Capacity"
      description="Verified facilities only. Capability above roughly 60 metres is not yet demonstrated by named completed projects."
      path="/countries/refit-haul-out"
      crumbs={[
        { name: 'Countries & Entry Info', path: '/countries' },
        { name: 'Refit & Haul-Out Capacity', path: '/countries/refit-haul-out' },
      ]}
      section="countries"
    >
      <h1>Refit &amp; Haul-Out Capacity</h1>
      <PhotoFigure
        src="/images/dry-dock-refit.jpg"
        alt="Motor yacht in a dry dock with yard equipment"
      />
      <p>
        Verified refit and haul-out capacity currently exists at Cape Town and Durban, South
        Africa. Capability for vessels above roughly 60 metres is not yet demonstrated by named,
        completed reference projects at either port, and that gap is stated here plainly rather
        than implied away. Additional facility information contributed by members in Mauritius and
        elsewhere is being reviewed for inclusion. A full capability audit across all six member
        markets forms part of the forthcoming Superyacht Economic Impact Study; until that audit is
        complete, this page will list only facilities a member has confirmed and disclosed capacity
        for, each carrying a berth-dimension and haul-out-capacity field that is a required,
        self-maintained field for continued membership.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Facility</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>South Africa</td>
              <td>Cape Town (V&amp;A Waterfront)</td>
              <td>Verified refit / haul-out capacity</td>
            </tr>
            <tr>
              <td>South Africa</td>
              <td>Durban</td>
              <td>Verified refit / haul-out capacity</td>
            </tr>
            <tr>
              <td>Mauritius</td>
              <td>Member-contributed facilities</td>
              <td>Under review — not listed as verified</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="muted">
        Other countries will be added only once a member confirms verified capacity. Listings will
        pull from the <Link to="/directory">Directory</Link> once operators maintain the required
        fields. Berth dimensions and haul-out figures are self-maintained by the member operator
        and are explicitly unverified unless confirmed by the Economic Impact Study infrastructure
        audit.
      </p>
    </PageShell>
  )
}
