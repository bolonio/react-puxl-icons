import * as React from 'react'

function SvgIconExit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="exit" aria-labelledby="t-exit d-exit">
        <title id="t-exit">{'Exit'}</title>
        <desc id="d-exit">{'An east oriented arrow exiting a square'}</desc>
        <path d="M1 0c.06 0 .119.005.179.017l11 2A1 1 0 0113 3v5a1 1 0 11-2 0V3.835L2 2.198v27.604l9-1.637V24a1 1 0 112 0v5a.999.999 0 01-.821.982l-11 2A.999.999 0 010 31V1a1.002 1.002 0 011-1zM28.6 15H15c-.6 0-1 .4-1 1s.4 1 1 1h13.6l-5.3 5.3c-.399.4-.399 1 0 1.4.4.399 1 .399 1.4 0l7-7c.399-.4.399-1 0-1.4l-7-7c-.4-.4-1-.4-1.4 0-.399.4-.399 1 0 1.4l5.3 5.3z" />
      </g>
    </svg>
  )
}

export default SvgIconExit
