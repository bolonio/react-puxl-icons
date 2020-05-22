import * as React from 'react'

function SvgIconTime(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="time" aria-labelledby="t-time d-time">
        <title id="t-time">{'Time'}</title>
        <desc id="d-time">{'A sandclock'}</desc>
        <path d="M27.5 32c.275 0 .5-.225.5-.5s-.225-.5-.5-.5H26c0-7.221-3.207-13.286-7.525-15C22.793 14.286 26 8.221 26 1h1.5a.5.5 0 000-1h-23a.5.5 0 000 1H6c0 7.221 3.207 13.286 7.525 15C9.207 17.714 6 23.779 6 31H4.5a.5.5 0 000 1h23zM7 1h18c0 2.537-.406 4.924-1.12 7H8.119C7.406 5.924 7 3.535 7 1zm9 15.5c4.963 0 9 6.505 9 14.5h-4l-5-4-5 4H7c0-7.995 4.038-14.5 9-14.5z" />
      </g>
    </svg>
  )
}

export default SvgIconTime
