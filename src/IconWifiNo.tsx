import * as React from 'react'

function SvgIconWifiNo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="wifi-no" aria-labelledby="t-wifi-no d-wifi-no">
        <title id="t-wifi-no">{'No WiFi'}</title>
        <desc id="d-wifi-no">{'A point radiating no waves'}</desc>
        <circle cx={16} cy={26} r={2} />
      </g>
    </svg>
  )
}

export default SvgIconWifiNo
