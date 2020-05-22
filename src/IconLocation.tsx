import * as React from 'react'

function SvgIconLocation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="location" aria-labelledby="t-location d-location">
        <title id="t-location">{'Location'}</title>
        <desc id="d-location">{'Location mark'}</desc>
        <path d="M16 1c5.525 0 10 4.481 10 10 0 5.525-10 19.322-10 19.322S6 16.525 6 11C6 5.481 10.481 1 16 1m0 14c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-15C9.935 0 5 4.935 5 11c0 2.48 1.732 6.55 5.148 12.098a239.615 239.615 0 005.048 7.82L16 32l.803-1.082c.025-.034 2.555-3.771 5.049-7.82C25.268 17.55 27 13.48 27 11c0-6.065-4.936-11-11-11zm0 14c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
      </g>
    </svg>
  )
}

export default SvgIconLocation
