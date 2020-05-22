import * as React from 'react'

function SvgIconVideo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="video" aria-labelledby="t-video d-video">
        <title id="t-video">{'Video'}</title>
        <desc id="d-video">{'Film with three frames'}</desc>
        <path d="M6 9h20v14H6V9zm-1 2H1V9h4v2zm0 1v2H1v-2h4zm0 3v2H1v-2h4zm0 3v2H1v-2h4zm0 3v2H1v-2h4zm22 0h4v2h-4v-2zm0-1v-2h4v2h-4zm0-3v-2h4v2h-4zm0-3v-2h4v2h-4zm0-3V9h4v2h-4zm0-3V6h4v2h-4zM5 8H1V6h4v2zM1 24h4v2H1v-2zm25 8h1v-2h4v2h1V0h-1v2h-4V0h-1v8H6V0H5v2H1V0H0v32h1v-2h4v2h1v-8h20v8zm1-8h4v2h-4v-2zm4-21v2h-4V3h4zM5 3v2H1V3h4zM1 29v-2h4v2H1zm26 0v-2h4v2h-4z" />
      </g>
    </svg>
  )
}

export default SvgIconVideo
