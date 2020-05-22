import * as React from 'react'

function SvgIconSmartwatch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="smartwatch" aria-labelledby="t-smartwatch d-smartwatch">
        <title id="t-smartwatch">{'Smartwatch'}</title>
        <desc id="d-smartwatch">{'Wristwatch with empty screen'}</desc>
        <path d="M22 10v12H10V10h12m0-1H10a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V10a1 1 0 00-1-1z" />
        <path d="M10 7c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3l1.014 6.164A1 1 0 0012 32h8c.49 0 .906-.354.986-.836L22.003 25A3.004 3.004 0 0025 22V10c0-1.654-1.346-3-3-3L20.986.835A1 1 0 0020 0h-8a.999.999 0 00-.986.835L10 7zm2-6h8l1 6H11l1-6zm8 30h-8l-1-6h10l-1 6zm4-9a2 2 0 01-2 2H10a2 2 0 01-2-2V10a2 2 0 012-2h12a2 2 0 012 2v12z" />
      </g>
    </svg>
  )
}

export default SvgIconSmartwatch
