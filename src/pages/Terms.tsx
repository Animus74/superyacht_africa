import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'

export function Terms() {
  return (
    <PageShell
      title="Terms of Use"
      description="Website Terms of Use for Superyacht Africa NPC, governing access to the site, Directory, route and country information."
      path="/terms"
      crumbs={[{ name: 'Terms of Use', path: '/terms' }]}
      section={null}
    >
      <div className="legal">
        <h1>Terms of Use</h1>
        <p className="policy-dates">
          Effective date: [insert date]
          <br />
          Last updated: [insert date]
        </p>

        <h2>1. Introduction and Acceptance</h2>
        <p>
          These Terms of Use govern access to and use of the website operated by Superyacht Africa
          NPC (“Superyacht Africa”, “we”, “us” or “our”), including its content, Member Directory,
          Southern Explorer Route information, country and entry information, publications, forms
          and other services made available through the website (“Website”).
        </p>
        <p>By accessing or using the Website, you agree to these Terms of Use.</p>
        <p>If you do not agree to these Terms, you should not use the Website.</p>
        <p>
          These Terms must be read together with our <Link to="/privacy">Privacy Policy</Link>,{' '}
          <Link to="/membership/code-of-conduct">Code of Conduct</Link>, and any additional terms
          that expressly apply to a particular service, transaction or membership arrangement.
        </p>

        <h2>2. About Superyacht Africa</h2>
        <p>
          Superyacht Africa NPC is an independent, member-based, non-profit industry association
          representing the superyacht and marine tourism industry across South Africa, Namibia,
          Mauritius, Seychelles, Madagascar and St Helena.
        </p>
        <dl>
          <dt>Legal name</dt>
          <dd>Superyacht Africa NPC</dd>
          <dt>Registration number</dt>
          <dd>[insert registration number]</dd>
          <dt>Registered address</dt>
          <dd>[insert registered address]</dd>
          <dt>Physical address for service of legal documents</dt>
          <dd>[insert address]</dd>
          <dt>Email</dt>
          <dd>[insert general email]</dd>
          <dt>Telephone</dt>
          <dd>[insert telephone number]</dd>
          <dt>Website</dt>
          <dd>[insert website address]</dd>
        </dl>
        <p>The above information must be completed before publication.</p>

        <h2>3. Purpose of the Website</h2>
        <p>The Website exists primarily as an industry and institutional resource. Its purposes include:</p>
        <ul>
          <li>providing information concerning superyacht entry, clearance and operating conditions;</li>
          <li>providing route, passage-planning and seasonal information;</li>
          <li>providing information regarding refit, marina and haul-out capacity;</li>
          <li>providing information about Superyacht Africa’s members;</li>
          <li>facilitating direct contact between Website users and members;</li>
          <li>providing information about membership;</li>
          <li>facilitating membership applications and enquiries;</li>
          <li>providing information concerning policy, regulation, infrastructure and industry development;</li>
          <li>publishing governance and transparency information;</li>
          <li>supporting government, port, regulatory and industry engagement;</li>
          <li>
            publishing research, policy material and information concerning the African Superyacht
            Economic Impact Study; and
          </li>
          <li>supporting the legitimate objectives and activities of Superyacht Africa.</li>
        </ul>
        <p>
          The Website is an industry information resource and association platform. It is not a
          yacht brokerage, charter booking platform, travel agency or vessel-management service.
        </p>

        <h2>4. Nature of Information Published</h2>
        <p>
          Superyacht Africa aims to provide information that is useful, current and appropriately
          verified. Certain information published on the Website may therefore display a “Verified
          As Of” date and, where appropriate, identify the person or organisation responsible for
          verification.
        </p>
        <p>
          However, maritime, regulatory and operational conditions can change rapidly. Information
          concerning matters such as:
        </p>
        <ul>
          <li>entry requirements;</li>
          <li>customs and immigration;</li>
          <li>temporary importation;</li>
          <li>permits;</li>
          <li>charter regulation;</li>
          <li>taxation and VAT;</li>
          <li>port requirements;</li>
          <li>berth availability;</li>
          <li>berth dimensions;</li>
          <li>refit and haul-out capacity;</li>
          <li>weather;</li>
          <li>passage conditions;</li>
          <li>security;</li>
          <li>medical facilities; and</li>
          <li>government procedures</li>
        </ul>
        <p>
          may change after publication. A “Verified As Of” statement means that reasonable steps
          were taken to verify the information as at the stated date. It does not constitute a
          representation that the information will remain correct after that date.
        </p>

        <h2>5. Operational and Maritime Information</h2>
        <p>
          Information on the Website relating to navigation, passage planning, weather, currents,
          ports, anchorages, distances, passage times, entry requirements, infrastructure or other
          operational matters is provided as a general industry information resource.
        </p>
        <p>It is not intended to replace:</p>
        <ul>
          <li>official Notices to Mariners;</li>
          <li>nautical charts;</li>
          <li>navigation publications;</li>
          <li>weather-routing services;</li>
          <li>port instructions;</li>
          <li>flag-state requirements;</li>
          <li>classification requirements;</li>
          <li>instructions from harbour masters or maritime authorities;</li>
          <li>professional navigation advice; or</li>
          <li>the judgement and responsibility of the vessel’s master.</li>
        </ul>
        <p>
          The master, owner, manager and operator of a vessel remain responsible for the safe
          navigation and operation of that vessel and for verifying information relevant to a
          proposed voyage. No information on this Website transfers or diminishes that
          responsibility.
        </p>

        <h2>6. Entry, Customs, Immigration and Regulatory Information</h2>
        <p>
          Country pages may provide information concerning entry, customs, immigration, temporary
          importation, charter rules and other regulatory matters.
        </p>
        <p>
          Such information is provided for general orientation and does not constitute legal,
          customs, immigration or tax advice.
        </p>
        <p>Laws, regulations, administrative practices and interpretations may change without notice.</p>
        <p>
          Before relying upon regulatory information for an actual vessel movement, charter
          operation, importation or commercial activity, users should verify the current position
          with the relevant authority and, where appropriate, obtain advice from a suitably
          qualified professional or member agent.
        </p>
        <p>
          Where Superyacht Africa knows that a position is uncertain or unsettled, the Website may
          expressly state this. The absence of such a warning does not guarantee that a regulatory
          position has not subsequently changed.
        </p>

        <h2>7. Madagascar and Other Unsettled Jurisdictions</h2>
        <p>
          Where a country’s entry, permitting or regulatory position is described as “unsettled”,
          that description should be taken seriously.
        </p>
        <p>
          In particular, the Website may identify Madagascar’s superyacht entry and advance-permit
          arrangements as unsettled and subject to inconsistent or changing administrative
          practices.
        </p>
        <p>
          Users should not interpret information concerning such jurisdictions as a guaranteed
          process or approval pathway. Current status should be confirmed before a vessel commits
          to a passage, itinerary, charter or commercial arrangement dependent upon that approval.
        </p>

        <h2>8. Weather, Passage and Safety Information</h2>
        <p>
          Weather, seasonal and passage information is intended to assist with general planning and
          risk awareness.
        </p>
        <p>
          Conditions at sea are inherently variable. Historical seasonal patterns, typical
          conditions and general routing guidance cannot predict conditions affecting a particular
          vessel at a particular time.
        </p>
        <p>
          Users must obtain current meteorological information, navigational warnings and
          appropriate professional routing advice before and during a voyage.
        </p>
        <p>
          References to the Agulhas Current, southwesterly gales, cyclone seasons or other known
          hazards are intended to identify relevant planning considerations and do not constitute a
          complete risk assessment.
        </p>

        <h2>9. Refit, Marina and Infrastructure Information</h2>
        <p>
          Information concerning marinas, berths, shipyards, dry docks, haul-out facilities,
          engineering capabilities and other infrastructure may be supplied or maintained by
          members or facility operators.
        </p>
        <p>
          Unless expressly stated otherwise, publication of such information does not constitute
          independent certification by Superyacht Africa.
        </p>
        <p>
          Users contemplating use of a facility should independently confirm matters relevant to
          their vessel, including:
        </p>
        <ul>
          <li>maximum length and beam;</li>
          <li>draft;</li>
          <li>displacement;</li>
          <li>lifting or haul-out capacity;</li>
          <li>berth availability;</li>
          <li>technical capabilities;</li>
          <li>access restrictions;</li>
          <li>certification requirements; and</li>
          <li>commercial terms.</li>
        </ul>
        <p>
          Infrastructure identified as planned, proposed, under development or under construction
          must not be interpreted as operational.
        </p>

        <h2>10. Member Directory</h2>
        <p>
          The Member Directory is intended to enable users to identify Superyacht Africa members by
          country, service type or other factual criteria.
        </p>
        <p>Directory listings may include information supplied and maintained by individual members.</p>
        <p>Superyacht Africa does not, merely by including a member in the Directory:</p>
        <ul>
          <li>recommend that member;</li>
          <li>rank that member;</li>
          <li>guarantee the quality of its goods or services;</li>
          <li>certify its technical capability;</li>
          <li>warrant its financial standing;</li>
          <li>guarantee its availability;</li>
          <li>act as its agent; or</li>
          <li>endorse one member over another.</li>
        </ul>
        <p>
          Membership and Directory inclusion indicate membership of Superyacht Africa subject to
          the applicable membership requirements and Code of Conduct. They do not constitute a
          guarantee of performance.
        </p>

        <h2>11. Transactions Between Users and Members</h2>
        <p>
          Superyacht Africa does not ordinarily act as an intermediary in commercial transactions
          between Website users and members.
        </p>
        <p>
          Where a user contacts a member through details obtained from the Directory, any resulting
          negotiation, appointment, contract or transaction is between the user and that member.
        </p>
        <p>Superyacht Africa:</p>
        <ul>
          <li>does not negotiate the transaction;</li>
          <li>does not select the provider for the user;</li>
          <li>
            does not receive a brokerage or referral fee merely because contact originated through
            the Directory; and
          </li>
          <li>is not a party to the resulting agreement unless expressly agreed otherwise in writing.</li>
        </ul>
        <p>
          Users remain responsible for conducting whatever due diligence they consider appropriate
          before appointing a member or service provider.
        </p>

        <h2>12. No Rankings or Endorsements</h2>
        <p>The Website deliberately does not rank or rate members.</p>
        <p>
          Search order, filtering, category placement or the appearance of a member on a particular
          page must not be interpreted as a recommendation, endorsement or representation that one
          member is superior to another.
        </p>
        <p>
          Where members are identified because they provide a particular service in a particular
          country, that identification is factual rather than comparative.
        </p>

        <h2>13. Membership Information</h2>
        <p>
          The Website may describe different categories of Superyacht Africa membership, membership
          fees, voting rights and benefits.
        </p>
        <p>Membership remains subject to:</p>
        <ul>
          <li>Superyacht Africa’s constitutional documents;</li>
          <li>applicable membership rules;</li>
          <li>the Code of Conduct;</li>
          <li>payment of applicable fees; and</li>
          <li>any requirements expressly applicable to the relevant membership category.</li>
        </ul>
        <p>
          Where there is a conflict between general Website content and Superyacht Africa’s
          constitution or a specific membership agreement, the constitution or applicable
          membership agreement will prevail to the extent permitted by law.
        </p>

        <h2>14. Membership Applications and Electronic Transactions</h2>
        <p>Certain membership categories may permit users to apply and pay for membership electronically.</p>
        <p>
          Where an electronic transaction is offered, Superyacht Africa will provide the
          information required by applicable South African law in relation to that transaction.
        </p>
        <p>Any fees displayed on the Website should state whether VAT or other taxes are included or applicable.</p>
        <p>
          Payment does not override membership eligibility requirements, the Code of Conduct or
          other applicable membership conditions.
        </p>
        <p>
          Confirmation of membership will occur in accordance with the process stated for the
          applicable membership category.
        </p>

        <h2>15. Payment Service Providers</h2>
        <p>Payments made through the Website may be processed by an independent payment service provider.</p>
        <p>
          Where this occurs, the provider’s own terms and privacy practices may apply to the
          payment transaction.
        </p>
        <p>
          Superyacht Africa does not warrant the continuous availability of an independent payment
          provider’s services.
        </p>
        <p>
          The identity and applicable terms of the actual payment provider should be disclosed when
          the Website’s payment arrangements are finalised.
        </p>

        <h2>16. Government and Partnership Enquiries</h2>
        <p>
          The Website may allow government bodies, regulators, port authorities, development
          finance institutions, research sponsors and other organisations to submit enquiries.
        </p>
        <p>Submission of an enquiry does not:</p>
        <ul>
          <li>create a partnership;</li>
          <li>create a contractual relationship;</li>
          <li>constitute acceptance of a proposal;</li>
          <li>guarantee funding;</li>
          <li>guarantee a response within a particular period; or</li>
          <li>authorise the sender to represent itself as a partner of Superyacht Africa.</li>
        </ul>
        <p>
          Any partnership, sponsorship, funding or formal institutional arrangement must be
          separately agreed by authorised representatives.
        </p>

        <h2>17. Research and Economic Impact Information</h2>
        <p>
          The Website may publish information concerning the African Superyacht Economic Impact
          Study and other research.
        </p>
        <p>
          Where research is incomplete, the Website may publish its scope, methodology, status and
          intended outputs without implying that findings already exist.
        </p>
        <p>Research findings, statistics and datasets should be read together with their stated:</p>
        <ul>
          <li>methodology;</li>
          <li>date;</li>
          <li>geographic scope;</li>
          <li>limitations;</li>
          <li>authorship; and</li>
          <li>funding disclosure.</li>
        </ul>
        <p>
          Projections or estimates, where used, should not be interpreted as guarantees of future
          economic performance or investment returns.
        </p>

        <h2>18. No Investment Advice</h2>
        <p>
          Information concerning industry growth, infrastructure, investment, economic impact or
          development opportunities is provided for industry and policy purposes.
        </p>
        <p>Nothing on the Website constitutes:</p>
        <ul>
          <li>investment advice;</li>
          <li>financial advice;</li>
          <li>an invitation to invest;</li>
          <li>a recommendation concerning a particular investment; or</li>
          <li>a guarantee of commercial return.</li>
        </ul>
        <p>
          Prospective investors and funders should conduct their own investigations and obtain
          appropriate professional advice.
        </p>

        <h2>19. Intellectual Property</h2>
        <p>
          Unless otherwise stated, content created by or for Superyacht Africa and published on the
          Website, including text, graphics, maps, design elements, research materials, reports,
          branding and the Superyacht Africa name and logo, is owned by or lawfully licensed to
          Superyacht Africa.
        </p>
        <p>All rights not expressly granted are reserved.</p>
        <p>Users may ordinarily:</p>
        <ul>
          <li>view Website content;</li>
          <li>download publicly available documents;</li>
          <li>print reasonable extracts; and</li>
          <li>refer to or quote reasonable portions</li>
        </ul>
        <p>
          for legitimate personal, professional, research, government, educational or
          non-commercial informational purposes, provided that Superyacht Africa is appropriately
          acknowledged and the content is not misleadingly altered.
        </p>
        <p>
          Commercial reproduction, republication, systematic extraction, resale or redistribution
          requires prior written permission unless otherwise expressly permitted.
        </p>

        <h2>20. Superyacht Africa Name and Logo</h2>
        <p>
          The Superyacht Africa name, logo, membership marks and Founding Member marks may not be
          used in a manner that:
        </p>
        <ul>
          <li>falsely suggests membership;</li>
          <li>falsely suggests endorsement;</li>
          <li>suggests a partnership that does not exist;</li>
          <li>misrepresents a person’s relationship with Superyacht Africa; or</li>
          <li>damages or is reasonably likely to damage the organisation’s reputation.</li>
        </ul>
        <p>
          Members may use authorised membership marks in accordance with applicable brand and
          membership guidelines.
        </p>

        <h2>21. Third-Party Intellectual Property</h2>
        <p>
          Certain photographs, maps, research, documents, trademarks and other material may belong
          to third parties.
        </p>
        <p>Such material remains subject to the rights of its respective owner.</p>
        <p>Publication on the Website does not transfer ownership to Website users.</p>

        <h2>22. Permitted Use</h2>
        <p>You may use the Website only for lawful purposes.</p>
        <p>You must not:</p>
        <ul>
          <li>interfere with the Website’s operation or security;</li>
          <li>attempt unauthorised access to systems, accounts or data;</li>
          <li>introduce malware or malicious code;</li>
          <li>use the Website to commit fraud or other unlawful conduct;</li>
          <li>impersonate another person or organisation;</li>
          <li>submit information you know to be false or misleading;</li>
          <li>
            scrape or systematically extract data in a manner that materially disrupts the Website
            or infringes applicable rights;
          </li>
          <li>misuse member contact information for unlawful unsolicited communications;</li>
          <li>falsely imply endorsement by Superyacht Africa; or</li>
          <li>use Website content in a misleading or deceptive manner.</li>
        </ul>

        <h2>23. Links to Third-Party Websites</h2>
        <p>
          The Website may link to government authorities, port authorities, members, service
          providers, research organisations, weather services, maritime resources and other
          third-party websites.
        </p>
        <p>Links are provided because they may be useful to Website users.</p>
        <p>
          Unless expressly stated otherwise, a link does not constitute endorsement of the third
          party or its content.
        </p>
        <p>
          Superyacht Africa does not control third-party websites and is not responsible for their
          availability, security, content, accuracy or privacy practices.
        </p>

        <h2>24. Reporting Inaccuracies</h2>
        <p>
          Superyacht Africa encourages users, members, authorities and industry participants to
          report information that may be inaccurate or outdated. The presence of a “Report an
          inaccuracy” facility is intended to improve the reliability of the Website.
        </p>
        <p>
          A report submitted through that facility does not automatically cause information to be
          changed. Superyacht Africa may investigate and verify the report before amending
          published information.
        </p>
        <p>
          The reporting facility must not be used maliciously or to submit knowingly false
          information about another person, organisation or member.
        </p>

        <h2>25. Availability of the Website</h2>
        <p>
          We aim to keep the Website available and functioning properly but do not guarantee
          uninterrupted or error-free access.
        </p>
        <p>We may temporarily suspend, restrict or modify the Website where reasonably necessary for:</p>
        <ul>
          <li>maintenance;</li>
          <li>security;</li>
          <li>updates;</li>
          <li>legal compliance;</li>
          <li>technical reasons; or</li>
          <li>circumstances beyond our reasonable control.</li>
        </ul>

        <h2>26. Disclaimer of Warranties</h2>
        <p>
          To the fullest extent permitted by applicable law, the Website and its content are
          provided on an “as available” basis.
        </p>
        <p>Superyacht Africa does not warrant that:</p>
        <ul>
          <li>every item of information will always be complete or current;</li>
          <li>the Website will operate without interruption;</li>
          <li>every third-party link will remain available;</li>
          <li>a particular member will be available or suitable for a user’s requirements; or</li>
          <li>
            general operational information will be suitable for a particular vessel, voyage or
            transaction.
          </li>
        </ul>
        <p>
          Nothing in these Terms excludes any warranty, right or protection that cannot lawfully be
          excluded.
        </p>

        <h2>27. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by South African law, Superyacht Africa will not be
          liable for indirect, incidental, special or consequential loss arising solely from use
          of, or reasonable reliance upon, the Website or its general informational content.
        </p>
        <p>
          In particular, users should not rely exclusively on Website content when making
          safety-critical navigational decisions, committing a vessel to an international passage,
          undertaking regulated commercial activity or making material investment decisions.
        </p>
        <p>
          This limitation is subject to all rights and remedies that cannot lawfully be excluded or
          limited, including applicable provisions of the Consumer Protection Act 68 of 2008 and
          the Electronic Communications and Transactions Act 25 of 2002.
        </p>

        <h2>28. Privacy and Personal Information</h2>
        <p>
          Personal information collected through the Website is processed in accordance with the
          Superyacht Africa <Link to="/privacy">Privacy Policy</Link> and applicable law, including
          the Protection of Personal Information Act 4 of 2013 (POPIA).
        </p>
        <p>The Privacy Policy should be read together with these Terms.</p>

        <h2>29. Electronic Communications</h2>
        <p>
          When you submit information electronically through the Website, you consent to receiving
          communications reasonably necessary to deal with that submission or transaction.
        </p>
        <p>
          Submission of an electronic form does not necessarily mean that it has been accepted,
          approved or acted upon.
        </p>
        <p>
          Where legally significant receipt is relevant, Superyacht Africa may treat a
          communication as received when it has entered its designated information system and is
          capable of being retrieved and processed, subject to applicable law and any specific
          transaction terms.
        </p>

        <h2>30. Security</h2>
        <p>
          Users must not attempt to compromise the Website’s security or interfere with its proper
          operation.
        </p>
        <p>
          Superyacht Africa may take reasonable action to investigate suspected security incidents
          and protect its Website, members, users and information.
        </p>
        <p>Where appropriate, unlawful conduct may be reported to relevant authorities.</p>

        <h2>31. Changes to Website Content</h2>
        <p>Superyacht Africa may update, correct, remove or replace Website content as circumstances change.</p>
        <p>This is particularly important for regulatory, entry, infrastructure and operational information.</p>
        <p>
          A previously published version should not be assumed to remain current merely because it
          has been downloaded, printed, cached or reproduced elsewhere.
        </p>
        <p>
          Users should consult the current Website and relevant verification date before relying on
          information.
        </p>

        <h2>32. Changes to These Terms</h2>
        <p>We may amend these Terms from time to time to reflect:</p>
        <ul>
          <li>changes in law;</li>
          <li>changes to the Website;</li>
          <li>changes to membership or payment functions;</li>
          <li>new services; or</li>
          <li>changes in Superyacht Africa’s activities.</li>
        </ul>
        <p>
          The current version will be published on the Website with its effective date and
          last-updated date.
        </p>
        <p>Material changes may be brought to users’ attention through additional appropriate means.</p>

        <h2>33. Severability</h2>
        <p>
          If any provision of these Terms is found to be invalid, unlawful or unenforceable, that
          provision will be treated as severable to the extent necessary, and the remaining
          provisions will continue to apply.
        </p>

        <h2>34. No Waiver</h2>
        <p>
          A failure or delay by Superyacht Africa in exercising a right under these Terms does not
          constitute a waiver of that right.
        </p>

        <h2>35. Governing Law</h2>
        <p>These Terms and the use of the Website are governed by the laws of the Republic of South Africa.</p>
        <p>
          Nothing in these Terms prevents a person from exercising any right to approach a
          regulator, tribunal, ombud, consumer body or court where that right exists under
          applicable law.
        </p>
        <p>
          Subject to any mandatory jurisdiction conferred by applicable law, disputes concerning
          these Terms will be subject to the jurisdiction of the competent courts of South Africa.
        </p>

        <h2>36. Consumer Protection</h2>
        <p>
          Nothing in these Terms is intended to exclude, restrict or waive any right or remedy
          afforded to a consumer under the Consumer Protection Act 68 of 2008, the Electronic
          Communications and Transactions Act 25 of 2002, or any other applicable law where that
          right or remedy cannot lawfully be excluded.
        </p>
        <p>
          If any provision of these Terms conflicts with a mandatory statutory consumer protection,
          the statutory protection will prevail.
        </p>

        <h2>37. Contact</h2>
        <p>Questions regarding these Terms may be directed to:</p>
        <p>
          Superyacht Africa NPC
          <br />
          [Registered address]
          <br />
          Email: [insert email]
          <br />
          Telephone: [insert telephone number]
        </p>
        <p>
          Legal notices may be delivered to:
          <br />
          [insert physical address]
        </p>
      </div>
    </PageShell>
  )
}
