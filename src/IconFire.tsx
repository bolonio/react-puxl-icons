import * as React from 'react'

function SvgIconFire(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="fire" aria-labelledby="t-fire d-fire">
        <title id="t-fire">{'Fire'}</title>
        <desc id="d-fire">{'A fire flame'}</desc>
        <path d="M14.6 1s5.8 6 5.8 13c2.5-2.5 2.6-6.9 2.6-6.9s4 6.8 4 12.9c0 6.1-4.9 11-11 11S5 26.1 5 20c0-5.3 2.7-8.4 5.7-11.4C15 4.3 14.6 1 14.6 1m0-1c-.1 0-.3 0-.4.1-.4.2-.6.6-.6 1 0 .1.2 3-3.6 6.8C6.8 11 4 14.4 4 20c0 6.6 5.4 12 12 12s12-5.4 12-12c0-6.3-4-13.2-4.1-13.5-.2-.3-.5-.5-.9-.5h-.2c-.5.2-.8.6-.8 1 0 0-.1 2.1-.9 4.1C19.901 5.1 15.6.5 15.4.3c-.2-.2-.5-.3-.8-.3z" />
        <path d="M14.1 14c1 3.6 6.9 5.6 6.9 8.5 0 2.5-2.5 4.5-5 4.5s-5-2-5-4.5c0-5.4 3.1-8.5 3.1-8.5m.5-1.9l-1.2 1.2c-.1.1-3.4 3.5-3.4 9.2 0 2.9 2.8 5.5 6 5.5s6-2.6 6-5.5c0-1.9-1.7-3.3-3.5-4.8-1.5-1.2-3-2.5-3.5-4l-.4-1.6z" />
      </g>
    </svg>
  )
}

export default SvgIconFire
