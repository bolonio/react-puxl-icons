import * as React from 'react'

function SvgIconPrint2D(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="print-2d" aria-labelledby="t-print-2d d-print-2d">
        <title id="t-print-2d">{'Print'}</title>
        <desc id="d-print-2d">
          {'A paper sheet being printed through out a printer'}
        </desc>
        <circle cx={24} cy={13} r={1} />
        <circle cx={28} cy={13} r={1} />
        <path d="M8 19h16v1H8v-1zm0 3h16v1H8v-1zm0 3h10v1H8v-1zm12 3h4v1h-4v-1z" />
        <path d="M29 9h-2V6l-6-6H5v9H3c-1.7 0-3 1.3-3 3v8c0 .6.4 1 1 1h4v11h22V21h4c.6 0 1-.4 1-1v-8c0-1.7-1.3-3-3-3zm-8-7.6L25.6 6H21V1.4zM6 1h14v5c0 .6.4 1 1 1h5v2H6V1zm20 30H6V17h20v14zm5-11h-4v-4H5v4H1v-8c0-1.1.9-2 2-2h26c1.1 0 2 .9 2 2v8z" />
      </g>
    </svg>
  )
}

export default SvgIconPrint2D
