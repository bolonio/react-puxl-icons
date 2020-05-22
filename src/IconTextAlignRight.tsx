import * as React from 'react'

function SvgIconTextAlignRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="text-align-right"
        aria-labelledby="t-text-align-right d-text-align-right"
      >
        <title id="t-text-align-right">{'Text align right'}</title>
        <desc id="d-text-align-right">
          {'Four lines of different length aligned to right'}
        </desc>
        <path d="M30 28H14c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H2c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H6c-1.1 0-2-.9-2-2s.9-2 2-2h24c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H2C.9 4 0 3.1 0 2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2z" />
      </g>
    </svg>
  )
}

export default SvgIconTextAlignRight
