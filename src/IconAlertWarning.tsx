import * as React from 'react'

function SvgIconAlertWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="alert-warning" aria-labelledby="t-alert-warning d-alert-warning">
        <title id="t-alert-warning">{'Warning'}</title>
        <desc id="d-alert-warning">{'Exclamation mark in a circle'}</desc>
        <path d="M16 1c8.3 0 15 6.7 15 15s-6.7 15-15 15S1 24.3 1 16 7.7 1 16 1m0-1C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0z" />
        <circle cx={16} cy={24} r={2} />
        <path d="M17 18h-2L14 6h4l-1 12z" />
      </g>
    </svg>
  )
}

export default SvgIconAlertWarning
