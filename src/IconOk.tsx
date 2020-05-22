import * as React from 'react'

function SvgIconOk(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="ok" aria-labelledby="t-ok d-ok">
        <title id="t-ok">{'OK'}</title>
        <desc id="d-ok">{'Checkmark'}</desc>
        <path d="M10 28a1.99 1.99 0 01-1.414-.586l-8-8a2 2 0 112.828-2.828L10 23.172 28.586 4.586a2 2 0 112.828 2.828l-20 20A1.99 1.99 0 0110 28z" />
      </g>
    </svg>
  )
}

export default SvgIconOk
