import * as React from 'react'

function SvgIconContrast(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="contrast" aria-labelledby="t-contrast d-contrast">
        <title id="t-contrast">{'Contrast'}</title>
        <desc id="d-contrast">
          {'A circle split into two halves. Left half black, right half white.'}
        </desc>
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm0 30V2c7.7 0 14 6.3 14 14s-6.3 14-14 14z" />
      </g>
    </svg>
  )
}

export default SvgIconContrast
