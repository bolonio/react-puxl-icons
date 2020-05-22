import * as React from 'react'

function SvgIconPrint3D(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="print-3d" aria-labelledby="t-print-3d d-print-3d">
        <title id="t-print-3d">{'3D print'}</title>
        <desc id="d-print-3d">{'A cube in a cartesian X Y Z axis'}</desc>
        <path d="M31.5 27.257L26 24.083v-9.816a.996.996 0 00-.5-.866L17 8.494v-6.35a1.001 1.001 0 00-2 0v6.352L6.5 13.4c-.31.18-.5.51-.5.867v9.815L.503 27.257a.997.997 0 00-.366 1.365.998.998 0 001.367.367l5.5-3.177 8.5 4.896c.31.188.69.188 1 0L25 25.814l5.5 3.177a.996.996 0 001.363-.366.998.998 0 00-.363-1.368zM7 24.66v-9.815l8.5 4.906v9.817L7 24.66zm9-5.774L7.5 13.98 16 9.07l8.5 4.907-8.5 4.906v.003zm9 5.773l-8.5 4.907V19.75l8.5-4.905v9.814z" />
      </g>
    </svg>
  )
}

export default SvgIconPrint3D
