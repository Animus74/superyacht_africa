import { PageShell } from '../../components/PageShell'

export function Mandate() {
  return (
    <PageShell
      title="Our Mandate"
      description="An industry body governments can verify, not just trust. Mandate and standing exclusions."
      path="/about/mandate"
      crumbs={[
        { name: 'About & Governance', path: '/about/mandate' },
        { name: 'Our Mandate', path: '/about/mandate' },
      ]}
      section="about"
    >
      <h1>Our Mandate</h1>
      <p>
        Superyacht Africa NPC represents the superyacht and marine tourism industry across South
        Africa, Namibia, Mauritius, Seychelles, Madagascar and St Helena, working with governments,
        ports and industry to make entry, refit and operation simpler, safer and more transparent,
        and to ensure the economic benefit of that activity — jobs, skills, SME growth — reaches
        local communities rather than accruing only to visiting owners.
      </p>
      <h2>What this association deliberately does not do</h2>
      <p>
        No charter booking, no vessel listings, no “plan your holiday” content. The moment this
        site speaks to an owner or guest rather than to the industry serving them, it becomes
        indistinguishable from the commercial tourism platforms it must be seen as independent of.
      </p>
      <p>
        No ranking, rating or endorsement of individual members. The association is not a quality
        authority.
      </p>
      <p>
        No brokerage of enquiries. The Directory connects a captain to a member’s own contact
        details; the association takes no fee and makes no selection on the enquirer’s behalf.
      </p>
      <p>
        No content addressed to yacht owners, prospective charter guests or the general
        luxury-travel public. This is a standing exclusion, not an omission.
      </p>
      <p>
        No confident claims where the underlying fact is unverified or volatile — Madagascar’s
        entry status, refit capability above roughly 60 metres, VAT specifics. Where the
        association cannot maintain a fact reliably, this site says so plainly.
      </p>
    </PageShell>
  )
}
