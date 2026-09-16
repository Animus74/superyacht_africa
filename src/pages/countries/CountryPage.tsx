import { Link, useParams } from 'react-router-dom'
import { PageShell } from '../../components/PageShell'
import { PhotoFigure } from '../../components/PhotoFigure'
import { ReportInaccuracy } from '../../components/ReportInaccuracy'
import { countryPages } from '../../content/countries'

export function CountryPage() {
  const { slug } = useParams()
  const country = countryPages.find((c) => c.slug === slug)

  if (!country) {
    return (
      <PageShell
        title="Country not found"
        description="No country page for this URL."
        path="/countries"
        crumbs={[{ name: 'Countries & Entry Info', path: '/countries' }]}
        section="countries"
      >
        <h1>Countries &amp; Entry Info</h1>
        <p>That country page is not on the sitemap.</p>
      </PageShell>
    )
  }

  const path = `/countries/${country.slug}`
  const extraJsonLd: unknown[] = []
  if (country.faqs.length) {
    extraJsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: country.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    })
  }
  if (country.slug === 'south-africa') {
    extraJsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'GovernmentPermit',
      name: 'Temporary Importation Permit (TIP)',
      description:
        'Foreign-flagged vessels require a Temporary Importation Permit administered under the Customs Management Act, 2011.',
    })
  }

  return (
    <PageShell
      title={country.h1}
      description={country.purpose}
      path={path}
      crumbs={[
        { name: 'Countries & Entry Info', path: '/countries' },
        { name: country.h1, path },
      ]}
      section="countries"
      extraJsonLd={extraJsonLd}
    >
      <h1>{country.h1}</h1>
      <p className="lede">{country.purpose}</p>
      <PhotoFigure src={country.image.src} alt={country.image.alt} />
      {country.warning ? (
        <div className="warning" role="status">
          <p>
            <strong>Entry &amp; Clearance — status: unsettled.</strong> {country.warning}
          </p>
        </div>
      ) : null}

      <h2>Entry &amp; Clearance</h2>
      <p>{country.entry}</p>
      <p className="muted">
        Tax / VAT: principle-level only. This site does not publish detailed tax tables. Consult
        the primary authority and a member tax/customs agent via the{' '}
        <Link to="/directory">Directory</Link>.
      </p>

      <h2>Refit &amp; Marina Capacity</h2>
      <p>{country.refit}</p>
      <p>
        <Link to="/countries/refit-haul-out">Verified facilities list</Link>
      </p>

      <h2>Season &amp; Hazards</h2>
      <p>{country.season}</p>
      <p>
        <Link to="/route/weather-seasons">Weather, Seasons &amp; Passage Planning</Link>
      </p>

      <h2>Verified As Of</h2>
      <p>{country.verifiedBy}</p>
      <p className="muted">
        If a steward relationship cannot be resourced, this page will stay short and will link to
        the primary government source rather than look comprehensive.
      </p>

      <ReportInaccuracy country={country.h1} />
    </PageShell>
  )
}
