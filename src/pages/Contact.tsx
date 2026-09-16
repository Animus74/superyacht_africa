import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'

export function Contact() {
  return (
    <PageShell
      title="General contact"
      description="General contact for Superyacht Africa NPC."
      path="/contact"
      crumbs={[{ name: 'General contact', path: '/contact' }]}
      section={null}
    >
      <h1>General contact</h1>
      <p>
        For press, use <Link to="/news/press-media">Press &amp; Media</Link> — a named spokesperson,
        no form. For government, ports, regulators and study sponsors, use{' '}
        <Link to="/news/government-partnership-enquiries">
          Government &amp; Partnership Enquiries
        </Link>
        . For membership, use the relevant tier page.
      </p>
      <p>
        A general association email and postal address will be published here with the NPC
        registration number and registered address, once confirmed. Those fields are a launch
        blocker in the design brief and are not invented on this page.
      </p>
    </PageShell>
  )
}
