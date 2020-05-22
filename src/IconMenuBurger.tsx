import * as React from 'react'

function SvgIconMenuBurger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="menu-burger" aria-labelledby="t-menu-burger d-menu-burger">
        <title id="t-menu-burger">{'Menu'}</title>
        <desc id="d-menu-burger">{'Three horizontal lines stacked'}</desc>
        <path d="M30 28a2 2 0 000-4H2a2 2 0 000 4h28zM30 18a2 2 0 000-4H2a2 2 0 000 4h28zM30 8a2 2 0 000-4H2a2 2 0 000 4h28z" />
      </g>
    </svg>
  )
}

export default SvgIconMenuBurger
