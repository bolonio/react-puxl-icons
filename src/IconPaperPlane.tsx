import * as React from 'react'

function SvgIconPaperPlane(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="paper-plane" aria-labelledby="t-paper-plane d-paper-plane">
        <title id="t-paper-plane">{'Paper plane'}</title>
        <desc id="d-paper-plane">{'A paper plane'}</desc>
        <path d="M31.7 4.3c-.2-.2-.4-.3-.7-.3-.1 0-.2 0-.3.1l-30 10c-.4.1-.7.5-.7.9s.3.8.7.9l8.6 2.9 1.2 7.3c0 .2.2.301.3.4h.1c.1 0 .3-.1.4-.2l3.4-3.5 6.7 5c.2.1.4.2.6.2h.3c.3-.1.5-.3.7-.6l9-22c.1-.4 0-.8-.3-1.1zM29 5.7L9.7 17.9 1 15l28-9.3zM11.3 24.9l-.9-5.3 3.5 2.604-2.6 2.696zM22 27l-11.4-8.5 20-12.7L22 27z" />
      </g>
    </svg>
  )
}

export default SvgIconPaperPlane
