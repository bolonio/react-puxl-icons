import * as React from 'react'

function SvgIconEnergy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="energy" aria-labelledby="t-energy d-energy">
        <title id="t-energy">{'Energy'}</title>
        <desc id="d-energy">{'Lightning bolt'}</desc>
        <path d="M19 1l-1 13 5 2-10 15 1-13-5-2L19 1m0-1c-.3 0-.6.2-.8.4l-10 15c-.2.3-.2.6-.2.9.1.3.3.5.6.601l4.3 1.699-.9 12.3c0 .5.2.896.7 1 .1 0 .2.1.3.1.3 0 .6-.2.8-.4l10-15c.2-.3.2-.6.2-.9 0-.3-.3-.5-.6-.6l-4.3-1.7.9-12.3c0-.5-.2-.9-.7-1-.1-.1-.2-.1-.3-.1z" />
      </g>
    </svg>
  )
}

export default SvgIconEnergy
