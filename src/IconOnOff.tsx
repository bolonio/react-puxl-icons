import * as React from 'react'

function SvgIconOnOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="on-off" aria-labelledby="t-on-off d-on-off">
        <title id="t-on-off">{'On/Off'}</title>
        <desc id="d-on-off">{'On and off symbol'}</desc>
        <path d="M16 32C8.28 32 2 25.721 2 18A13.97 13.97 0 019.536 5.578a1 1 0 01.925 1.773A11.977 11.977 0 004 18c0 6.617 5.383 12 12 12s12-5.383 12-12c0-4.492-2.479-8.573-6.465-10.65a1.001 1.001 0 01.924-1.774A13.97 13.97 0 0130 18c0 7.721-6.279 14-14 14z" />
        <path d="M16 19a1 1 0 01-1-1V1a1 1 0 012 0v17a1 1 0 01-1 1z" />
      </g>
    </svg>
  )
}

export default SvgIconOnOff
