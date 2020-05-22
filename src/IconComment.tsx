import * as React from 'react'

function SvgIconComment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="comment" aria-labelledby="t-comment d-comment">
        <title id="t-comment">{'Comment'}</title>
        <desc id="d-comment">{'Speech bubble'}</desc>
        <path d="M30 1c.6 0 1 .5 1 1v21c0 .5-.4 1-1 1H20l-4 7-4-7H2c-.5 0-1-.5-1-1V2c0-.5.5-1 1-1h28m0-1H2C.953 0 0 .953 0 2v21c0 1.047.953 2 2 2h9.42l3.712 6.496a.998.998 0 001.736 0L20.58 25H30a2 2 0 002-2V2c0-1.103-.896-2-2-2z" />
      </g>
    </svg>
  )
}

export default SvgIconComment
