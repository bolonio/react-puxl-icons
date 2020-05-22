import * as React from 'react'

function SvgIconSave(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="save" aria-labelledby="t-save d-save">
        <title id="t-save">{'Save'}</title>
        <desc id="d-save">{'A floppy disk'}</desc>
        <path d="M22 2h-2c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1z" />
        <path d="M31 32c.6 0 1-.4 1-1V3c0-.3-.1-.5-.3-.7l-2-2c-.2-.2-.4-.3-.7-.3H1C.4 0 0 .4 0 1v30c0 .6.4 1 1 1h30zM7 1h18v10H7V1zm20 30H5V17h22v14zm4 0h-3V17c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v14H1V1h5v10c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V1h3l2 2v28z" />
      </g>
    </svg>
  )
}

export default SvgIconSave
