import * as React from 'react'

function SvgIconEmailUnread(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="email-unread" aria-labelledby="t-email-unread d-email-unread">
        <title id="t-email-unread">{'Unread email'}</title>
        <desc id="d-email-unread">{'A closed envelope'}</desc>
        <path d="M31 6H1c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h30c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zM16 19L1 7h30L16 19zM1 25V8.3l14.4 11.5c.2.1.4.2.6.2s.4-.1.6-.2L31 8.3V25H1z" />
      </g>
    </svg>
  )
}

export default SvgIconEmailUnread
