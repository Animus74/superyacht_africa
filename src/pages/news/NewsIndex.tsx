import { Link } from 'react-router-dom'
import { PageShell } from '../../components/PageShell'
import { NEWS_NAV } from '../../content/site'

export function NewsIndex() {
  return (
    <PageShell
      title="News & Resources"
      description="Press contact and government partnership enquiries. News and publications will be added when real items exist."
      path="/news"
      crumbs={[{ name: 'News & Resources', path: '/news' }]}
      section="news"
    >
      <h1>News &amp; Resources</h1>
      <p className="lede">
        An editorial news stream, member-news feed, policy-brief library and events calendar are
        not launched empty. This section currently carries the two launch-critical contacts.
      </p>
      <div className="card-grid">
        {NEWS_NAV.map((item) => (
          <Link className="card" key={item.to} to={item.to}>
            <h2>{item.label}</h2>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}
