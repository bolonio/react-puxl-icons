import * as React from 'react'

function SvgIconSmartphone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="smartphone" aria-labelledby="t-smartphone d-smartphone">
        <title id="t-smartphone">{'Smartphone'}</title>
        <desc id="d-smartphone">{'Handheld device in portrait'}</desc>
        <circle cx={16} cy={29} r={1} />
        <path d="M22 5v21H10V5h12m0-1H10a1 1 0 00-1 1v21a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1zM18 3h-4a.5.5 0 010-1h4a.5.5 0 010 1z" />
        <path d="M22 1a2 2 0 012 2v26a2 2 0 01-2 2H10a2 2 0 01-2-2V3a2 2 0 012-2h12m0-1H10C8.346 0 7 1.346 7 3v26c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3z" />
      </g>
    </svg>
  )
}

export default SvgIconSmartphone
