import * as React from 'react'

function SvgIconAnchor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="anchor" aria-labelledby="t-anchor d-anchor">
        <title id="t-anchor">{'Anchor'}</title>
        <desc id="d-anchor">{'A fisherman anchor'}</desc>
        <path d="M29.7 24.1c-.2-.1-.4-.1-.5 0l-3 2c-.1.1-.2.3-.2.4s.1.3.3.4l1.4.699c-1.7 1.5-4.9 1.801-8.2 2-.9.101-1.7-.104-2.4-.199V9h6.5c.2 0 .4-.2.4-.5s-.2-.5-.5-.5H17V5.8c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 1.3.8 2.4 2 2.8V8H8.5c-.3 0-.5.2-.5.5s.2.5.5.5H15v20.5c-.7.1-1.5.3-2.4.2-3.4-.2-6.5-.601-8.2-2l1.4-.7c.1-.1.2-.3.2-.5s-.1-.3-.2-.4l-3-2c-.2-.1-.4-.1-.5 0-.2 0-.3.2-.3.4C2 30 8.5 30.2 12.5 31c1.2.2 2.6 1 3.5 1 .9 0 2.3-.8 3.5-1 4.1-.8 10.5-1 10.5-6.5 0-.2-.1-.4-.3-.4zM14 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
      </g>
    </svg>
  )
}

export default SvgIconAnchor
