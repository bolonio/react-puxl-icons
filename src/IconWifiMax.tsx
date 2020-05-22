import * as React from 'react'

function SvgIconWifiMax(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="wifi-max" aria-labelledby="t-wifi-max d-wifi-max">
        <title id="t-wifi-max">{'Maximum WiFi'}</title>
        <desc id="d-wifi-max">{'A point radiating 3 waves'}</desc>
        <circle cx={16} cy={26} r={2} />
        <path d="M10.107 21.109a1 1 0 01-.707-1.707c1.763-1.764 4.107-2.735 6.6-2.735s4.836.97 6.6 2.733a.99.99 0 010 1.414 1 1 0 01-1.414 0A7.29 7.29 0 0016 18.667c-1.958 0-3.8.765-5.185 2.149a.987.987 0 01-.708.293zM5.63 16.635a1 1 0 01-.708-1.706A15.555 15.555 0 0116 10.333h.002c4.184 0 8.117 1.63 11.076 4.59a1 1 0 01-1.414 1.414 13.573 13.573 0 00-9.662-4.004H16c-3.65 0-7.082 1.424-9.664 4.008a.999.999 0 01-.706.294z" />
        <path d="M1.15 12.158a1.002 1.002 0 01-.706-1.707C4.6 6.293 10.124 4 16 4h.003c5.874 0 11.396 2.29 15.552 6.445a.999.999 0 11-1.414 1.414A19.85 19.85 0 0016.005 6H16a19.857 19.857 0 00-14.14 5.865 1 1 0 01-.71.293z" />
      </g>
    </svg>
  )
}

export default SvgIconWifiMax
