import * as React from 'react'

function SvgIconServer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="server" aria-labelledby="t-server d-server">
        <title id="t-server">{'Server'}</title>
        <desc id="d-server">
          {'Three stacked rack-mountable servers connected to a network cable'}
        </desc>
        <path d="M18.8 28c-.3-.8-1-1.5-1.8-1.8V24h10c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1 .6 0 1-.4 1-1V9c0-.6-.4-1-1-1 .6 0 1-.4 1-1V1c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1-.6 0-1 .4-1 1v6c0 .6.4 1 1 1-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h10v2.2c-.8.3-1.5 1-1.8 1.8H0v2h13.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2H32v-2H18.8zM5 1h22v6H5V1zm0 8h22v6H5V9zm0 14v-6h22v6H5zm11 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
        <circle cx={8} cy={4} r={1} />
        <circle cx={11} cy={4} r={1} />
        <circle cx={14} cy={4} r={1} />
        <circle cx={8} cy={12} r={1} />
        <circle cx={11} cy={12} r={1} />
        <circle cx={14} cy={12} r={1} />
        <circle cx={8} cy={20} r={1} />
        <circle cx={11} cy={20} r={1} />
        <circle cx={14} cy={20} r={1} />
      </g>
    </svg>
  )
}

export default SvgIconServer
