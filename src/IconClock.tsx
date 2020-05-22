import * as React from 'react'

function SvgIconClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="clock" aria-labelledby="t-clock d-clock">
        <title id="t-clock">{'Clock'}</title>
        <desc id="d-clock">{'A clock face with hands at 13:50'}</desc>
        <path
          id="_x3C_Path_x3E__3_"
          d="M16 1c8.271 0 15 6.729 15 15s-6.729 15-15 15S1 24.271 1 16 7.729 1 16 1m0-1C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0z"
        />
        <path d="M24.354 7.646a.5.5 0 00-.707 0l-7.396 7.401a.969.969 0 00-.49 0L10.36 9.646a.5.5 0 00-.707.707l5.401 5.401a.986.986 0 00.245.952.997.997 0 001.414 0c.262-.258.329-.622.245-.952l7.396-7.401a.5.5 0 000-.707z" />
        <circle cx={29} cy={16} r={1} />
        <circle cx={16} cy={29} r={1} />
        <circle cx={3} cy={16} r={1} />
        <circle cx={16} cy={3} r={1} />
      </g>
    </svg>
  )
}

export default SvgIconClock
