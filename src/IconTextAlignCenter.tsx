import * as React from 'react'

function SvgIconTextAlignCenter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="text-align-center"
        aria-labelledby="t-text-align-center d-text-align-center"
      >
        <title id="t-text-align-center">{'Text align center'}</title>
        <desc id="d-text-align-center">
          {'Four lines of different length aligned to center'}
        </desc>
        <path d="M24 28H8c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2zm6-8H2c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zm-2-8H4c-1.1 0-2-.9-2-2s.9-2 2-2h24c1.1 0 2 .9 2 2s-.9 2-2 2zm2-8H2C.9 4 0 3.1 0 2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2z" />
      </g>
    </svg>
  )
}

export default SvgIconTextAlignCenter
