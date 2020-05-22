import * as React from 'react'

function SvgIconDesign(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="design" aria-labelledby="t-design d-design">
        <title id="t-design">{'Design'}</title>
        <desc id="d-design">
          {'A graphic design software pen tool drawing a vector node'}
        </desc>
        <path d="M30 1c-.9 0-1.7.6-1.9 1.5H19V0h-6v2.5H3.9C3.7 1.6 2.9 1 2 1 .9 1 0 1.9 0 3s.9 2 2 2c.9 0 1.7-.6 1.9-1.5H13v1.4c-2.1 2.7-6 9-6 17.1 0 1.7 1 4.5 2.6 6H9c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2s-.9-2-2-2h-.6c1.699-1.5 2.6-4.3 2.6-6 0-8.1-3.9-14.4-6-17.1V3.5h9.1c.2.9 1 1.5 1.9 1.5 1.1 0 2-.9 2-2s-.9-2-2-2zM2 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm12-3h4v2.6c-.1-.2-.2-.3-.3-.3-.2-.2-.4-.3-.7-.3h-2c-.3 0-.5.1-.7.3l-.3.3V1zm10 21c0 2.2-1.8 6-4 6h-8c-2.2 0-4-3.8-4-6 0-10.5 7-18 7-18v12.3c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2s2-.9 2-2c0-.7-.4-1.4-1-1.7V4s7 7.5 7 18zm6-18c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
      </g>
    </svg>
  )
}

export default SvgIconDesign
