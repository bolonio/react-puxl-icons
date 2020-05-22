import * as React from 'react'

function SvgIconCloud(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="cloud" aria-labelledby="t-cloud d-cloud">
        <title id="t-cloud">{'Cloud'}</title>
        <desc id="d-cloud">{'Cloud'}</desc>
        <path d="M17 6a6.994 6.994 0 016.781 5.254 1 1 0 00.969.751c.062 0 .115-.002.168-.004L25 12c3.309 0 6 2.691 6 6s-2.691 6-6 6H5c-2.206 0-4-1.794-4-4s1.794-4 4-4a1 1 0 001-1c0-1.103.897-2 2-2 .236 0 .474.042.708.125a1.005 1.005 0 00.868-.098 1 1 0 00.46-.744A6.976 6.976 0 0117 6m0-1a8.002 8.002 0 00-7.959 7.182A3.085 3.085 0 008 12a3 3 0 00-3 3c-2.762 0-5 2.238-5 5s2.238 5 5 5h20a7 7 0 000-14c-.084 0-.156.006-.25.006A8.004 8.004 0 0017 5z" />
      </g>
    </svg>
  )
}

export default SvgIconCloud
