import * as React from 'react'

function SvgIconBatteryMin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="battery-min" aria-labelledby="t-battery-min d-battery-min">
        <title id="t-battery-min">{'Empty battery'}</title>
        <desc id="d-battery-min">{'An empty electric battery'}</desc>
        <path d="M19 1v3h5v26H8V4h5V1h6m0-1h-6c-.6 0-1 .4-1 1v2H8c-.6 0-1 .4-1 1v27c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1h-4V1c0-.6-.4-1-1-1z" />
      </g>
    </svg>
  )
}

export default SvgIconBatteryMin
