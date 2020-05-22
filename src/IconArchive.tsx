import * as React from 'react'

function SvgIconArchive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="archive" aria-labelledby="t-archive d-archive">
        <title id="t-archive">{'Archive'}</title>
        <desc id="d-archive">{'A file cabinet with two drawers'}</desc>
        <path d="M27 1v30H5V1h22m0-1H5c-.6 0-1 .4-1 1v30c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1z" />
        <path d="M13 9c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1h-4c-.6 0-1 .4-1 1z" />
        <path d="M24 4v10H8V4h16m0-1H8c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zM13 23c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1h-4c-.6 0-1 .4-1 1z" />
        <path d="M24 18v10H8V18h16m0-1H8c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V18c0-.6-.4-1-1-1z" />
      </g>
    </svg>
  )
}

export default SvgIconArchive
