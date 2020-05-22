import * as React from 'react'

function SvgIconMediaPlay(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="media-play" aria-labelledby="t-media-play d-media-play">
        <title id="t-media-play">{'Play'}</title>
        <desc id="d-media-play">{'A single triangle pointing forward'}</desc>
        <path d="M28.9 19.5l-22 11.9C4.2 32.9 1 30.9 1 27.9V4.1c0-3 3.2-5 5.9-3.5l22 11.9c2.8 1.5 2.8 5.5 0 7z" />
      </g>
    </svg>
  )
}

export default SvgIconMediaPlay
