import * as React from 'react'

function SvgIconPresentation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="presentation" aria-labelledby="t-presentation d-presentation">
        <title id="t-presentation">{'Presentation'}</title>
        <desc id="d-presentation">
          {'Presentation screen on a stand displaying graphic information'}
        </desc>
        <path d="M18 17h10v1H18zM18 14h10v1H18zM18 11h10v1H18zM18 8h10v1H18zM9 8.101V13a1 1 0 001 1h4.899A5.009 5.009 0 0110 18c-2.757 0-5-2.243-5-5a5.008 5.008 0 014-4.899M10 7a6 6 0 000 12 6 6 0 006-6h-6V7z" />
        <path d="M32 3V2a1 1 0 00-1-1H18a1 1 0 00-1-1h-2a1 1 0 00-1 1H1a1 1 0 00-1 1v1a1 1 0 001 1v18a1 1 0 00-1 1v1a1 1 0 001 1h9.352l-1.341 6.396a.5.5 0 00.978.208L11.374 25h9.252l1.386 6.604a.499.499 0 00.591.384.503.503 0 00.387-.592L21.646 25H31a1 1 0 001-1v-1a1 1 0 00-1-1V4a1 1 0 001-1zm-1 21H1v-1h30v1zM2 22V4h28v18H2zM1 3V2h30v1H1z" />
      </g>
    </svg>
  )
}

export default SvgIconPresentation
