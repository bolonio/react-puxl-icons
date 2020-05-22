import * as React from 'react'

function SvgIconConversation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="conversation" aria-labelledby="t-conversation d-conversation">
        <title id="t-conversation">{'Conversation'}</title>
        <desc id="d-conversation">{'Two opposing speech bubbles'}</desc>
        <path d="M30 18c.5 0 1 .5 1 1v8c0 .5-.5 1-1 1h-4v3l-3-3H10c-.6 0-1-.5-1-1v-8c0-.5.4-1 1-1h20m0-1H10c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12.6l2.7 2.7c.2.2.4.3.7.3.1 0 .3 0 .4-.1.4-.2.6-.5.6-.9v-2h3c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zM2 1h20c.6 0 1 .5 1 1v8c0 .5-.4 1-1 1H9l-3 3v-3H2c-.5 0-1-.5-1-1V2c0-.5.5-1 1-1M0 2v8c0 1.1.9 2 2 2h3v2c0 .4.2.7.6.9.1.1.3.1.4.1.3 0 .5-.1.7-.3L9.4 12H22c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2z" />
      </g>
    </svg>
  )
}

export default SvgIconConversation
