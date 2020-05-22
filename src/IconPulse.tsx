import * as React from 'react'

function SvgIconPulse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="pulse" aria-labelledby="t-pulse d-pulse">
        <title id="t-pulse">{'Pulse'}</title>
        <desc id="d-pulse">
          {'An electrocardiography wave for a human heartbeat'}
        </desc>
        <path d="M16 28s-.1 0 0 0c-.6 0-1-.4-1-.9L13.5 8.8 11 18.3c-.1.3-.3.5-.5.601l-2 1C8 20.1 7.5 20 7.2 19.6l-1.5-2.3-3.2 1.6c-.2.1-.3.1-.5.1H1c-.6 0-1-.4-1-1s.4-1 1-1h.8l3.8-1.9c.5-.2 1-.1 1.3.3l1.5 2.3.8-.4L13 2.7c.2-.4.6-.7 1.1-.7s.9.4.9.9l1.5 18 .5-2.1c.1-.3.3-.5.5-.7l1.9-.896 3.896-3.9c.399-.4 1-.4 1.399 0l3.697 3.7H31c.6 0 1 .396 1 1s-.4 1-1 1h-3c-.3 0-.5-.104-.7-.3L24 15.4l-3.3 3.3c-.101.1-.2.1-.3.2l-1.6.8-1.8 7.5c-.1.5-.5.8-1 .8z" />
      </g>
    </svg>
  )
}

export default SvgIconPulse
