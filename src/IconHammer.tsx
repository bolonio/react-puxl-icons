import * as React from 'react'

function SvgIconHammer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="hammer" aria-labelledby="t-hammer d-hammer">
        <title id="t-hammer">{'Hammer'}</title>
        <desc id="d-hammer">{'Hammer'}</desc>
        <path d="M31.7 27.4l-18.4-17 1.2-1.2c.4-.4.4-1 0-1.4-.4-.4-.4-1 0-1.4C18.3 2.6 19.9 2 19.9 2c.199 0 .3-.1.5-.3.199-.2.3-.5.3-.8 0-.5-.4-.9-.9-.9-.3 0-6.8-.6-10.3 2.9L3.8 8.5c-.4.4-.4 1 0 1.4-.4-.4-1-.4-1.4 0L.3 12c-.4.4-.4 1 0 1.4l4.2 4.2c.4.4 1 .4 1.4 0L8 15.5c.4-.4.4-1 0-1.4.4.4 1 .4 1.4 0l.9-.9 17 18.399c.2.188.4.301.7.301s.5-.104.7-.301l2.8-2.812c.2-.188.3-.5.3-.688.2-.199.1-.499-.1-.699zM8.8 13.5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L5.2 17 1 12.8l2.1-2.1c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l5.7-5.7c3.2-3.2 9.4-2.5 9.4-2.5s-1.6.4-5.9 4.6c-.8.8-.8 2 0 2.8l-4.9 5zM28.2 31l-17-18.5 1.4-1.4 18.5 17-2.9 2.9z" />
      </g>
    </svg>
  )
}

export default SvgIconHammer
