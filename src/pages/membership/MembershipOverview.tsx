import { Link } from 'react-router-dom'
import { PageShell } from '../../components/PageShell'
import { affiliateNote, membershipIntro, membershipTiersTable } from '../../content/membership'

export function MembershipOverview() {
  return (
    <PageShell
      title="Membership"
      description="Published fees for every tier. Contribution is scaled to capacity, not to influence."
      path="/membership"
      crumbs={[{ name: 'Membership', path: '/membership' }]}
      section="membership"
      extraJsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How much does membership cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: membershipTiersTable.map((t) => `${t.tier}: ${t.fee}`).join('. '),
              },
            },
            {
              '@type': 'Question',
              name: 'Does the association recommend specific members?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. The directory is neutral, equal-treatment, and filterable by fact, not by recommendation.',
              },
            },
          ],
        },
      ]}
    >
      <h1>Membership</h1>
      <p className="lede">{membershipIntro}</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Who it is for</th>
              <th>Fee</th>
              <th>Voting</th>
              <th>Path</th>
            </tr>
          </thead>
          <tbody>
            {membershipTiersTable.map((row) => (
              <tr key={row.tier}>
                <td>
                  <Link to={row.to}>{row.tier}</Link>
                </td>
                <td>{row.who}</td>
                <td>{row.fee}</td>
                <td>{row.voting}</td>
                <td>{row.path}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="muted">{affiliateNote}</p>
      <p>Choose your tier below, or request a conversation if you are unsure which fits.</p>
    </PageShell>
  )
}
