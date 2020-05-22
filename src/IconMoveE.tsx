import * as React from 'react'

function SvgIconMoveE(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="move-e" aria-labelledby="t-move-e d-move-e">
        <title id="t-move-e">{'Move east'}</title>
        <desc id="d-move-e">
          {'A vertical line, from its center an arrow points east'}
        </desc>
        <path d="M17 31V17h11.6l-3.3 3.3c-.399.4-.399 1 0 1.4.4.399 1 .399 1.4 0l5-5c.399-.4.399-1 0-1.4l-5-5c-.4-.4-1-.4-1.4 0-.399.4-.399 1 0 1.4l3.3 3.3H17V1c0-.6-.4-1-1-1s-1 .4-1 1v30c0 .6.4 1 1 1s1-.4 1-1z" />
      </g>
    </svg>
  )
}

export default SvgIconMoveE
