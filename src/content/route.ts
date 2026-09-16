export const routeLegs = [
  {
    from: 'Cape Town, South Africa',
    to: 'Lüderitz, Namibia',
    distance: 'Distance pending Task Team verification',
    duration: 'Typical passage time pending verification',
    note: 'Port of entry',
  },
  {
    from: 'Lüderitz, Namibia',
    to: 'Walvis Bay, Namibia',
    distance: 'Distance pending Task Team verification',
    duration: 'Typical passage time pending verification',
    note: 'Port of entry (commercial jetty use for vessels over sailing-vessel size)',
  },
  {
    from: 'Cape Town, South Africa',
    to: 'Port Louis, Mauritius',
    distance: 'Distance pending Task Team verification',
    duration: 'Typical passage time pending verification',
    note: 'Port of entry',
  },
  {
    from: 'Port Louis, Mauritius',
    to: 'Victoria, Seychelles',
    distance: 'Distance pending Task Team verification',
    duration: 'Typical passage time pending verification',
    note: 'Port of entry',
  },
  {
    from: 'Seychelles / Mauritius',
    to: 'Nosy Be, Madagascar',
    distance: 'Distance pending Task Team verification',
    duration: 'Typical passage time pending verification',
    note: 'Advance permit required; status unsettled — see Madagascar',
    warning: true,
  },
  {
    from: 'Cape Town, South Africa',
    to: 'Jamestown, St Helena',
    distance: 'Distance pending Task Team verification',
    duration: 'Typical passage time pending verification',
    note: 'Port of entry',
  },
]

export const mapPorts = [
  { id: 'cpt', name: 'Cape Town', kind: 'entry-refit', x: 38, y: 78 },
  { id: 'lud', name: 'Lüderitz', kind: 'entry', x: 34, y: 62 },
  { id: 'wb', name: 'Walvis Bay', kind: 'entry', x: 32, y: 48 },
  { id: 'pl', name: 'Port Louis', kind: 'entry', x: 78, y: 58 },
  { id: 'vic', name: 'Victoria', kind: 'entry', x: 76, y: 38 },
  { id: 'nb', name: 'Nosy Be', kind: 'warning', x: 68, y: 48 },
  { id: 'jh', name: 'Jamestown', kind: 'entry', x: 14, y: 58 },
  { id: 'dbn', name: 'Durban', kind: 'refit', x: 48, y: 72 },
] as const

export const routeFaqs = [
  {
    question: 'Is South Africa’s coast safe for a superyacht and crew?',
    answer:
      'Piracy risk here is not comparable to the Gulf of Guinea or Somali Basin; the real risk is weather (the Agulhas Current against south-westerly gales) and, ashore, ordinary urban crime concentrated in identifiable areas away from marina precincts.',
  },
  {
    question: 'Can I get a superyacht entry permit for Madagascar?',
    answer:
      'Status is currently unsettled; advance permits have taken up to two months and approvals have been inconsistent. Confirm current status with a named contact before committing this leg to an itinerary.',
  },
]
