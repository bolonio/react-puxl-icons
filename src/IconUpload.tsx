import * as React from 'react'

function SvgIconUpload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="upload" aria-labelledby="t-upload d-upload">
        <title id="t-upload">{'Upload'}</title>
        <desc id="d-upload">{'An arrow uplifting to a cloud'}</desc>
        <circle cx={16} cy={31} r={1} />
        <circle cx={16} cy={27} r={1} />
        <path d="M16.708 21.293a1 1 0 00-1.415 0l-6 6a.999.999 0 101.414 1.414L15 24.414V31a1 1 0 102 0v-6.586l4.293 4.293a.999.999 0 101.414-1.414l-5.999-6zM25 6l-.25.006A8.002 8.002 0 009.041 7.182 3.085 3.085 0 008 7a3 3 0 00-3 3 5 5 0 00-5 5 5 5 0 005 5h20a7 7 0 000-14zm0 13H5c-2.206 0-4-1.794-4-4s1.794-4 4-4a1 1 0 001-1c0-1.103.897-2 2-2 .236 0 .474.042.708.125a1.005 1.005 0 00.868-.098 1 1 0 00.46-.744A6.976 6.976 0 0117 1a6.994 6.994 0 016.781 5.254 1 1 0 00.969.751L25 7a6 6 0 010 12z" />
      </g>
    </svg>
  )
}

export default SvgIconUpload
