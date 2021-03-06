import * as React from 'react'

function SvgIconGroup(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="group" aria-labelledby="t-group d-group">
        <title id="t-group">{'Group'}</title>
        <desc id="d-group">
          {'Two silhouettes of human head and shoulders'}
        </desc>
        <path d="M25.133 20h-4.267c-.767 0-2.29.277-3.71.79.35.224.668.468.938.737 1.004-.319 2.043-.527 2.772-.527h4.267C27.023 21 31 22.396 31 23.498c0 .275-.242.502-.535.502H18.947a2.44 2.44 0 01-.469 1H30.46c.853 0 1.54-.674 1.54-1.502C32 21.277 26.788 20 25.133 20zM23 7c-2.896 0-5 2.22-5 5.277C18 15.024 19.779 19 23 19s5-3.976 5-6.723C28 9.22 25.896 7 23 7zm0 11.077c-2.439 0-4-3.433-4-5.8 0-2.565 1.646-4.354 4-4.354s4 1.79 4 4.354c0 2.368-1.561 5.8-4 5.8z" />
        <path d="M11.132 20H6.866C5.21 20 0 21.279 0 23.498 0 24.326.688 25 1.535 25h14.93c.847 0 1.535-.674 1.535-1.502C18 21.277 12.788 20 11.132 20zm5.333 4H1.535C1.238 24 1 23.773 1 23.498 1 22.396 4.978 21 6.866 21h4.266C13.024 21 17 22.396 17 23.498c0 .275-.242.502-.535.502zM9 7c-2.897 0-5 2.22-5 5.277C4 15.024 5.78 19 9 19s5-3.976 5-6.723C14 9.22 11.897 7 9 7zm0 11.077c-2.442 0-4-3.433-4-5.8 0-2.565 1.646-4.354 4-4.354s4 1.79 4 4.354c0 2.368-1.56 5.8-4 5.8z" />
      </g>
    </svg>
  )
}

export default SvgIconGroup
