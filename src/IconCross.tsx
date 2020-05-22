import * as React from 'react'

function SvgIconCross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="cross" aria-labelledby="t-cross d-cross">
        <title id="t-cross">{'Cross'}</title>
        <desc id="d-cross">{'Two lines crossed diagonally'}</desc>
        <path d="M13.172 16L.586 3.414A2 2 0 113.414.586L16 13.172 28.586.586a2 2 0 112.828 2.828L18.828 16l12.586 12.586a2 2 0 11-2.828 2.828L16 18.828 3.414 31.414a2 2 0 11-2.828-2.828L13.172 16z" />
      </g>
    </svg>
  )
}

export default SvgIconCross
