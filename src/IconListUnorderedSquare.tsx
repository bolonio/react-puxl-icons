import * as React from 'react'

function SvgIconListUnorderedSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="list-unordered-square"
        aria-labelledby="t-list-unordered-square d-list-unordered-square"
      >
        <title id="t-list-unordered-square">{'Square unordered list'}</title>
        <desc id="d-list-unordered-square">
          {'Unordered list with squares as bullets'}
        </desc>
        <path d="M30 28H12c-1.1 0-2-.9-2-2s.9-2 2-2h18c1.1 0 2 .9 2 2s-.9 2-2 2zM7 24v4H3v-4h4m1-1H2v6h6v-6zM30 18H12c-1.1 0-2-.9-2-2s.9-2 2-2h18c1.1 0 2 .9 2 2s-.9 2-2 2zM7 14v4H3v-4h4m1-1H2v6h6v-6zM30 8H12c-1.1 0-2-.9-2-2s.9-2 2-2h18c1.1 0 2 .9 2 2s-.9 2-2 2zM7 4v4H3V4h4m1-1H2v6h6V3z" />
      </g>
    </svg>
  )
}

export default SvgIconListUnorderedSquare
