import * as React from 'react'

function SvgIconArrowW(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
      <g id="arrow-left" aria-labelledby="t-arrow-left d-arrow-left">
        <title id="t-arrow-left">{'Left arrow'}</title>
        <desc id="d-arrow-left">{'Simple caret arrow pointing leftwards'}</desc>
        <path d="M7 16c0-.512.195-1.024.586-1.414l14-14a2 2 0 112.828 2.828L11.828 16l12.586 12.586a2 2 0 11-2.828 2.828l-14-14A1.992 1.992 0 017 16z" />
      </g>
    </svg>
  )
}

export default SvgIconArrowW
