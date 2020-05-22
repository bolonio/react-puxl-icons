import * as React from 'react'

function SvgIconArrangeList(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="arrange-list" aria-labelledby="t-arrange-list d-arrange-list">
        <title id="t-arrange-list">{'Arrange in list'}</title>
        <desc id="d-arrange-list">{'Four rectangular blocks stacked'}</desc>
        <path d="M31 0H1C.4 0 0 .4 0 1v3c0 .6.4 1 1 1h30c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zM31 18H1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1zM31 9H1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1zM31 27H1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1z" />
      </g>
    </svg>
  )
}

export default SvgIconArrangeList
