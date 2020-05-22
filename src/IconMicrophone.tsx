import * as React from 'react'

function SvgIconMicrophone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="microphone" aria-labelledby="t-microphone d-microphone">
        <title id="t-microphone">{'Microphone'}</title>
        <desc id="d-microphone">{'A standing microphone'}</desc>
        <path d="M25 20v-4.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V17h-2V6c0-3.3-2.7-6-6-6s-6 2.7-6 6v11H8v-1.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V20c0 4.6 3.5 8.4 8 8.9V31H7.5c-.3 0-.5.2-.5.5s.2.5.5.5h17c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H17v-2.1c4.5-.5 8-4.3 8-8.9zM11 6a5 5 0 1110 0v2h-3.5c-.3 0-.5.2-.5.5s.2.5.5.5H21v3h-3.5c-.3 0-.5.2-.5.5s.2.5.5.5H21v3h-3.5c-.3 0-.5.2-.5.5s.2.5.5.5H21v2c0 2.8-2.2 5-5 5s-5-2.2-5-5v-2h3.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H11v-3h3.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H11V9h3.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H11V6zm5 22c-4.4 0-8-3.6-8-8v-1h2c0 3.3 2.7 6 6 6s6-2.7 6-6h2v1c0 4.4-3.6 8-8 8z" />
      </g>
    </svg>
  )
}

export default SvgIconMicrophone
