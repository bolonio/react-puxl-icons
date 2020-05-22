import * as React from 'react'

function SvgIconNotepad(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="notepad" aria-labelledby="t-notepad d-notepad">
        <title id="t-notepad">{'Notepad'}</title>
        <desc id="d-notepad">{'A binder of blank paper pages'}</desc>
        <path d="M23 4V2c0-1.1-.9-2-2-2s-2 .9-2 2v2h-6V2c0-1.1-.9-2-2-2S9 .9 9 2v2H5v28h22V4h-4zm-3-2c0-.5.4-1 1-1s1 .5 1 1v4c0 .5-.4 1-1 1s-1-.5-1-1V2zM10 2c0-.5.4-1 1-1s1 .5 1 1v4c0 .5-.4 1-1 1s-1-.5-1-1V2zm16 29h-4l4-4v4zm-5-.4V26h4.6L21 30.6zm5-5.6h-5c-.6 0-1 .4-1 1v5H6V5h3v1c0 1.1.9 2 2 2s2-.9 2-2V5h6v1c0 1.1.9 2 2 2s2-.9 2-2V5h3v20z" />
      </g>
    </svg>
  )
}

export default SvgIconNotepad
