import * as React from 'react'

function SvgIconWall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="wall" aria-labelledby="t-wall d-wall">
        <title id="t-wall">{'Wall'}</title>
        <desc id="d-wall">{'A wall of bricks'}</desc>
        <path d="M21 26h11v4H21v-4zM7 26h12v4H7v-4zm-7 0h5v4H0v-4zm28-6h4v4h-4v-4zm-14 0h12v4H14v-4zM0 20h12v4H0v-4zm21-6h11v4H21v-4zM7 14h12v4H7v-4zm-7 0h5v4H0v-4zm28-6h4v4h-4V8zM14 8h12v4H14V8zM0 8h12v4H0V8zm21-6h11v4H21V2zM7 2h12v4H7V2zM0 2h5v4H0V2z" />
      </g>
    </svg>
  )
}

export default SvgIconWall
