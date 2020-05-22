import * as React from 'react'

function SvgIconTextAlignJustifyRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="text-align-justify-right"
        aria-labelledby="t-text-align-justify-right d-text-align-justify-right"
      >
        <title id="t-text-align-justify-right">
          {'Text align justified right'}
        </title>
        <desc id="d-text-align-justify-right">
          {
            'Three lines of same width as the container, the last one is shorter and aligned to right'
          }
        </desc>
        <path d="M30 28H14c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H2c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H2c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H2C.9 4 0 3.1 0 2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2z" />
      </g>
    </svg>
  )
}

export default SvgIconTextAlignJustifyRight
