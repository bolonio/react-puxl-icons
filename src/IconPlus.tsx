import * as React from 'react'

function SvgIconPlus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="plus" aria-labelledby="t-plus d-plus">
        <title id="t-plus">{'Plus'}</title>
        <desc id="d-plus">{'Two horizontal and vertical lines crossed'}</desc>
        <path d="M18 18v12a2 2 0 01-4 0V18H2a2 2 0 010-4h12V2a2 2 0 114 0v12h12a2 2 0 110 4H18z" />
      </g>
    </svg>
  )
}

export default SvgIconPlus
