import * as React from 'react'

function SvgIconInboxEmpty(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="inbox-empty" aria-labelledby="t-inbox-empty d-inbox-empty">
        <title id="t-inbox-empty">{'Empty inbox'}</title>
        <desc id="d-inbox-empty">{'An empty desktop tray for papers'}</desc>
        <path d="M31.9 17.5l-5.5-10c-.2-.3-.5-.5-.9-.5h-19c-.4 0-.7.2-.9.5l-5.5 10c-.1.2-.1.3-.1.5v6c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-6c0-.2 0-.3-.1-.5zM26 8.9l4.5 8.1h-2.2L26 12.4V8.9zM7 8h18v4H7V8zm-.2 5h18.4l1.899 4H21c-.6 0-1 .4-1 1 0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2 0-.6-.4-1-1-1H4.9l1.9-4zM6 8.9v3.5L3.8 17H1.5L6 8.9zM1 24v-6h10c0 1.7 1.3 3 3 3h4c1.7 0 3-1.3 3-3h10v6H1z" />
      </g>
    </svg>
  )
}

export default SvgIconInboxEmpty
