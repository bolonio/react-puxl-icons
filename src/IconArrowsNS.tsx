import * as React from 'react'

function SvgIconArrowsNS(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="arrows-n-s" aria-labelledby="t-arrows-n-s d-arrows-n-s">
        <title id="t-arrows-n-s">{'Arrows North-South'}</title>
        <desc id="d-arrows-n-s">
          {'Two united arrows: one pointing North, the other pointing South'}
        </desc>
        <path d="M23.293 22.293L17 28.586V3.414l6.293 6.293a.997.997 0 001.414 0 .999.999 0 000-1.414l-8-8a.999.999 0 00-1.414 0l-8 8a.999.999 0 101.414 1.414L15 3.414v25.172l-6.293-6.293a.999.999 0 10-1.414 1.414l8 8a.997.997 0 001.414 0l8-8a.999.999 0 10-1.414-1.414z" />
      </g>
    </svg>
  )
}

export default SvgIconArrowsNS
