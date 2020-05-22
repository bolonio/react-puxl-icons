import * as React from 'react'

function SvgIconLoop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="loop" aria-labelledby="t-loop d-loop">
        <title id="t-loop">{'Loop'}</title>
        <desc id="d-loop">{'One arrow following its own path in circles'}</desc>
        <path d="M6 10c-3.3 0-6 2.7-6 6s2.7 6 6 6h7.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H6c-2.8 0-5-2.2-5-5s2.2-5 5-5h20c2.8 0 5 2.2 5 5s-2.2 5-5 5h-6.8l3.6-3.6c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-4.5 4.5c-.199.2-.199.5 0 .7l4.5 4.5c.2.199.5.199.7 0 .2-.2.2-.5 0-.7L19.2 22H26c3.3 0 6-2.7 6-6s-2.7-6-6-6H6z" />
      </g>
    </svg>
  )
}

export default SvgIconLoop
