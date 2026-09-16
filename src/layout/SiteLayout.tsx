import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { JsonLd } from '../components/JsonLd'
import { ScrollToTop } from '../components/ScrollToTop'
import { organizationJsonLd, PRIMARY_NAV, SITE_NAME } from '../content/site'

function sectionActive(to: string, pathname: string) {
  if (to === '/about/mandate') return pathname.startsWith('/about')
  if (to === '/news') return pathname.startsWith('/news')
  if (to === '/route') return pathname.startsWith('/route')
  if (to === '/countries') return pathname.startsWith('/countries')
  if (to === '/membership') return pathname.startsWith('/membership')
  return pathname === to
}

export function SiteLayout() {
  const { pathname } = useLocation()

  return (
    <div className="site">
      <ScrollToTop />
      <JsonLd data={organizationJsonLd()} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <NavLink to="/" end className="brand">
          <span className="brand-mark" aria-hidden="true" />
          {SITE_NAME}
        </NavLink>
        <nav className="site-nav" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={() =>
                sectionActive(item.to, pathname) ? 'nav-link is-active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <div className="brand-logo-bar">
        <img className="brand-logo" src="/logo.png" alt="Superyacht Africa" />
      </div>
      <main id="main" className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-grid">
          <div>
            <p className="footer-name">{SITE_NAME}</p>
            <p className="muted">
              Independent, member-based industry association. Not a booking platform, ratings
              authority, or broker of introductions.
            </p>
            <p className="muted">
              NPC registration number, incorporation date and registered address: pending
              confirmation.
            </p>
          </div>
          <div>
            <p className="footer-heading">Contact</p>
            <p>
              <NavLink to="/contact">General contact</NavLink>
            </p>
            <p>
              <NavLink to="/news/press-media">Press & Media</NavLink>
            </p>
            <p>
              <NavLink to="/news/government-partnership-enquiries">
                Government & Partnership Enquiries
              </NavLink>
            </p>
          </div>
          <div>
            <p className="footer-heading">Governance</p>
            <p>
              <NavLink to="/membership/code-of-conduct">Code of Conduct</NavLink>
            </p>
            <p>
              <NavLink to="/about/founding-history-independence">
                Founding History & Independence
              </NavLink>
            </p>
            <p className="muted">
              Constitution (PDF and full text): unpublished until the source text is confirmed.
            </p>
          </div>
          <div>
            <p className="footer-heading">Legal</p>
            <p>
              <NavLink to="/privacy">Privacy Policy</NavLink>
            </p>
            <p>
              <NavLink to="/terms">Terms of Use</NavLink>
            </p>
            <p className="muted">Social links: none published yet.</p>
          </div>
        </div>
        <p className="footer-note">
          © {new Date().getFullYear()} {SITE_NAME}. South African English.
        </p>
      </footer>
    </div>
  )
}
