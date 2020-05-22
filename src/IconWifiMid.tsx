import * as React from 'react'

function SvgIconWifiMid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="wifi-mid" aria-labelledby="t-wifi-mid d-wifi-mid">
        <title id="t-wifi-mid">{'Medium WiFi'}</title>
        <desc id="d-wifi-mid">{'A point radiating 2 waves'}</desc>
        <circle cx={16} cy={26} r={2} />
        <path d="M10.107 21.109a1 1 0 01-.707-1.707c1.763-1.764 4.107-2.735 6.6-2.735s4.836.97 6.6 2.733a.99.99 0 010 1.414 1 1 0 01-1.414 0A7.29 7.29 0 0016 18.667c-1.958 0-3.8.765-5.185 2.149a.987.987 0 01-.708.293zM5.63 16.635a1 1 0 01-.708-1.706A15.555 15.555 0 0116 10.333h.002c4.184 0 8.117 1.63 11.076 4.59a1 1 0 01-1.414 1.414 13.573 13.573 0 00-9.662-4.004H16c-3.65 0-7.082 1.424-9.664 4.008a.999.999 0 01-.706.294z" />
      </g>
    </svg>
  )
}

export default SvgIconWifiMid
