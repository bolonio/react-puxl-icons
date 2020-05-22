import * as React from 'react'

function SvgIconDialer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="dialer" aria-labelledby="t-dialer d-dialer">
        <title id="t-dialer">{'Dialer'}</title>
        <desc id="d-dialer">{'10 buttons arranged of a telephone dialer'}</desc>
        <path d="M25 2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V3a1 1 0 011-1h2m-8 0a1 1 0 011 1v2a1 1 0 01-1 1h-2c-.551 0-1-.449-1-1V3c0-.551.449-1 1-1h2M9 2c.551 0 1 .449 1 1v2c0 .551-.449 1-1 1H7c-.551 0-1-.449-1-1V3c0-.551.449-1 1-1h2m16 8a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2m-8 0a1 1 0 011 1v2a1 1 0 01-1 1h-2c-.551 0-1-.449-1-1v-2c0-.551.449-1 1-1h2m-8 0c.551 0 1 .449 1 1v2c0 .551-.449 1-1 1H7c-.551 0-1-.449-1-1v-2c0-.551.449-1 1-1h2m16 8a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2m-8 0a1 1 0 011 1v2a1 1 0 01-1 1h-2c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h2m-8 0c.551 0 1 .448 1 1v2c0 .552-.449 1-1 1H7c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h2m8 8a1 1 0 011 1v2a1 1 0 01-1 1h-2c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h2" />
      </g>
    </svg>
  )
}

export default SvgIconDialer
