import * as React from 'react'

function SvgIconFolderEmpty(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="folder-empty" aria-labelledby="t-folder-empty d-folder-empty">
        <title id="t-folder-empty">{'Empty folder'}</title>
        <desc id="d-folder-empty">{'Open empty folder'}</desc>
        <path d="M27 28c.447 0 .896-.298 1.02-.729l3.922-13.938A.998.998 0 0031.001 12H28V8c0-.553-.445-1-1-1H13V5a1 1 0 00-1-1H1a1 1 0 00-1 1v22a1 1 0 001 1h26zm0-1H1V5h11v2a1 1 0 001 1h14v4H6.903c-.439 0-.828.286-.957.706L2.051 25.354a.497.497 0 00.478.646.503.503 0 00.479-.354L7 13h24l-4 14z" />
      </g>
    </svg>
  )
}

export default SvgIconFolderEmpty
