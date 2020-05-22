import * as React from 'react'

function SvgIconShop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="shop" aria-labelledby="t-shop d-shop">
        <title id="t-shop">{'Shop'}</title>
        <desc id="d-shop">{'Shopping cart'}</desc>
        <path d="M12 23c1.103 0 2 .896 2 2s-.897 2-2 2-2-.896-2-2 .897-2 2-2m0-1a3 3 0 100 6 3 3 0 000-6zm15 1a2 2 0 11-.001 4.001A2 2 0 0127 23m0-1a3.001 3.001 0 000 6 3 3 0 100-6zm.5-1h-15a.501.501 0 01-.468-.324L6.152 5H.5a.5.5 0 010-1h6c.208 0 .395.13.468.324L12.848 20H27.15l3.658-10.06L9.455 7.997a.5.5 0 01.09-.996l22 2a.502.502 0 01.428.67l-4 11A.511.511 0 0127.5 21z" />
      </g>
    </svg>
  )
}

export default SvgIconShop
