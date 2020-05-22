import * as React from 'react'

function SvgIconMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="minus" aria-labelledby="t-minus d-minus">
        <title id="t-minus">{'Minus'}</title>
        <desc id="d-minus">{'Single horizontal line'}</desc>
        <path d="M2 18a2 2 0 010-4h28a2 2 0 110 4H2z" />
      </g>
    </svg>
  )
}

export default SvgIconMinus
