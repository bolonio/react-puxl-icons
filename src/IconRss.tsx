import * as React from 'react'

function SvgIconRss(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="rss" aria-labelledby="t-rss d-rss">
        <title id="t-rss">{'RSS'}</title>
        <desc id="d-rss">{'Two waves spread from a dot'}</desc>
        <circle cx={3} cy={29} r={3} />
        <path d="M20 32h-4c0-8.822-7.178-16-16-16v-4c11.028 0 20 8.973 20 20z" />
        <path d="M32 32h-4C28 16.561 15.439 4 0 4V0c17.645 0 32 14.355 32 32z" />
      </g>
    </svg>
  )
}

export default SvgIconRss
