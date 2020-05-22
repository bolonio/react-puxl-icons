import * as React from 'react'

function SvgIconMoveN(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="move-n" aria-labelledby="t-move-n d-move-n">
        <title id="t-move-n">{'Move north'}</title>
        <desc id="d-move-n">
          {'A horizontal line, from its center an arrow points north'}
        </desc>
        <path d="M31 15H17V3.4l3.3 3.3c.4.4 1 .4 1.4 0 .399-.4.399-1 0-1.4l-5-5c-.4-.4-1-.4-1.4 0l-5 5c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L15 3.4V15H1c-.6 0-1 .4-1 1s.4 1 1 1h30c.6 0 1-.4 1-1s-.4-1-1-1z" />
      </g>
    </svg>
  )
}

export default SvgIconMoveN
