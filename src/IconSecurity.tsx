import * as React from 'react'

function SvgIconSecurity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="security" aria-labelledby="t-security d-security">
        <title id="t-security">{'Security'}</title>
        <desc id="d-security">{'A heater shield'}</desc>
        <path d="M29.3 4.2L16.3 0h-.6l-13 4.2c-.4.1-.7.5-.7 1v4.2c0 9.3 5.2 17.9 13.5 22.5.2.1.3.1.5.1s.3 0 .5-.1C24.8 27.2 30 18.6 30 9.3V5.2c0-.4-.3-.8-.7-1zM3 9.3V5.2l12-3.9v29.2C7.8 26 3 18.2 3 9.3zm26 .1c0 8.9-4.8 16.6-12 21.1V1.3l12 3.9v4.2z" />
      </g>
    </svg>
  )
}

export default SvgIconSecurity
