import * as React from 'react'

function SvgIconArrowsSwNe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="arrows-sw-ne" aria-labelledby="t-arrows-sw-ne d-arrows-sw-ne">
        <title id="t-arrows-sw-ne">{'Arrows SouthWest-NorthEast'}</title>
        <desc id="d-arrows-sw-ne">
          {
            'Two united arrows: one pointing SouthWest, the other pointing NorthEast'
          }
        </desc>
        <path d="M16.707 25.605H7.808L25.605 7.807v8.9c0 .275.104.525.293.707a1 1 0 001.707-.707V5.393c0-.553-.446-1-1-1H15.293a1 1 0 100 2h8.898L6.394 24.191v-8.899a1 1 0 00-2 0v11.313c0 .271.112.521.293.707a.993.993 0 00.707.293h11.313a1 1 0 100-2z" />
      </g>
    </svg>
  )
}

export default SvgIconArrowsSwNe
