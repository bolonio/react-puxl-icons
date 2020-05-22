import * as React from 'react'

function SvgIconImage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="image" aria-labelledby="t-image d-image">
        <title id="t-image">{'Image'}</title>
        <desc id="d-image">{'Landscape of mountain and sun in a frame'}</desc>
        <path d="M31 3H1a1 1 0 00-1 1v24a1 1 0 001 1h30a1 1 0 001-1V4a1 1 0 00-1-1zm0 25H1V4h30v24z" />
        <path d="M29 6H3v20h26V6zM4 7h24v8.817l-3.743-2.246a.502.502 0 00-.563.034l-6.416 4.989c-.019-.013-.021-.031-.053-.041l-4-2a.5.5 0 00-.51.037L4 22.689V7zm0 18v-1.09l9.043-6.33 3.372 1.688-1.722 1.338a.499.499 0 10.614.789l8.729-6.79L28 16.982V25H4z" />
        <path d="M8 8.5c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5S9.378 8.5 8 8.5zm0 4a1.5 1.5 0 11.001-3.001A1.5 1.5 0 018 12.5z" />
      </g>
    </svg>
  )
}

export default SvgIconImage
