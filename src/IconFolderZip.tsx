import * as React from 'react'

function SvgIconFolderZip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="folder-zip" aria-labelledby="t-folder-zip d-folder-zip">
        <title id="t-folder-zip">{'Zipped folder'}</title>
        <desc id="d-folder-zip">{'Closed folder with a zipper'}</desc>
        <path d="M24 22h-2c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1zm0 3h-2v-2h2v2z" />
        <path d="M23 17c-2.2 0-4 1.8-4 4v4c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-4c0-2.2-1.8-4-4-4zm3 8c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-4c0-1.7 1.3-3 3-3s3 1.3 3 3v4zM21 9.5c0 .3.2.5.5.5H23V9h-1.5c-.3 0-.5.2-.5.5zm4 2c0-.3-.2-.5-.5-.5H23v1h1.5c.3 0 .5-.2.5-.5zM21.5 13H23v-1h-1.5c-.3 0-.5.2-.5.5s.2.5.5.5zm0 3H23v-1h-1.5c-.3 0-.5.2-.5.5s.2.5.5.5zm3.5-1.5c0-.3-.2-.5-.5-.5H23v1h1.5c.3 0 .5-.2.5-.5z" />
        <path d="M31 7H13V5c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v22c0 .6.4 1 1 1h16.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H1V5h11v2H3c-.6 0-1 .4-1 1v17.5c0 .3.2.5.5.5s.5-.2.5-.5V8h20v1h1.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H31v19h-2.5c-.3 0-.5.2-.5.5s.2.5.5.5H31c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1z" />
      </g>
    </svg>
  )
}

export default SvgIconFolderZip
