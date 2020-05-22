import * as React from 'react'

function SvgIconMagicWand(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="magic-wand" aria-labelledby="t-magic-wand d-magic-wand">
        <title id="t-magic-wand">{'Magic wand'}</title>
        <desc id="d-magic-wand">
          {'A stick with sparks emerging from one endpoint'}
        </desc>
        <path d="M30 2l-1.5.5L28 4l-.5-1.5L26 2l1.5-.5L28 0l.5 1.5M23 3l-1.5.5L21 5l-.5-1.5L19 3l1.5-.5L21 1l.5 1.5M13 2l-1.5.5L11 4l-.5-1.5L9 2l1.5-.5L11 0l.5 1.5M32 11l-2.3.8L29 14l-.8-2.3L26 11l2.3-.8L29 8l.8 2.3M17 8l-2.3.8L14 11l-.8-2.3L11 8l2.3-.8L14 5l.8 2.3m7.4-.3L25 9.8l-5.7 5.7-2.8-2.8L22.2 7m-.7-.7L.3 27.5c-.4.4-.4 1 0 1.4l2.8 2.8c.4.399 1 .399 1.4 0l21.2-21.2c.399-.4.399-1 0-1.4l-2.8-2.8c-.4-.4-1-.4-1.4 0z" />
      </g>
    </svg>
  )
}

export default SvgIconMagicWand
