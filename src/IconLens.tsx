import * as React from 'react'

function SvgIconLens(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="lens" aria-labelledby="t-lens d-lens">
        <title id="t-lens">{'Lens'}</title>
        <desc id="d-lens">{'Magnifying glass'}</desc>
        <path d="M31.121 26.878l-5.982-5.983a3.002 3.002 0 00-3.416-.586l-2.268-2.268c3.605-4.321 3.383-10.76-.676-14.817-4.295-4.296-11.26-4.296-15.556 0-4.296 4.296-4.296 11.261 0 15.555 4.057 4.059 10.495 4.283 14.817.68l2.269 2.268a3 3 0 00.586 3.41l5.984 5.984a3 3 0 004.242-4.243zm-13.758-9.515c-3.514 3.516-9.213 3.516-12.729 0-3.514-3.514-3.514-9.213 0-12.729a9 9 0 0112.728 0c3.517 3.516 3.517 9.216.001 12.729zm13.051 13.051a2.003 2.003 0 01-2.828 0l-5.984-5.984a2.018 2.018 0 010-2.828 2.009 2.009 0 012.828 0l5.984 5.984c.779.78.779 2.048 0 2.828z" />
      </g>
    </svg>
  )
}

export default SvgIconLens
