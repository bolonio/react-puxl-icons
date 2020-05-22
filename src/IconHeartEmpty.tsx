import * as React from 'react'

function SvgIconHeartEmpty(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="heart-empty" aria-labelledby="t-heart-empty d-heart-empty">
        <title id="t-heart-empty">{'Heart empty'}</title>
        <desc id="d-heart-empty">{'Empty heart shape'}</desc>
        <path d="M22.4 2c4.742 0 8.6 3.976 8.6 8.862 0 5.45-2.555 10.326-7.593 14.488-3.153 2.605-6.353 4.107-7.408 4.565-1.05-.454-4.216-1.938-7.365-4.528C3.57 21.217 1 16.33 1 10.862 1 5.976 4.858 2 9.6 2c2.077 0 4.075.77 5.638 2.17.19.22.478.355.777.355a.976.976 0 00.77-.378A8.45 8.45 0 0122.4 2m0-1c-2.461 0-4.7.95-6.4 2.51l.016.016h-.03L16 3.51A9.424 9.424 0 009.6 1C4.298 1 0 5.416 0 10.862 0 24.802 16 31 16 31s16-6.197 16-20.138C32 5.416 27.7 1 22.4 1z" />
      </g>
    </svg>
  )
}

export default SvgIconHeartEmpty
