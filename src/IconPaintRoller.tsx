import * as React from 'react'

function SvgIconPaintRoller(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="paint-roller" aria-labelledby="t-paint-roller d-paint-roller">
        <title id="t-paint-roller">{'Paint roller'}</title>
        <desc id="d-paint-roller">{'A paint roller'}</desc>
        <path d="M29 4h-1V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v6c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V6h1c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H18c-1.7 0-3 1.3-3 3v1h-1c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1h-1v-1c0-.6.4-1 1-1h11c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zm-2 4c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h24c.6 0 1 .4 1 1v6zm-9 9v14h-4V17h4z" />
      </g>
    </svg>
  )
}

export default SvgIconPaintRoller
