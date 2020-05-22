import * as React from 'react'

function SvgIconExclamation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="exclamation" aria-labelledby="t-exclamation d-exclamation">
        <title id="t-exclamation">{'Exclamation'}</title>
        <desc id="d-exclamation">{'Exclamation mark'}</desc>
        <circle cx={16} cy={29} r={3} />
        <path d="M17 22h-2L14 0h4l-1 22z" />
      </g>
    </svg>
  )
}

export default SvgIconExclamation
