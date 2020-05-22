import * as React from 'react'

function SvgIconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="phone" aria-labelledby="t-phone d-phone">
        <title id="t-phone">{'Phone'}</title>
        <desc id="d-phone">{'Phone headset'}</desc>
        <path d="M7 1l6 8-4 4 10 10 4-4 8 6-7 6C10 21.999 10 21.999 1 8l6-7m0-1a.998.998 0 00-.759.349l-6 7a1 1 0 00-.082 1.192c9.118 14.182 9.118 14.182 23.3 23.3a1.002 1.002 0 001.191-.082l7-6c.229-.196.354-.487.349-.79a.984.984 0 00-.399-.769l-8-6a1 1 0 00-1.307.093L19 21.586 10.414 13l3.293-3.293A1 1 0 0013.8 8.4l-6-8a1 1 0 00-.767-.4H7z" />
      </g>
    </svg>
  )
}

export default SvgIconPhone
