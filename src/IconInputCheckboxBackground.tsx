import * as React from 'react'

function SvgIconInputCheckboxBackground(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="input-checkbox-background"
        aria-labelledby="t-input-checkbox-background d-input-checkbox-background"
      >
        <title id="t-input-checkbox-background">
          {'Checkbox square background'}
        </title>
        <desc id="d-input-checkbox-background">{'A square'}</desc>
        <path d="M28 4v24H4V4h24" />
      </g>
    </svg>
  )
}

export default SvgIconInputCheckboxBackground
