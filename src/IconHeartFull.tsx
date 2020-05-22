import * as React from 'react'

function SvgIconHeartFull(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="heart-full" aria-labelledby="t-heart-full d-heart-full">
        <title id="t-heart-full">{'Heart full'}</title>
        <desc id="d-heart-full">{'Filled heart shape'}</desc>
        <path d="M22.4 1c-2.5 0-4.7 1-6.4 2.5C14.3 2 12.1 1 9.6 1 4.3 1 0 5.4 0 10.9 0 24.8 16 31 16 31s16-6.2 16-20.1C32 5.4 27.7 1 22.4 1z" />
      </g>
    </svg>
  )
}

export default SvgIconHeartFull
