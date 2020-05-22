import * as React from 'react'

function SvgIconListUnorderedDisc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="list-unordered-disc"
        aria-labelledby="t-list-unordered-disc d-list-unordered-disc"
      >
        <title id="t-list-unordered-disc">{'Disc unordered list'}</title>
        <desc id="d-list-unordered-disc">
          {'Unordered list with discs as bullets'}
        </desc>
        <path d="M30 28H12c-1.1 0-2-.9-2-2s.9-2 2-2h18c1.1 0 2 .9 2 2s-.9 2-2 2z" />
        <circle cx={5} cy={26} r={3} />
        <path d="M30 18H12c-1.1 0-2-.9-2-2s.9-2 2-2h18c1.1 0 2 .9 2 2s-.9 2-2 2z" />
        <circle cx={5} cy={16} r={3} />
        <path d="M30 8H12c-1.1 0-2-.9-2-2s.9-2 2-2h18c1.1 0 2 .9 2 2s-.9 2-2 2z" />
        <circle cx={5} cy={6} r={3} />
      </g>
    </svg>
  )
}

export default SvgIconListUnorderedDisc
