import * as React from 'react'

function SvgIconTextItalic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="text-italic" aria-labelledby="t-text-italic d-text-italic">
        <title id="t-text-italic">{'Italic text'}</title>
        <desc id="d-text-italic">{'An italic I letter'}</desc>
        <path d="M18.8 31.1l-.3.9H5.3l.3-.9c1.3 0 2.2-.1 2.6-.3.7-.3 1.2-.6 1.5-1.1.5-.7 1.1-2.101 1.6-4L17 6.4c.5-1.6.7-2.8.7-3.6 0-.4-.101-.8-.3-1-.2-.3-.5-.5-.9-.6C16 .9 15.2.9 14 .9l.3-.9h12.4l-.3.9c-1 0-1.801.1-2.2.3-.7.3-1.2.8-1.6 1.3-.4.6-.8 1.9-1.4 3.9l-5.5 19.3c-.5 1.8-.8 2.899-.8 3.399 0 .396.1.688.3 1 .2.301.5.5.9.601.4.2 1.3.3 2.7.4z" />
      </g>
    </svg>
  )
}

export default SvgIconTextItalic
