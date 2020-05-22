import * as React from 'react'

function SvgIconViewShow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="view-show" aria-labelledby="t-view-show d-view-show">
        <title id="t-view-show">{'Show'}</title>
        <desc id="d-view-show">{'An open eye'}</desc>
        <path d="M27.3 12l2.2-3.3c.2-.2.1-.5-.1-.7-.2-.2-.5-.1-.7.1l-2.2 3.3c-1.7-1.1-3.8-2.2-6.1-2.8l.7-3.6c.1-.3-.1-.5-.4-.6s-.5.1-.6.4l-.7 3.5C18.3 8.1 17.2 8 16 8s-2.3.1-3.4.4l-.7-3.5c-.1-.3-.3-.5-.6-.4-.3 0-.4.3-.4.5l.7 3.6c-2.3.6-4.4 1.7-6.1 2.8L3.4 8.2c-.2-.2-.5-.3-.7-.2-.3.2-.3.5-.2.7L4.7 12C1.8 14 0 16 0 16s7.2 8 16 8 16-8 16-8-1.8-2-4.7-4zM12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 13c-6.8 0-12.7-5.1-14.6-7 1.2-1.2 4.2-3.8 8-5.5C8.5 11.8 8 13.3 8 15c0 4.4 3.6 8 8 8s8-3.6 8-8c0-1.7-.5-3.2-1.4-4.5 3.801 1.7 6.7 4.3 8 5.5-1.9 1.9-7.8 7-14.6 7z" />
      </g>
    </svg>
  )
}

export default SvgIconViewShow
