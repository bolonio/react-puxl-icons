import * as React from 'react'

function SvgIconHeadphones(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="headphones" aria-labelledby="t-headphones d-headphones">
        <title id="t-headphones">{'Headphones'}</title>
        <desc id="d-headphones">{'Headphones front view'}</desc>
        <path d="M31 25h-2v3c0 1.1-.9 2-2 2s-2-.9-2-2V18c0-1.1.9-2 2-2s2 .9 2 2v3h2v-3c0-8.3-6.7-15-15-15S1 9.7 1 18v3h2v-3c0-1.1.9-2 2-2s2 .9 2 2v10c0 1.1-.9 2-2 2s-2-.9-2-2v-3H1v.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V18C0 9.2 7.2 2 16 2s16 7.2 16 16v7.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V25z" />
      </g>
    </svg>
  )
}

export default SvgIconHeadphones
