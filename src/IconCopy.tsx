import * as React from 'react'

function SvgIconCopy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="copy" aria-labelledby="t-copy d-copy">
        <title id="t-copy">{'Copy'}</title>
        <desc id="d-copy">{'Two identical overlapping written documents'}</desc>
        <path d="M1 1h20v3h1V1c0-.6-.4-1-1-1H1C.4 0 0 .4 0 1v24c0 .6.4 1 1 1h7v-1H1V1z" />
        <path d="M5 5h6v1H5V5zm26 1H11c-.6 0-1 .4-1 1v2H7v1h3v3H5v1h5v3H5v1h5v13c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zm0 25H11V7h20v24z" />
        <path d="M15 11h6v1h-6v-1zm2 4h10v1H17v-1zm-2 4h12v1H15v-1zm0 4h6v1h-6v-1zm10 4h2v1h-2v-1z" />
      </g>
    </svg>
  )
}

export default SvgIconCopy
