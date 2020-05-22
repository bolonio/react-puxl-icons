import * as React from 'react'

function SvgIconLensPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="lens-plus" aria-labelledby="t-lens-plus d-lens-plus">
        <title id="t-lens-plus">{'Lens plus'}</title>
        <desc id="d-lens-plus">{'Magnifying glass with a plus symbol'}</desc>
        <path d="M31.12 26.878l-5.979-5.983a3.006 3.006 0 00-3.418-.586l-2.268-2.27c3.605-4.32 3.383-10.76-.676-14.816-4.296-4.296-11.26-4.296-15.557 0-4.296 4.296-4.296 11.26 0 15.554 4.057 4.059 10.495 4.283 14.817.681l2.27 2.267a3 3 0 00.586 3.41l5.983 5.984a2.996 2.996 0 004.24 0 2.997 2.997 0 000-4.242l.002.001zm-13.757-9.515c-3.514 3.516-9.213 3.516-12.73 0-3.513-3.514-3.513-9.213 0-12.73a9.004 9.004 0 0112.73 0c3.516 3.517 3.516 9.217 0 12.73zm13.05 13.05a2 2 0 01-2.827 0l-5.984-5.983a2.018 2.018 0 010-2.828 2.018 2.018 0 012.828 0l5.984 5.984c.779.78.779 2.048-.001 2.827z" />
        <path d="M10 16a1 1 0 102 0v-4h4a1 1 0 100-2h-4V6a1 1 0 00-2 0v4H6a1 1 0 100 2h4v4z" />
      </g>
    </svg>
  )
}

export default SvgIconLensPlus
