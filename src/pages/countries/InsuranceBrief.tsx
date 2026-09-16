import { Link } from 'react-router-dom'
import { PageShell } from '../../components/PageShell'

export function InsuranceBrief() {
  return (
    <PageShell
      title="Insurance & Underwriting Brief"
      description="Underwriting-relevant risk information pending a named insurance contributor."
      path="/countries/safety-security-medical/insurance-underwriting-brief"
      crumbs={[
        { name: 'Countries & Entry Info', path: '/countries' },
        { name: 'Safety, Security & Medical', path: '/countries/safety-security-medical' },
        {
          name: 'Insurance & Underwriting Brief',
          path: '/countries/safety-security-medical/insurance-underwriting-brief',
        },
      ]}
      section="countries"
    >
      <h1>Insurance &amp; Underwriting Brief</h1>
      <p>
        Superyacht Africa NPC does not currently have a named insurance or underwriting contributor
        on its Task Teams — a gap first identified at the October 2025 founding roundtable and not
        yet closed. This page will carry underwriting-relevant risk information (piracy, weather,
        port security, medical evacuation) once a qualified member contributor is recruited, rather
        than publishing generic or unsourced cover guidance in the meantime. In the interim, refer
        to <Link to="/countries/safety-security-medical">Safety, Security &amp; Medical</Link> for
        the association’s own, sourced risk statements.
      </p>
    </PageShell>
  )
}
