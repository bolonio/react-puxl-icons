import * as React from 'react'

function SvgIconKeyEnter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="key-enter" aria-labelledby="t-key-enter d-key-enter">
        <title id="t-key-enter">{'Enter key'}</title>
        <desc id="d-key-enter">{'An arrow pointing down and left'}</desc>
        <path d="M25 0c-.6 0-1 .4-1 1v19c0 1.7-1.3 3-3 3H9.4l5.3-5.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-7 7c-.4.4-.4 1 0 1.4l7 7c.4.399 1 .399 1.4 0 .4-.4.4-1 0-1.4L9.4 25H21c2.8 0 5-2.2 5-5V1c0-.6-.4-1-1-1z" />
      </g>
    </svg>
  )
}

export default SvgIconKeyEnter
