import * as React from 'react'

function SvgIconBarcode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="barcode" aria-labelledby="t-barcode d-barcode">
        <title id="t-barcode">{'Barcode'}</title>
        <desc id="d-barcode">
          {'Vertical lines representing a machine-readable code'}
        </desc>
        <path d="M0 0h1v32H0V0zm31 0h1v32h-1V0zM16 0h1v32h-1V0zM2 0h1v28H2V0zm8 0h1v28h-1V0zM5 0h2v28H5V0zm14 0h1v28h-1V0zm7 0h1v28h-1V0zm-4 0h2v28h-2V0zm-9 0h1v28h-1V0zm15 0h2v28h-2V0z" />
      </g>
    </svg>
  )
}

export default SvgIconBarcode
