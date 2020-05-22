import * as React from 'react'

function SvgIconCli(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="cli" aria-labelledby="t-cli d-cli">
        <title id="t-cli">{'Command Line Interface'}</title>
        <desc id="d-cli">
          {'A right-pointing angle bracket followed by an underscore'}
        </desc>
        <path d="M17 26h14v2H17v-2zM2.2 25L1 23.3 11.4 16 1 8.7 2.2 7 15 16" />
      </g>
    </svg>
  )
}

export default SvgIconCli
