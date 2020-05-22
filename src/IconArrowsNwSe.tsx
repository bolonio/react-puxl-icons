import * as React from 'react'

function SvgIconArrowsNwSe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="arrows-nw-se" aria-labelledby="t-arrows-nw-se d-arrows-nw-se">
        <title id="t-arrows-nw-se">{'Arrows NorthEast-SouthWest'}</title>
        <desc id="d-arrows-nw-se">
          {
            'Two united arrows: one pointing NorthEast, the other pointing SouthWest'
          }
        </desc>
        <path d="M6.393 16.707V7.808l17.8 17.797h-8.9a.968.968 0 00-.707.293 1 1 0 00.707 1.707h11.314c.553 0 1-.446 1-1V15.293a1 1 0 10-2 0v8.898L7.807 6.394h8.9a1 1 0 000-2H5.393a.997.997 0 00-1 1v11.313a1 1 0 102 0z" />
      </g>
    </svg>
  )
}

export default SvgIconArrowsNwSe
