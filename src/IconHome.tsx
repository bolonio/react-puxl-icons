import * as React from 'react'

function SvgIconHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="home" aria-labelledby="t-home d-home">
        <title id="t-home">{'Home'}</title>
        <desc id="d-home">
          {'House with triangular roof, chimney and door'}
        </desc>
        <path d="M16.707 4.293a.997.997 0 00-1.414 0l-13 13A.996.996 0 002 18v13a1 1 0 001 1h9a1 1 0 001-1V21h6v10a1 1 0 001 1h9a1 1 0 001-1V18a.996.996 0 00-.293-.707l-13-13zM29 31h-9V20h-8v11H3V18L16 5l13 13v13z" />
        <path d="M31.854 15.646l-15.5-15.5a.5.5 0 00-.707 0L9 6.793V3.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v6.293L.146 15.647a.5.5 0 00.707.707L16 1.207l15.146 15.146a.498.498 0 00.708 0 .5.5 0 000-.707zM7 4h1v3.793l-1 1V4z" />
      </g>
    </svg>
  )
}

export default SvgIconHome
