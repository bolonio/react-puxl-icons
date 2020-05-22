import * as React from 'react'

function SvgIconResizeMaximize(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="resize-maximize"
        aria-labelledby="t-resize-maximize d-resize-maximize"
      >
        <title id="t-resize-maximize">{'Maximize'}</title>
        <desc id="d-resize-maximize">{'Four arrows pointing outwards'}</desc>
        <path d="M3.4 2H9c.6 0 1-.4 1-1s-.4-1-1-1H1C.4 0 0 .4 0 1v8c0 .6.4 1 1 1s1-.4 1-1V3.4l8.3 8.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L3.4 2zM30 3.4V9c0 .6.4 1 1 1s1-.4 1-1V1c0-.6-.4-1-1-1h-8c-.6 0-1 .4-1 1s.4 1 1 1h5.6l-8.3 8.3c-.399.4-.399 1 0 1.4.4.4 1 .4 1.4 0L30 3.4zM28.6 30H23c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1s-1 .4-1 1v5.6l-8.3-8.3a.968.968 0 00-1.4 0c-.399.4-.399 1 0 1.4l8.3 8.3zM2 28.6V23c0-.6-.4-1-1-1s-1 .4-1 1v8c0 .6.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1H3.4l8.3-8.3c.4-.4.4-1 0-1.4a.968.968 0 00-1.4 0L2 28.6z" />
      </g>
    </svg>
  )
}

export default SvgIconResizeMaximize
