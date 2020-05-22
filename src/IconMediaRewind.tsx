import * as React from 'react'

function SvgIconMediaRewind(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="media-rewind" aria-labelledby="t-media-rewind d-media-rewind">
        <title id="t-media-rewind">{'Rewind'}</title>
        <desc id="d-media-rewind">{'Two triangles pointing backward'}</desc>
        <path d="M17 14.3l12-6.7c1.3-.7 3 .2 3 1.7v13.5c0 1.5-1.6 2.5-3 1.7l-12-6.7c-1.3-.8-1.3-2.8 0-3.5z" />
        <path d="M1 14.3l12-6.7c1.3-.7 3 .2 3 1.7v13.5c0 1.5-1.6 2.5-3 1.7L1 17.7C-.3 17-.3 15 1 14.3z" />
      </g>
    </svg>
  )
}

export default SvgIconMediaRewind
