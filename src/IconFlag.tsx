import * as React from 'react'

function SvgIconFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="flag" aria-labelledby="t-flag d-flag">
        <title id="t-flag">{'Flag'}</title>
        <desc id="d-flag">{'A cloth flag waving in the wind'}</desc>
        <path d="M27.016 6c-6.677-.098-8.604-1.062-10.468-1.995l-.108-.051C14.519 3.043 12.533 2.102 6.016 2H6V1c0-.6-.4-1-1-1S4 .4 4 1v31h2V16c6.661.099 8.589 1.062 10.454 1.994l.22.102c1.967.886 3.998 1.804 10.31 1.904H27a.997.997 0 001-1V7a1 1 0 00-.984-1zM27 19c-6.3-.1-8.1-1-10.1-1.9-2-1-4.104-2-10.9-2.1V3c6.4.1 8.2 1 10.1 1.9 2 1 4.1 2 10.9 2.1v12z" />
      </g>
    </svg>
  )
}

export default SvgIconFlag
