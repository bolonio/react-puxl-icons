import * as React from 'react'

function SvgIconLockOpen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="lock-open" aria-labelledby="t-lock-open d-lock-open">
        <title id="t-lock-open">{'Open lock'}</title>
        <desc id="d-lock-open">{'Open lock'}</desc>
        <path d="M28 16h-2v-6c0-5.514-4.486-10-10-10S6 4.486 6 10v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-2.206 1.794-4 4-4s4 1.794 4 4v6H4a1 1 0 00-1 1v14a1 1 0 001 1h24a1 1 0 001-1V17a1 1 0 00-1-1zM16 5a5 5 0 00-5 5v1H7v-1a9 9 0 019-9 9 9 0 019 9v6h-4v-6c0-2.761-2.24-5-5-5zm12 26H4V17h24v14z" />
      </g>
    </svg>
  )
}

export default SvgIconLockOpen
