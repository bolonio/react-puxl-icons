import * as React from 'react'

function SvgIconMoveS(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="move-s" aria-labelledby="t-move-s d-move-s">
        <title id="t-move-s">{'Move south'}</title>
        <desc id="d-move-s">
          {'A horizontal line, from its center an arrow points south'}
        </desc>
        <path d="M1 17h14v11.6l-3.3-3.3a.968.968 0 00-1.4 0c-.4.4-.4 1 0 1.4l5 5c.4.399 1 .399 1.4 0l5-5c.399-.4.399-1 0-1.4a.968.968 0 00-1.4 0L17 28.6V17h14c.6 0 1-.4 1-1s-.4-1-1-1H1c-.6 0-1 .4-1 1s.4 1 1 1z" />
      </g>
    </svg>
  )
}

export default SvgIconMoveS
