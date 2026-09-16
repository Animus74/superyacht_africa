import { PageShell } from '../../components/PageShell'

export function CodeOfConduct() {
  return (
    <PageShell
      title="Code of Conduct"
      description="Countersignature of the Code of Conduct is a condition of every membership tier."
      path="/membership/code-of-conduct"
      crumbs={[
        { name: 'Membership', path: '/membership' },
        { name: 'Code of Conduct', path: '/membership/code-of-conduct' },
      ]}
      section="membership"
    >
      <h1>Code of Conduct</h1>
      <p>
        Countersignature of the Code of Conduct is a condition of every membership tier, without
        exception, and of every Directory listing. The association does not recommend members; the
        Code is the common standard the listing is tied to.
      </p>
      <p>
        The full Code of Conduct and conflict-of-interest policy text have not yet been supplied
        for publication. This page will carry both documents in full — as readable text, not only
        as a download — once the Research &amp; Governance Task Team sources or drafts them
        alongside the constitution. Until then, no membership application is treated as complete.
      </p>
    </PageShell>
  )
}
