import * as React from 'react'

function SvgIconPushpin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="pushpin" aria-labelledby="t-pushpin d-pushpin">
        <title id="t-pushpin">{'Pushpin'}</title>
        <desc id="d-pushpin">{'A pushpin'}</desc>
        <path d="M31.7 7.4L24.6.3c-.396-.4-1-.4-1.396 0L22.5 1c-.8.8-.8 2 0 2.8L14 12.3c-2.3-2.3-6.1-2.3-8.5 0-.4.4-.4 1 0 1.4l5.7 5.7-9.1 9.1C1.7 28.9 0 32 0 32s3.1-1.7 3.5-2.1l9.1-9.104 5.7 5.7c.4.396 1 .396 1.4 0 2.3-2.301 2.3-6.104 0-8.5l8.5-8.5c.8.8 2 .8 2.8 0l.7-.7c.4-.396.4-.996 0-1.396zm-1.4 1.4c-.399.4-1 .4-1.399 0-.396-.4-1-.4-1.396 0L19 17.3c-.4.4-.4 1 0 1.4 2 2 2 5.1 0 7.1L6.3 13c2-2 5.1-2 7.1 0 .4.4 1 .4 1.4 0l8.5-8.5c.4-.4.4-1 0-1.4a.968.968 0 010-1.4l.6-.7L31 8.1l-.7.7z" />
      </g>
    </svg>
  )
}

export default SvgIconPushpin
