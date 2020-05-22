import * as React from 'react'

function SvgIconMediaEnd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="media-end" aria-labelledby="t-media-end d-media-end">
        <title id="t-media-end">{'End'}</title>
        <desc id="d-media-end">
          {
            'A triangle pointing forward touching with its edge a vertical square'
          }
        </desc>
        <path d="M30 28h-6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v20c0 1.1-.9 2-2 2z" />
        <path d="M21 17.7l-18 10c-1.3.7-3-.2-3-1.7V6c0-1.5 1.6-2.5 3-1.7l18 10c1.3.7 1.3 2.7 0 3.4z" />
      </g>
    </svg>
  )
}

export default SvgIconMediaEnd
