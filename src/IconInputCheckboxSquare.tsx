import * as React from 'react'

function SvgIconInputCheckboxSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="input-checkbox-square"
        aria-labelledby="t-input-checkbox-checked-rest d-input-checkbox-checked-rest"
      >
        <title id="t-input-checkbox-checked-rest">{'Checkbox square'}</title>
        <desc id="d-input-checkbox-checked-rest">{'A square'}</desc>
        <path d="M28 4v24H4V4h24m0-4H4a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4V4a4 4 0 00-4-4z" />
      </g>
    </svg>
  )
}

export default SvgIconInputCheckboxSquare
