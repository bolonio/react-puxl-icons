import * as React from 'react'

function SvgIconHistory(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="history" aria-labelledby="t-history d-history">
        <title id="t-history">{'History'}</title>
        <desc id="d-history">
          {
            'A clock face with hands at 13:50 inside a circular arrow moving counter-clockwise'
          }
        </desc>
        <path d="M9.3 10.7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.3 5.3 7.3-7.3c.4-.4 1-.4 1.4 0 .399.4.399 1 0 1.4l-8 8c-.4.399-1 .399-1.4 0l-6-6z" />
        <circle cx={29} cy={16} r={1} />
        <circle cx={16} cy={29} r={1} />
        <circle cx={3} cy={16} r={1} />
        <circle cx={16} cy={3} r={1} />
        <path d="M16 0C7.2 0 0 7.2 0 16c0 5.3 2.7 10.3 7 13.2L.4 31c-.3.1-.4.3-.4.6.1.2.3.4.5.4h.1l7.7-2.1c.1 0 .2-.104.3-.2.1-.101.1-.3.1-.4l-2.1-7.7c-.1-.3-.3-.4-.6-.4-.3.1-.4.3-.4.6l1.7 6.5C3.4 25.5 1 20.9 1 16 1 7.7 7.7 1 16 1s15 6.7 15 15-6.7 15-15 15c-.3 0-.5.2-.5.5s.2.5.5.5c8.8 0 16-7.2 16-16S24.8 0 16 0z" />
      </g>
    </svg>
  )
}

export default SvgIconHistory
