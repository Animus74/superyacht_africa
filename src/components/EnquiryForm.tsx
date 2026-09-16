import { useState, type FormEvent } from 'react'
import { COUNTRIES, SERVICE_CATEGORIES } from '../content/site'

type Kind = 'conversation' | 'join' | 'government'

const successCopy: Record<Kind, string> = {
  conversation:
    'Enquiry received. It will be routed to the relevant Task Team contact for your country. A conversation and tailored proposal follow; this is not an automated approval.',
  join: 'Application received. Immediate payment is not yet connected on this site. You will receive payment instructions, a draft Directory listing, and the Code of Conduct for countersignature. The listing goes live only after the Code is countersigned.',
  government:
    'Enquiry received. It will be routed to the relevant Task Team contact for your country, or to the Economic Impact Study sponsorship contact where that category is selected.',
}

export function EnquiryForm({ kind, tier }: { kind: Kind; tier?: string }) {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <p className="form-success" role="status">
        {successCopy[kind]}
      </p>
    )
  }

  if (kind === 'join') {
    return (
      <form className="form" onSubmit={onSubmit}>
        <h2 className="form-heading">Join now</h2>
        {tier ? <p className="muted">Applying for: {tier}</p> : null}
        <label>
          Name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required autoComplete="tel" />
        </label>
        <label>
          Country
          <select name="country" required defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label>
          Service category
          <select name="category" required defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {SERVICE_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label>
          One-line description
          <input name="description" required maxLength={200} />
        </label>
        <p className="muted">
          Payment is not processed in this form. After submission you will be sent payment
          instructions. Directory listing is conditional on Code of Conduct countersignature.
        </p>
        <button type="submit">Submit application</button>
      </form>
    )
  }

  const government = kind === 'government'

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="form-heading">
        {government ? 'Partnership enquiry' : 'Request a conversation'}
      </h2>
      {tier ? <p className="muted">Regarding: {tier}</p> : null}
      <label>
        Organisation
        <input name="organisation" required autoComplete="organization" />
      </label>
      <label>
        Category
        <select name="category" required defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {government ? (
            <>
              <option>Government / port / regulator</option>
              <option>Development finance institution</option>
              <option>Economic Impact Study sponsor</option>
              <option>Other</option>
            </>
          ) : (
            <>
              <option>Regional Partner</option>
              <option>Strategic Corporate Member</option>
              <option>Founding Member</option>
              <option>Government / ex officio</option>
              <option>Unsure</option>
            </>
          )}
        </select>
      </label>
      <label>
        Country
        <select name="country" required defaultValue="">
          <option value="" disabled>
            Select
          </option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <label>
        Contact name and role
        <input name="contact" required />
      </label>
      <label>
        Email / phone
        <input name="reach" required />
      </label>
      <label>
        Additional context (optional)
        <textarea name="notes" rows={4} />
      </label>
      <button type="submit">Send enquiry</button>
    </form>
  )
}
