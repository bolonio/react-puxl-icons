import * as React from 'react'

function SvgIconTextAlignJustifyCenter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="text-align-justify-center"
        aria-labelledby="t-text-align-justify-center d-text-align-justify-center"
      >
        <title id="t-text-align-justify-center">
          {'Text align justified center'}
        </title>
        <desc id="d-text-align-justify-center">
          {
            'Three lines of same width as the container, the last one is shorter and aligned to center'
          }
        </desc>
        <path d="M24 28H8c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2zm6-8H2c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H2c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H2C.9 4 0 3.1 0 2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2z" />
      </g>
    </svg>
  )
}

export default SvgIconTextAlignJustifyCenter
