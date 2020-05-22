import * as React from 'react'

function SvgIconResizeMinimize(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="resize-minimize"
        aria-labelledby="t-resize-minimize d-resize-minimize"
      >
        <title id="t-resize-minimize">{'Minimize'}</title>
        <desc id="d-resize-minimize">{'Four arrows pointing inwards'}</desc>
        <path d="M8.6 10H3c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1s-1 .4-1 1v5.6L1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L8.6 10zM22 8.6V3c0-.6-.4-1-1-1s-1 .4-1 1v8c0 .6.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1h-5.6l8.3-8.3c.399-.4.399-1 0-1.4-.4-.4-1-.4-1.4 0L22 8.6zM23.4 22H29c.6 0 1-.4 1-1s-.4-1-1-1h-8c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1v-5.6l8.3 8.3c.4.399 1 .399 1.4 0 .399-.4.399-1 0-1.4L23.4 22zM10 23.4V29c0 .6.4 1 1 1s1-.4 1-1v-8c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1h5.6L.3 30.3c-.4.4-.4 1 0 1.4.4.399 1 .399 1.4 0l8.3-8.3z" />
      </g>
    </svg>
  )
}

export default SvgIconResizeMinimize
