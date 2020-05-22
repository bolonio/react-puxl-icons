import * as React from 'react'

function SvgIconDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="download" aria-labelledby="t-download d-download">
        <title id="t-download">{'Download'}</title>
        <desc id="d-download">{'An arrow falling downwards from a cloud'}</desc>
        <path d="M15.292 31.707a1 1 0 001.415 0l6-6a.999.999 0 10-1.414-1.414L17 28.586V22a1 1 0 10-2 0v6.586l-4.293-4.293a.999.999 0 10-1.414 1.414l5.999 6zM25 6l-.25.006A8.002 8.002 0 009.041 7.182 3.085 3.085 0 008 7a3 3 0 00-3 3 5 5 0 00-5 5 5 5 0 005 5h20a7 7 0 000-14zm0 13H5c-2.206 0-4-1.794-4-4s1.794-4 4-4a1 1 0 001-1c0-1.103.897-2 2-2 .236 0 .474.042.708.125a1.005 1.005 0 00.868-.098 1 1 0 00.46-.744A6.976 6.976 0 0117 1a6.994 6.994 0 016.781 5.254 1 1 0 00.969.751L25 7a6 6 0 010 12z" />
      </g>
    </svg>
  )
}

export default SvgIconDownload
