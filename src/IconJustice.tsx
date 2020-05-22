import * as React from 'react'

function SvgIconJustice(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="justice" aria-labelledby="t-justice d-justice">
        <title id="t-justice">{'Justice'}</title>
        <desc id="d-justice">{'A weight balance'}</desc>
        <path d="M31 30H17V3.765c.333-.172.594-.432.766-.765H25.6L20 18c0 2.2 2.7 4 6 4s6-1.8 6-4L26.3 2.9c.4-.1.7-.5.7-.9 0-.6-.4-1-1-1h-8.234C17.445.38 16.82 0 16 0c-.821 0-1.446.38-1.765 1H6c-.6 0-1 .4-1 1 0 .4.3.8.7.9L0 18c0 2.2 2.7 4 6 4s6-1.8 6-4L6.4 3h7.835c.171.333.432.594.765.765V30H1c-.6 0-1 .4-1 1s.4 1 1 1h30c.6 0 1-.4 1-1s-.4-1-1-1zm-.1-12H21l5-13.2L30.9 18zm-20 0H1L6 4.8 10.9 18zM16 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
      </g>
    </svg>
  )
}

export default SvgIconJustice
