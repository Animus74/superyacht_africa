import { Link } from 'react-router-dom'
import { PageShell } from '../../components/PageShell'

export function SafetySecurityMedical() {
  return (
    <PageShell
      title="Safety, Security & Medical"
      description="Piracy risk on this route is not comparable to the Gulf of Guinea or Somali Basin. Weather and ashore urban crime are named specifically."
      path="/countries/safety-security-medical"
      crumbs={[
        { name: 'Countries & Entry Info', path: '/countries' },
        { name: 'Safety, Security & Medical', path: '/countries/safety-security-medical' },
      ]}
      section="countries"
      extraJsonLd={[
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Is South Africa’s coast safe for a superyacht and crew?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Piracy risk here is not comparable to the Gulf of Guinea or Somali Basin; the real risk is weather (the Agulhas Current against south-westerly gales) and, ashore, ordinary urban crime concentrated in identifiable areas away from marina precincts.',
              },
            },
          ],
        },
      ]}
    >
      <h1>Safety, Security &amp; Medical</h1>

      <h2>Piracy and maritime security</h2>
      <p>
        Piracy risk along this route is not comparable to the Gulf of Guinea or the Somali Basin.
        The two risks that actually matter to a vessel on the Southern Explorer Route are weather —
        specifically the Agulhas Current against south-westerly gales on the South Africa/Namibia
        leg, covered in full under{' '}
        <Link to="/route/weather-seasons">Weather, Seasons &amp; Passage Planning</Link> — and,
        ashore, ordinary urban crime, which is concentrated in identifiable areas away from marina
        precincts rather than distributed evenly across a country.
      </p>

      <h2>Ashore</h2>
      <p>
        Country-by-country ashore safety guidance is to be confirmed with country stewards and,
        where relevant, with local port and tourism authorities, rather than generalised across the
        whole route.
      </p>

      <h2>Medical</h2>
      <p>
        Emergency contact numbers, nearest facilities and evacuation / medevac guidance by country
        are to be confirmed before they are published here.
      </p>

      <p>
        <Link to="/countries/safety-security-medical/insurance-underwriting-brief">
          Insurance &amp; Underwriting Brief
        </Link>
      </p>
    </PageShell>
  )
}
