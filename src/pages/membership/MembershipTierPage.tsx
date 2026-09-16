import { useParams } from 'react-router-dom'
import { EnquiryForm } from '../../components/EnquiryForm'
import { PageShell } from '../../components/PageShell'
import { tiers } from '../../content/membership'

export function MembershipTierPage() {
  const { slug } = useParams()
  const tier = tiers.find((t) => t.slug === slug)

  if (!tier) {
    return (
      <PageShell
        title="Membership"
        description="Membership tier not found."
        path="/membership"
        crumbs={[{ name: 'Membership', path: '/membership' }]}
        section="membership"
      >
        <h1>Membership</h1>
        <p>That tier is not on the sitemap.</p>
      </PageShell>
    )
  }

  const path = `/membership/${tier.slug}`
  const extraJsonLd = tier.offerPrice
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'Offer',
          name: `${tier.h1} membership`,
          category: 'ProgramMembership',
          price: tier.offerPrice,
          priceCurrency: tier.offerCurrency,
        },
      ]
    : []

  return (
    <PageShell
      title={tier.h1}
      description={`${tier.h1}: ${tier.fee}. ${tier.voting}.`}
      path={path}
      crumbs={[
        { name: 'Membership', path: '/membership' },
        { name: tier.h1, path },
      ]}
      section="membership"
      extraJsonLd={extraJsonLd}
    >
      {tier.slug === 'founding-member' ? (
        <p className="founding-mark">Founding Member</p>
      ) : null}
      <h1>{tier.h1}</h1>
      <p className="lede">
        Fee: {tier.fee}. {tier.voting}.
      </p>
      <p>
        <strong>Who it is for.</strong> {tier.who}
      </p>
      <p>{tier.body}</p>
      {tier.slug === 'founding-member' ? (
        <>
          <h2>The fairness principle</h2>
          <p>
            Founding status is a privilege and a recognition — it does not carry a permanent fee
            discount or rate lock. The founding-year fee is a one-time entry rate, not a permanent
            one: from year two onward, Founding Members pay the same annual fee as every other
            member in their equivalent tier, subject to the same standard increases as everyone
            else. Founders pay the same as everyone else from year two, as a matter of governance
            integrity.
          </p>
          <p>
            Founding Member status closed 31 August 2026. Confirmed, paid members will be named
            here once each organisation’s commitment is verified. Invitation lists are not
            published as if they were a membership roll.
          </p>
        </>
      ) : null}
      <h2>Benefits</h2>
      <ul>
        {tier.benefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <EnquiryForm
        kind={tier.path === 'self-serve' ? 'join' : 'conversation'}
        tier={tier.h1}
      />
    </PageShell>
  )
}
