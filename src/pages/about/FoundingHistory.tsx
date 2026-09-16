import { PageShell } from '../../components/PageShell'

export function FoundingHistory() {
  return (
    <PageShell
      title="Founding History & Independence"
      description="Dated founding timeline and the full independence disclosure relating to Superyacht Cape Town."
      path="/about/founding-history-independence"
      crumbs={[
        { name: 'About & Governance', path: '/about/mandate' },
        {
          name: 'Founding History & Independence',
          path: '/about/founding-history-independence',
        },
      ]}
      section="about"
      extraJsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Is Superyacht Africa NPC independent of Superyacht Cape Town?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The association originated from a working group convened by Superyacht Cape Town (Pty) Ltd. Superyacht Cape Town is a commercial business and a member on the same terms as any other; it does not own, control or receive preferential treatment. Veda Pretorius, Chair, is the founder of Superyacht Cape Town; a recusal practice governs her participation in relevant board decisions.',
              },
            },
          ],
        },
      ]}
    >
      <h1>Founding History &amp; Independence</h1>

      <h2>Founding timeline</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>24 October 2025</td>
              <td>
                Inaugural Superyacht Industry Round Table, V&amp;A Waterfront, Cape Town, convened
                by Superyacht Cape Town (Pty) Ltd. Government, industry and regional stakeholders
                from Southern Africa, East Africa, the Indian Ocean islands and international
                partners met to examine international precedent (Australia’s superyacht-sector
                development) and agree next steps.
              </td>
            </tr>
            <tr>
              <td>October 2025</td>
              <td>
                African Superyacht Working Group (ASWG) formed; Veda Pretorius, founder of
                Superyacht Cape Town, elected Chair; MaryAnne Edwards, former CEO of Superyacht
                Australia, engaged as Strategic Advisor.
              </td>
            </tr>
            <tr>
              <td>February 2026</td>
              <td>
                Four Task Teams formalised: Infrastructure, Refit &amp; Technical; Policy &amp;
                Regulation; Research &amp; Governance; Marketing &amp; Branding.
              </td>
            </tr>
            <tr>
              <td>2026</td>
              <td>
                Action Plan adopted; Economic Impact Study Terms of Reference completed; Stratecon
                appointed as research partner.
              </td>
            </tr>
            <tr>
              <td>July 2026</td>
              <td>
                Working Group recommendation to formalise as a Non-Profit Company (NPC) approved.
                Founding Member invitations issued 24 July 2026, closing 31 August 2026.
              </td>
            </tr>
            <tr>
              <td>Registration, board election, constitution</td>
              <td>In progress as of the copy draft; dates to be added once confirmed.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Independence disclosure — Superyacht Cape Town</h2>
      <p>
        Superyacht Africa NPC originated from a working group convened by Superyacht Cape Town
        (Pty) Ltd in October 2025. Superyacht Cape Town is a commercial business and, under the
        association’s structure, a member on the same terms as any other member — it does not own,
        control or receive preferential treatment from Superyacht Africa NPC. Veda Pretorius, the
        association’s Chair, is the founder of Superyacht Cape Town and holds a Superyacht Cape
        Town interest; a recusal practice governs her participation in board decisions relating to
        Superyacht Cape Town. Any other officeholders holding a Superyacht Cape Town interest will
        be named here once the board is confirmed.
      </p>
      <p>
        There is no parent organisation. This page does not describe Superyacht Cape Town as
        founder, owner or controller of the NPC.
      </p>

      <h2>In-kind support</h2>
      <p>
        Any in-kind support used to bootstrap the association’s website or early operations —
        hosting, initial build costs, or similar — provided by Superyacht Cape Town or any other
        member will be named on this page, not left for later discovery. That disclosure is pending
        confirmation from the working group.
      </p>
    </PageShell>
  )
}
