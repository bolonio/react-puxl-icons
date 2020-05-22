import * as React from 'react'

function SvgIconRecycle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="recycle" aria-labelledby="t-recycle d-recycle">
        <title id="t-archive">{'Recycle'}</title>
        <desc id="d-archive">
          {'Three arrows following each other in a triangular path'}
        </desc>
        <path d="M11.3 16.8L9.5 10c-.1-.3-.3-.5-.6-.4l-6.8 1.8c-.3.1-.4.3-.4.6.1.3.3.4.6.4L8 10.9 1.3 22.5c-.5.9-.5 2.1 0 3S2.8 27 3.9 27h4.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H3.9c-1.5 0-2.5-1.7-1.7-3l6.7-11.6 1.5 5.7c.1.301.3.4.6.4.2-.2.4-.4.3-.7zm6.8 4.3l-5 5c-.2.2-.2.5 0 .7l5 5c.2.2.5.2.7 0s.2-.5 0-.7L14.7 27h13.4c1.104 0 2.104-.6 2.604-1.5s.5-2.1 0-3l-2.304-4c-.104-.2-.396-.3-.696-.2-.2.101-.304.4-.2.7l2.301 4c.803 1.3-.197 3-1.697 3H14.7l4.1-4.1c.2-.2.2-.5 0-.7-.1-.2-.5-.2-.7-.1zm.4-8l6.8 1.8c.3.1.5-.1.601-.4l1.812-6.8c.104-.3-.104-.5-.396-.6-.301-.1-.5.1-.604.4l-1.5 5.7L18.6 1.5C18.1.6 17.1 0 16 0s-2.1.6-2.6 1.5l-2.3 4c-.1.2-.1.5.2.7.2.1.5 0 .7-.2l2.3-4C15 .7 17 .7 17.7 2l6.7 11.6-5.7-1.5c-.3-.1-.5.1-.601.4.001.2.201.5.401.6z" />
      </g>
    </svg>
  )
}

export default SvgIconRecycle
