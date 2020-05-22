import * as React from 'react'

function SvgIconSoftware(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="software" aria-labelledby="t-software d-software">
        <title id="t-software">{'Software'}</title>
        <desc id="d-software">
          {'A computer window with opening and cosing braces'}
        </desc>
        <circle cx={29} cy={5} r={1} />
        <circle cx={26} cy={5} r={1} />
        <circle cx={23} cy={5} r={1} />
        <path d="M27.725 17.553a.5.5 0 010 .894l-7 3.5a.502.502 0 01-.67-.225.518.518 0 01.223-.688L26.382 18l-6.104-3.053a.5.5 0 11.445-.895l7 3.5.002.001zM13.5 24a.5.5 0 01-.455-.707l5-11a.5.5 0 01.91.414l-5 11A.496.496 0 0113.5 24zm-9.224-5.553a.5.5 0 010-.894l7-3.5a.502.502 0 01.67.224.497.497 0 01-.223.67L5.618 18l6.105 3.053a.5.5 0 01.224.67.504.504 0 01-.67.229l-7.001-3.505z" />
        <path d="M32 3a1 1 0 00-1-1H1a1 1 0 00-1 1v26a1 1 0 001 1h30a1 1 0 001-1V3zM1 3h30v4H1V3zm30 26H1V8h30v21z" />
      </g>
    </svg>
  )
}

export default SvgIconSoftware
