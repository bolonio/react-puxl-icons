import * as React from 'react'

function SvgIconWindow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="window" aria-labelledby="t-window d-window">
        <title id="t-window">{'Window'}</title>
        <desc id="d-window">{'A computer window'}</desc>
        <circle cx={29} cy={5} r={1} />
        <circle cx={26} cy={5} r={1} />
        <circle cx={23} cy={5} r={1} />
        <path d="M32 3a1 1 0 00-1-1H1a1 1 0 00-1 1v26a1 1 0 001 1h30a1 1 0 001-1V3zM1 3h30v4H1V3zm30 26H1V8h30v21z" />
      </g>
    </svg>
  )
}

export default SvgIconWindow
