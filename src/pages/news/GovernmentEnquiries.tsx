import { EnquiryForm } from '../../components/EnquiryForm'
import { PageShell } from '../../components/PageShell'

export function GovernmentEnquiries() {
  return (
    <PageShell
      title="Government & Partnership Enquiries"
      description="Direct route for government, port, regulatory and DFI enquiries, routed by country."
      path="/news/government-partnership-enquiries"
      crumbs={[
        { name: 'News & Resources', path: '/news' },
        {
          name: 'Government & Partnership Enquiries',
          path: '/news/government-partnership-enquiries',
        },
      ]}
      section="news"
    >
      <h1>Government &amp; Partnership Enquiries</h1>
      <p>
        Every claim on this site is checkable — registration, board, funding, and the disclosure of
        our founding relationship (see Founding History &amp; Independence). If you represent a
        government, port authority, regulatory body, or a development finance institution
        considering the Economic Impact Study, this is the direct route to the relevant Task Team
        contact for your country.
      </p>
      <h2>Routing by country</h2>
      <p className="muted">
        Named Task Team contacts per country are pending confirmation. Until then, enquiries are
        logged against the country selected on the form.
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Country / category</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>South Africa</td>
              <td>Pending confirmation</td>
            </tr>
            <tr>
              <td>Namibia</td>
              <td>Pending confirmation</td>
            </tr>
            <tr>
              <td>Mauritius</td>
              <td>Pending confirmation</td>
            </tr>
            <tr>
              <td>Seychelles</td>
              <td>Pending confirmation</td>
            </tr>
            <tr>
              <td>Madagascar</td>
              <td>Pending confirmation</td>
            </tr>
            <tr>
              <td>St Helena</td>
              <td>Pending confirmation</td>
            </tr>
            <tr>
              <td>Sponsorship / DFI (Economic Impact Study)</td>
              <td>Pending confirmation</td>
            </tr>
          </tbody>
        </table>
      </div>
      <EnquiryForm kind="government" />
    </PageShell>
  )
}
