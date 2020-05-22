import * as React from 'react'

function SvgIconDenied(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="denied" aria-labelledby="t-denied d-denied">
        <title id="t-denied">{'Denied'}</title>
        <desc id="d-denied">{'A line oriented north-east in a circle'}</desc>
        <path d="M27.312 4.687c-6.248-6.249-16.378-6.249-22.626 0-6.248 6.248-6.249 16.377 0 22.627s16.378 6.248 22.626 0 6.25-16.378 0-22.627zM7.515 7.515c4.196-4.196 10.747-4.617 15.428-1.287L6.228 22.943c-3.33-4.683-2.91-11.232 1.287-15.428zm1.542 18.256L25.771 9.057c3.33 4.683 2.91 11.232-1.287 15.429-4.195 4.198-10.745 4.618-15.427 1.285z" />
      </g>
    </svg>
  )
}

export default SvgIconDenied
