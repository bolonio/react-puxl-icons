import * as React from 'react'

function SvgIconRedo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="redo" aria-labelledby="t-redo d-redo">
        <title id="t-redo">{'Redo'}</title>
        <desc id="d-redo">{'An arrow circling forward to its origin'}</desc>
        <path d="M13.3 2.8c7.3 0 13.3 5.9 13.3 13.3v1.5l4.6-4.6c.2-.2.5-.2.7 0 .199.2.199.5 0 .7l-5.5 5.5c-.104.1-.2.1-.4.1s-.3 0-.4-.1l-5.5-5.5a.485.485 0 010-.7c.2-.2.5-.2.7 0l4.601 4.6V16c0-6.8-5.5-12.3-12.292-12.3C6.301 3.7 1 9.2 1 16s5.5 12.3 12.3 12.3c.3 0 .5.2.5.5s-.2.5-.5.5C5.9 29.3 0 23.3 0 16S5.9 2.8 13.3 2.8z" />
      </g>
    </svg>
  )
}

export default SvgIconRedo
