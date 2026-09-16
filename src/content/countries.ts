import { photos } from './photos'

export type CountryPage = {
  slug: string
  h1: string
  purpose: string
  warning?: string
  entry: string
  refit: string
  season: string
  verifiedBy: string
  image: { src: string; alt: string }
  faqs: { question: string; answer: string }[]
}

export const countryPages: CountryPage[] = [
  {
    slug: 'south-africa',
    h1: 'South Africa',
    purpose:
      'The most infrastructure-mature market on the route and the association’s operational base.',
    entry:
      'Foreign-flagged vessels require a Temporary Importation Permit (TIP), administered under the Customs Management Act, 2011. Charter regulations and VAT treatment for foreign-flagged charter vessels remain under review by South African authorities as of this draft — this page will be updated as that review concludes rather than presenting an unsettled position as final. A member agent can manage TIP and clearance on the operator’s behalf.',
    refit:
      'The V&A Waterfront in Cape Town is the primary superyacht hub on this coast, with berthing and marine engineering capacity, and its Quay 7 development identified as a significant infrastructure project — under construction as of this draft, not yet operational. Durban and Richards Bay carry additional refit and haul-out capacity; see Refit & Haul-Out Capacity for verified figures across the region.',
    season:
      'See Weather, Seasons & Passage Planning for the Cape gale season and Agulhas Current detail, and the named Richards Bay–Cape Town passage hazard.',
    verifiedBy:
      'Verified as of: pending confirmation by a named country steward (candidate: Andre Blaine, V&A Waterfront, or a Task Team nominee for South Africa).',
    image: {
      src: photos.harbourWorking,
      alt: 'Working harbour quay with a motor yacht moored alongside',
    },
    faqs: [
      {
        question: 'Is there refit capacity for a vessel over 60 metres?',
        answer:
          'Verified capacity exists at Cape Town and Durban; capability above roughly 60 metres is not yet demonstrated by named, completed reference projects, and this is stated honestly rather than implied.',
      },
      {
        question: 'Is South Africa’s coast safe for a superyacht and crew?',
        answer:
          'Piracy risk here is not comparable to the Gulf of Guinea or Somali Basin; the real risk is weather (the Agulhas Current against south-westerly gales) and, ashore, ordinary urban crime concentrated in identifiable areas away from marina precincts.',
      },
    ],
  },
  {
    slug: 'namibia',
    h1: 'Namibia',
    purpose:
      'An honestly thin page reflecting genuinely limited current infrastructure. A short, current page is safer than a comprehensive-looking one nobody is keeping current.',
    entry:
      'Superyachts are currently treated as recreational vessels under standard Namport procedures, generally handled through one of Namibia’s shipping agents in the same way as commercial vessel clearance. There is currently no dedicated charter policy for foreign-flagged vessels in Namibia; a member agent should be consulted before any charter activity is planned in Namibian waters.',
    refit:
      'Lüderitz offers a large lagoon anchorage with good holding ground; there is no dedicated superyacht marina, and tenders are used to ferry crew and guests ashore. Walvis Bay has more infrastructure but is a predominantly commercial port; a new yacht jetty built there is sized for smaller sailing vessels only, and larger vessels use the commercial jetties. A floating dry dock at Walvis Bay, used for maintenance and repair of other vessel classes, is understood to be available should a superyacht require that service, though this has not been confirmed against a completed reference project.',
    season:
      'Namibia sits on the Cape gale-season side of the route; see Weather, Seasons & Passage Planning. Namibia-specific seasonal detail is to be confirmed with the country steward.',
    verifiedBy:
      'Verified as of: pending confirmation by a named country steward (candidate: Giel du Toit).',
    image: {
      src: photos.atlanticPort,
      alt: 'Arid Atlantic working harbour with a yacht at a jetty',
    },
    faqs: [],
  },
  {
    slug: 'mauritius',
    h1: 'Mauritius',
    purpose:
      'A market with active government investment underway, presented without overstating what exists today.',
    entry:
      'Port Louis is the principal port of entry. Detailed TIP, immigration and customs procedure is to be confirmed with the country steward before publishing step-by-step guidance.',
    refit:
      'Existing repair and service facilities in Mauritius have been documented by member contributors and are being incorporated into the verified facilities list on Refit & Haul-Out Capacity. The planned Black River Marina development is expected to add berthing, haul-out and service capacity; as of this draft it is a planned development, not yet operational, and is described here as such.',
    season:
      'Mauritius sits within the southwest Indian Ocean cyclone belt, broadly active November to April; see Weather, Seasons & Passage Planning for the region-wide detail. This is not presented on the same calendar as the Cape gale season.',
    verifiedBy:
      'Verified as of: pending confirmation by a named country steward (candidate: Bertrand Hardy, Yacht Mauritius).',
    image: {
      src: photos.indianOceanHarbour,
      alt: 'Tropical working harbour quay with vessels alongside',
    },
    faqs: [],
  },
  {
    slug: 'seychelles',
    h1: 'Seychelles',
    purpose:
      'The market with the most active, best-documented regulatory reform in progress — presented in detail because it can be backed with a dated official record.',
    entry:
      'Following a technical working meeting between industry and the Ministry of Finance, Seychelles Revenue Commission and Customs Division on 28 January 2026, government confirmed removal of the exclusion / cooling-off period on re-entry under Temporary Admission (IM5) — a change described in that meeting as urgent and already agreed in practice, pending formal written confirmation from the Revenue Commission. Charter activity under Temporary Admission is under active clarification: it is not expressly prohibited under the Customs Management Act, 2011, and an authorisation proposal is with government. VAT on charter revenue is already paid via licensed local agents; the industry’s request is for clarity that VAT applies to charter revenue rather than to a vessel’s full capital value. Business Tax and Permanent Establishment treatment for charter operations remains under separate, ongoing technical review.',
    refit:
      'Victoria Harbour, Mahé, is the principal port. Refit and haul-out capacity is to be confirmed with the country steward for the verified facilities list.',
    season:
      'Seychelles sits toward the northern edge of the southwest Indian Ocean cyclone belt; see Weather, Seasons & Passage Planning.',
    verifiedBy:
      'Verified as of: pending confirmation by a named country steward (candidate: Gilbert D’Offay, APSY Seychelles).',
    image: {
      src: photos.yachtAlongside,
      alt: 'Motor yacht lying alongside a working quay at night',
    },
    faqs: [
      {
        question: 'What changed on Temporary Admission (IM5) in Seychelles?',
        answer:
          'On 28 January 2026, government confirmed removal of the exclusion / cooling-off period on re-entry under Temporary Admission (IM5), pending formal written confirmation from the Revenue Commission.',
      },
    ],
  },
  {
    slug: 'madagascar',
    h1: 'Madagascar',
    purpose:
      'The one country that must never be presented as a confident, static process. The warning sits on this page, not in a footnote.',
    warning:
      'Status: unsettled. Advance permits have taken up to two months and approvals have been inconsistent. Confirm current status with a named contact before committing this leg to an itinerary.',
    entry:
      'Madagascar’s superyacht entry status is currently unsettled. Advance permits have taken up to two months to process, and approvals have been inconsistent. This is stated here permanently as an open, dated condition, not as a step-by-step process — confirm current status with a named contact before committing this leg to any itinerary. A named current contact is to be confirmed and published here.',
    refit:
      'Facility information is to be confirmed with the country steward before publishing.',
    season:
      'Madagascar sits within the southwest Indian Ocean cyclone belt, among the more exposed of the six member countries; see Weather, Seasons & Passage Planning.',
    verifiedBy:
      'Verified as of: pending confirmation by a named country steward (candidates: Cyril Mahafahana or Lauren Swiegers, Madagascar Yacht Services).',
    image: {
      src: photos.indianOceanHarbour,
      alt: 'Working harbour in a tropical setting',
    },
    faqs: [
      {
        question: 'Can I get a superyacht entry permit for Madagascar?',
        answer:
          'Status is currently unsettled; advance permits have taken up to two months and approvals have been inconsistent. Confirm current status with a named contact before committing this leg to an itinerary.',
      },
    ],
  },
  {
    slug: 'st-helena',
    h1: 'St Helena',
    purpose:
      'The most remote market on the route, kept deliberately short and honest.',
    entry:
      'Jamestown Harbour is the port of entry. St Helena’s international airport has opened since the island’s earlier ship-only era, improving crew change and provisioning logistics. Entry procedure detail is to be confirmed with the country steward.',
    refit:
      'St Helena has minimal marine services infrastructure; it is presented as a passage waypoint and port of entry rather than a refit destination. This will be expanded only if verified capacity exists.',
    season:
      'St Helena sits outside the Indian Ocean cyclone belt and is generally treated as a year-round passage landfall; any local seasonal advisory is to be confirmed with the country steward.',
    verifiedBy:
      'Verified as of: pending confirmation by a named country steward (candidates: Jonathan Passaportis or Sophia Joshua, St Helena Tourism).',
    image: {
      src: photos.atlanticPort,
      alt: 'Remote working harbour on an arid coast',
    },
    faqs: [],
  },
]
