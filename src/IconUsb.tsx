import * as React from 'react'

function SvgIconUsb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="usb" aria-labelledby="t-usb d-usb">
        <title id="t-usb">{'USB'}</title>
        <desc id="d-usb">{'Universal Serial Bus symbol'}</desc>
        <path d="M32 16l-7-4v3H11V7h3.1c.4 1.7 2 3 3.9 3 2.2 0 4-1.8 4-4s-1.8-4-4-4c-1.9 0-3.4 1.3-3.9 3H10c-.6 0-1 .4-1 1v9H5.8c-.4-1.2-1.5-2-2.8-2-1.7 0-3 1.3-3 3s1.3 3 3 3c1.3 0 2.4-.8 2.8-2H13v9c0 .6.4 1 1 1h4v3h8v-8h-8v3h-3v-8h10v3l7-4z" />
      </g>
    </svg>
  )
}

export default SvgIconUsb
