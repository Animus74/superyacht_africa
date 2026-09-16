import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'

export function NotFound() {
  return (
    <PageShell
      title="Page not found"
      description="That URL is not on the published sitemap."
      path="/"
      crumbs={[{ name: 'Page not found', path: '/' }]}
      section={null}
    >
      <h1>Page not found</h1>
      <p>
        That URL is not on the published sitemap. Empty sections (News stream, Member News, Board
        profiles, Constitution text) are omitted until they have real content.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </PageShell>
  )
}
