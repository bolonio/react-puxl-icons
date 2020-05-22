import * as React from 'react'

function SvgIconArrangeGrid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="arrange-grid" aria-labelledby="t-arrange-grid d-arrange-grid">
        <title id="t-arrange-grid">{'Arrange in grid'}</title>
        <desc id="d-arrange-grid">{'Four squares arranged orthogonally'}</desc>
        <path d="M31 18H19c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1zm-18 0H1c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1zM31 0H19c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM13 0H1C.4 0 0 .4 0 1v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1z" />
      </g>
    </svg>
  )
}

export default SvgIconArrangeGrid
