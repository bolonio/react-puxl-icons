import * as React from 'react'

function SvgIconDocument(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="document" aria-labelledby="t-document d-document">
        <title id="t-document">{'Document'}</title>
        <desc id="d-document">{'Empty paper sheet'}</desc>
        <path d="M19 0H5v32h22V8l-8-8zm0 1.414L25.586 8H19V1.414zM26 31H6V1h12v7a1 1 0 001 1h7v22z" />
      </g>
    </svg>
  )
}

export default SvgIconDocument
