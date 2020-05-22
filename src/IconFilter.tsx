import * as React from 'react'

function SvgIconFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="filter" aria-labelledby="t-filter d-filter">
        <title id="t-filter">{'Filter'}</title>
        <desc id="d-filter">{'A funnel'}</desc>
        <path d="M13 13.7L.1.9C0 .7 0 .5 0 .3.1.1.3 0 .5 0h31c.2 0 .4.1.5.3.1.2 0 .4-.1.5L19 13.7v12.8c0 .1-.1.3-.1.4l-5 5c-.1.1-.3.1-.4.1-.3 0-.5-.2-.5-.5V13.7zM1.7 1l12.1 12.1c.1.1.1.2.1.4v16.8l4-4V13.5c0-.1.1-.3.1-.4L30.3 1H1.7z" />
      </g>
    </svg>
  )
}

export default SvgIconFilter
