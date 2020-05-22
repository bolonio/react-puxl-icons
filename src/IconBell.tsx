import * as React from 'react'

function SvgIconBell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="bell" aria-labelledby="t-bell d-bell">
        <title id="t-bell">{'Bell'}</title>
        <desc id="d-bell">{'Bell'}</desc>
        <path d="M31 25c-1.609 0-4-5.039-4-12 0-5.046-3.419-9.298-8.061-10.589a2.997 2.997 0 00-5.879 0C8.419 3.702 5 7.954 5 13c0 6.961-2.389 12-4 12a1 1 0 100 2h10.5v.501A4.506 4.506 0 0016 32c2.48 0 4.5-2.02 4.5-4.499V27H31a1 1 0 100-2zM16 .75c.963 0 1.777.607 2.1 1.456C17.419 2.074 16.718 2 16 2s-1.418.074-2.099.206A2.246 2.246 0 0116 .75zm3.5 26.751a3.5 3.5 0 01-7 0V27h7v.501zM1 26c2.76 0 5-6.375 5-13C6 7.481 10.481 3 16 3c5.525 0 10 4.481 10 10 0 6.625 2.236 13 5 13H1z" />
      </g>
    </svg>
  )
}

export default SvgIconBell
