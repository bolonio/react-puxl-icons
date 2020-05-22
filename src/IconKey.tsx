import * as React from 'react'

function SvgIconKey(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="key" aria-labelledby="t-key d-key">
        <title id="t-key">{'Key'}</title>
        <desc id="d-key">{'A lock key'}</desc>
        <path d="M7.5 9.5c2.5 0 4.7 1.4 5.8 3.5H29l2 3-2 3h-1l-2-2-2 2v1h-2l-1-1v-2h-2l-1 1v2h-2v-1h-2.7c-1.1 2.1-3.3 3.5-5.8 3.5C3.9 22.5 1 19.6 1 16s2.9-6.5 6.5-6.5m0-1C3.4 8.5 0 11.9 0 16s3.4 7.5 7.5 7.5c2.6 0 5-1.3 6.4-3.5H15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.6l.4-.4h.6v1c0 .3.1.5.3.7l1 1c.2.2.4.3.7.3h2c.6 0 1-.4 1-1v-.6l1-1 1.3 1.3c.2.2.4.3.7.3h1c.3 0 .6-.2.8-.4l2-3c.2-.3.2-.8 0-1.1l-2-3c-.2-.3-.5-.5-.8-.5H13.9c-1.4-2.2-3.8-3.5-6.4-3.5z" />
        <path d="M6 15c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1m0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </g>
    </svg>
  )
}

export default SvgIconKey
