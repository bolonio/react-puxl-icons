import * as React from 'react'

function SvgIconBatteryMaxCharging(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="battery-max-charging"
        aria-labelledby="t-battery-max-charging d-battery-max-charging"
      >
        <title id="t-battery-max-charging">{'Full battery charging'}</title>
        <desc id="d-battery-max-charging">
          {'A full-filled electric battery with a lighting bolt'}
        </desc>
        <path d="M19 1v3h5v26H8V4h5V1h6m0-1h-6c-.6 0-1 .4-1 1v2H8c-.6 0-1 .4-1 1v27c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1h-4V1c0-.6-.4-1-1-1z" />
        <path d="M10 6v22h12V6H10zm3.9 21l.7-8.7L11 17l7.1-10-.7 8.7L21 17l-7.1 10z" />
      </g>
    </svg>
  )
}

export default SvgIconBatteryMaxCharging
