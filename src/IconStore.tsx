import * as React from 'react'

function SvgIconStore(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="store" aria-labelledby="t-store d-store">
        <title id="t-store">{'Store'}</title>
        <desc id="d-store">{'A storefront'}</desc>
        <path d="M26 19v7h-9v-7h9m0-1h-9c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h9c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1z" />
        <path d="M31.5 31H30V13.4c1.2-.7 2-2 2-3.4L30 0H2L0 10c0 1.5.8 2.8 2 3.4V31H.5c-.3 0-.5.2-.5.5s.2.5.5.5h31c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM28 13c-1.7 0-3-1.3-3-3h5.98l.02.1c0 1.6-1.4 2.9-3 2.9zM2.8 1h26.4l1.582 8H1.218L2.8 1zM23 10c0 1.7-1.3 3-3 3s-3-1.3-3-3h6zm-8 0c0 1.7-1.3 3-3 3s-3-1.3-3-3h6zm-14 .1l.02-.1H7c0 1.7-1.3 3-3 3-1.6 0-2.9-1.3-3-2.9zM13 31H6V19h7v12zm16 0H14V19c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v12H3V13.9c.3 0 .7.1 1 .1 2.2 0 4-1.8 4-4 0 2.2 1.8 4 4 4s4-1.8 4-4c0 2.2 1.8 4 4 4s4-1.8 4-4c0 2.2 1.8 4 4 4 .3 0 .7-.1 1-.1V31z" />
      </g>
    </svg>
  )
}

export default SvgIconStore
