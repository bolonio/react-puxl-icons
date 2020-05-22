import * as React from 'react'

function SvgIconMediaPause(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="media-pause" aria-labelledby="t-media-pause d-media-pause">
        <title id="t-media-pause">{'Pause'}</title>
        <desc id="d-media-pause">{'Two vertical bars'}</desc>
        <path d="M8 32H4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4zm20 0h-4c-2.2 0-4-1.8-4-4V4c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4z" />
      </g>
    </svg>
  )
}

export default SvgIconMediaPause
