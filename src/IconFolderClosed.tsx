import * as React from 'react'

function SvgIconFolderClosed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="folder-closed" aria-labelledby="t-folder-closed d-folder-closed">
        <title id="t-folder-closed">{'Closed folder'}</title>
        <desc id="d-folder-closed">{'Closed folder'}</desc>
        <path d="M31 7H13V5c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v22c0 .6.4 1 1 1h30c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1zm0 20H1V5h11v2H3a1 1 0 00-1 1v17.5a.5.5 0 001 0V8h28v19z" />
      </g>
    </svg>
  )
}

export default SvgIconFolderClosed
