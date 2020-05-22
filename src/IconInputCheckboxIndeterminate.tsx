import * as React from 'react'

function SvgIconInputCheckboxIndeterminate(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g
        id="input-checkbox-indeterminate"
        aria-labelledby="t-input-checkbox-indeterminate d-input-checkbox-indeterminate"
      >
        <title id="t-input-checkbox-indeterminate">
          {'Checkbox indeterminate'}
        </title>
        <desc id="d-input-checkbox-indeterminate">{'A hyphen'}</desc>
        <path d="M8 18a2 2 0 010-4h16a2 2 0 010 4H8z" />
      </g>
    </svg>
  )
}

export default SvgIconInputCheckboxIndeterminate
