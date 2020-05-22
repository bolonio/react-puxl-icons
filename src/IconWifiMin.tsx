import * as React from 'react'

function SvgIconWifiMin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="wifi-min" aria-labelledby="t-wifi-min d-wifi-min">
        <title id="t-wifi-min">{'Minimum WiFi'}</title>
        <desc id="d-wifi-min">{'A point radiating 1 wave'}</desc>
        <circle cx={16} cy={26} r={2} />
        <path d="M10.107 21.109a1 1 0 01-.707-1.707c1.763-1.764 4.107-2.735 6.6-2.735s4.836.97 6.6 2.733a.99.99 0 010 1.414 1 1 0 01-1.414 0A7.29 7.29 0 0016 18.667c-1.958 0-3.8.765-5.185 2.149a.987.987 0 01-.708.293z" />
      </g>
    </svg>
  )
}

export default SvgIconWifiMin
