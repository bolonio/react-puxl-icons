import * as React from 'react'

function SvgIconListUnorderedBlock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="list-unordered-block"
        aria-labelledby="t-list-unordered-block d-list-unordered-block"
      >
        <title id="t-list-unordered-block">{'Block unordered list'}</title>
        <desc id="d-list-unordered-block">
          {'Unordered list with blocks as bullets'}
        </desc>
        <path d="M30 28H12c-1.1 0-2-.9-2-2s.9-2 2-2h18c1.1 0 2 .9 2 2s-.9 2-2 2zM8 23H2v6h6v-6zM30 18H12c-1.1 0-2-.9-2-2s.9-2 2-2h18c1.1 0 2 .9 2 2s-.9 2-2 2zM8 13H2v6h6v-6zM30 8H12c-1.1 0-2-.9-2-2s.9-2 2-2h18c1.1 0 2 .9 2 2s-.9 2-2 2zM8 3H2v6h6V3z" />
      </g>
    </svg>
  )
}

export default SvgIconListUnorderedBlock
