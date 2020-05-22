import * as React from 'react'

function SvgIconArrowE(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="arrow-right" aria-labelledby="t-arrow-right d-arrow-right">
        <title id="t-arrow-right">{'Right arrow'}</title>
        <desc id="d-arrow-right">
          {'Simple caret arrow pointing rightwards'}
        </desc>
        <path d="M25 16c0 .512-.195 1.023-.586 1.414l-14 14a2 2 0 11-2.828-2.828L20.172 16 7.586 3.414A2 2 0 1110.414.586l14 14c.391.391.586.902.586 1.414z" />
      </g>
    </svg>
  )
}

export default SvgIconArrowE
