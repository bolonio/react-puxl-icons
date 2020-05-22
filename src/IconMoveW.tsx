import * as React from 'react'

function SvgIconMoveW(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="move-w" aria-labelledby="t-move-w d-move-w">
        <title id="t-move-w">{'Move west'}</title>
        <desc id="d-move-w">
          {'A vertical line, from its center an arrow points west'}
        </desc>
        <path d="M15 1v14H3.4l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-5 5c-.4.4-.4 1 0 1.4l5 5c.4.399 1 .399 1.4 0 .4-.4.4-1 0-1.4L3.4 17H15v14c0 .6.4 1 1 1s1-.4 1-1V1c0-.6-.4-1-1-1s-1 .4-1 1z" />
      </g>
    </svg>
  )
}

export default SvgIconMoveW
