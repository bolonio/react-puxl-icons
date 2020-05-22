import * as React from 'react'

function SvgIconMathInfinity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="math-infinity" aria-labelledby="t-math-infinity d-math-infinity">
        <title id="t-math-infinity">{'Infinity'}</title>
        <desc id="d-math-infinity">{'A lemniscate'}</desc>
        <path d="M29.886 10.892a7.23 7.23 0 00-10.221 0L16 14.585l-3.666-3.694A7.224 7.224 0 102.116 21.108a7.222 7.222 0 0010.216 0L16 17.413l3.667 3.695a7.223 7.223 0 0010.217 0 7.224 7.224 0 00.002-10.216zm-18.967 8.802a5.224 5.224 0 11.001-7.389L14.585 16l-3.666 3.694zm17.551 0a5.226 5.226 0 01-7.389 0L17.414 16l3.666-3.695a5.225 5.225 0 117.39 7.389z" />
      </g>
    </svg>
  )
}

export default SvgIconMathInfinity
