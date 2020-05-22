import * as React from 'react'

function SvgIconMove(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="move" aria-labelledby="t-move d-move">
        <title id="t-move">{'Move'}</title>
        <desc id="d-move">
          {
            'Four united arrows radiating outwards from the center to north, east, south, and west'
          }
        </desc>
        <path d="M31.7 15.3l-5-5c-.4-.4-1-.4-1.4 0-.399.4-.399 1 0 1.4l3.3 3.3H17V3.4l3.3 3.3c.4.4 1 .4 1.4 0 .399-.4.399-1 0-1.4l-5-5c-.4-.4-1-.4-1.4 0l-5 5c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L15 3.4V15H3.4l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-5 5c-.4.4-.4 1 0 1.4l5 5c.4.399 1 .399 1.4 0 .4-.4.4-1 0-1.4L3.4 17H15v11.6l-3.3-3.3a.968.968 0 00-1.4 0c-.4.4-.4 1 0 1.4l5 5c.4.399 1 .399 1.4 0l5-5c.399-.4.399-1 0-1.4a.968.968 0 00-1.4 0L17 28.6V17h11.6l-3.3 3.3c-.399.4-.399 1 0 1.4.4.399 1 .399 1.4 0l5-5c.4-.4.4-1 0-1.4z" />
      </g>
    </svg>
  )
}

export default SvgIconMove
