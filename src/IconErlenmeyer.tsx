import * as React from 'react'

function SvgIconErlenmeyer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="erlenmeyer" aria-labelledby="t-erlenmeyer d-erlenmeyer">
        <title id="t-erlenmeyer">{'Erlenmeyer'}</title>
        <desc id="d-erlenmeyer">
          {'Erlenmeyer flask half-filled with bubbly liquid'}
        </desc>
        <circle cx={14} cy={20} r={2} />
        <circle cx={17} cy={15} r={1} />
        <path d="M27.46 31.305L20.5 14.898V1h1a.5.5 0 000-1h-11a.5.5 0 000 1h1v13.898L4.54 31.305a.507.507 0 00.043.473A.503.503 0 005 32h22a.499.499 0 00.46-.695zM15 30a1 1 0 110-2 1 1 0 110 2zm3.5-2a1.5 1.5 0 11-.001-2.999A1.5 1.5 0 0118.5 28zm-9.775-4l3.735-8.805A.504.504 0 0012.5 15V1h7v14c0 .067.014.133.04.195L23.275 24H8.725z" />
      </g>
    </svg>
  )
}

export default SvgIconErlenmeyer
