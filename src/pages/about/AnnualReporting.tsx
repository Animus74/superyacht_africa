import { PageShell } from '../../components/PageShell'

export function AnnualReporting() {
  return (
    <PageShell
      title="Annual Reporting"
      description="Forward governance calendar only. No annual report or audited financials yet exist."
      path="/about/annual-reporting"
      crumbs={[
        { name: 'About & Governance', path: '/about/mandate' },
        { name: 'Annual Reporting', path: '/about/annual-reporting' },
      ]}
      section="about"
    >
      <h1>Annual Reporting</h1>
      <p>
        Superyacht Africa NPC was formed in October 2025 and is newly incorporated as a Non-Profit
        Company. No annual report or audited financial statements yet exist, and none are implied
        here. This page will state the date of the association’s first Annual General Meeting and
        its first published annual report and financial statements once those dates are confirmed.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>First AGM</td>
              <td>Pending confirmation</td>
            </tr>
            <tr>
              <td>First annual report and financial statements</td>
              <td>Pending confirmation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageShell>
  )
}
