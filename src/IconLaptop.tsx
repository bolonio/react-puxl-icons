import * as React from 'react'

function SvgIconLaptop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="laptop" aria-labelledby="t-laptop d-laptop">
        <title id="t-laptop">{'Laptop'}</title>
        <desc id="d-laptop">{'A laptop computer'}</desc>
        <path d="M32 23h-2V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16H0v3c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-3zM3 7c0-.6.4-1 1-1h24c.6 0 1 .4 1 1v16H3V7zm28 19H1v-2h11c0 .5.5 1 1 1h6c.5 0 1-.5 1-1h11v2z" />
        <path d="M27 8v13H5V8h22m0-1H5c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1z" />
      </g>
    </svg>
  )
}

export default SvgIconLaptop
