import * as React from 'react'

function SvgIconVoucher(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="voucher" aria-labelledby="t-voucher d-voucher">
        <title id="t-voucher">{'Voucher'}</title>
        <desc id="d-voucher">{'A ticket for a redeemable discount'}</desc>
        <path d="M31 14c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1 1.1 0 2 .9 2 2s-.9 2-2 2c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h30c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1-1.1 0-2-.9-2-2s.9-2 2-2zm0 5v7h-6c0-.3-.2-.5-.5-.5s-.5.2-.5.5H1v-7c1.7 0 3-1.3 3-3s-1.3-3-3-3V6h23c0 .3.2.5.5.5s.5-.2.5-.5h6v7c-1.7 0-3 1.3-3 3s1.3 3 3 3z" />
        <path d="M19.1 10.1c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-11 11c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7l11-11zM10 11c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1m0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1m0-1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        <circle cx={24.5} cy={8} r={0.5} />
        <circle cx={24.5} cy={10} r={0.5} />
        <circle cx={24.5} cy={12} r={0.5} />
        <circle cx={24.5} cy={14} r={0.5} />
        <circle cx={24.5} cy={16} r={0.5} />
        <circle cx={24.5} cy={18} r={0.5} />
        <circle cx={24.5} cy={20} r={0.5} />
        <circle cx={24.5} cy={22} r={0.5} />
        <circle cx={24.5} cy={24} r={0.5} />
      </g>
    </svg>
  )
}

export default SvgIconVoucher
