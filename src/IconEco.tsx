import * as React from 'react'

function SvgIconEco(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="eco" aria-labelledby="t-eco d-eco">
        <title id="t-eco">{'Eco'}</title>
        <desc id="d-eco">{'A winding path and a tree'}</desc>
        <path
          fill="#00622E"
          d="M0 18v14h32V18h-9v-4h7l-6-6h3l-4-4h2l-4-4-4 4h2l-4 4h3l-6 6h7v4H8c0 2.816 22 1.245 22 8 0 2.75-2 4-2 4H12s8-2 8-4c0-4.167-16-4.083-16-8H0z"
        />
      </g>
    </svg>
  )
}

export default SvgIconEco
