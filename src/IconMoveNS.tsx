import * as React from 'react'

function SvgIconMoveNS(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="move-n-s" aria-labelledby="t-move-n-s d-move-n-s">
        <title id="t-move-n-s">{'Move North-South'}</title>
        <desc id="d-move-n-s">
          {
            'Two united arrows radiating outwards from the center to north and south with a horizontal line between them'
          }
        </desc>
        <path d="M1 15c-.6 0-1 .4-1 1s.4 1 1 1h14v11.6l-3.3-3.3a.968.968 0 00-1.4 0c-.4.4-.4 1 0 1.4l5 5c.4.399 1 .399 1.4 0l5-5c.399-.4.399-1 0-1.4a.968.968 0 00-1.4 0L17 28.6V17h14c.6 0 1-.4 1-1s-.4-1-1-1H17V3.4l3.3 3.3c.4.4 1 .4 1.4 0 .399-.4.399-1 0-1.4l-5-5c-.4-.4-1-.4-1.4 0l-5 5c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L15 3.4V15H1z" />
      </g>
    </svg>
  )
}

export default SvgIconMoveNS
