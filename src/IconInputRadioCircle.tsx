import * as React from 'react'

function SvgIconInputRadioCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="input-radio-circle"
        aria-labelledby="t-input-radio-circle d-input-radio-circle"
      >
        <title id="t-input-radio-circle">{'Radio circle'}</title>
        <desc id="d-input-radio-circle">{'A circle'}</desc>
        <path d="M16 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4m0-4C7.178 0 0 7.178 0 16s7.178 16 16 16 16-7.178 16-16S24.822 0 16 0z" />
      </g>
    </svg>
  )
}

export default SvgIconInputRadioCircle
