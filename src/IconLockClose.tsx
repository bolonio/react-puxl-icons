import * as React from 'react'

function SvgIconLockClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="lock-close" aria-labelledby="t-lock-close d-lock-close">
        <title id="t-lock-close">{'Closed lock'}</title>
        <desc id="d-lock-close">{'Closed lock'}</desc>
        <path d="M28 16h-2v-6c0-5.514-4.486-10-10-10S6 4.486 6 10v6H4a1 1 0 00-1 1v14a1 1 0 001 1h24a1 1 0 001-1V17a1 1 0 00-1-1zM7 10a9 9 0 019-9 9 9 0 019 9v6h-4v-6a5.001 5.001 0 00-10 0v6H7v-6zm13 6h-8v-6c0-2.206 1.794-4 4-4s4 1.794 4 4v6zm8 15H4V17h24v14z" />
      </g>
    </svg>
  )
}

export default SvgIconLockClose
