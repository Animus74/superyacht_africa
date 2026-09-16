import { mapPorts } from '../content/route'

const kindLabel: Record<string, string> = {
  'entry-refit': 'Port of entry · refit / haul-out flagged',
  entry: 'Port of entry',
  refit: 'Refit / haul-out flagged',
  warning: 'Advance permit required — status unsettled',
}

export function RouteMap() {
  return (
    <figure className="route-map">
      <svg
        viewBox="0 0 100 100"
        role="img"
        aria-labelledby="route-map-title route-map-desc"
      >
        <title id="route-map-title">Southern Explorer Route — schematic ports</title>
        <desc id="route-map-desc">
          Schematic chart of ports of entry, refit-capable ports, and Madagascar’s advance-permit
          warning. Distances and durations are in the table below, not only on this diagram.
        </desc>
        <rect width="100" height="100" fill="#061018" />
        <path
          d="M30 20 L36 28 L38 40 L36 52 L40 64 L42 76 L48 82 L52 78 L46 68 L44 56 L50 44 L48 32 L42 22 Z"
          fill="none"
          stroke="#1e3a4c"
          strokeWidth="0.6"
        />
        <path
          d="M62 42 L70 44 L72 52 L68 60 L62 58 L60 50 Z"
          fill="none"
          stroke="#1e3a4c"
          strokeWidth="0.6"
        />
        {mapPorts.map((port) => (
          <g key={port.id}>
            <circle
              cx={port.x}
              cy={port.y}
              r={port.kind === 'warning' ? 1.8 : 1.3}
              fill={port.kind === 'warning' ? '#c5a05a' : '#d7d2c8'}
              tabIndex={0}
            >
              <title>
                {port.name}: {kindLabel[port.kind]}
              </title>
            </circle>
            {port.kind === 'warning' ? (
              <text
                x={port.x}
                y={port.y - 2.6}
                textAnchor="middle"
                fill="#c5a05a"
                fontSize="3"
                fontFamily="IBM Plex Sans, sans-serif"
              >
                !
              </text>
            ) : null}
            <text
              x={port.x + 2.2}
              y={port.y + 0.8}
              fill="#d7d2c8"
              fontSize="2.6"
              fontFamily="IBM Plex Sans, sans-serif"
            >
              {port.name}
            </text>
          </g>
        ))}
      </svg>
      <figcaption>
        Ports of entry are marked on the schematic. Gold warning mark: Madagascar advance permit,
        status unsettled. Refit-capable ports: Cape Town and Durban (verified capacity; above
        roughly 60 metres not yet demonstrated by named completed projects). Distances are not
        shown on the drawing — see the table on this page.
      </figcaption>
    </figure>
  )
}
