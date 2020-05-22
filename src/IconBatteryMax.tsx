import * as React from 'react'

function SvgIconBatteryMax(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="battery-max" aria-labelledby="t-battery-max d-battery-max">
        <title id="t-battery-max">{'Full battery'}</title>
        <desc id="d-battery-max">{'A full-charged electric battery'}</desc>
        <path d="M10 6h12v22H10V6z" />
        <path d="M19 1v3h5v26H8V4h5V1h6m0-1h-6c-.6 0-1 .4-1 1v2H8c-.6 0-1 .4-1 1v27c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1h-4V1c0-.6-.4-1-1-1z" />
      </g>
    </svg>
  )
}

export default SvgIconBatteryMax
