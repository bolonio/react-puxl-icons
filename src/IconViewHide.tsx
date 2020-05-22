import * as React from 'react'

function SvgIconViewHide(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="view-hide" aria-labelledby="t-view-hide d-view-hide">
        <title id="t-view-hide">{'Hide'}</title>
        <desc id="d-view-hide">{'A closed eye'}</desc>
        <path d="M0 16s1.8 2 4.7 4l-2.2 3.3c-.2.2-.1.5.1.7.2.2.5.1.7-.1l2.2-3.3c1.7 1.104 3.8 2.2 6.1 2.801L10.9 27c-.1.3.1.5.4.6.3.104.5-.1.6-.396l.7-3.5c1.1.196 2.2.396 3.4.396s2.3-.1 3.4-.396l.699 3.5c.101.296.301.396.601.396.3-.1.4-.3.4-.6l-.7-3.6c2.3-.604 4.396-1.7 6.1-2.801l2.2 3.301c.2.199.5.3.7.1.199-.2.3-.5.1-.7L27.3 20c2.9-2 4.7-4 4.7-4h-1.4c-1.896 1.9-7.8 7-14.6 7S3.3 17.9 1.4 16H0z" />
      </g>
    </svg>
  )
}

export default SvgIconViewHide
