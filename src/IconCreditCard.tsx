import * as React from 'react'

function SvgIconCreditCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="credit-card" aria-labelledby="t-credit-card d-credit-card">
        <title id="t-credit-card">{'Credit card'}</title>
        <desc id="d-credit-card">
          {'Back view of a credit card with magnetic stripe'}
        </desc>
        <path d="M29 6H3C1.3 6 0 7.3 0 9v14c0 1.7 1.3 3 3 3h26c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3zm2 17c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-9h30v9zm0-13H1V9c0-1.1.9-2 2-2h26c1.1 0 2 .9 2 2v1z" />
        <path d="M4 18h6v2H4v-2zm8 0h6v2h-6v-2zm8 0h2v2h-2v-2z" />
      </g>
    </svg>
  )
}

export default SvgIconCreditCard
