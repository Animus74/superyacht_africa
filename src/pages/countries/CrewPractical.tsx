import { Link } from 'react-router-dom'
import { PageShell } from '../../components/PageShell'

export function CrewPractical() {
  return (
    <PageShell
      title="Crew Practical Information"
      description="Intentionally brief at launch. Crew-specific practical information will be built out as the Crew Member network grows."
      path="/countries/crew-practical-information"
      crumbs={[
        { name: 'Countries & Entry Info', path: '/countries' },
        { name: 'Crew Practical Information', path: '/countries/crew-practical-information' },
      ]}
      section="countries"
    >
      <h1>Crew Practical Information</h1>
      <p>
        This page is intentionally brief at launch. Crew-specific practical information —
        connectivity, provisioning logistics, crew change procedures by country, and shore support
        — will be built out as the Crew Member network grows and members contribute verified,
        current information.
      </p>
      <p>
        <Link className="button" to="/membership/crew-member">
          Join as a Crew Member
        </Link>
      </p>
    </PageShell>
  )
}
