import * as React from 'react'

function SvgIconCursorDefault(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="cursor-default"
        aria-labelledby="t-cursor-default d-cursor-default"
      >
        <title id="t-cursor-default">{'Cursor'}</title>
        <desc id="d-cursor-default">{'An arrow to point with'}</desc>
        <path d="M25.7 18.3L6 0v27s0 .5.5.8c.4.3.9.101 1 .101l6.3-2.801 2.7 6.301c.2.5.8.699 1.3.5l3.7-1.601c.5-.2.7-.8.5-1.3l-2.7-6.3 6.3-2.8s.5-.2.604-.7a1.5 1.5 0 00-.504-.9zm-7.9 3.9l3.101 7.2L17.3 31l-3.1-7.2L7 27V2.3L25 19l-7.2 3.2z" />
      </g>
    </svg>
  )
}

export default SvgIconCursorDefault
