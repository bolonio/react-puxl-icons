import * as React from 'react'

function SvgIconMediaShuffle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="media-shuffle" aria-labelledby="t-media-shuffle d-media-shuffle">
        <title id="t-media-shuffle">{'Shuffle'}</title>
        <desc id="d-media-shuffle">{'Two arrows crossing their paths'}</desc>
        <path d="M27.854 19.146a.5.5 0 00-.707 0 .514.514 0 000 .707L30.293 23h-8.586l-5.293-5.293-.707.707 5.439 5.439A.5.5 0 0021.5 24h8.793l-3.146 3.146a.514.514 0 000 .707.514.514 0 00.707 0l4-4a.5.5 0 000-.707l-4-4zM.5 9h5.793l5.293 5.293.707-.707-5.439-5.44A.504.504 0 006.5 8h-6a.5.5 0 000 1z" />
        <path d="M30.293 9l-3.146 3.146a.514.514 0 000 .707.5.5 0 00.707 0l4-4a.5.5 0 000-.707l-4-4a.5.5 0 00-.707 0 .514.514 0 000 .707L30.293 8H21.5a.504.504 0 00-.354.146L6.293 23H.5a.5.5 0 000 1h6c.133 0 .26-.053.354-.146L21.707 9h8.586z" />
      </g>
    </svg>
  )
}

export default SvgIconMediaShuffle
