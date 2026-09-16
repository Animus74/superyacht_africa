import { useState, type FormEvent } from 'react'

export function ReportInaccuracy({ country }: { country: string }) {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <p className="form-success" role="status">
        Report received. It will be routed to the country steward for {country}. Unverified reports
        are not published on this page.
      </p>
    )
  }

  return (
    <form className="form compact-form" onSubmit={onSubmit}>
      <h2 className="form-heading">Report an inaccuracy</h2>
      <p className="muted">
        Routed to the named country steward. This is an early-warning channel; reports are not
        published until verified.
      </p>
      <label>
        Your name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        What needs correcting
        <textarea name="detail" required rows={4} />
      </label>
      <button type="submit">Submit report</button>
    </form>
  )
}
