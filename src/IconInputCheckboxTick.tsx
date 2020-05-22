import * as React from 'react'

function SvgIconInputCheckboxTick(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="input-checkbox-tick"
        aria-labelledby="t-input-checkbox-tick d-input-checkbox-tick"
      >
        <title id="t-input-checkbox-tick">{'Checkbox tick'}</title>
        <desc id="d-input-checkbox-tick">{'A tick'}</desc>
        <path d="M6.586 17.414a2 2 0 112.828-2.828L13 18.172l9.586-9.586a2 2 0 112.828 2.828l-11 11a2 2 0 01-2.828 0l-5-5z" />
      </g>
    </svg>
  )
}

export default SvgIconInputCheckboxTick
