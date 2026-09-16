import { Link } from 'react-router-dom'
import { PageShell } from '../../components/PageShell'

export function CaseStudies() {
  return (
    <PageShell
      title="Case Studies"
      description="Early-adopter framing only. No composite or illustrative voyage stories."
      path="/route/case-studies"
      crumbs={[
        { name: 'The Southern Explorer Route', path: '/route' },
        { name: 'Case Studies', path: '/route/case-studies' },
      ]}
      section="route"
    >
      <h1>Case Studies</h1>
      <p>
        Superyacht Africa NPC was formed in October 2025 and does not yet hold a library of
        documented voyages along the Southern Explorer Route. Rather than present composite or
        illustrative stories as if they were real, this page will be built out honestly as members
        and captains contribute genuine, named accounts of routes sailed, refits completed and
        passages made. If you have sailed this route, we would like to hear from you.
      </p>
      <p>
        <Link className="button" to="/news/government-partnership-enquiries">
          Contribute a case study
        </Link>
      </p>
    </PageShell>
  )
}
