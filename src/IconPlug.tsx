import * as React from 'react'

function SvgIconPlug(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="plug" aria-labelledby="t-plug d-plug">
        <title id="t-plug">{'Plug'}</title>
        <desc id="d-plug">{'A type C plug pointing rightwards'}</desc>
        <path d="M30 19h-9v-6h9c1.1 0 2-.9 2-2s-.9-2-2-2h-9V7c0-.6-.4-1-1-1h-4c-4.6 0-8.4 3.5-8.9 8H6a6 6 0 00-6 6v12h1V20a5 5 0 015-5h2c0-4.4 3.6-8 8-8h4v18h-4c-4.4 0-8-3.6-8-8H6a3 3 0 00-3 3v12h1V20a2 2 0 012-2h1.1c.5 4.5 4.3 8 8.9 8h4c.6 0 1-.4 1-1v-2h9c1.1 0 2-.9 2-2s-.9-2-2-2zm-9-9h9c.6 0 1 .4 1 1s-.4 1-1 1h-9v-2zm9 12h-9v-2h9c.6 0 1 .4 1 1s-.4 1-1 1z" />
      </g>
    </svg>
  )
}

export default SvgIconPlug
