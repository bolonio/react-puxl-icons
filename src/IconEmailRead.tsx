import * as React from 'react'

function SvgIconEmailRead(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="email-read" aria-labelledby="t-email-read d-email-read">
        <title id="t-email-read">{'Read email'}</title>
        <desc id="d-email-read">
          {'An open envelope revealing a written paper sheet'}
        </desc>
        <path d="M31.6 12.2L27 8.5V4h-5.6L16.7.2c-.3-.1-.5-.2-.7-.2s-.4.1-.6.2L10.6 4H5v4.5L.4 12.2c-.3.2-.4.5-.4.8v18c0 .6.4 1 1 1h30c.6 0 1-.4 1-1V13c0-.3-.1-.6-.4-.8zm-.6.8l-4 3.2V9.8l4 3.2zM16 1l3.8 3h-7.5L16 1zm0 24L6 17V5h20v12l-10 8zM5 9.8v6.4L1 13l4-3.2zm10.4 16c.2.1.4.2.6.2s.4-.1.6-.2L31 14.3V31H1V14.3l14.4 11.5z" />
        <path d="M29.1 13.5c0-.3.2-.5.5-.5.301 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5zm-2 0c0-.3.2-.5.5-.5.301 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5zm-23.2 0c0-.3.2-.5.5-.5s.5.2.5.5-.2.5-.5.5-.5-.2-.5-.5zm-2 0c0-.3.2-.5.5-.5s.5.2.5.5-.2.5-.5.5c-.2 0-.5-.2-.5-.5zM9 10h6v1H9v-1zm0 4h14v1H9v-1zm0 4h14v1H9v-1z" />
      </g>
    </svg>
  )
}

export default SvgIconEmailRead
