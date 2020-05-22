import * as React from 'react'

function SvgIconMediaFastForward(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="media-fast-forward"
        aria-labelledby="t-media-fast-forward d-media-fast-forward"
      >
        <title id="t-media-fast-forward">{'Fast forward'}</title>
        <desc id="d-media-fast-forward">
          {'Two triangles pointing forward'}
        </desc>
        <path d="M15 17.7L3 24.5c-1.3.7-3-.2-3-1.7V9.3c0-1.5 1.6-2.5 3-1.7l12 6.7c1.4.7 1.4 2.7 0 3.4z" />
        <path d="M31 17.7l-12 6.7c-1.3.699-3-.2-3-1.7V9.3c0-1.5 1.6-2.5 3-1.7l12 6.7c1.4.7 1.4 2.7 0 3.4z" />
      </g>
    </svg>
  )
}

export default SvgIconMediaFastForward
