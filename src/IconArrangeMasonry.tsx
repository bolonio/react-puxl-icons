import * as React from 'react'

function SvgIconArrangeMasonry(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="arrange-masonry"
        aria-labelledby="t-arrange-masonry d-arrange-masonry"
      >
        <title id="t-arrange-masonry">{'Arrange in masonry'}</title>
        <desc id="d-arrange-masonry">
          {'Seven different sized blocks arranged like bricks'}
        </desc>
        <path d="M7 0H1C.4 0 0 .4 0 1v10c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm12 0h-6c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm12 0h-6c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM7 16H1c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1zm12 6h-6c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm12-12h-6c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V11c0-.6-.4-1-1-1zm0 16h-6c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1z" />
      </g>
    </svg>
  )
}

export default SvgIconArrangeMasonry
