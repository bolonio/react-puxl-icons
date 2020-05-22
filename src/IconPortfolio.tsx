import * as React from 'react'

function SvgIconPortfolio(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="portfolio" aria-labelledby="t-portfolio d-portfolio">
        <title id="t-portfolio">{'Portfolio'}</title>
        <desc id="d-portfolio">{'A closed portfolio case'}</desc>
        <path d="M31 7h-9V5c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v2H1c-.6 0-1 .4-1 1v19c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V8c0-.6-.4-1-1-1zM11 6c0-.5.5-1 1-1h8c.5 0 1 .5 1 1v1H11V6zm20 21c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V17l13 3.5V23c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2.5L31 17v10zm-16-4v-4h2v4h-2zm16-7l-13 3.5V19c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v.5L1 16V8h30v8z" />
      </g>
    </svg>
  )
}

export default SvgIconPortfolio
