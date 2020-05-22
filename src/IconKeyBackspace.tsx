import * as React from 'react'

function SvgIconKeyBackspace(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="key-backspace" aria-labelledby="t-key-backspace d-key-backspace">
        <title id="t-key-backspace">{'Backspace key'}</title>
        <desc id="d-key-backspace">
          {'A X cross inside an arrow-shaped rectangle pointing left'}
        </desc>
        <path d="M23.4 16l3.3-3.3c.399-.4.399-1 0-1.4-.4-.4-1-.4-1.4 0L22 14.6l-3.3-3.3c-.4-.4-1-.4-1.4 0-.399.4-.399 1 0 1.4l3.3 3.3-3.3 3.3c-.399.4-.399 1 0 1.4.4.399 1 .399 1.4 0l3.3-3.3 3.3 3.3c.4.399 1 .399 1.4 0 .399-.4.399-1 0-1.4L23.4 16z" />
        <path d="M31 6H10c-.3 0-.5.1-.7.3l-9 9c-.4.4-.4 1 0 1.4l9 9c.2.2.4.3.7.3h21c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zm0 19H10l-9-9 9-9h21v18z" />
      </g>
    </svg>
  )
}

export default SvgIconKeyBackspace
