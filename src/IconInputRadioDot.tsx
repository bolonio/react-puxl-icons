import * as React from 'react'

function SvgIconInputRadioDot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="input-radio-dot"
        aria-labelledby="t-input-radio-dot d-input-radio-dot"
      >
        <title id="t-input-radio-dot">{'Radio dot'}</title>
        <desc id="d-input-radio-dot">{'A dot'}</desc>
        <circle cx={16} cy={16} r={6} />
      </g>
    </svg>
  )
}

export default SvgIconInputRadioDot
