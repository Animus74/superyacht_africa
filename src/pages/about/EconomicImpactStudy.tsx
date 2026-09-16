import { PageShell } from '../../components/PageShell'

export function EconomicImpactStudy() {
  return (
    <PageShell
      title="Economic Impact Study"
      description="Scope, methodology and funding pathway for the African Superyacht Economic Impact Study. No findings published yet."
      path="/about/economic-impact-study"
      crumbs={[
        { name: 'About & Governance', path: '/about/mandate' },
        { name: 'Economic Impact Study', path: '/about/economic-impact-study' },
      ]}
      section="about"
    >
      <h1>Economic Impact Study</h1>
      <p>
        The African Superyacht Economic Impact Study will provide the first comprehensive,
        continent-wide analysis of the economic contribution and growth potential of the superyacht
        and broader marine tourism sectors across Africa and the Indian Ocean region. Despite the
        region’s cruising grounds and Blue Economy ambitions, the sector remains under-quantified.
        This study addresses that gap, establishing a rigorous, transparent and comparable economic
        baseline, drawing on verified data from national statistics agencies, maritime and port
        authorities, customs administrations and tourism departments, supplemented by structured
        stakeholder surveys where primary data is limited.
      </p>
      <h2>Purpose</h2>
      <ul>
        <li>Quantify the sector’s contribution to GDP, employment, exports and foreign direct investment</li>
        <li>Measure direct, indirect and induced economic impacts</li>
        <li>Identify fiscal contributions through taxes, port revenues and service levies</li>
        <li>
          Analyse capital inflows linked to marina developments, refit yards and associated
          infrastructure
        </li>
        <li>
          Map infrastructure capacity and supply-chain potential, including marina berths, refit
          and haul-out facilities, and technical services
        </li>
      </ul>
      <h2>Geographic scope</h2>
      <p>
        South Africa, Namibia, Seychelles, Mauritius, Madagascar and St Helena, with the scope
        structured for cross-country comparability. A later phase could extend to Mozambique,
        Tanzania, Kenya and Angola.
      </p>
      <h2>Status and funding</h2>
      <p>
        The study’s Terms of Reference, framework and evaluation methodology are complete, and
        Stratecon has been appointed as research partner following a competitive assessment of
        proposals. Funding for the full study is not yet fully secured. A stakeholder survey
        aligned to the same four pillars has been developed to begin collecting baseline industry
        data while funding is finalised. An earlier working target of Q2 2026 elapsed without the
        study being funded; a corrected publication target will be stated here once the board
        resets it. No findings are published on this page.
      </p>
      <h2>Country one-page summaries (format, once published)</h2>
      <p>
        Each of the six countries will receive a one-page summary covering market size and growth
        trends, infrastructure readiness, regulatory framework, investment pipeline and comparative
        strengths and constraints — intended for use by investment promotion agencies and economic
        development departments. Authorship and funding will be disclosed at document level.
      </p>
    </PageShell>
  )
}
