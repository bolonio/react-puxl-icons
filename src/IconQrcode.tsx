import * as React from 'react'

function SvgIconQrcode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="qrcode" aria-labelledby="t-qrcode d-qrcode">
        <title id="t-qrcode">{'QR Code'}</title>
        <desc id="d-qrcode">
          {'A 2D matrix of squares representing a computer-readable code'}
        </desc>
        <path d="M14 2V0H0v12h2v2h2v-2h8v-2h2V8h-2V2h2zm-4 8H2V2h8v8z" />
        <path d="M4 4h4v4H4V4zm16-4v6h-2v2h2v2h-2v2h2v2h4v-2h8V0H20zm10 10h-8V2h8v8z" />
        <path d="M24 4h4v4h-4V4zM4 24h4v4H4v-4zm20 0h2v2h-2v-2z" />
        <path d="M16 28v-2h-2v-2h-2v-6h-2v2H6v-2H4v2H0v12h12v-4h2v2h4v-2h-2zm-6 2H2v-8h8v8zm4-20h2v2h-2v-2zm0-4h2v2h-2V6zm4 0h-2V4h-2V2h4M0 16h4v2H0v-2zm8 2H6v-2H4v-2h4m6 2v-2h2v-2h2v4m-8-2h2v2h-2v-2z" />
        <path d="M16 18h2v4h-2v2h-2v-4h2" />
        <path d="M32 26v-4h-2v-2H20v4h-4v2h4v4h4v2h4v-2h4v-2h-2v-2h2zm-4 2h-6v-6h6v6zm4-12h-4v-2h4v2zm-8-2h2v2h2v2h-6v-2h2m-4 2h-2v-2h2v2zm-2 12h2v2h-2v-2z" />
      </g>
    </svg>
  )
}

export default SvgIconQrcode
