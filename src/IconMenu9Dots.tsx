import * as React from 'react'

function SvgIconMenu9Dots(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="menu-9-dots" aria-labelledby="t-menu-9-dots d-menu-9-dots">
        <title id="t-menu-9-dots">{'Menu 9 dots'}</title>
        <desc id="d-menu-9-dots">{'9 dots in a 3 x 3 grid'}</desc>
        <circle cx={28} cy={28} r={4} />
        <circle cx={16} cy={28} r={4} />
        <circle cx={4} cy={28} r={4} />
        <circle cx={28} cy={16} r={4} />
        <circle cx={16} cy={16} r={4} />
        <circle cx={4} cy={16} r={4} />
        <circle cx={28} cy={4} r={4} />
        <circle cx={16} cy={4} r={4} />
        <circle cx={4} cy={4} r={4} />
      </g>
    </svg>
  )
}

export default SvgIconMenu9Dots
