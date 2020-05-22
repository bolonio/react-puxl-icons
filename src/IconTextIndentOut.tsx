import * as React from 'react'

function SvgIconTextIndentOut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="text-indent-out"
        aria-labelledby="t-text-indent-out d-text-indent-out"
      >
        <title id="t-text-indent-out">{'Text indent out'}</title>
        <desc id="d-text-indent-out">
          {
            'Four horizontal lines stacked, a triangle in the left drags leftwards the second and third lines'
          }
        </desc>
        <path d="M30 28H2c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H14c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H14c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H2C.9 4 0 3.1 0 2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zM0 14c0-.384.146-.768.44-1.061l4.5-4.5A1.498 1.498 0 017.5 9.5v9a1.502 1.502 0 01-2.56 1.061l-4.5-4.5A1.498 1.498 0 010 14z" />
      </g>
    </svg>
  )
}

export default SvgIconTextIndentOut
