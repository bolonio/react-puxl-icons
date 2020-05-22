import * as React from 'react'

function SvgIconWallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="wallet" aria-labelledby="t-wallet d-wallet">
        <title id="t-wallet">{'Wallet'}</title>
        <desc id="d-wallet">{'A leather wallet'}</desc>
        <circle cx={25} cy={17} r={1} />
        <path d="M31 14V8c0-.6-.4-1-1-1h-1V5c0-.6-.4-1-1-1H2C.9 4 0 4.9 0 6v20c0 1.1.9 2 2 2h28c.6 0 1-.4 1-1v-7c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zM2 5h26v2H2c-.6 0-1-.4-1-1s.4-1 1-1zm28 22H2c-.6 0-1-.4-1-1V7.7c.3.2.6.3 1 .3h28v6h-6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h6v7zm1-8h-7c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h7v4z" />
      </g>
    </svg>
  )
}

export default SvgIconWallet
