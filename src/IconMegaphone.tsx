import * as React from 'react'

function SvgIconMegaphone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="megaphone" aria-labelledby="t-megaphone d-megaphone">
        <title id="t-megaphone">{'Megaphone'}</title>
        <desc id="d-megaphone">
          {'An electric megaphone pointing rightwards'}
        </desc>
        <path d="M29 12V4c0-.6-.4-1-1-1s-1 .4-1 1c0 3.8-6.9 7-15 7H4c-2.2 0-4 1.8-4 4s1.8 4 4 4l3.7 9.4c.2.4.6.6 1 .6h4c.3 0 .6-.2.8-.4.2-.199.2-.6.1-.896L10.2 19H12c8.1 0 15 3.2 15 7 0 .6.4 1 1 1s1-.4 1-1v-8c1.7 0 3-1.3 3-3s-1.3-3-3-3zM12.7 28h-4l-3.6-9h4l3.6 9zM11 18H4c-1.7 0-3-1.3-3-3s1.3-3 3-3h7v6zm17 8c0-4.4-7.2-8-16-8v-6c8.8 0 16-3.6 16-8v22zm1-9v-4c1.1 0 2 .9 2 2s-.9 2-2 2z" />
      </g>
    </svg>
  )
}

export default SvgIconMegaphone
