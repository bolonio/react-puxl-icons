import * as React from 'react'

function SvgIconDesktop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="desktop" aria-labelledby="t-desktop d-desktop">
        <title id="t-desktop">{'Desktop'}</title>
        <desc id="d-desktop">{'Desktop size screen'}</desc>
        <path d="M3 6h26v16H3V6M2 6v16a1 1 0 001 1h26a1 1 0 001-1V6a1 1 0 00-1-1H3a1 1 0 00-1 1z" />
        <path d="M29 3H3C1.346 3 0 4.346 0 6v16c0 1.654 1.346 3 3 3h10v2a2 2 0 01-2 2h-1a.5.5 0 000 1h12c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-1a2 2 0 01-2-2v-2h10c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zM13.231 29.003c.478-.53.769-1.233.769-2.003v-2h4v2c0 .77.291 1.471.768 2.002l-5.537.001zM31 22a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h26a2 2 0 012 2v16z" />
      </g>
    </svg>
  )
}

export default SvgIconDesktop
