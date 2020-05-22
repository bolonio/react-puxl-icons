import * as React from 'react'

function SvgIconTablet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="tablet" aria-labelledby="t-tablet d-tablet">
        <title id="t-tablet">{'Tablet'}</title>
        <desc id="d-tablet">{'Tablet device in portrait'}</desc>
        <circle cx={16} cy={29} r={1} />
        <path d="M24 4v22H8V4h16m0-1H8a1 1 0 00-1 1v22a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1z" />
        <path d="M25 1a2 2 0 012 2v26a2 2 0 01-2 2H7a2 2 0 01-2-2V3a2 2 0 012-2h18m0-1H7C5.346 0 4 1.346 4 3v26c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3z" />
      </g>
    </svg>
  )
}

export default SvgIconTablet
