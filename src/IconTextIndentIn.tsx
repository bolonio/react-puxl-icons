import * as React from 'react'

function SvgIconTextIndentIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="text-indent-in"
        aria-labelledby="t-text-indent-in d-text-indent-in"
      >
        <title id="t-text-indent-in">{'Text indent in'}</title>
        <desc id="d-text-indent-in">
          {
            'Four horizontal lines stacked, a triangle in the left pushes rightwards the second and third lines'
          }
        </desc>
        <path d="M30 28H2c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H14c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H14c-1.1 0-2-.9-2-2s.9-2 2-2h16c1.1 0 2 .9 2 2s-.9 2-2 2zm0-8H2C.9 4 0 3.1 0 2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c0 .384-.146.768-.44 1.061l-4.5 4.5a1.475 1.475 0 01-1.633.326A1.507 1.507 0 010 18.499V9.5c0-.607.366-1.152.926-1.386a1.494 1.494 0 011.634.326l4.5 4.5c.293.292.44.676.44 1.06z" />
      </g>
    </svg>
  )
}

export default SvgIconTextIndentIn
