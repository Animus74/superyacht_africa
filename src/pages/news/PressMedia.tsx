import { Link } from 'react-router-dom'
import { PageShell } from '../../components/PageShell'

export function PressMedia() {
  return (
    <PageShell
      title="Press & Media"
      description="One clear contact, one clear story. Named spokesperson pending confirmation."
      path="/news/press-media"
      crumbs={[
        { name: 'News & Resources', path: '/news' },
        { name: 'Press & Media', path: '/news/press-media' },
      ]}
      section="news"
    >
      <h1>Press &amp; Media</h1>
      <p>
        For press enquiries, contact the named spokesperson directly. The intended public contact
        is Veda Pretorius, Chair — email and phone to be confirmed before this line is treated as
        live. No form is required.
      </p>
      <p>
        Superyacht Africa NPC is a member-based, elected non-profit association representing the
        superyacht and marine tourism industry across six African and Indian Ocean markets — jobs,
        skills and community benefit, not luxury tourism, is the story. Real vessel-spend and
        sector figures, named and dated, are available on request pending publication of the
        Economic Impact Study; governance documents, including the founding timeline and
        independence disclosure, are published in full on{' '}
        <Link to="/about/founding-history-independence">Founding History &amp; Independence</Link>{' '}
        and available for verification.
      </p>
    </PageShell>
  )
}
