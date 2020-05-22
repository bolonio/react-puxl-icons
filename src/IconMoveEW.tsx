import * as React from 'react'

function SvgIconMoveEW(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="move-e-w" aria-labelledby="t-move-e-w d-move-e-w">
        <title id="t-move-e-w">{'Move East-West'}</title>
        <desc id="d-move-e-w">
          {
            'Two united arrows radiating outwards from the center to east and west with a vertical line between them'
          }
        </desc>
        <path d="M15 31c0 .6.4 1 1 1s1-.4 1-1V17h11.6l-3.3 3.3c-.399.4-.399 1 0 1.4.4.399 1 .399 1.4 0l5-5c.399-.4.399-1 0-1.4l-5-5c-.4-.4-1-.4-1.4 0-.399.4-.399 1 0 1.4l3.3 3.3H17V1c0-.6-.4-1-1-1s-1 .4-1 1v14H3.4l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-5 5c-.4.4-.4 1 0 1.4l5 5c.4.399 1 .399 1.4 0 .4-.4.4-1 0-1.4L3.4 17H15v14z" />
      </g>
    </svg>
  )
}

export default SvgIconMoveEW
