import * as React from 'react'

function SvgIconBatteryMinCharging(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="battery-min-charging"
        aria-labelledby="t-battery-min-charging d-battery-min-charging"
      >
        <title id="t-battery-min-charging">{'Empty battery charging'}</title>
        <desc id="d-battery-min-charging">
          {'An empty electric battery with a lighting bolt'}
        </desc>
        <path d="M19 1v3h5v26H8V4h5V1h6m0-1h-6c-.6 0-1 .4-1 1v2H8c-.6 0-1 .4-1 1v27c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1h-4V1c0-.6-.4-1-1-1z" />
        <path d="M22 16.7c-.1-.3-.3-.5-.6-.6L18.5 15l.7-7.9c0-.4-.2-.9-.7-1-.1-.1-.2-.1-.4-.1-.3 0-.6.2-.8.4l-7.1 10c-.2.3-.2.6-.2.9.1.3.3.5.6.601l2.9 1.104-.7 7.895c0 .396.2.896.7 1 .1 0 .2.101.3.101.3 0 .6-.2.8-.399l7.1-10c.3-.302.3-.602.3-.902zM13.9 27l.7-8.7L11 17l7.1-10-.7 8.7L21 17l-7.1 10z" />
      </g>
    </svg>
  )
}

export default SvgIconBatteryMinCharging
